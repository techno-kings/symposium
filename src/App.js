import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import HomePage from './HomePage';
import EventPage from './EventPage';
import './App.css'; // Make sure to import the CSS file

function App() {
  return (
    <Router basename='/symposium'>
      <div className="app">
        <video  className="background-video" autoPlay loop muted poster="/bgimg.png">
          <source src="/bgvideo.mp4" type="video/mp4" />
          {/* <img src="/bgimg.png"></img> */}
          {/* Your browser does not support the video tag. */}
        </video>
        
        <Header /> {/* Header stays visible */}
        
        <Routes>
          <Route path="/" exact element={<HomePage />} /> {/* Home page */}
          <Route path="/events" element={<EventPage />} /> {/* Event page */}
        </Routes>

        <Footer /> {/* Footer stays visible */}
      </div>
    </Router>
  );
}

export default App;
