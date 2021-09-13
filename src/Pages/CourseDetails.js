import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/courseDetails.css";

// import { Link } from "react-router-dom";

function CourseDetails() {
  const baseURL = "https://learn-pro-phase4-backend.herokuapp.com/";
  const [course, setCourse] = useState([]);
  const { id } = useParams();

  //getting request by id
  useEffect(() => {
    fetch(`${baseURL}/courses/${id}`)
      .then((res) => res.json())
      .then((courseDetail) => setCourse(courseDetail));
    // eslint-disable-next-line
  }, [id]);

  return (
    <div className="course-details">
      {course && (
        <>
          <div className="course-img">
        <h1>Course Details</h1>
          </div>
          <div>
            <div>
             <h1>{course.course_name}</h1>
            </div>
            <div className="course-content">
               <img alt="course-pic" src={course.image} />
          <h4>{course.duration}</h4>
          <h4>Rating: {course.rate}</h4>
          <h5>Cost: ${course.price}</h5>
            </div>
            <div className="course-des">

               <h3>Course Description: {course.description}</h3>
            </div>
          </div>
       
        
          <div>

          </div>
      
        </>
      )}
    </div>
  );
}

export default CourseDetails;