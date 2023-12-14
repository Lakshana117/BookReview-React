import React from 'react';
import './register.css';

function Registers() {
  return (
    
    <div className='reg'>
      <label htmlFor="user"><h1><i>REGISTRATION FORM</i></h1></label>
      <label htmlFor="user">First Name</label>
      <input type="text" id="user" name="user" placeholder="" />
      <br />
      <label htmlFor="user">Last Name</label>
      <input type="text" id="user" name="user" placeholder="" />
      <br />
      <label htmlFor="dob">D.O.B:</label>
      <input type="date" id="dob" required />
      <br />
      <label htmlFor="email">E-mail:</label>
      <input type="email" id="email" placeholder="" required />
      <br />
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" placeholder="" />
      <br />
      <br />
      <label htmlFor="contactNumber">Contact Number:</label>
      <input type="tel" placeholder="Enter your phone number" required />
      <br />
      <br />
      <center><button>SIGN UP</button></center>
    </div>
  );
}

export default Registers;