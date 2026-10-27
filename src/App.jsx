import Bgimg from './Bgimg';
import Nav from './Nav';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Achievements from './Achievements';
import Contact from './Contact';
import Footer from './Footer'
import { useEffect } from 'react';
function App() {


  return (
    <>
      <Bgimg />
      <div className=" overflow-x-clip relative z-10 min-h-screen text-txt font-mono">
          <Nav />
          <Home />
          <About />
          <Skills />
          <Projects />
          <Achievements />
          <Contact />
          <Footer />
      </div>
      </>
  );
}

export default App;