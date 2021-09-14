import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";


function Home() {
  return (
    <div className="main-container">
      <div className="Home-div">
        <div className="home-heading">
          <h1>
            World's #1
            <br />
            Online Bootcamp
            <br />
           <Link className="btn btn-primary" to={"/courses"}>Explore Programs</Link>
          </h1>
          

          <div className="home-div-2">
            <h3>
              Are you Experienced about teaching Online? Part-time or full time
              <br />
              Get Hired !!!
              <br />
              Apply Today!!!
              <br />
               
                Apply Now
                <br />
              <Link className="btn btn-primary" to={"/students"}>Add Course</Link>
            
              
            </h3>
           
          </div>

          <div className="home-div-2" >
            <h3>
              Are you a thinking about pursuing Online Degree and
              <br />
              Improve your skills??
              <br />
              If yes you are in the right place...
            </h3>
            <br />

            <h4>Sign up Today!!</h4>
            <Link className="btn btn-primary" to={"/enroll"}>
             
              Sign UP
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
