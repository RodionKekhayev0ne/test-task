import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import RegAuthPage from './js/RegAuthPage';
import Main from './js/Mainpage';
import Card from  './js/FullCard';
import Profile from  './js/Profile';
function App() {
  return (
    <div className="App">
        <Routes>
        <Route path="/" element={<RegAuthPage/>} />
            <Route path="/home" element={<Main/>} />
            <Route path="/card" element={<Card/>} />
            <Route path="/profile" element={<Profile/>} />
        </Routes>
    </div>
  );
}
function AppWithRouter() {
  return (
      <Router>
        <App />
      </Router>
  );
}

export default AppWithRouter;
