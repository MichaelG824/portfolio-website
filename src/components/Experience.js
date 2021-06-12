import Textpert from '../assets/textpert.png';
import Ucla from '../assets/ucla.png';
import WeWork from '../assets/wework.jpeg';
import Bluebeam from '../assets/Bluebeam.png';
import '../styles/Experience.css';

const Experience = () => {
  return (
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
  );
}

export default Experience;
