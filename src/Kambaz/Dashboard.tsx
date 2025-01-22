import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/1234/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer{" "}
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/5001/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/programming.jpg" width={200} />
            <div>
              <h5> CS5001 Fundamentals of Computer Science </h5>
              <p className="wd-dashboard-course-title">
                Introduction to programming concepts
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/5500/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/algorithms.jpg" width={200} />
            <div>
              <h5> CS5500 Foundations of Software Engineering </h5>
              <p className="wd-dashboard-course-title">
                Software design and development practices
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/6515/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/ai.jpg" width={200} />
            <div>
              <h5> CS6515 Artificial Intelligence </h5>
              <p className="wd-dashboard-course-title">
                Introduction to AI and machine learning
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/6200/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/databases.jpg" width={200} />
            <div>
              <h5> CS6200 Database Management Systems </h5>
              <p className="wd-dashboard-course-title">
                Database design and management
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/6240/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/parallel.jpg" width={200} />
            <div>
              <h5> CS6240 Parallel Data Processing </h5>
              <p className="wd-dashboard-course-title">
                High-performance computing and big data
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/6650/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/networks.jpg" width={200} />
            <div>
              <h5> CS6650 Computer Networks and Cloud Computing </h5>
              <p className="wd-dashboard-course-title">
                Network systems and cloud infrastructure
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
