import React from 'react';
import './Homepage.css';
import Navbar from "./Navbar"

function Homepage() {
  return (
    <div className="container">
      <Navbar />
      <div className="row">
        <Navbar />
        <div className="col-lg-8">
          <h1>Welcome to My LMS</h1>
          <p>
            My LMS is an online learning platform that provides a wide range of courses on various topics, taught by experts in their fields. Whether you're looking to improve your skills for work, explore a new hobby, or simply learn something new, My LMS has the courses you need to succeed.
          </p>
          <p>
            Our platform is designed to be easy to use, with intuitive navigation and a clean, modern interface. You can browse our course catalog, enroll in courses, track your progress, and connect with other learners from around the world.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
        <div className="col-lg-4">
          <img src="https://picsum.photos/400/300" alt="placeholder" />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
