import './App.css';
import { useState } from 'react';

function App() {

  const [showProjects, setShowProjects] = useState(false);

  return (
    <div>

      {/* Navbar */}
      <nav className="nav">
        <h2>Abhishek</h2>
        <div>
          <span onClick={() => setShowProjects(false)}>Home</span>
          <span onClick={() => setShowProjects(true)}>Projects</span>
          <span onClick={() => window.open("https://www.linkedin.com/in/abhishek-sai-guntuku-712523297/", "_blank")}>
            Contact
          </span>
        </div>
      </nav>

      {/* Hero Section */}
      {!showProjects && (
        <section className="hero">
          <h1>
            Hi, I'm <span style={{color:"#38bdf8"}}>Abhishek</span> 👋
          </h1>
          <p>Frontend Developer | AI & IoT Builder</p>
          <button onClick={() => setShowProjects(true)}>
            View Projects
          </button>
        </section>
      )}

      {/* Projects Section */}
      {showProjects && (
        <section className="projects">
          <h2>My Projects</h2>

          <div className="card">
            <h3>AURORA</h3>
            <p>Smart Translator Device with IoT + Web UI</p>
            <a href="https://abhi897shek.github.io/AURORA/" target="_blank" rel="noreferrer">Live Demo</a>
          </div>

          <div className="card">
            <h3>WaveCast</h3>
            <p>Offline file sharing system using WLAN</p>
            <a href="https://github.com/abhisheksaiguntuku/wave-cast" target="_blank" rel="noreferrer">GitHub</a>
            <br />
            <a href="https://www.linkedin.com/posts/abhishek-sai-guntuku-712523297_python-flask-networking-activity-7429943739214807041-b7t3" target="_blank" rel="noreferrer">
              LinkedIn Demo
            </a>
          </div>

          <div className="card">
            <h3>StudentHelperAI</h3>
            <p>Chrome extension for automation</p>
            <a href="https://github.com/abhisheksaiguntuku/StudentHelperAI" target="_blank" rel="noreferrer">GitHub</a>
          </div>

        </section>
      )}

      {/* Footer */}
      <footer className="contact">
        <h3>Connect with me</h3>
        <a href="https://github.com/abhisheksaiguntuku" target="_blank" rel="noreferrer">GitHub</a>
        <br />
        <a href="https://www.linkedin.com/in/abhishek-sai-guntuku-712523297/" target="_blank" rel="noreferrer">LinkedIn</a>
      </footer>

    </div>
  );
}

export default App;