import React from 'react'
import './Signup.css';
import Emnavbar from '../../Components/Emnavbar/Emnavbar';

const Expertsignup = () => {
  return (
    <div>
      <Emnavbar/>
    <div>

<div className="wrapper">
  <form action="#">
    <h2>Expert Sign Up</h2>
    <div className="input-field">
      <input type="text" required />
      <label htmlFor="First Name">Enter your Full Name</label>
    </div>
    <div className="input-field">
      <input type="text" required />
      <label htmlFor="Second Name">Enter Occupation</label>
    </div>
    <div className="input-field">
      <input type="text" required />
      <label htmlFor="email">Enter your email</label>
    </div>
    <div className="input-field">
      <input type="password" required />
      <label htmlFor="password">Enter your password</label>
    </div>
    <div className="input-field">
      <input type="confirmPassword" required />
      <label htmlFor="confirmPassword">Confirm password</label>
    </div><br/><br/>

    <button type="submit">Sign Up</button>
    <div className="Login"><br/>
      <p className='Log'>If have an account? <a href="/Login">Login</a></p>
    </div>
  </form>

</div>
</div>


</div>
  )
}

export default Expertsignup