import { Link } from "react-router-dom";
import { Row, Col, Card, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { enroll, unenroll } from "./reducer";
import { useState } from "react";

export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
  const dispatch = useDispatch();

  const [showAllCourses, setShowAllCourses] = useState(false);

  const isFaculty = currentUser?.role === "FACULTY";
  const isStudent = currentUser?.role === "STUDENT";

  // Toggle between showing all courses and enrolled courses
  const toggleShowAllCourses = () => {
    setShowAllCourses(!showAllCourses);
  };

  // Check if the current user is enrolled in a course
  const isEnrolled = (courseId: string) => {
    return enrollments.some(
      (enrollment: any) =>
        enrollment.user === currentUser._id && enrollment.course === courseId
    );
  };

  // Handle enrollment/unenrollment
  const handleEnrollment = (courseId: string) => {
    if (isEnrolled(courseId)) {
      dispatch(unenroll({ user: currentUser._id, course: courseId }));
    } else {
      dispatch(enroll({ user: currentUser._id, course: courseId }));
    }
  };

  // Filter courses based on enrollment status
  const filteredCourses = showAllCourses
    ? courses
    : courses.filter((course) => isEnrolled(course._id));

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      {isFaculty && (
        <>
          <h5>
            New Course
            <button
              className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={addNewCourse}
            >
              Add
            </button>
            <button
              className="btn btn-warning float-end me-2"
              onClick={updateCourse}
              id="wd-update-course-click"
            >
              Update
            </button>
          </h5>
          <br />
          <input
            value={course.name}
            className="form-control mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <textarea
            value={course.description}
            className="form-control"
            onChange={(e) =>
              setCourse({ ...course, description: e.target.value })
            }
          />
          <hr />
        </>
      )}

      {isStudent && (
        <Button
          variant="primary"
          className="float-end"
          onClick={toggleShowAllCourses}
        >
          {showAllCourses ? "Show Enrolled Courses" : "Show All Courses"}
        </Button>
      )}

      <h2 id="wd-dashboard-published">Published Courses ({filteredCourses.length})</h2>
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {filteredCourses.map((course) => (
            <Col
              key={course._id}
              className="wd-dashboard-course"
              style={{ width: "300px" }}
            >
              <Card>
                <Link
                  to={`/Kambaz/Courses/${course._id}/Home`}
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                >
                  <Card.Img
                    variant="top"
                    src="/images/reactjs.jpg"
                    height={160}
                  />
                  <Card.Body>
                    <Card.Title className="wd-dashboard-course-title">
                      {course.name}
                    </Card.Title>
                    <Card.Text
                      className="wd-dashboard-course-description overflow-y-hidden"
                      style={{ maxHeight: 100 }}
                    >
                      {course.description}
                    </Card.Text>
                    <button className="btn btn-primary">Go</button>
                    {isFaculty && (
                      <>
                        <button
                          onClick={(event) => {
                            event.preventDefault();
                            deleteCourse(course._id);
                          }}
                          className="btn btn-danger float-end"
                          id="wd-delete-course-click"
                        >
                          Delete
                        </button>
                        <button
                          id="wd-edit-course-click"
                          onClick={(event) => {
                            event.preventDefault();
                            setCourse(course);
                          }}
                          className="btn btn-warning me-2 float-end"
                        >
                          Edit
                        </button>
                      </>
                    )}
                  </Card.Body>
                </Link>
                {isStudent && (
                  <Card.Footer>
                    {isEnrolled(course._id) ? (
                      <Button
                        variant="danger"
                        onClick={() => handleEnrollment(course._id)}
                      >
                        Unenroll
                      </Button>
                    ) : (
                      <Button
                        variant="success"
                        onClick={() => handleEnrollment(course._id)}
                      >
                        Enroll
                      </Button>
                    )}
                  </Card.Footer>
                )}
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}