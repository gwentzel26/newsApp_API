import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/loginForm.css";
import "bootstrap/dist/css/bootstrap.min.css";
// const { login,
//     register,
//     verifyEmail,
//     forgotPassword,
//     resetPassword,
//     changePassword } = require("../../../../server/controllers/authorization");

export default class LoginForm extends Component {
  render() {
    return (
      <div className="card" style={{ width: "20%", height: "40%" }}>
        <div className="credentials">
          <input type="text" className="email" placeholder="email"></input>
          <input
            type="text"
            className="password"
            placeholder="password"
          ></input>
        </div>

        <div className="loginLinks" style={{ width: "100%" }}>
          <Link to="/login">
            <button className="loginBtn" to="/login" style={{ width: "100%" }}>
              Login
            </button>
          </Link>

          <div className="fgtPswdCont" style={{ width: "50%" }}>
            <Link
              className="fgtPswd hover-underline-animation"
              to="/forgotPassword"
            >
              Forgot password?
            </Link>
          </div>

          <Link to="/register" className="registerLink">
            <button className="registerBtn">Create new account</button>
          </Link>
        </div>
      </div>
    );
  }
}
