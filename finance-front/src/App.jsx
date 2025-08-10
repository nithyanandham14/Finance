import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/metalrates" element={<MetalRates />} />
            <Route path="/item" element={<ItemForm />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/report" element={<Report />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}