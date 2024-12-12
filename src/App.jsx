import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Tutorials from './pages/Tutorials';
import BasicReact from './pages/lessons/BasicReact';
import ComponentsAndProps from './pages/lessons/ComponentsAndProps.jsx';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tutorials" element={<Tutorials />} />
            <Route path="/lessons/basic-react" element={<BasicReact />} />
            <Route path="/lessons/components" element={<ComponentsAndProps />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;