import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/courseContainer.css";

function CourseContainer() {
  const baseURL = "https://learn-pro-phase4-backend.herokuapp.com/";
  //setting initial state to empty array//
  const [courses, setCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

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
      <div className="course-main">
        <form className="d-flex my-3">
          <input
            className="text form-control me-3"
            type="search"
            placeholder="What you want to learn?"
            aria-label="Search"
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>

      <h1 className="course-head">
        Get Certified, Get Ahead with Our Programs
      </h1>
      <div>
        <div className="picture-div">
          <h2>
            Transform your life
            <br />
            through education
          </h2>
          <br />
          <p>
            Learners around the world are launching new
            <br />
            careers, advancing in their fields, and enriching their live
          </p>
          <br />
          <div>
            <h2>View our enrolled students</h2>
            <Link className="btn-3 btn-secondary" to={"/students"}>
              
              Enrolled Students
            </Link>
          </div>
        </div>
      </div>

      <div className="course-view mx-10">
        <h2 className="contact-head">Students are viewing</h2>
      </div>
      <div className="course-container-2">
        {courses
         // eslint-disable-next-line
          .filter((value) => {
            if (searchTerm === "") {
              return value;
            } else if (
              value.course_name
                .toLowerCase()
                .includes(searchTerm.toLowerCase()) ||
              value.course_type.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return value;
            }
          })
          .map((course, idx) => (
            <div key={idx}>
              <div className="card-container">
                <div className="image-container">
                  <img alt={"course-img"} src={course.image} />
                </div>
                <div className="card-content">
                  <div className="card-title">
                    <h3> {course.course_name}</h3>
                  </div>
                  <div className="course-price">
                    <h4>${course.price}</h4>
                  </div>
                </div>

                <Link className="btn btn-info" to={`/courses/${course.id}`}>
                  {" "}
                  View More
                </Link>
                <Link
                  className="btn btn-primary"
                  to={`/instructors/${course.instructor.id}`}
                >
                  Instructor
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default CourseContainer;
