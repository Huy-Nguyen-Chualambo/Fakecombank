import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './views/Dashboard';
import SendRequest from './components/SendRequest';
import Wallet from './components/Wallet';
import Activity from './components/Activity';
import Help from './components/Help';


function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          < Route path="/send-request" element={<SendRequest />} />
          < Route path="/wallet" element={<Wallet/>} />
          < Route path="/activity" element={<Activity />} />
          < Route path="/help" element={<Help />} />
         
          
          {/* <Route path="/SendRequest" element={<SendRequest />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
