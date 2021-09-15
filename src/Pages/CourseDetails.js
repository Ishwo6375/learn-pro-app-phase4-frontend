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
    <div>
      <div className="course-main">
        {course && (
          <>
            <div>
                <h1 className="course-head">{course.course_name}</h1>
                <div>
                    <p className="course-para">{course.description}</p>
                </div>
                
              <div className="course-content">
                <img className="course-img" alt="course-pic" src={course.image} />
                <div className="course-items">
                  <h4>Duration: {course.duration}</h4>
                  <h4>Rating: {course.rate}</h4>
                  <h5>Cost: ${course.price}</h5>
                </div>
                  <button className=" btn btn-secondary">Apply Now</button>
                <div>
                </div>
              </div>
            </div>
            <div>
              
                <div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CourseDetails;
