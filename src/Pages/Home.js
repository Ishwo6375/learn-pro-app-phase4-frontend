import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  return (
    <>
    <div className="main-container">
      <div className="Home-div">
        <div className="home-heading">
          <h1 className="top-head">
            World's #1
            <br />
            Online Bootcamp
            <br />
            <Link className="btn btn-primary" to={"/courses"}>
              <h4>Explore Programs</h4>
            </Link>
          </h1>

          <div className="home-div-2">
            <h2>
              Are you Experienced about teaching Online? Part-time or full time
              <br />
              Get Hired !!!
              <br />
              Apply Today!!!
              <br />
              Apply Now
              <br />
              <Link className="btn btn-primary" to={"/students"}>
                 <h4>Add Course</h4>
              </Link>
            </h2>
          </div>

          <div className="home-div-2">
            <h2>
              Are you  thinking about pursuing Online Degree or Certification and
              <br />
              Improve your skills??
              <br />
              If yes you are in the right place...
            </h2>
            <br />
            <div className="sign-up">
            <h2 >Sign up Today!!</h2>
            <Link className="btn btn-primary" to={"/enroll"}>
              <h4>Sign up</h4>
            </Link>

            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Home;
