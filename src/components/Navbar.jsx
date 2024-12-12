import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-brand">
                <Link to="/">React Tutorial</Link>
            </div>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/tutorials">Tutorials</Link></li>
                <li><Link to="/lessons/basic-react">Basic React</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
