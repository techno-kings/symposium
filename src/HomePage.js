import React from 'react';
import './HomePage.css'; // You can style this file as needed
import { useNavigate } from "react-router-dom";


function HomePage() {
  const navigate = useNavigate();

  const handleClick = () =>{
    navigate('/events');
  }
  return (
    <div className="container h-100 py-5 color" style={{maxHeight:1000}}>
    <div className='d-flex flex-row pt-5'>
      <img src='https://www.kingsedu.ac.in/assets/images/logo-footer.webp' className='responsive-image' alt="College icon"/>
      <h1 className='text-center title'>DEPARTMENT OF ELECTRONICS AND COMMUNICATION ENGINEERING</h1>
      <img src='/logo.png' className='responsive-image' alt="Techno icon"/>
    </div>
    <div className='text-center py-5 color '>
    <h3>PROUDLY PRESENTS</h3>
        <h2>NATIONAL LEVEL TECHNICAL SYMPOSIUM </h2>
        <h2>TECHNOKINGS 2K24</h2>
    </div>
    <div className='text-center color pb-5'>
      <p>Join us for an exciting day of events, competitions, and learning!</p>
        <button onClick={handleClick} className="btn btn-primary">
          View Event Details
        </button>
    </div>
      
    </div>
  );
}

export default HomePage;