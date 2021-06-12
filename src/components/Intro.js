import '../styles/Intro.css';
import profilePicture from "../assets/profile-picture.png";
import FadeIn from 'react-fade-in';
import Typical from 'react-typical';
import LinkedIn from '../assets/linkedin.png';
import Github from '../assets/github.png';
import Resume from '../assets/resume.png';

const Intro = () => {
  return (
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
  );
}

export default Intro;
