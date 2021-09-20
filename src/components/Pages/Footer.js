import React from "react";
import "../styles/courseDetails.css";

const Footer = () => {
  return (
    <footer>
      <div className="inner-footer">
        <div className="footer-text">
          <p>
            The design, style and content of a LearnPro.edu website is generally
            meant to meet visitor's expectations of that website. Visitors
            expect to find websites that are graphically rich, with audio and
            video as well. They expect something special, and educational value
            is often more important than the website being very accessible or
            fast-loading.
          </p>
        </div>
        <div className="contact">
          <ul className="icons">
            <h3>Contact Us</h3>
            <li>Ishwor Prajapati</li>
            <li>Email: <a href = "mailto: ishaan.prazapati6375@gmail.com" target="_blank">Ishaan.prazapati6375@gmail.com</a></li>
            <li>Git Hub: <a href = "https://github.com/Ishwo6375" target="_blank">https://github.com/Ishwo6375</a></li>
            <li>Phone: 03326877676</li>
          </ul>
        </div>
      </div>
      <p className="copyright">
        Copyright &copy;2021 LearnPro.edu App | All Rights are reserved.
      </p>
    </footer>
  );
};

export default Footer;
