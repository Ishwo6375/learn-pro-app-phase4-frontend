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
          </h1>

          <div>
            <h3>
              Are you passonate about teaching? Part-time or full time
              <br />
              Get Hired !!!
              <br />
              Apply Today!!!
              <br />
              <Link className="btn btn-primary" to={"/students"}>
               
                Apply Now
              </Link>
            </h3>
            <h1>OR</h1>
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
            <Link className="btn btn-primary" to={"/students"}>
              {" "}
              Sign UP
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
