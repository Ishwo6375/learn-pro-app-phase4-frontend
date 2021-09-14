import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="Home-div">
        <div>
          <h1>
            World's #1
            <br />
            Online Bootcamp
            <br />
           <Link className="btn btn-primary" to={"/courses"}>Explore Programs</Link>
          </h1>
          

          <div>
            <h3>
              Are you Experienced about teaching Online? Part-time or full time
              <br />
              Get Hired !!!
              <br />
              Apply Today!!!
              <br />
               
                Apply Now
              <Link className="btn btn-primary" to={"/students"}>Add Course</Link>
            
              
            </h3>
           
          </div>

          <div className="Home-div">
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
