import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './register.css';

 class Register extends Component {
    render() {
        return (
            <div className="main-reg">
                    <h2>Register</h2>
                <form className="sub-reg">
                    <div>
                    <label> Full Name</label>
                    <input type="text" placeholder="Enter your Full Name.." />
                    <label>Email </label>
                    <input type="text" placeholder="Enter your Email.. " />
                    <label>Password </label>
                    <input type="password" placeholder="Enter your password.." />
                    <button>Register</button>
                    </div>
                </form>
                <div>
                    <Link to="/login">Login</Link>
                </div>
            </div>
        )
    }
}
export default Register