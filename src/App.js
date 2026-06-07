import './App.css';
import { useState } from 'react';
import { 
  Terminal, 
  Code, 
  Cpu, 
  Globe, 
  ExternalLink, 
  Sparkles, 
  Server, 
  GraduationCap, 
  Mail
} from 'lucide-react';

const GithubIcon = ({ size = 20, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 20, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);


function App() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeConsoleTab, setActiveConsoleTab] = useState('about');
  
  // Projects data
  const projects = [
    {
      id: 'virtual-builder',
      title: 'Virtual Builder',
      subtitle: 'AI-Powered Architectural Design Tool',
      description: 'A responsive AI application generating modern, highly functional interior room layouts and minimalist architectural concepts with instant visual renderings.',
      category: 'flagship',
      tech: ['React', 'CSS', 'AI APIs', 'Vercel'],
      link: 'https://virtual-builder.vercel.app', // placeholder or real if exists
      github: 'https://github.com/abhisheksaiguntuku/virtual-builder',
      flagship: true
    },
    {
      id: 'nextframe-ai',
      title: 'NextFrame AI',
      subtitle: 'Creator Insights Platform',
      description: 'Full-stack platform generating actionable insights using advanced Natural Language Processing. Built with a Flask backend, React frontend, and Groq/OpenAI APIs.',
      category: 'flagship',
      tech: ['Python', 'Flask', 'React', 'Groq', 'OpenAI', 'Vercel', 'Render'],
      link: 'https://nextframe-ai.vercel.app',
      github: 'https://github.com/abhisheksaiguntuku/nextframe-ai',
      flagship: true
    },
    {
      id: 'student-helper',
      title: 'Student Helper AI',
      subtitle: 'Task Automation Chrome Extension',
      description: 'A modern Chrome Extension that automates web activities and provides AI-driven explanations for students. Simplifies learning pipelines and automates routine queries.',
      category: 'utility',
      tech: ['JavaScript', 'Chrome Extension API', 'HTML5', 'CSS3'],
      link: 'https://github.com/abhisheksaiguntuku/StudentHelperAI',
      github: 'https://github.com/abhisheksaiguntuku/StudentHelperAI'
    },
    {
      id: 'aurora',
      title: 'AURORA Translator',
      subtitle: 'Smart Hearing Assistance Device',
      description: 'Raspberry Pi-powered physical translator & hearing assistant featuring speech-to-text, real-time translation, OLED display, and localized IoT controls.',
      category: 'iot',
      tech: ['Raspberry Pi', 'Python', 'Embedded Systems', 'IoT', 'OLED API'],
      link: 'https://abhi897shek.github.io/AURORA/',
      github: 'https://github.com/abhisheksaiguntuku/AURORA'
    },
    {
      id: 'wavecast',
      title: 'WaveCast GPS',
      subtitle: 'Offline GPS Tracking & Network System',
      description: 'Real-time location broadcasting and offline messaging platform utilizing local WLAN connections, GNSS sensors, and a lightweight web-based interface.',
      category: 'iot',
      tech: ['Python', 'Flask', 'GPS/GNSS', 'Networking', 'WLAN'],
      link: 'https://www.linkedin.com/posts/abhishek-sai-guntuku-712523297_python-flask-networking-activity-7429943739214807041-b7t3',
      github: 'https://github.com/abhisheksaiguntuku/wave-cast'
    },
    {
      id: 'facemask',
      title: 'Face Mask Detection',
      subtitle: 'Real-Time Computer Vision Pipeline',
      description: 'Highly responsive computer vision system using a custom deep learning classifier to detect proper mask-wearing in real-time camera streams.',
      category: 'ml',
      tech: ['Python', 'OpenCV', 'TensorFlow', 'Keras'],
      link: 'https://github.com/abhisheksaiguntuku/Face-Mask-Detection',
      github: 'https://github.com/abhisheksaiguntuku'
    },
    {
      id: 'diabetes',
      title: 'Diabetes Predictor',
      subtitle: 'ML Diagnostics System',
      description: 'A predictive medical model using classification algorithms (Logistic Regression) to analyze demographic and clinical metrics for diabetes risk.',
      category: 'ml',
      tech: ['Python', 'Pandas', 'NumPy', 'Scikit-Learn'],
      link: 'https://github.com/abhisheksaiguntuku',
      github: 'https://github.com/abhisheksaiguntuku'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter || (activeFilter === 'flagship' && p.flagship));

  return (
    <div className="portfolio-app">
      {/* Background Decor */}
      <div className="radial-glow-1"></div>
      <div className="radial-glow-2"></div>

      {/* Header / Navigation */}
      <header className="navbar">
        <div className="logo-container">
          <Terminal size={20} className="logo-icon animate-pulse" />
          <span className="logo-text">abhishek.dev</span>
        </div>
        <nav className="nav-links">
          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact" className="contact-btn">Get In Touch</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <div className="hero-content">
          <div className="badge-glow">
            <Sparkles size={14} className="badge-icon" />
            <span>Open for Internships & Collaborations</span>
          </div>
          <h1 className="hero-title">
            Hi, I'm <span className="highlight-gradient">Abhishek Sai</span>
          </h1>
          <h2 className="hero-subtitle">Building Intelligent Software & Connected Devices</h2>
          <p className="hero-description">
            Computer Science Student (Class of 2027) designing premium full-stack web platforms, 
            smart IoT applications, and computer vision models that solve real-world problems.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn-primary">View Featured Projects</a>
            <a href="#contact" className="btn-secondary">Let's Connect</a>
          </div>
        </div>
        
        {/* Floating Abstract Terminal Panel */}
        <div className="hero-visual">
          <div className="terminal-window-mockup">
            <div className="terminal-header">
              <span className="dot dot-red"></span>
              <span className="dot dot-yellow"></span>
              <span className="dot dot-green"></span>
              <span className="terminal-title">bash - abhishek@macbook</span>
            </div>
            <div className="terminal-body">
              <p className="line-prefix"><span className="text-purple">~</span> $ cat current_focus.js</p>
              <div className="code-snippet">
                <p><span className="text-blue">const</span> developer = &#123;</p>
                <p className="indent-1"><span className="text-orange">name</span>: <span className="text-green">'G. Abhishek Sai'</span>,</p>
                <p className="indent-1"><span className="text-orange">role</span>: <span className="text-green">'Full Stack & AI Engineer'</span>,</p>
                <p className="indent-1"><span className="text-orange">college</span>: <span className="text-green">'Lendi Institute (CSE 2027)'</span>,</p>
                <p className="indent-1"><span className="text-orange">stack</span>: [<span className="text-cyan">'React'</span>, <span className="text-cyan">'Flask'</span>, <span className="text-cyan">'TensorFlow'</span>, <span className="text-cyan">'IoT'</span>],</p>
                <p className="indent-1"><span className="text-orange">solving</span>: <span className="text-green">'Complex architectural layout synthesis'</span></p>
                <p>&#125;;</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About & Code Console Section */}
      <section id="about" className="about-section">
        <div className="section-header">
          <span className="section-tag">01. Identity</span>
          <h2>Who Am I?</h2>
        </div>
        
        <div className="about-console-grid">
          <div className="about-text-content">
            <p>
              I am a passionate **Computer Science Engineering Student** at **Lendi Institute of Engineering and Technology** (Graduating 2027) with a deep-rooted interest in building the bridge between intelligent software and physical hardware. 
            </p>
            <p>
              Whether it is orchestrating scalable React applications, optimizing Natural Language Processing models on the cloud, or programming microcontrollers with GPIO protocols, I treat coding as a form of craftsmanship. 
            </p>
            <div className="stats-mini-grid">
              <div className="stat-card">
                <h3>Class of</h3>
                <p>2027</p>
              </div>
              <div className="stat-card">
                <h3>Tech Focus</h3>
                <p>Full-Stack / AI / IoT</p>
              </div>
            </div>
          </div>

          {/* Interactive Dev Console */}
          <div className="console-wrapper">
            <div className="console-tabs">
              <button 
                className={`console-tab ${activeConsoleTab === 'about' ? 'active' : ''}`}
                onClick={() => setActiveConsoleTab('about')}
              >
                <Code size={14} /> bio.json
              </button>
              <button 
                className={`console-tab ${activeConsoleTab === 'interests' ? 'active' : ''}`}
                onClick={() => setActiveConsoleTab('interests')}
              >
                <Cpu size={14} /> interests.json
              </button>
              <button 
                className={`console-tab ${activeConsoleTab === 'education' ? 'active' : ''}`}
                onClick={() => setActiveConsoleTab('education')}
              >
                <GraduationCap size={14} /> education.json
              </button>
            </div>
            <div className="console-content">
              {activeConsoleTab === 'about' && (
                <pre>
                  <code>
{`{
  "name": "Guntuku Abhishek Sai",
  "location": "Vizag/AP, India",
  "passion": "Building AI interfaces & smart hardware systems",
  "current_projects": [
    "Virtual Builder (AI Layout Synthesizer)",
    "NextFrame AI (Creator Analytics Engine)"
  ],
  "mission": "To create state-of-the-art experiences."
}`}
                  </code>
                </pre>
              )}
              {activeConsoleTab === 'interests' && (
                <pre>
                  <code>
{`{
  "domains": [
    "Computer Vision (real-time stream detection)",
    "IoT Device Prototyping (Raspberry Pi/Arduino)",
    "API Routing & Stream Optimization (Flask/FastAPI)",
    "Micro-interactions & Aesthetics in Web Architecture"
  ],
  "hobbies": [
    "3D modeling in Blender",
    "Hardware tinkering & sensor calibration"
  ]
}`}
                  </code>
                </pre>
              )}
              {activeConsoleTab === 'education' && (
                <pre>
                  <code>
{`{
  "degree": "B.Tech in Computer Science Engineering",
  "institution": "Lendi Institute of Engineering and Technology",
  "tenure": "2023 - 2027",
  "key_courses": [
    "Data Structures & Algorithms",
    "Database Management Systems",
    "Object-Oriented Programming",
    "Computer Networks"
  ]
}`}
                  </code>
                </pre>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Grid Section */}
      <section id="skills" className="skills-section">
        <div className="section-header">
          <span className="section-tag">02. Stack</span>
          <h2>Technical Toolbox</h2>
        </div>

        <div className="skills-grid">
          {/* Frontend */}
          <div className="skill-category-card">
            <div className="skill-category-header">
              <Globe className="text-sky" size={24} />
              <h3>Frontend Architecture</h3>
            </div>
            <div className="skill-badges">
              <span>React</span>
              <span>Angular</span>
              <span>JavaScript (ES6+)</span>
              <span>HTML5</span>
              <span>CSS3</span>
              <span>Responsive Web Design</span>
            </div>
          </div>

          {/* Backend & DB */}
          <div className="skill-category-card">
            <div className="skill-category-header">
              <Server className="text-purple" size={24} />
              <h3>Backend & Databases</h3>
            </div>
            <div className="skill-badges">
              <span>Python</span>
              <span>Flask</span>
              <span>Node.js</span>
              <span>MySQL</span>
              <span>SQLite</span>
              <span>REST APIs</span>
            </div>
          </div>

          {/* AI / ML */}
          <div className="skill-category-card">
            <div className="skill-category-header">
              <Sparkles className="text-emerald" size={24} />
              <h3>AI & Deep Learning</h3>
            </div>
            <div className="skill-badges">
              <span>OpenCV</span>
              <span>TensorFlow</span>
              <span>Keras</span>
              <span>NumPy & Pandas</span>
              <span>Scikit-Learn</span>
              <span>Predictive Diagnostics</span>
            </div>
          </div>

          {/* IoT / Embedded */}
          <div className="skill-category-card">
            <div className="skill-category-header">
              <Cpu className="text-orange" size={24} />
              <h3>IoT & Firmware</h3>
            </div>
            <div className="skill-badges">
              <span>Raspberry Pi</span>
              <span>Arduino</span>
              <span>GPIO Programming</span>
              <span>I2C Communication</span>
              <span>Sensors Integration</span>
              <span>Blender 3D</span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="section-header">
          <span className="section-tag">03. Portfolios</span>
          <h2>Engineered Projects</h2>
        </div>

        {/* Category Filters */}
        <div className="project-filters">
          <button 
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All Projects
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'flagship' ? 'active' : ''}`}
            onClick={() => setActiveFilter('flagship')}
          >
            Flagships (AI/Web)
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'iot' ? 'active' : ''}`}
            onClick={() => setActiveFilter('iot')}
          >
            IoT & Embedded
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'ml' ? 'active' : ''}`}
            onClick={() => setActiveFilter('ml')}
          >
            Machine Learning
          </button>
        </div>

        {/* Project Showcase Cards */}
        <div className="project-cards-container">
          {filteredProjects.map((project) => (
            <div key={project.id} className={`project-card ${project.flagship ? 'flagship-card' : ''}`}>
              {project.flagship && (
                <div className="flagship-badge">
                  <Sparkles size={12} /> Flagship
                </div>
              )}
              <div className="project-card-header">
                <h3>{project.title}</h3>
                <span className="project-subtitle">{project.subtitle}</span>
              </div>
              <p className="project-description">{project.description}</p>
              
              <div className="project-tech-pills">
                {project.tech.map((t) => (
                  <span key={t} className="tech-pill">{t}</span>
                ))}
              </div>

              <div className="project-actions">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-action-link"
                >
                  <GithubIcon size={16} /> Code
                </a>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-action-link primary-action"
                >
                  <ExternalLink size={16} /> Launch Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="contact-card-glass">
          <h2>Let's Craft Something Together</h2>
          <p className="contact-subtitle">
            I'm always seeking high-impact internship roles, collaborative open-source opportunities, or hardware-tinkering partnerships. 
          </p>

          <div className="contact-details-row">
            <a 
              href="mailto:abhisheksaiguntuku@gmail.com" 
              className="contact-detail-item"
            >
              <Mail size={20} className="icon-glow-purple" />
              <span>abhisheksaiguntuku@gmail.com</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/abhishek-sai-guntuku-712523297/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-detail-item"
            >
              <LinkedinIcon size={20} className="icon-glow-blue" />
              <span>abhishek-sai-guntuku-712523297</span>
            </a>
          </div>

          <div className="contact-form-dummy">
            <a 
              href="https://www.linkedin.com/in/abhishek-sai-guntuku-712523297/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Connect on LinkedIn <LinkedinIcon size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-bar">
        <p>© {new Date().getFullYear()} Guntuku Abhishek Sai. Built with React & Passion.</p>
        <div className="footer-links">
          <a href="https://github.com/abhisheksaiguntuku" target="_blank" rel="noopener noreferrer">
            <GithubIcon size={18} />
          </a>
          <a href="https://www.linkedin.com/in/abhishek-sai-guntuku-712523297/" target="_blank" rel="noopener noreferrer">
            <LinkedinIcon size={18} />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;