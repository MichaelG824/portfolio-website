import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Intro from './components/Intro.js';
import AboutMe from './components/AboutMe.js';
import Experience from './components/Experience.js';

const App = () => {
  useEffect(() => {
    Aos.init({duration: 2000, once: true});
  }, []);
  return (
    <div className="App">
      <Intro />
      <AboutMe />
      <Experience />
    </div>
  );
}

export default App;
