import React, {Component} from "react";
import { Link } from "react-router-dom";
import "../css/loginPage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginForm from "../components/loginForm";
// const { login, 
//     register,
//     verifyEmail,
//     forgotPassword,
//     resetPassword,
//     changePassword } = require("../../../../server/controllers/authorization");

const LoginPage = () => {
    return(
        <>
        <body>
            <div className="loginHeader" style={{width: "100%", height: "100%"}}>
                <h2>NewsApp</h2>
                <p className="appDescrip">Post and Share Stories, News, and Videos</p>
                <LoginForm />
            </div>
       
              

        </body>
            

            
        </>
      
            
    
    




    )
}

export default LoginPage;

