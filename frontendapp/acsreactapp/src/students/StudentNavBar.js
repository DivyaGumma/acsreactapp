import React from 'react';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import './student.css'; // Import the CSS file
import StudentHome from './StudentHome';
import StudentProfile from './StudentProfile';
import MyCourses from './MyCourses';

export default function StudentNavBar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isStudentLoggedIn');
    localStorage.removeItem('student');

    navigate('/studentlogin');
    window.location.reload();
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-brand">Your Brand</Link>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link align='right'to="/studenthome" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link align='right'to="/mycourses" className="nav-link">MyCourses</Link>
            </li>
            <li className="nav-item">
              <Link align='right'to="/studentprofile" className="nav-link">Student Profile</Link>
            </li>
          </ul>
          <button className="logoutButton" onClick={handleLogout}>Logout</button>
        </div>
      </nav>

      <Routes>
        <Route path="/studenthome" element={<StudentHome />} exact />
        <Route path="/mycourses" element={<MyCourses />} exact />
        <Route path="/studentprofile" element={<StudentProfile />} exact />
      </Routes>
    </div>
  );
}
