import React, { useState } from 'react';
import './EventPage.css';

const events = [
  { id: 1, name: 'Paper Presentation', image: 'paperpresentation.jpg', description: [
    'A team should contain a maximum of two Participants.',
    'Topic can be Multi-disciplinary (Open to all fields of study).',
    'No participants should be a part of more than One Team.',
    'The Competition is open to all Engineering, Diploma, and Arts Colleges.',
    'Time duration will be 8 mins for Presentation, and 2 mins for Queries.'
  ] },
  { id: 2, name: 'Circuit Debugging', image: 'circuit.jpg', description: ['Team should have 2 members.',
    'For every rounds, there will be a elimination of participants based on their scores.', 
    'If you do any fraudulent activites, Your team will be eliminated.',
    'Our team will contact you for the upcoming rounds, if you are not answering or if you are not present in the round, your team will be disqualified. So, Be Punctual.',
    'Everyone should cooperate the event coordinators to finish the rounds on time.' ] },
  { id: 3, name: 'Project Expo', image:'project.jpg', description: ['1. Maximum 2 members in one team.',
    'Project will be under the any categories',
    'The participants must bring their necessary accessories.',
    'The detailed abstract of one page or 100 words should be submitted as a Word Document on or before 13-10-2024(Saturday)',
    'The decision of the judges will be final.'
  ]},
  { id: 4, name: 'Tech Quiz', image: 'techquiz.jpg', description: ['Each team should have 2 members.',
      'There will be 3 rounds.',
      'Shortlisted for the next round based on their performance.'
   ]},
  { id: 5, name: 'Line Follower', image: 'linefollower.jpg', description:[ 'Show your skills in building robots that can follow lines autonomously.' ]},
  { id: 6, name: 'Robo Soccer', image: 'robo.jpg', description: 'Compete with your robots in a game of soccer and showcase your robotics skills.' },
  { id: 7, name: 'Minute to Win', image: 'minute.jpg', description: ['EACH TEAM SHOULD HAVE 2 MEMBERS',
    'THERE WILL BE 6 ROUNDS',
    'THERE WILL BE A ELIMINATION AT EVERY ROUNDS.',
    'THERE IS A TIMING FOR EACH GAMES AND BASED ON TEAMS WHO COMPLETES THE CHALLENGES I INTIME GETS A POINTS.',
    'TEAMS WILL BE SHORTLISTED BASED ON THEIR PERFORMANCE.'
   ]},
  { id: 8, name: 'Back to School', image: 'school.jpg', description: 'Battle it out in a game of strategy and intellect with chess.' },
  { id: 9, name: 'Detective', image: 'detective.jpg', description: 'Solve mysteries and showcase your detective skills in this fun event.' },
  { id: 10, name: 'Box Cricket', image: 'cricket.jpg', description:['Team Members are restricted to 2 per team.',
    'No of over will be based on team members.',
    'One pitch catches in one hand.',
    'Three times Continuously Leaving ball considered as out.',
    'Umpire decision is final, no more arguments.',
    'No runs for Wide.'
  ]  }
];

function EventPage() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleClick = () => {
    window.open('https://forms.gle/Fu5cjF8mepCfZ3626', '_blank');
  };

  return (
    <div className="event-page">
      <h1 className="text-white py-4">Events</h1>
      <div className="event-cards">
        {events.map((event) => (
          <div key={event.id} className="event-card">
            <img className="event-image" src={require(`./images/${event.image}`)} alt={event.name} />
            <h3 className="py-2">{event.name}</h3>
            <button className="view-btn" onClick={() => setSelectedEvent(event)}>View</button>
          </div>
        ))}
      </div>

      {selectedEvent && (
        <div className="event-popup">
          <div className="event-popup-content">
            <h2>{selectedEvent.name}</h2>
            
            {/* Render bullet points if description is an array, otherwise show as text */}
            {Array.isArray(selectedEvent.description) ? (
              <ul>
                {selectedEvent.description.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            ) : (
              <p>{selectedEvent.description}</p>
            )}
            
            <button className="register-btn" onClick={handleClick}>Register</button>
            <button className="close-btn" onClick={() => setSelectedEvent(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default EventPage;
