import React, { useState } from 'react';
import './Signup.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Signup() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [profession, setProfession] = useState('');

  const professions = [
    { value: 'Software Engineer', label: 'Software Engineer' },
    { value: 'Data Scientist', label: 'Data Scientist' },
    { value: 'Product Manager', label: 'Product Manager' },
    { value: 'Marketing Manager', label: 'Marketing Manager' },
  ];
  const navigate=useNavigate()
  const handleSignup = (e) => {
    e.preventDefault();
    const user = {
      name,
      password,
      email,
      phoneNumber,
      profession: profession.value,
    };

    // Store the user data in local storage
    localStorage.setItem('user', JSON.stringify(user));

    alert('User signed up successfully!');
    navigate("./Login")

    setEmail("");
    setName("");
    setPassword("");
    setPhoneNumber("");
    setProfession("");
  };

  return (
    <div className="container">
      <div className="signup-form">
        <h1>Sign Up</h1>
        <form onSubmit={handleSignup}>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              required
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </label>
          <label>
            Phone Number:
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Enter your phone number"
              required
            />
          </label>
          <label>
            Profession:
            <select
              value={profession}
              onChange={(e) => setProfession(e.target.value)}
              required
            >
              <option value="" disabled>Select your profession</option>
              {professions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
          <button type="submit">Sign Up</button>
          <Link to="/Login"> <button  className='Loginbtn' id='Loginbtn'>Login </button></Link>
          
        </form>
      </div>
    </div>
  );
}

export default Signup;
