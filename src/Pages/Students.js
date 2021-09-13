import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"

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

  function deleteStudent(student) {
    fetch(`${baseURL}/students/${student.id}`, {
      method: "DELETE",
    });
    const newStudent = students.filter(
      (res) => res.id !== student.id
    );
    setStudents(newStudent);
  }

  return (
    <>
    <div>
      <div className="course-container-2">
        {students.map((student, idx) => (
          <div className="card-container">
            <div className="card-content">
              <h2>{student.name}</h2>
            </div>
            <div className="image-container">
              <img alt={"student-img"} src={student.image} />
            </div>
            <h5>{student.email}</h5>
            <h5>{student.gender}</h5>
            <h5>Resgistration No: CCBC{student.Registration_num}</h5>
            <Link className="btn btn-primary mx-3" to={`/students/edit/${student.id}`}>Edit Student</Link>
             <button
                        onClick={() => deleteStudent(student)}
                        className="btn btn-danger mx-2"> Delete</button>
                    </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default Students;
