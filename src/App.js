import './App.css';
import profilePicture from "./profile-picture.png";
import babyPicture from './baby-picture.png';
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
import GoogleCloud from './google-cloud-platform.png';
import DodgerAlert from './dodger-alert.png';

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
          <button className="contact-me">Contact Me!</button>
          <img className="linkedin" src={LinkedIn} />
          <img className="github" src={Github} />
          <img className="resume" src={Resume} />
        
            
          <p className="description">C.S graduate from UCLA with industry experience in Full-Stack development</p>
          <FadeIn delay={100}>
            <div className="blue-circle"></div>
          </FadeIn>
          <FadeIn delay={2000}>
          <img className="profile-picture" src={profilePicture}/>
          </FadeIn>
        </div>
      
        <div className="about-me-w" >
          <h1 className="about-me" data-aos="fade-up">About Me</h1>
            <img className="baby-picture" src={babyPicture} data-aos="fade-up" />
            <p className="about-me-paragraph" data-aos="fade-up">Ever since I was a kid, I’ve always loved to learn, especially with strategy games. In elementary school I loved chess and in high school, I fell in love with the game of poker. I’ve always loved the process of learning about mistakes and improving.  My love of learning led me to the world of Computer Science and I haven’t looked back since. </p>
        </div>      
      
      
      <div id="experience">
        <h1 className="work-experience" data-aos="fade-up">Work Experience</h1>
          <div className="flex-grid f-pics" data-aos="fade-up">
            <div className="flex-item-1"><img className="textpert" src={Textpert}/></div>
            <div className="flex-item-2"><img className="ucla" src={Ucla} /></div>
          </div>
          <div className="flex-grid" >
            <div className="flex-item-1"><p className="center-text company-name">Textpert</p></div>
            <div className="flex-item-2"><p className="center-text company-name">UCLA Social Sciences Computing</p></div>
          </div>
          <div className="flex-grid">
            <div className="flex-item-1"><p className="center-text">SWE Intern</p></div>
            <div className="flex-item-2"><p className="center-text">Student Programmer</p></div>
          </div>
          <div className="flex-grid">
            <div className="flex-item-1"><p className="center-text">June 2018 - August 2018</p></div>
            <div className="flex-item-2"><p className="center-text">Septermber 2018 - January 2019</p></div>
          </div>
          <div>
            <div className="flex-grid flex-grid-2" data-aos="fade-up">
              <div className="flex-item-1"><img className="wework" src={WeWork} /></div>
              <div className="flex-item-2"><img className="bluebeam" src={Bluebeam}/></div>
            </div>
            <div className="flex-grid" >
              <div className="flex-item-1"><p className="center-text company-name">WeWork</p></div>
              <div className="flex-item-2"><p className="center-text company-name">Bluebeam</p></div>
            </div>
            <div className="flex-grid">
              <div className="flex-item-1"><p className="center-text">SWE Intern</p></div>
              <div className="flex-item-2"><p className="center-text">SWE Intern</p></div>
            </div>
            <div className="flex-grid">
              <div className="flex-item-1"><p className="center-text">June 2019 - August 2019</p></div>
              <div className="flex-item-2"><p className="center-text">June 2020 - September 2020</p></div>
            </div>
          </div>
        
      </div>

      <div className="projects">
        <h1 className="work-experience" data-aos="fade-up">Projects</h1>
        <div className="flex-grid" data-aos="fade-up">
            <div className="flex-item-1"><img className="google-cloud-platform" src={GoogleCloud} data-aos="fade-right"/></div>
            <div className="flex-item-2"><img className="dodger-alert" src={DodgerAlert} data-aos="fade-left" /></div>
          </div>
      </div>
    </div>
  );
}

export default App;
