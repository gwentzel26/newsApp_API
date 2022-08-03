import React, {Component} from "react";
import { Link } from "react-router-dom";
const { login, 
    register,
    verifyEmail,
    forgotPassword,
    resetPassword,
    changePassword } = require("../../../../server/controllers/authorization");

export default class Login extends Component {
    render(){
        <div className="card">
            <input className="email"></input>
            <input className="password"></input>
            <button onClick={login}>Login</button>
            <Link to="/forgotPassword">Forgot password?</Link>
            <button>Create new account
                <Link to="/register"></Link>
            </button>
        </div>






    }



}