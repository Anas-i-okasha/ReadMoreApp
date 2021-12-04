import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './register.css';

 class Register extends Component {
    render() {
        return (
            <div className="main-reg">
                <div>
                    <h2>Register</h2>
                </div>
                <div className= "sub-reg">
                    <input placeholder="Enter your Full Name??" />
                    <input placeholder="Enter your Email? " />
                    <input placeholder="Enter your password?" />
                    <button>Register</button>
                </div>
                <div>
                    <Link to="/login">Login</Link>
                </div>
            </div>
        )
    }
}
export default Register