/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addAssignment, updateAssignment } from "./reducer";
import * as assignmentsClient from "./client";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Fetch assignments from Redux store
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  console.log("Assignments in Redux Store:", assignments);

  // Find the assignment to edit (if aid exists)
  const existingAssignment = assignments.find((a: any) => a._id === aid);
  // console.log("Existing Assignment:", existingAssignment);

  // Local state for form fields
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [points, setPoints] = useState(100);
  const [due, setDue] = useState("");
  const [availableFrom, setAvailableFrom] = useState("");
  const [availableUntil, setAvailableUntil] = useState("");

  // Pre-fill the form if editing an existing assignment
  useEffect(() => {
    if (existingAssignment) {
      setTitle(existingAssignment.title);
      setDescription(existingAssignment.description);
      setPoints(existingAssignment.points);
      setDue(existingAssignment.due);
      setAvailableFrom(existingAssignment.availableFrom);
      setAvailableUntil(existingAssignment.availableUntil);
    }
  }, [existingAssignment]);

  // Handle cancel
  const handleCancel = () => {
    navigate(`/Kambaz/Courses/${cid}/Assignments`);
  };

  const saveAssignment = async () => {
    try {
      const assignmentData = {
        _id: aid,
        course: cid,
        title,
        description,
        points,
        due,
        availableFrom,
        availableUntil,
      };
  
      if (existingAssignment) {
        const updatedAssignment = await assignmentsClient.updateAssignment(assignmentData);
        dispatch(updateAssignment(updatedAssignment));
      } else {
        console.log('new assignment data',assignmentData)
        console.log('cid',cid)
        const newAssignment = await assignmentsClient.createAssignment(assignmentData);
        console.log('new assignment',newAssignment);
        dispatch(addAssignment(newAssignment));
      }
      navigate(`/Kambaz/Courses/${cid}/Assignments`);
    } catch (error) {
      console.error("Failed to save assignment:", error);
    }
  };

  return (
    <div id="wd-assignments-editor" className="ps-3">
      <Form>
        <Row className="mb-3">
          <div className="fw-bold">Assignment Name</div>
          <Form.Control
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter assignment title"
          />
        </Row>

        <Row className="mb-3">
          <Form.Control
            as="textarea"
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter assignment description"
          />
        </Row>

        <Row className="mb-3">
          <Col sm={3} className="fw-bold">
            Points
          </Col>
          <Col sm={9}>
            <Form.Control
              type="number"
              value={points}
              onChange={(e) => setPoints(Number(e.target.value))}
              placeholder="Enter points"
            />
          </Col>
        </Row>

        <Row className="mb-3">
          <Col sm={3} className="fw-bold">
            Due Date
          </Col>
          <Col sm={9}>
            <Form.Control
              type="date"
              value={due}
              onChange={(e) => setDue(e.target.value)}
            />
          </Col>
        </Row>

        <Row className="mb-3">
          <Col sm={3} className="fw-bold">
            Available From
          </Col>
          <Col sm={9}>
            <Form.Control
              type="date"
              value={availableFrom}
              onChange={(e) => setAvailableFrom(e.target.value)}
            />
          </Col>
        </Row>

        <Row className="mb-3">
          <Col sm={3} className="fw-bold">
            Available Until
          </Col>
          <Col sm={9}>
            <Form.Control
              type="date"
              value={availableUntil}
              onChange={(e) => setAvailableUntil(e.target.value)}
            />
          </Col>
        </Row>

        <div className="d-flex justify-content-end">
          <Button variant="secondary" className="me-2" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="danger" onClick={saveAssignment}>
            Save
          </Button>
        </div>
      </Form>
    </div>
  );
}
