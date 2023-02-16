import { forwardRef } from "react";
import './about.css';
import Headshot from '../assets/headshot.png';

const About = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="about">
        <div className="description">
            Hello! I'm Jason, a novice web developer currently studying 
            computer science at the University of Waterloo (class of 2027)!
            <br></br>
            <br></br>
            Currently I am experimenting with different web development tools, 
            specifically React! I am passionate about creating meaningful and
            interactive software.
        </div>
        <img src={Headshot} alt="headshot" className="profile__pic" />
    </div>
  );
});

export default About;