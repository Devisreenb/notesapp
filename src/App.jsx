import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './App.css';

function App() {
  return (
    <div>
      <header>
        <h1>Your Name</h1>
        <p>Web Developer & Designer</p>
      </header>
      <section id="about">
        <h2>About Me</h2>
        <p>
          I am a passionate web developer with experience in building modern web
          applications. I specialize in React, JavaScript, and responsive design.
        </p>
      </section>
      <section id="projects">
        <h2>Projects</h2>
        <div className="project-card">
          <h3>Project Title 1</h3>
          <p>Brief description of the project.</p>
        </div>
        <div className="project-card">
          <h3>Project Title 2</h3>
          <p>Brief description of the project.</p>
        </div>
        {/* Add more projects as needed */}
      </section>
      <footer>
        <p>Contact: your.email@example.com</p>
      </footer>
    </div>
  );
}

export default App;
