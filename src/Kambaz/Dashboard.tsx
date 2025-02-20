import { Link } from "react-router-dom";
import { Row, Col, Card } from "react-bootstrap"; // Import React-Bootstrap components
import * as db from "./Database";

export default function Dashboard() {
  const courses = db.courses;

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {courses.map((course) => (
            <Col key={course._id} className="wd-dashboard-course" style={{ width: "300px" }}>
              <Card>
                <Link
                  to={`/Kambaz/Courses/${course._id}/Home`}
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                >
                  <Card.Img variant="top" src="/images/reactjs.jpg" height={160} />
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
                  </Card.Body>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}