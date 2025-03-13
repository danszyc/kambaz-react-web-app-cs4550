import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import * as db from "../Database";

export default function Signup() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    verifyPassword: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const signup = () => {
    if (credentials.password !== credentials.verifyPassword) {
      setError("Passwords do not match");
      return;
    }

    const userExists = db.users.find(
      (user: any) => user.username === credentials.username
    );
    if (userExists) {
      setError("Username already exists");
      return;
    }

    const newUser = {
      _id: new Date().getTime().toString(),
      username: credentials.username,
      password: credentials.password,
      firstName: "",
      lastName: "",
      email: "",
      dob: "",
      role: "STUDENT",
      loginId: "",
      section: "",
      lastActivity: "",
      totalActivity: "",
    };
    db.users.push(newUser);

    setCredentials({ username: "", password: "", verifyPassword: "" });
    setError("");
    navigate("/Kambaz/Account/Signin");
  };

  return (
    <div id="wd-signup-screen" className="wd list-group fs-5 rounded-0">
      <h1>Sign up</h1>

      {error && <div className="alert alert-danger">{error}</div>}

      <Form.Control
        id="wd-username"
        placeholder="username"
        className="mb-2"
        value={credentials.username}
        onChange={(e) =>
          setCredentials({ ...credentials, username: e.target.value })
        }
      />

      <Form.Control
        id="wd-password"
        placeholder="password"
        type="password"
        className="mb-2"
        value={credentials.password}
        onChange={(e) =>
          setCredentials({ ...credentials, password: e.target.value })
        }
      />

      <Form.Control
        id="wd-password-verify"
        placeholder="verify password"
        type="password"
        className="mb-2"
        value={credentials.verifyPassword}
        onChange={(e) =>
          setCredentials({ ...credentials, verifyPassword: e.target.value })
        }
      />

      <button
        id="wd-signup-btn"
        className="btn btn-primary w-100 mb-2"
        onClick={signup}
      >
        Sign up
      </button>

      <Link id="wd-signin-link" to="/Kambaz/Account/Signin">
        Sign in
      </Link>
    </div>
  );
}