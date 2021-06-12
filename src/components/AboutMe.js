import babyPicture from '../assets/baby-picture.png';
import '../styles/AboutMe.css';

const AboutMe = () => {
  return (
    <div className="about-me-w" >
        <h1 className="about-me" data-aos="fade-up">About Me</h1>
        <img className="baby-picture" src={babyPicture} data-aos="fade-up" />
        <p className="about-me-paragraph" data-aos="fade-up">Ever since I was a kid, I’ve always loved to learn, especially with strategy games. In elementary school I loved chess and in high school, I fell in love with the game of poker. I’ve always loved the process of learning about mistakes and improving.  My love of learning led me to the world of Computer Science and I haven’t looked back since. </p>
    </div>      
  );
}

export default AboutMe;
