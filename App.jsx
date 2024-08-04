import 'tailwindcss/tailwind.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from './LoginForm';
import App2 from './App2';
import App3 from './App3';

import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
  } from "react-router-dom";

function App() {
  const [loginResults, setloginResults] = useState([]);

  const handleLogin = (loginParams, navigate) => {
    fetch('http://localhost:3008/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify(loginParams),
    })
    .then((res) => {
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      return res.json();
    })
    
      .then((data) => { console.log((data[0]).permission)
        if ((data[0]).permission === 'user'){
          navigate('/authorised');
        }
        else if ((data[0]).permission === 'admin')
        {navigate('/admin');}
      })
 
      .catch((err) => console.error(err));
  };

  return (

    <Router>
    <div>
      <LoginForm onLogin={handleLogin} />
       <Routes>
        <Route path="/admin" element={<App3/>}/>
        <Route path="/authorised" element={<App2/>}/>
        <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
    </div>
    </Router>
  );
}

export default App;
