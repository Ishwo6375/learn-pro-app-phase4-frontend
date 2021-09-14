import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom"

function InstructorDetails() {
     const baseURL = "https://learn-pro-phase4-backend.herokuapp.com/";
     const { id } = useParams();
     const [instructor, setInstructor] = useState([]);

     //getting request by id
  useEffect(() => {
    fetch(`${baseURL}/instructors/${id}`)
      .then((res) => res.json())
      .then((insDetail) => setInstructor(insDetail));
    // eslint-disable-next-line
  }, []);

    return (
        <div className="ins-profile">
            {instructor && (
                <>
                <div className="ins-content">
                   <div className="instructor-card">
                       <h1 className="ins-heading">{instructor.name}</h1>
                   </div >
                   <div className="div-content">
                       <div className="ins-para"><p >{instructor.description}</p></div>
                       <img className="ins-img" alt={"instructor-img"} src={instructor.image} />
                       
                   </div>

                    <Link className="btn btn-secondary" to={`/courses/${instructor.course}`}>view courses</Link>
               
               
                     

                </div>
                </>
            )}
        </div>
    )
}

export default InstructorDetails
