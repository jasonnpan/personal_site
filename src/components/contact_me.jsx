import { forwardRef } from "react";
import LinkedinLogo from '../assets/linkedin_logo.png';
import GithubLogo from '../assets/github_logo.png';
import EmailLogo from '../assets/email_logo.png';
import './contact_me.css';

const ContactMe = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="contact_me">
        <div className="header">Contact Me</div>
        <div className="contact__container">
          <img src={ LinkedinLogo } className="logo__block" id="linkedin"></img>
          <div className="contact__label"><a href="https://www.linkedin.com/in/jasonpann/">Linkedin: /in/jasonpann/</a></div>
          <img src={ GithubLogo } className="logo__block" id="github"></img>
          <div className="contact__label"><a href="https://github.com/jasonnpan">Github: @jasonnpan</a></div>
          <img src={ EmailLogo }className="logo__block" id="email"></img>
          <div className="contact__label"><a href="mailto:j7pan@uwaterloo.ca">Email: j7pan@uwaterloo.ca</a></div>
        </div>
    </div>
  );
});

export default ContactMe;