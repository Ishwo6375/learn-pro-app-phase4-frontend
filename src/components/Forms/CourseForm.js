import React, { useState } from "react";
import { useHistory } from "react-router";
import "./EditStudent.css";

function CourseForm() {
  const baseURL = "https://learn-pro-phase4-backend.herokuapp.com/";
  const history = useHistory();

  const [courseForm, setCourseForm] = useState({
    course_name: "",
    description: "",
    image: "",
    duration: "",
    course_type: "",
    rate: "",
    price: "",
    instructor_id: "",
  });

  function onHandleChange(e) {
    setCourseForm({ ...courseForm, [e.target.name]: e.target.value });
  }

  //Post request to get new course

  function onSubmitAddCourses(e) {
    e.preventDefault();
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        course_name: courseForm.course_name,
        description: courseForm.description,
        image: courseForm.image,
        duration: courseForm.duration,
        course_type: courseForm.course_type,
        rate: courseForm.rate,
        price: courseForm.price,
        instructor_id: courseForm.instructor_id,
      }),
    };

    fetch(`${baseURL}/courses`, config)
      .then((res) => res.json())
      .then((newCourse) => {
        const newCourses = [courseForm, newCourse];
        setCourseForm(newCourses);
        history.push("/courses");
      });
  }

  return (
    <div className="container-1 ">
      <div>
        <h2 className="add">Course Details</h2>

        <form className="form-control my-5 py-5 ">
          <div>
            <input
              className="input-1"
              type="text"
              placeholder="Enter  Course Title"
              name="course_name"
              value={courseForm.course_name}
              onChange={onHandleChange}
            />
          </div>

          <div>
            <input
              className="input-1"
              type="text"
              placeholder="Description about course"
              name="description"
              value={courseForm.description}
              onChange={onHandleChange}
            />
          </div>

          <div>
            <input
              className="input-1"
              type="text"
              placeholder="Course Image Url"
              name="image"
              value={courseForm.image}
              onChange={onHandleChange}
            />
          </div>

          <div>
            <input
              className="input-1"
              type="text"
              placeholder="Course Duration"
              name="duration"
              value={courseForm.duration}
              onChange={onHandleChange}
            />
          </div>

          <div>
            <input
              className="input-1"
              type="text"
              placeholder="Course type.."
              name="course_type"
              value={courseForm.course_type}
              onChange={onHandleChange}
            />
          </div>

          <div>
            <input
              className="input-1"
              type="number"
              placeholder="course cost"
              name="price"
              value={courseForm.price}
              onChange={onHandleChange}
            />
          </div>

          <div>
            <input
              className="input-1"
              type="number"
              placeholder="Enter your instructor id.."
              name="instructor_id"
              value={courseForm.instructor_id}
              onChange={onHandleChange}
            />

            <div>
              <input
                className="input-1"
                type="number"
                placeholder="Enter average rate..."
                name="rate"
                value={courseForm.rate}
                onChange={onHandleChange}
              />
            </div>
          </div>
          <button onClick={onSubmitAddCourses} className="btn-1">
            Register Course
          </button>
        </form>
      </div>
    </div>
  );
}

export default CourseForm;
