import React, {useEffect, useState} from 'react'
import Course from './Course'


function CourseContainer() {
    const baseURL = "https://learn-pro-phase4-backend.herokuapp.com/"
    //setting initial state to empty array//
    const [courses, setCourses] = useState([])

    useEffect(()=>{
      showCourses();
    },[]);

    function showCourses(){
        fetch(`${baseURL}/courses`)
         .then((res) => res.json())
         .then((courseData) => setCourses(courseData));
    }

    const populateCourses = courses.map(course => {
        return <Course key={course.id} course={course} />
    })
    
    return (
        <div>
            <div className="course-container">
               {populateCourses}
            </div>
            
        </div>
    )
}

export default CourseContainer
