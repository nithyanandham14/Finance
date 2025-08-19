import React from 'react';
import { NavLink,useNavigate } from 'react-router-dom';
import { Moon, Sun ,LogOut} from 'lucide-react';

export default function Sidebar({ darkMode, setDarkMode }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove JWT
    navigate('/login'); // Redirect to login page
  };
  return (
    
    <div className="sidebar">
      <h1 className=""><span>BJSN</span> Finance</h1>
      <nav className="sidebar-compo space-y-4">
        <NavLink to="/dashboard" className="">Dashboard</NavLink>
        <NavLink to="/metalrates" className="">Metal Rates</NavLink>
        <NavLink to="/item" className="">Item</NavLink>
        <NavLink to="/calculator" className="">Calculator</NavLink>
        <NavLink to="/report" className="">Report</NavLink>
      </nav>
      <div className="mt-10">
        <label className="flex items-center cursor-pointer">
          <div className="relative">
            <input type="checkbox" className="sr-only" checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
            <div className="block w-14 h-8 bg-gray-300 rounded-full"></div>
            <div className={`dot absolute left-1 top-1 w-6 h-6 bg-white rounded-full transition ${darkMode ? 'translate-x-6' : ''}`}></div>
          </div>
          <span className="ml-3 text-sm text-gray-700 dark:text-gray-300 flex items-center gap-1">
            {darkMode ? <Moon size={16} /> : <Sun size={16} />} {darkMode ? 'Dark' : 'Light'} Mode
          </span>
        </label>
         <button
          onClick={handleLogout}
          className="flex items-center gap-2 text-white bg-red-600 px-4 py-2 rounded hover:bg-red-700 transition"
        >
          <LogOut size={16} /> Logout
        </button>
        
      </div>
    </div>
    
  );
}
