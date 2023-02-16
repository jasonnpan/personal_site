import { forwardRef } from "react";
import './toolkit.css';

const Toolkit = forwardRef((props, ref) => {
    return (
      <div ref={ref} className="toolkit">
        <div className="header">Toolkit</div>
        <div className="skills__container">
            <div className="skill__block" id="skill1" ></div>
            <div className="skill__block" id="skill2" ></div>
            <div className="skill__block" id="skill3" ></div>
            <div className="skill__block" id="skill4" ></div>
            <div className="skill__block" id="skill5" ></div>
            <div className="skill__block" id="skill6" ></div>
            <div className="skill__block" id="skill7" ></div>
            <div className="skill__block" id="skill8" ></div>
            <div className="skill__block" id="skill9" ></div>
        </div>
      </div>
  );
});
  
  export default Toolkit;