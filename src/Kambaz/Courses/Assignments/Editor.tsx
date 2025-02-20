import { Form, Button, Row, Col } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import * as db from "../../Database";
// source chatgpt
export default function AssignmentEditor() {
  // const params = useParams();
  // console.log("URL Parameters:", params);
  const { cid, aid } = useParams();

  const assignment = db.assignments.find((a) => a._id === aid);

  if (!assignment) {
    // console.log("assignment id:", assignmentId);
    return <div>Assignment not found.</div>;
  }

  return (
    <div id="wd-assignments-editor" className="ps-3">
      <Form>
        <Row className="mb-3">
          <div className="fw-bold">Assignment Name</div>
          <Form.Control type="text" defaultValue={assignment.title} />
        </Row>

        <Row className="mb-3">
          <Form.Control as="textarea" rows={3} defaultValue={assignment.description} />
        </Row>

        <Row className="mb-3">
          <Col sm={3} className="fw-bold">Points</Col>
          <Col sm={9}>
            <Form.Control type="number" defaultValue={assignment.points} />
          </Col>
        </Row>

        <Row className="mb-3">
          <Col sm={3} className="fw-bold">Due Date</Col>
          <Col sm={9}>
            <Form.Control type="date" defaultValue={assignment.due} />
          </Col>
        </Row>

        <Row className="mb-3">
          <Col sm={3} className="fw-bold">Available From</Col>
          <Col sm={9}>
            <Form.Control type="date" defaultValue={assignment.availableFrom} />
          </Col>
        </Row>

        <div className="d-flex justify-content-end">
          <Link to={`/Kambaz/Courses/${cid}/Assignments`}>
            <Button variant="secondary" className="me-2">Cancel</Button>
          </Link>
          <Link to={`/Kambaz/Courses/${cid}/Assignments`}>
            <Button variant="danger">Save</Button>
          </Link>
        </div>
      </Form>
    </div>
  );
}
