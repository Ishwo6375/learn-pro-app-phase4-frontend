import React, { useState } from "react";
import  {useHistory } from 'react-router';
import './EditStudent.css'

function CourseForm() {
    const baseURL = "https://learn-pro-phase4-backend.herokuapp.com/";
    const history = useHistory();

    const [courseForm, setCourseForm] = useState({
        courseName: "",
        description: "",
        image: "",
        duration: "",
        courseType: "",
        price: "",
        instructorId: ""
    })

    function onHandleChange(e){
        setCourseForm({...courseForm, [e.target.name]: e.target.value});
    }

     //Post request to get new student
    
    function onSubmitAddCourses(e){
        e.preventDefault();
        const config = {
            method: "POST",
             headers: {
          "Content-Type": "application/json"
        }, 
        body: JSON.stringify({
          courseName: courseForm.course_name,
          description: courseForm.description,
          image: courseForm.image,
          duration: courseForm.duration,
          courseType: courseForm.course_type,
          price: courseForm.price,
          instructorId: courseForm.instructor_id
        })   
    };

    fetch(`${baseURL}/courses`, config)
      .then((res) => res.json())
      .then((newCourse) => {
        const newCourses = [courseForm, newCourse];
        setCourseForm(newCourses);
        history.push('/courses')
      });

 };




    return (
           <div className="container-1 ">
            <div>
                <h2 className="add">Course Details</h2>

                <form>
                    <div className="login-1">
                        <input 
                         classname="input-1" 
                        type="text"
                         placeholder="Enter  Course Title" 
                         name="name"
                         value={courseForm.course_name}
                         onChange={onHandleChange}
                         />
                    </div>

                    <div className="login-1">
                        <input 
                        classname="input-1" 
                        type="text"
                         placeholder="Description about course" 
                         name="description"
                         value={courseForm.description}
                         onChange={onHandleChange}
                         />
                    </div>

                    <div className="login-1">
                        <input 
                        classname="input-1" 
                        type="text"
                         placeholder="Course Image Url" 
                         name="image"
                         value={courseForm.image}
                         onChange={onHandleChange}
                         />
                    </div>

                    <div className="login-1">
                        <input 
                        classname="input-1" 
                        type="text"
                         placeholder="Course Duration" 
                         name="duration"
                         value={courseForm.duration}
                         onChange={onHandleChange}
                         />
                    </div>

                    <div className="login-1">
                        <input 
                        classname="input-1" 
                        type="text"
                         placeholder="Course type.." 
                         name="type"
                         value={courseForm.course_type}
                         onChange={onHandleChange}
                         />
                    </div>


                    <div className="login-1">
                        <input 
                        classname="input-1" 
                        type="number"
                         placeholder="course cost" 
                         name="price"
                         value={courseForm.price}
                         onChange={onHandleChange}
                         /> 
                    </div>

                     <div className="login-1">
                        <input 
                        classname="input-1" 
                        type="number"
                         placeholder="Enter your instructor id.." 
                         name="instructor id"
                         value={courseForm.instructor_id}
                         onChange={onHandleChange}
                         /> 
                    </div>
                    <button onClick={onSubmitAddCourses} className="btn-1">Register Course</button>
                </form>
            </div>

        </div>
    )
}

export default CourseForm
