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
  }, []);

  return (
    <div className="course-details">
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

       {/* <div className="courses">
        {courses.map((course, idx) => {(
            <div key={idx}>
              <h4>{course.course_name}</h4>
              <img  alt={"instructor-img"} src={course.image} />
               <p>{course.description}</p>
              <span>
                {course.instructor.map((ins, i) => (
                  <div key={i}>
                    <h1>{ins.name}</h1>
                    <img  alt={"instructor-img"} src={ins.image} />
              
                  </div>
                ))}
              </span>
            </div>
          );
        })}
      </div> */}
      </div>
  );
}

export default CourseDetails;