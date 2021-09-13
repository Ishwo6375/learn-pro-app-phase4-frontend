import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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
          <h1>{course.name}</h1>
          <img alt="course-pic" src={course.image} />
          <h3>{course.description}</h3>
          <h4>{course.duration}</h4>
          <p>{course.rate}</p>
          <p>{course.price}</p>
          <div>

          </div>
          
        </>
      )}
    </div>
  );
}

export default CourseDetails;
