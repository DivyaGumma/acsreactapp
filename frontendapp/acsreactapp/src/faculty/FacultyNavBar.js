import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import './faculty.css'; // Import the CSS file
import FacultyHome from './FacultyHome';
import FacultyProfile from './FacultyProfile';
import StudentRegistration from './StudentRegistration';
import AddCourses from './AddCourses';
import AddStudent from './AddStudent';
import ViewStudents from './ViewStudents';
import DeleteStudent from './DeleteStudent';
import ViewCourses from './ViewCourses';

export default function FacultyNavBar() {
  const handleLogout = () => {
    localStorage.removeItem('isFacultyLoggedIn');
    localStorage.removeItem('faculty');
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-brand">Your Brand</Link>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/facultyhome" className="nav-link">Home</Link>
            </li>
            <li className="nav-item dropdown">
              <Link to="#" className="dropbtn">Students</Link>
              <div className="dropdown-content">
                <Link to="/registration" className="dropdown-item">Registration</Link>
                <Link to="/addstudent" className="dropdown-item">Add Students</Link>
                <Link to="/viewstudents" className="dropdown-item">View Students</Link>
                <Link to="/deletestudent" className="dropdown-item">Delete Students</Link>
              </div>
            </li>
            <li className="nav-item dropdown">
              <Link to="#" className="dropbtn">Courses</Link>
              <div className="dropdown-content">
                <Link to="/addcourse" className="dropdown-item">Add Courses</Link>
                <Link to="/viewcourses" className="dropdown-item">View Courses</Link>
              </div>
            </li>
            <li className="nav-item">
              <Link to="/facultyprofile" className="nav-link">Faculty Profile</Link>
            </li>
          </ul>
          <button className="logoutButton" onClick={handleLogout}>Logout</button>
        </div>
      </nav>

      <Routes>
        <Route path="/facultyhome" element={<FacultyHome />} />
        <Route path="/facultyprofile" element={<FacultyProfile />} />
        <Route path='/registration' element={<StudentRegistration/>} />
        <Route path='/addstudent' element={<AddStudent/>} />
        <Route path='/viewstudents' element={<ViewStudents/>} />
        <Route path='/deletestudent' element={<DeleteStudent/>} />
        <Route path='/addcourse' element={<AddCourses/>} />
        <Route path='/viewcourses' element={<ViewCourses/>} />
      </Routes>
    </div>
  );
}
