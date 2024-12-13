import React, { useState } from 'react';
import axios from 'axios';
import './Signup.css';
import Navbar from '../../Components/Navbar/Navbar';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import Swal from 'sweetalert2';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSuccess = (credentialResponse) => {
    
    console.log('Login Success:', credentialResponse);

    // Example: Assuming you need to send the Google token to the backend
    const tokenId = credentialResponse.credential;
    
    axios.post('http://localhost:5000/api/auth/google', { tokenId })
      .then(response => {
        console.log('Google login successful:', response.data);
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Logged in successfully!',
          showConfirmButton: false,
          timer: 1500
        });
        // Store token in localStorage or state
        localStorage.setItem('token', response.data.token);
        // Redirect or update UI based on successful login
      })
      .catch(error => {
        console.error('Google login error:', error);
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'Google login failed!',
          showConfirmButton: false,
          timer: 1500
        });
      });
  };
  const handleFailure = () => {
    console.log('Google Login Failed');
    Swal.fire({
      position: 'top-end',
      icon: 'error',
      title: 'Google login failed!',
      showConfirmButton: false,
      timer: 1500
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password
      });

      console.log('Login successful:', res.data);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Logged in successfully!',
        showConfirmButton: false,
        timer: 1500
      });
      // Store token in localStorage or state
      localStorage.setItem('token', res.data.token);
      // Redirect or update UI based on successful login

    } catch (error) {
      console.error('Login error:', error.response ? error.response.data : error.message);
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Login failed!',
        text: error.response ? error.response.data.msg : 'An unexpected error occurred.',
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <div>
        <Navbar />
        <div className="wrapper">
          <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <div className="input-field">
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label htmlFor="email">Email</label>
            </div>
            <div className="input-field">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label htmlFor="password">Password</label>
            </div>
            <div className="forget">
              <label htmlFor="remember">
                <input type="checkbox" id="remember" />
                <span>Remember me</span>
              </label>
              <a href="#">Forgot password?</a>
            </div>
            <button type="submit">Login</button>
            <div className="register">
              <p>Don't have an account? <a href="/Signup">Register</a></p>
            </div>
          </form>
          <div className="google-login">
          <GoogleLogin
            onSuccess={handleSuccess}
            onFailure={handleFailure}
            render={(renderProps) => (
              <button
                className="google-login-button"
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
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
    </GoogleOAuthProvider>
  );
};

export default Login;
