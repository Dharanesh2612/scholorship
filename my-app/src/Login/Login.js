// Login.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Ensure you have the correct path for your CSS

const Login = () => {
    const navigate = useNavigate();

    return (
        <div className="login-container">
            <button className="back-button" onClick={() => navigate(-1)}>← Back</button>
            <h1>User Login</h1>
            <form>
                <div className="input-group">
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" required />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" required />
                </div>
                <div className="input-group">
                    <label htmlFor="confirmpassword">Confirm Password:</label>
                    <input type="password" id="confirmpassword" required />
                </div>
                <div className="checkbox-container">
                    <input type="checkbox" id="remember-me" />
                    <label htmlFor="remember-me">Remember Me</label>
                </div>
                <button type="submit">Login</button>
            </form>
            <div className="links">
                <a href="#forgot-password" className="forgot-password-link">Forgot Password?</a>
                <p>New User? <a href="#register" className="register-link">Register here</a></p>
            </div>
        </div>
    );
}

export default Login;
