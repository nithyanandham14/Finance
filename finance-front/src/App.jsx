import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Login from './Pages/Login';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import MetalRates from './Pages/MetalRates';
import ItemForm from './Pages/ItemForm';
import Calculator from './Pages/Calculator';
import Report from './Pages/Report';
import './index.css';


export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <Router>
      <div className="container-fluid1">
        <Sidebar darkMode={darkMode} setDarkMode={setDarkMode} />
        <div className="">
          <Routes>
          <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
            <Route path="/metalrates" element={<PrivateRoute><MetalRates /></PrivateRoute>} />
            <Route path="/item" element={<PrivateRoute><ItemForm /></PrivateRoute>} />
            <Route path="/calculator" element={<PrivateRoute><Calculator /></PrivateRoute>} />
            <Route path="/report" element={<PrivateRoute><Report /></PrivateRoute>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}