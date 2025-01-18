import React, { useState } from 'react';
import './Signup.css';
import Navbar from '../../Components/Navbar/Navbar';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import Swal from 'sweetalert2';

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const response = await axios.post('http://localhost:5000/api/auth/signup', formData);
      console.log('Signup Success:', response.data);
      Swal.fire({
        icon: 'success',
        title: 'Signup Successful!',
        text: 'Your account has been created successfully.',
        timer: 1500,
        showConfirmButton: false,
      });
    } catch (error) {
      console.error('Signup Error:', error.response.data);
    }
  };

  const handleSuccess = (credentialResponse) => {
    console.log('Login Success:', credentialResponse);
  };

  const handleFailure = () => {
    console.log('Login Failed');
  };

  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <div>
        <Navbar />
        <div>
          <div className="wrapper">
            <form onSubmit={handleSubmit}>
              <h2>Sign Up</h2>
              <div className="input-field">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="firstName">Enter your First Name</label>
              </div>
              <div className="input-field">
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="lastName">Enter your Last Name</label>
              </div>
              <div className="input-field">
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="email">Enter your email</label>
              </div>
              <div className="input-field">
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="password">Enter your password</label>
              </div>
              <div className="input-field">
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="confirmPassword">Confirm password</label>
              </div>
              <br /><br />
              <button type="submit">Signup</button>
              <div className="Login">
                <p className='Log'>Do you have an account? <a href="/Login">Login</a></p>
              </div>
            </form>
            <div className="google-login">
              <GoogleLogin
                onSuccess={handleSuccess}
                onFailure={handleFailure}
                render={renderProps => (
                  <button
                    className="google-login-button"
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
                      alt="Google"
                      width="20"
                      height="20"
                    />
                    Login with Google
                  </button>
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};

export default Signup;