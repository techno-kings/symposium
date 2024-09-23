import React from 'react';
import './HomePage.css'; // You can style this file as needed
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/events');
  }

  return (
    <div className="container h-100 py-5 color" style={{ maxHeight: 1000 }}>
      {/* Header section */}
      <div className='d-flex flex-row pt-5'>
        <img src='/collegelogo.png' className='responsive-image' alt="College icon" />
        <h1 className='text-center title pt-3'>KINGS ENGINEERING COLLEGE</h1>
        <img src='/logo.png' className='responsive-image' alt="Techno icon" />
      </div>

      {/* Event details section */}
      <div className='text-center pb-5 color'>
        <h3 className='py-2'>(AN AUTONOMOUS INSTITUTION)</h3>
        <h5 className='py-3'>DEPARTMENT OF ELECTRONICS AND COMMUNICATION ENGINEERING</h5>
        <h3 className='py-3'>TECHNOKINGS 2K24</h3>
        <h5 className='py-3'>NATIONAL LEVEL TECHNICAL SYMPOSIUM </h5>
        <h4 className='py-3'>18-OCT 2024</h4>
      </div>

      {/* Description section (the code you provided earlier) */}
      

      {/* Call to action section */}
      <div className='text-center color pb-10'>
        <p className='pb-3'>Join us for an exciting day of events, competitions, and learning!</p>
        <button onClick={handleClick} className="btn btn-primary">
          View Event Details
        </button>
      </div>
      <div className='vision'>
      <h3 className='text-center pt-5'>OUR VISION</h3>
      <div className="description pt-10 ">
      
        <div className='pt-5 dis-logo'>
          <img src="./logo.png"  alt="logo" className='di-logo'/>
        </div>
        <div className="dis-content text-center">
          <strong className='pb-5'>About <span className="storm">TECHNOKINGS 2K24</span></strong>
          <p>Unleashing Innovation and Sparking Minds</p>
          <p>Welcome to Technokings 2k24, the flagship symposium organized by the Electronics and Communication Engineering (ECE) department! This year, we’re gathering the sharpest minds and the most groundbreaking ideas for a series of intense technical challenges designed to push your skills and ignite your passion for engineering.</p>
          <p>With thought-provoking presentations and hands-on problem-solving tasks, Technokings 2k24 guarantees a thrilling and interactive experience. Don’t miss out on the opportunity to showcase your talent and compete for exciting rewards. Join us for a day of exploration, competition, and a celebration of all things ECE!</p>
          <p><strong>DEPARTMENT OF ELECTRONICS AND COMMUNICATION ENGINEERING</strong></p>
        </div>
      </div>
      </div>
      
    </div>
  );
}

export default HomePage;
