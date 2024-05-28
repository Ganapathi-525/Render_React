
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/home';

import Login from './components/login/login';
import SignUp from './components/signUp/signUp';

function App() {
  return (
  
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </BrowserRouter>
    
    
  );
}

export default App;
