import {
  Button,
  FormControl,
  InputGroup,
  ListGroup,
  Row,
} from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import AssignmentControlButtons from "./AssignmentControlButtons.tsx";
import { BsSearch } from "react-icons/bs";
import { BsPencilSquare } from "react-icons/bs";
import { BsFillCaretDownFill } from "react-icons/bs";
import { BsPlus } from "react-icons/bs";
import "./styles.css";

export default function Assignments() {
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
        <Button variant="danger" className="ms-2" id="wd-add-assignment">
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
            <ListGroup.Item className="wd-assignment p-3 ps-1">
              <div className="d-flex align-items-start align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                <span className="text-success me-2">
                  <BsPencilSquare className="fs-4" />
                </span>
                <div>
                  <Row>
                    <a
                      href="#/Kambaz/Courses/1234/Assignments/1"
                      className="wd-assignment-link"
                    >
                      <span className="fw-bold">A1 - ENV + HTML</span>
                    </a>
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
                  {" "}
                  <AssignmentControlButtons />
                </div>
              </div>
            </ListGroup.Item>

            <ListGroup.Item className="wd-assignment p-3 ps-1">
              <div className="d-flex align-items-start align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                <span className="text-success me-2">
                  <BsPencilSquare className="fs-4" />
                </span>
                <div>
                  <Row>
                  <a
                      href="#/Kambaz/Courses/1234/Assignments/2"
                      className="wd-assignment-link"
                    >
                      <span className="fw-bold">A2 - CSS + BOOTSTRAP</span>
                    </a>
                  </Row>
                  <Row>
                    <div className="container">
                      <div className="text-danger">
                        <span className="fw-bold me-1">Multiple Modules</span>{" "}
                      </div>
                      <div className="fw-bold me-1"> | Not available until</div>{" "}
                      May 13 at 12:00 am |
                    </div>
                  </Row>
                  <Row>
                    <div className="container">
                      <div className="fw-bold me-1">Due</div> May 20 at 11:59pm
                      | 300 pts
                    </div>
                  </Row>
                </div>
                <div className="ms-auto">
                  {" "}
                  <AssignmentControlButtons />
                </div>
              </div>
            </ListGroup.Item>

            <ListGroup.Item className="wd-assignment p-3 ps-1">
              <div className="d-flex align-items-start align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                <span className="text-success me-2">
                  <BsPencilSquare className="fs-4" />
                </span>
                <div>
                  <Row>
                  <a
                      href="#/Kambaz/Courses/1234/Assignments/3"
                      className="wd-assignment-link"
                    >
                      <span className="fw-bold">A3 - JAVASCRIPT + REACT</span>
                    </a>
                  </Row>
                  <Row>
                    <div className="container">
                      <div className="text-danger">
                        <span className="fw-bold me-1">Multiple Modules</span>{" "}
                      </div>
                      <div className="fw-bold me-1"> | Not available until</div>{" "}
                      May 20 at 12:00 am |
                    </div>
                  </Row>
                  <Row>
                    <div className="container">
                      <div className="fw-bold me-1">Due</div> May 27 at 11:59pm
                      | 300 pts
                    </div>
                  </Row>
                </div>
                <div className="ms-auto">
                  {" "}
                  <AssignmentControlButtons />
                </div>
              </div>
            </ListGroup.Item>
          </ListGroup>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}
