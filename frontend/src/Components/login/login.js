import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import './login.css'
 class Login extends Component {
    render() {
        return (
            <div className="main-log">
                <h2>Login </h2>
    <div>
      <label for="fname">Email</label>
    <input type="text"   placeholder="Enter your Email..."/>
    <label for="lname">password</label>
    <input type="password" placeholder="Your password..."/>
    <button>login</button>
    </div>
    <Link to="/register">Register</Link>
</div>
        )
    }
}

export default Login;