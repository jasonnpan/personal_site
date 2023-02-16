import { React } from "react";
import './navbar.css';
import JasonLogo from "../assets/jason_logo.png";

function Navbar({link1, link2, link3, link4}) {
  return (
    <div className="navbar">
      <div className="navbar__container">
        <div className="navbar__button__container">
          <img src={JasonLogo} alt="jason_logo" className="logo" />
          <div className="name">JASON PAN</div>
          <div onClick={() => link1.current.scrollIntoView({behavior: "smooth"})}
               className="nav__button">About</div>
          <div onClick={() => link2.current.scrollIntoView({behavior: "smooth"})}
               className="nav__button">Projects</div>
          <div onClick={() => link3.current.scrollIntoView({behavior: "smooth"})}
               className="nav__button">Toolkit</div>
          <div onClick={() => link4.current.scrollIntoView({behavior: "smooth"})}
               className="nav__button">Contact Me</div>
          <div className="nav__button">Resume</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;