import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";

export default function Profile() {
  return (
<div id="wd-profile-screen" className="wd list-group fs-5 rounded-0">
  <h1>Profile</h1>
  <Form.Control
    id="wd-username"
    defaultValue="alice"
    placeholder="username"
    className="mb-2"
  />
  <Form.Control
    id="wd-password"
    defaultValue="123"
    placeholder="password"
    type="password"
    className="mb-2"
  />
  <Form.Control
    id="wd-firstname"
    defaultValue="Alice"
    placeholder="First Name"
    className="mb-2"
  />
  <Form.Control
    id="wd-lastname"
    defaultValue="Wonderland"
    placeholder="Last Name"
    className="mb-2"
  />
  <Form.Control
    id="wd-dob"
    defaultValue="2000-01-01"
    type="date"
    className="mb-2"
  />
  <Form.Control
    id="wd-email"
    defaultValue="alice@wonderland"
    type="email"
    className="mb-2"
  />
  <Form.Control as="select" id="wd-role" className="mb-2">
    <option value="USER">User</option>
    <option value="ADMIN">Admin</option>
    <option value="FACULTY">Faculty</option>
    <option value="STUDENT">Student</option>
  </Form.Control>
  <Link
    to="/Kambaz/Account/Signin"
    className="btn btn-outline-danger w-100 mb-2"
  >
    Sign out
  </Link>
</div>

);}
