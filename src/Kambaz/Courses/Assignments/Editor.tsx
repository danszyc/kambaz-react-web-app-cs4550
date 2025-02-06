import { Form, Button, Row, Col } from "react-bootstrap";
import { BsX } from "react-icons/bs";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor" className="ps-3">
      <Form>
        <Row className="mb-3">
          <div className="fw-bold">Assignment Name</div>
          <Form.Control type="text" defaultValue="A1 - ENV + HTML" />
        </Row>

        <Row className="mb-3">
          <Form.Control
            as="textarea"
            rows={3}
            defaultValue="The assignment is available online. Submit a link to the landing page of"
          />
        </Row>

        <Row className="mb-3">
          <Col sm={3} className="fw-bold">
            Points
          </Col>
          <Col sm={9}>
            <Form.Control type="number" defaultValue={100} />
          </Col>
        </Row>

        <Row className="mb-3">
          <Col sm={3} className="fw-bold">
            Assignment Group
          </Col>
          <Col sm={9}>
            <Form.Control as="select">
              <option value="">Select Assignment Group</option>
              <option value="group1">Group 1</option>
              <option value="group2">Group 2</option>
              <option value="group3">Group 3</option>
            </Form.Control>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col sm={3} className="fw-bold">
            Grade As
          </Col>
          <Col sm={9}>
            <Form.Control as="select">
              <option value="percentage">Percentage</option>
              <option value="raw">Raw</option>
            </Form.Control>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col sm={3} className="fw-bold">
            Submission Type
          </Col>
          <Col sm={9} className="border p-3">
            <Form.Control as="select">
              <option value="online">Online</option>
              <option value="in-person">In-person</option>
            </Form.Control>
            <Form.Check type="checkbox" label="Text Entry" id="wd-text-entry" />
            <Form.Check
              type="checkbox"
              label="Website URL"
              id="wd-website-url"
            />
            <Form.Check
              type="checkbox"
              label="Media Recordings"
              id="wd-media-recordings"
            />
            <Form.Check
              type="checkbox"
              label="Student Annotation"
              id="wd-student-annotation"
            />
            <Form.Check
              type="checkbox"
              label="File Uploads"
              id="wd-le-upload"
            />
          </Col>
        </Row>

        <Row className="mb-3">
          <Col sm={3} className="fw-bold">
            Assign
          </Col>
          <Col sm={9} className="border p-3">
            <div>Assign To</div>
            <div className="border">
              <div className="bg-secondary wd-assign-to-member">
                Everyone <BsX />
              </div>
            </div>
            <br></br>
            <div>Due</div>
            <Form.Control type="date" />
            <br></br>
            <Row>
              <Col>
                <div>Available from</div>
                <Form.Control type="date" id="wd-available-from" />
              </Col>
              <Col>
                <div>Until</div>
                <Form.Control type="date" id="wd-available-until" />
              </Col>
            </Row>
          </Col>
        </Row>

        <div className="d-flex justify-content-end">
          <Button variant="secondary" className="me-2">
            Cancel
          </Button>
          <Button variant="danger">Save</Button>
        </div>
      </Form>
    </div>
  );
}
