import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Tutorials.css';

function Tutorials() {
  const tutorials = [
    {
      id: 1,
      title: 'Getting Started with React',
      description: 'Learn the fundamentals of React and set up your first project',
      level: 'Beginner',
      duration: '15 mins',
      path: '/lessons/basic-react'  // Add path for routing
    },
    {
      id: 2,
      title: 'Components & Props',
      description: 'Understanding React components and how to use props',
      level: 'Beginner',
      duration: '20 mins',
      path: '/lessons/components'  // We'll create this lesson next
    }
  ];

  return (
    <div className="tutorials">
      <h1>React Tutorials</h1>
      <div className="tutorial-grid">
        {tutorials.map(tutorial => (
          <Link 
            to={tutorial.path} 
            key={tutorial.id} 
            className="tutorial-card-link"
          >
            <div className="tutorial-card">
              <h2>{tutorial.title}</h2>
              <p>{tutorial.description}</p>
              <div className="tutorial-meta">
                <span className="level">{tutorial.level}</span>
                <span className="duration">{tutorial.duration}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Tutorials;