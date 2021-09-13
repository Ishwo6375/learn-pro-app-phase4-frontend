import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/courseContainer.css";


function CourseContainer() {
  const baseURL = "https://learn-pro-phase4-backend.herokuapp.com/";
  //setting initial state to empty array//
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    showCourses();
  }, []);

  function showCourses() {
    fetch(`${baseURL}/courses`)
      .then((res) => res.json())
      .then((courseData) => setCourses(courseData));
  }

   

  return (
    <div>
        
        <h1>Get Certified, Get Ahead with Our Programs</h1>
        <div className="picture-div">
            <img src="https://www.uakron.edu/statistics/images/data-science-banner.jpg?language_id=1" alt="img" />
        </div>
        <div>
            <h2>Transform your life 
                <br />
                through education</h2>
                <br />
                <p>Learners around the world are launching new 
                    <br />
                    careers, advancing in their fields, and enriching
                     their live</p>
                     <br />
            <Link className="btn btn-primary" to={"/students"}> Enrolled Students</Link>
        </div>

        <div><h3>Students are viewing</h3>
        </div>
      <div className="course-container-2">
        {courses.map((course, idx) => (
          <div key={idx}>
            <div className="card-container">
              <div className="image-container">
                <img  alt={"course-img"} src={course.image} />
              </div>
              <div className="card-content">
                 <div className="card-title">
                <h3> {course.course_name}</h3>
              </div>
              <div className="card-para">
    
              </div>
              </div>
             
              <Link className="btn btn-primary" to={`/courses/${course.id}`}> View More</Link>
            </div>
          </div>
        ))}
      </div>
    </div> 
  );
}

export default CourseContainer;
