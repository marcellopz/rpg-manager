import { Link, useNavigate } from "react-router-dom";
import "./authenticate.css";
import { useState } from "react";

export default function Authenticate() {
  const [registered, setRegistered] = useState<boolean>(true);
  const navigate = useNavigate();

  const redirect = () => {
    navigate("/");
  };

  if (registered) {
    return (
      <main className="auth-main">
        <div className="auth-container">
          <div className="auth-header">
            <Link to="/">
              <img className="small invert" src="assets/dado.svg" />
            </Link>
            <h1>Login</h1>
          </div>
          <div className="auth-fields">
            <input placeholder="Email" />
            <input placeholder="Password" />
          </div>
          <div className="auth-footer">
            <div
              className="cursor-pointer"
              onClick={() => {
                setRegistered(false);
              }}
            >
              I'm not registered yet
            </div>
            <button onClick={redirect} className="auth-btn">
              Login
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="auth-main">
      <div className="auth-container">
        <div className="auth-header">
          <Link to="/">
            <img className="small invert" src="assets/dado.svg" />
          </Link>
          <h1>Register</h1>
        </div>
        <div className="auth-fields">
          <input placeholder="Email" />
          <input placeholder="Username" />
          <input placeholder="Password" />
        </div>
        <div className="auth-footer">
          <div
            className="cursor-pointer"
            onClick={() => {
              setRegistered(true);
            }}
          >
            I'm already registered
          </div>
          <button onClick={redirect} className="auth-btn">
            Register
          </button>
        </div>
      </div>
    </main>
  );
}
