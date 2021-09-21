import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "../styles/studentDetails.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserMinus } from "@fortawesome/free-solid-svg-icons";
import { faUserEdit } from "@fortawesome/free-solid-svg-icons";

function StudentDetails() {
    const baseURL = "https://learn-pro-phase4-backend.herokuapp.com/";

    const [student, setStudent] = useState([]);
     const { id } = useParams();


     useEffect(() => {
    fetch(`${baseURL}/students/${id}`)
      .then((res) => res.json())
      .then((stdData) => setStudent(stdData));
      // eslint-disable-next-line
  }, []);

    return (
        <div className="std-profile">
            <Link className="btn btn-secondary" to={"/students"}>Go To Students page</Link>
            {student && (
                <>
                <div className="std-content">
                    <h1 className="contact-head">Student Name: {student.name}</h1>
                     <img className="std-img"  src={student.image} alt="student-pic"/>
                     <h2 className="contact-head">Email: {student.email}</h2>
                     <h2 className="contact-head">Gender: {student.gender}</h2>
                     <h2 className="contact-head">Registration No: {student.Registration_num}</h2>

                 <Link
                className="btn btn-primary mx-3"
                to={`/students/edit/${student.id}`}><FontAwesomeIcon icon={faUserEdit} /> Edit</Link>
                </div>
                </>
            )}
            
        </div>
    )
}

export default StudentDetails
