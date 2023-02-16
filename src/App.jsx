import { useRef } from 'react';
import Navbar from './components/navbar.jsx';
import About from './components/about.jsx';
import Projects from './components/projects.jsx';
import Toolkit from './components/toolkit.jsx';
import ContactMe from './components/contact_me.jsx';
import './App.css';

function App() {
  const aboutRef = useRef(null)
  const projectsRef = useRef(null)
  const toolsRef = useRef(null)
  const contactRef = useRef(null)

  return (
    <div className="app">
      <Navbar link1={aboutRef} link2={projectsRef} link3={toolsRef} link4={contactRef}/>
      <About ref={aboutRef} />
      <Projects ref={projectsRef} />
      <Toolkit ref={toolsRef} />
      <ContactMe ref={contactRef} />
    </div>
  );
}

export default App;
