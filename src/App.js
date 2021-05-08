import './App.css';
import profilePicture from "./profile-picture.png";
import babyPicture from './baby-picture.jpg';
import FadeIn from 'react-fade-in';
import Typical from 'react-typical';
import LinkedIn from './linkedin.png';
import Github from './github.png';
import Resume from './resume.png';
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Textpert from './textpert.png';
import Ucla from './ucla.png';
import WeWork from './wework.jpeg';
import Bluebeam from './Bluebeam.png';
function App() {

  useEffect(() => {
    Aos.init({duration: 2000 });
  }, []);
  return (
    <div className="App">
      <div className="intro">
        <div className="name">Michael Gee.</div>
        <p className="multiple-passions"><strong>I am</strong>
        <Typical
          className="typed-responses"
          loop={Infinity}
          wrapper='b'
          steps={[
            2000,
            ' a Software Engineer',
            2000,
            ' a Chess Enthusiast',
            2000,
            ' a Poker Fanatic',
            2000,
            ' a BJJ Junkie',
            2000
          ]}
        ></Typical>
        </p>
              
        <p className="description">C.S graduate from UCLA with industry experience in Full-Stack development</p>
        <FadeIn delay={100}>
          <div className="blue-circle"></div>
        </FadeIn>
        <FadeIn delay={2000}>
        <img className="profile-picture" src={profilePicture}/>
        </FadeIn>
        
        <button className="contact-me">Contact Me!</button>
        <img className="linkedin" src={LinkedIn} />
        <img className="github" src={Github} />
        <img className="resume" src={Resume} />
      </div>
      <div className="about-me-w" >
        <h1 className="about-me" data-aos="fade-up">About Me</h1>
        <img className="baby-picture" src={babyPicture} data-aos="fade-up" />
        <p className="about-me-paragraph" data-aos="fade-up">Ever since I was a kid, I’ve always loved to learn, especially with strategy games. In elementary school I loved chess and in high school, I fell in love with the game of poker. I’ve always loved the process of learning about mistakes and improving.  My love of learning led me to the world of Computer Science and I haven’t looked back since. </p>
      </div>
      
      
      <div id="experience">
        <h1 className="work-experience" data-aos="fade-up">Work Experience</h1>
        <p className="textpert-company-name">Textpert SWE Intern</p>
        <img className="textpert" src={Textpert} data-aos="fade-up" />
        <img className="ucla" src={Ucla} data-aos="fade-up"/>
        <img className="wework" src={WeWork} data-aos="fade-up"/>
        <img className="bluebeam" src={Bluebeam} data-aos="fade-up" />
      </div>

    </div>
  );
}

export default App;
