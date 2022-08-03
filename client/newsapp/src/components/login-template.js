import React, {Component} from "react";
import { Link } from "react-router-dom";
import "../css/loginForm.css";
import "bootstrap/dist/css/bootstrap.min.css";
// const { login, 
//     register,
//     verifyEmail,
//     forgotPassword,
//     resetPassword,
//     changePassword } = require("../../../../server/controllers/authorization");

export default class Login extends Component {
    render(){
        return(
        <div className="card" style={{width: "40%"}}>
            <input type="text" className="email" placeholder="email"></input>
            <input type="text" className="password" placeholder="password"></input>
            <button className="loginBtn" style={{width: "85%"}} >Login</button>
            <div className="fgtPswdCont" style={{width: "50%"}}>
                <Link className="fgtPswd hover-underline-animation" to="/forgotPassword">Forgot password?</Link>
            </div>
           
            
            
            <button className="registerBtn">Create new account
                <Link to="/register"></Link>
            </button>
        </div>
        )
      
    }
}

