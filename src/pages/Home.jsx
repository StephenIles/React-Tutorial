import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
    return (
        <div className="home">
            <section className="hero">
                <h1>Learn React</h1>
                <p>Master React Development with hands-on tutorials</p>
                <div className="cta-buttons">
                    <Link to="/tutorials" className="cta-button">
                        Browse All Tutorials
                    </Link>
                    <Link to="/lessons/basic-react" className="cta-button secondary">
                        Start with Basics
                    </Link>
                </div>
            </section>

            <section className="features">
                <h2>Why Learn With Us?</h2>
                <div className="feature-grid">
                    <div className="feature-card">
                        <h3>🚀 Step by Step</h3>
                        <p>Learn React from the basics to advanced topics</p>
                    </div>
                    <div className="feature-card">
                        <h3>💻 Practice</h3>
                        <p>Build real-world projects to reinforce your learning</p>
                    </div>
                    <div className="feature-card">
                    <h3>🎯 Projects</h3>
                    <p>Real-world project tutorials</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;