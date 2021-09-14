import React from "react";
import "../styles/courseDetails.css";

const Footer = () => {
  return (
    <footer>
      <div className="inner-footer">
        <div className="footer-text">
          <p>
            The design, style and content of a MovieNight.com website is generally meant
            to meet visitors’ expectations of that website. Visitors expect to
            find websites that are graphically rich, with audio and video as
            well. They expect something special, and entertainment value is
            often more important than the website being very accessible or
            fast-loading.
          </p>
        </div>
        <div className="contact">
          <ul className="icons">
            <h3>Contact Us</h3>
            <li>Ishwor Prajapati</li>
            <li>Ishaan.prazapati6375@gmail.com</li>
            <li>03326877676</li>
          </ul>
        </div>
      </div>
      <p className="copyright">
        Copyright &copy;2021 Learn Pro App | All Rights are reserved.
      </p>
    </footer>
  );
};

export default Footer;