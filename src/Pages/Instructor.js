import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/instructor.css";


function Instructor() {
    const baseURL = "https://learn-pro-phase4-backend.herokuapp.com/";
    const [instructors, setInstructors] = useState([]);

    useEffect(()=>{
      fetch(`${baseURL}/instructors`)
      .then((res) => res.json())
      .then((instructorData) => setInstructors(instructorData));
    }, [])
    return (
        <div>
            <div className="picture-div-1">
                 <h3>
              Are you Experienced about teaching Online? Part-time or full time
              <br />
              Join our team..
              <br />
              Apply Today!!!
              <br />
               
                Apply Now
                <br />
                <br />
                
              <Link className="btn btn-primary" to={"/instructor/add"}>Join Team</Link>
              </h3>
            </div>
            <h1 className="heading-ins">Our Experienced Instructors</h1>
            <div className="instructor-container">
                {instructors.map((instructor, idx) => (
                    <div key={idx}>
                        <div className="instructor-card">
                        <h1 className="ins-heading">{instructor.name}</h1>
                            <div className="div-content">
                       <div className="ins-para"><p >{instructor.description}</p></div>
                       <img className="ins-img" alt={"instructor-img"} src={instructor.image} />
                           <Link
                        className="btn btn-primary"
                        to={`/instructors/${instructor.id}`}
                      >
                          show Details
                      </Link>
                            </div>
                        </div>
                       
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Instructor
