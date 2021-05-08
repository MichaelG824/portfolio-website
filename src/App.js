import './App.css';
import profilePicture from "./profile-picture.png";
import babyPicture from './baby-picture.jpg';
import FadeIn from 'react-fade-in';
import Typical from 'react-typical';
import LinkedIn from './linkedin.png';
import Github from './github.png';
import Resume from './resume.png';
function App() {
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
      <FadeIn delay={500}>
        <div id="about-me">
          <h1 className="about-me">About Me</h1>
          <img className="baby-picture" src={babyPicture} />
          <p className="about-me-paragraph">Ever since I was a kid, I’ve always loved to learn, especially with strategy games. In elementary school I loved chess and in high school, I fell in love with the game of poker. I’ve always loved the process of learning about mistakes and improving.  My love of learning led me to the world of Computer Science and I haven’t looked back since. </p>
        </div>
      </FadeIn>
      
      <div></div>

    </div>
  );
}

export default App;
