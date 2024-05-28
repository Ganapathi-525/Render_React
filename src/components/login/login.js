import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

   const navigate=useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    // Retrieve the registered user data from local storage
    const registeredUser = JSON.parse(localStorage.getItem('user'));

    if (registeredUser && registeredUser.name === name && registeredUser.password === password) {
      setMessage(`Welcome, ${registeredUser.name}!`);
      navigate("/Home")
    } else {
      setMessage('Invalid Credentials');
    }
  };

  return (
    <div className="container">
      <div className="login-form">
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
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
          <button type="submit">Login</button>
        </form>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default Login;
