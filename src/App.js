import React from 'react';
import Chatbot from './Chatbot';
import './App.css';
import ContactInfo from './ContactInfo';
import AboutMe from './AboutMe';

function App() {
  return (
    <div className="app-container">
      <header className="hero-section">
        <h1>Nemanja Pešić</h1>
        <p>Full-stack developer & AI enthusiast</p>
      </header>

      <section className="about-me">
        <img src="profile.png" alt="Nemanja Pesic profile" className="profile-pic" />
        <div className="bio">
          <h2>About me</h2>
          <AboutMe />
          </div>
      </section>

      <section className="projects">
        <h2>Projects</h2>
          <div className="projects-grid">
          <div className="project-card">
          <h3>Chatbot AI</h3>
          <p>An AI-powered chatbot that answers questions about me</p>
      </div>
    <div className="project-card">
      <h3>LegalCase Manager</h3>
      <p>An app for law firms to manage cases and assign tasks within the team.</p>
    </div>
    <div className="project-card">
      <h3>Fleet Tracker</h3>
      <p>An app where truck drivers can search for routes and dispatchers can post available loads.</p>
    </div>
    <div className="project-card">
  <h3>Military GIS System</h3>
  <p>A geographic information system designed for the Serbian Army to support strategic planning and operations.</p>
</div>

    <div className="project-card">
  <h3>Naval Radar Defense System</h3>
  <p>An advanced radar system designed for a foreign navy to monitor maritime activity and ensure coastal security.</p>
</div>
    <div className="project-card">
  <h3>Industrial Machine Monitoring System</h3>
  <p>A system to monitor and analyze machine performance in manufacturing plants for improved efficiency and maintenance.</p>
</div>
  </div>
      </section>
      <section>
        <ContactInfo />
      </section>


      {/* Chatbot fiksiran u donjem desnom uglu */}
      <Chatbot />
    </div>
  );
}

export default App;
