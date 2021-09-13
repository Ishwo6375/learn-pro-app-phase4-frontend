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
            <div>
                 <h3>
              Are you Experienced about teaching Online? Part-time or full time
              <br />
              Join our team..
              <br />
              Apply Today!!!
              <br />
               
                Apply Now
                
              <Link className="btn btn-primary" to={"/instructor/add"}>Join Team</Link>
              </h3>
            </div>
            <h1>Our Experienced Instructors</h1>
            <div className="instructor-container">
                {instructors.map((instructor, idx) => (
                    <div key={idx}>
                        <div className="instructor-card">
                        <h1 className="ins-heading">{instructor.name}</h1>
                            <div className="div-content">
                       <div className="ins-para"><p >{instructor.description}</p></div>
                       <img className="ins-img" alt={"instructor-img"} src={instructor.image} />
                         
                            </div>
                            

                        </div>
                       
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Instructor
