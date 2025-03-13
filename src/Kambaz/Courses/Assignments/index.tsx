import {
  Button,
  FormControl,
  InputGroup,
  ListGroup,
  Row,
} from "react-bootstrap";
import {
  BsGripVertical,
  BsSearch,
  BsPencilSquare,
  BsFillCaretDownFill,
  BsPlus,
  BsTrash,
} from "react-icons/bs";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteAssignment } from "./reducer"; // Import the deleteAssignment action
import "./styles.css";
import { useState } from "react";
import AssignmentControlButtons from "./AssignmentControlButtons";

export default function Assignments() {
  const { cid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Fetch assignments from Redux store
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);

  // Filter assignments for the current course
  const courseAssignments = assignments.filter(
    (assignment: any) => assignment.course === cid
  );

  // Handle adding a new assignment
  const handleAddAssignment = () => {
    navigate(`/Kambaz/Courses/${cid}/Assignments/new`);
  };

  // Handle deleting an assignment
  const handleDeleteAssignment = (assignmentId: string) => {
    // Show confirmation dialog
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this assignment?"
    );

    if (isConfirmed) {
      // Dispatch the deleteAssignment action
      dispatch(deleteAssignment(assignmentId));
    }
  };

  return (
    <div id="wd-assignments">
      <div className="d-flex align-items-center mb-2">
        <InputGroup className="me-3" id="wd-search-assignment-group">
          <InputGroup.Text>
            <BsSearch />
          </InputGroup.Text>
          <FormControl placeholder="Search..." id="wd-search-assignment" />
        </InputGroup>
        <Button variant="secondary" id="wd-add-assignment-group">
          +Group
        </Button>
        <Button
          variant="danger"
          className="ms-2"
          id="wd-add-assignment"
          onClick={handleAddAssignment}
        >
          +Assignment
        </Button>
      </div>
      <br></br>

      <ListGroup className="rounded-0" id="wd-modules">
        <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray bg-secondary">
          <div className="p-2 container">
            <BsGripVertical className="me-2 fs-3" />
            <BsFillCaretDownFill className="fs-6" />
            ASSIGNMENTS
            <div className="border-container ms-auto">40% of Total</div>
            <BsPlus />
            <div className="ms-right">
              <AssignmentControlButtons />
            </div>
          </div>

          <ListGroup className="wd-assignments rounded-0">
            {courseAssignments.map((assignment: any) => (
              <ListGroup.Item
                key={assignment._id}
                className="wd-assignment p-3 ps-1"
              >
                <div className="d-flex align-items-start align-items-center">
                  <BsGripVertical className="me-2 fs-3" />
                  <span className="text-success me-2">
                    <BsPencilSquare className="fs-4" />
                  </span>
                  <div>
                    <Row>
                      <Link
                        to={`/Kambaz/Courses/${cid}/Assignments/${assignment._id}`}
                        className="wd-assignment-link"
                      >
                        <span className="fw-bold">{assignment.title}</span>
                      </Link>
                    </Row>
                    <Row>
                      <div className="container">
                        <div className="text-danger">
                          <span className="fw-bold me-1">Multiple Modules</span>{" "}
                        </div>
                        <div className="fw-bold me-1"> | Not available until</div>{" "}
                        May 6 at 12:00 am |
                      </div>
                    </Row>
                    <Row>
                      <div className="container">
                        <div className="fw-bold me-1">Due</div> May 13 at 11:59pm
                        | 300 pts
                      </div>
                    </Row>
                  </div>
                  <div className="ms-auto">
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => handleDeleteAssignment(assignment._id)}
                    >
                      <BsTrash />
                    </Button>
                  </div>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}