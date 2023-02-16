import { forwardRef } from "react";
import './projects.css';

const Projects = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="projects">
        <div className="header">Projects</div>
        <div className="project__boxes">
        <a href="https://github.com/helmet323/TierList" className="project__pic">
          <div className="box" id="box1"></div>
          </a>
        <a href="https://devpost.com/software/mental-health-kids" className="project__pic">
          <div className="box" id="box2"></div>
          </a>
        <a href="https://play.google.com/store/apps/details?id=com.EcxLStudios.GrappleBallkour&pli=1%22%3E" className="project__pic">
            <div className="box" id="box3"></div>
          </a>
        </div>
        <div className="project__labels">
            <div className="box__label">Overwatch 2 Tierlist Maker</div>
            <div className="box__label">Hip Hip Zoo-Ray</div>
            <div className="box__label">Grapple Ballkour</div>
        </div>
    </div>
  );
});

export default Projects;