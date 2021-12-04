import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import './login.css'
 class Login extends Component {
    render() {
        return (
            <div className="main-log">
                <div>
                    <h2>Login</h2>
                </div>
                <div className="main-div">
                    <input placeholder="Enter your Email??" />
                    <input placeholder="Enter your password??"/>
                    <button>Login</button>
                </div>
                <div>
                 <Link to="/register">Register</Link>  
                </div>
            </div>
        )
    }
}

export default Login