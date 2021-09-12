import React from 'react'

function Course({course}) {
    return (
        <div className="course-div">
            <img alt={"course-img"} src={course.image} />
            <h3>Course: {course.course_name}</h3>
            <h4>Course Duration: {course.duration}</h4>
            
        </div>
    )
}

export default Course
