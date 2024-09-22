import React, { useState } from 'react';
import './EventPage.css';

const events = [
  { id: 1, name: 'Paper Presentation', image: 'paperpresentation.jpg', description: 'Present your research paper and showcase your innovative ideas.' },
  { id: 2, name: 'Circuit Debugging', image: 'event-image.jpg', description: 'Test your skills in debugging circuits and troubleshooting errors.' },
  { id: 3, name: 'Project Expo', image: 'event-image.jpg', description: 'Display your projects and ideas to a panel of experts and audience.' },
  { id: 4, name: 'Tech Quiz', image: 'event-image.jpg', description: 'Compete in a challenging tech quiz covering various topics in engineering.' },
  { id: 5, name: 'Line Follower', image: 'event-image.jpg', description: 'Show your skills in building robots that can follow lines autonomously.' },
  { id: 6, name: 'Robo Soccer', image: 'event-image.jpg', description: 'Compete with your robots in a game of soccer and showcase your robotics skills.' },
  { id: 7, name: 'Minute to Win', image: 'event-image.jpg', description: 'Participate in fun challenges that test your quick thinking and reflexes.' },
  { id: 8, name: 'Chess', image: 'event-image.jpg', description: 'Battle it out in a game of strategy and intellect with chess.' },
  { id: 9, name: 'Detective', image: 'event-image.jpg', description: 'Solve mysteries and showcase your detective skills in this fun event.' },
  { id: 10, name: 'Box Cricket', image: 'event-image.jpg', description: 'Show your cricketing talent in this indoor version of the popular sport.' }
];


function EventPage() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const handleClick = ()=>{
    window.open('https://forms.gle/Fu5cjF8mepCfZ3626', '_blank')
  }
  return (
    <div className="event-page">
      <h1 className='text-white py-4'>Events</h1>
      <div className="event-cards">
        {events.map((event) => (
          <div key={event.id} className="event-card">
            <img className="event-image" src={require(`./images/${event.image}`)} alt={event.name} />
            <h3 className='py-2'>{event.name}</h3>
            <button className="view-btn" onClick={() => setSelectedEvent(event)}>View</button>
          </div>
        ))}
      </div>

      {selectedEvent && (
        <div className="event-popup">
          <div className="event-popup-content">
            <h2>{selectedEvent.name}</h2>
            <p>{selectedEvent.description}</p>
            <button className="register-btn"  onClick={handleClick} >Register</button>
            <button className="close-btn" onClick={() => setSelectedEvent(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default EventPage;
