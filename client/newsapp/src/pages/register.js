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

const RegisterPage = () => {
    return(
        <div>
        <h3>Create New Account</h3>
        <form>
            <div className="form-group">
                <label>email:</label>
                <input type={"text"} 
                    required 
                    className="form-control" 
                    // value={this.state.username} 
                    // onChange={this.onChangeUsername}
                    />
                <label>password:</label>
                <input type={"text"} 
                    required 
                    className="form-control" 
                    // value={this.state.username} 
                    // onChange={this.onChangeUsername}
                    />
                    
            </div>
            <div className="form-group">
                <input type="submit"
                        value="Create User"
                        className="btn btn-primary"
                        
                    />
            </div>
        </form>
    </div>
      
            
    
    




    )
}

export default RegisterPage;
