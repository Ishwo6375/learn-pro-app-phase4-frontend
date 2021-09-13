import React, { useState, useEffect } from "react";

import "../styles/courseContainer.css";


function Students() {
     const baseURL = "https://learn-pro-phase4-backend.herokuapp.com/";
     const [students, setStudents] = useState([]);

     useEffect(() => {
    populateStudents(); //This function is called every time delete method is requested//
  }, []);

  function populateStudents() {
    fetch(`${baseURL}/students`)
      .then((res) => res.json())
      .then((studentData) => setStudents(studentData));
  }

    return (
        <div>
            <div className="course-container-2">
                {students.map((student, idx) => (
                    <div>
                        <h2>{student.name}</h2>
                        <img  alt={"student-img"} src={student.image} />
                        
                    </div>
                ))}
            </div>
            
        </div>
    )
}

export default Students
