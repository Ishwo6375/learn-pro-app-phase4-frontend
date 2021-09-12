import React, { useEffect, useState } from "react";
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

  //   const populateCourses = courses.map((course) => {
  //     return <Course key={course.id} course={course} />;
  //   });

  return (
    <div>
        <h1>Get Certified, Get Ahead with Our Programs</h1>
      <div className="course-container-2">
        {courses.map((course, idx) => (
          <div key={idx}>
            <div className="card-container">
              <div className="image-container">
                <img alt={"course-img"} src={course.image} />
              </div>
              <div className="card-title">
                <h3>Course: {course.course_name}</h3>
              </div>
              <div className="card-para">
                <h4>Course Duration: {course.duration}</h4>
              </div>
              <button className="btn secondary">View More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseContainer;
