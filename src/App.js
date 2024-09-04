import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import RegAuthPage from './js/RegAuthPage';
import Main from './js/Mainpage';
import Card from  './js/FullCard';
import Profile from  './js/Profile';
import Contact from  './js/Contact';
import About from "./js/About";
import Faq from "./js/Faq";
import Admin from "./js/Admin";
import AdminItemsManage from "./js/AdminItemsManage";
import AdminItems from "./js/AdminItems";
import ChangeAdminData from "./js/ChangeAdminData";
function App() {
  return (
        <Routes>
        <Route path="/" element={<RegAuthPage/>} />
            <Route path="/home" element={<Main/>} />
            <Route path="/card" element={<Card/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/faq" element={<Faq/>} />
            <Route path="/admin/home" element={<Admin/>} />
            <Route path="/admin/items" element={<AdminItems/>} />
            <Route path="/admin/items/manage/:itemId" element={<AdminItemsManage/>} />
            <Route path="/admin/items/manage/" element={<AdminItemsManage/>} />
            <Route path="/admin/password" element={<ChangeAdminData/>} />
        </Routes>
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
