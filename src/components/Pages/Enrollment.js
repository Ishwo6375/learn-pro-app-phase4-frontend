import React, { useState, useEffect } from "react";

function Enrollment() {
  const baseURL = "https://learn-pro-phase4-backend.herokuapp.com/";

  const [enrollments, setEnrollments] = useState([]);

  useEffect(() => {
    showEnrollments(); //This function is called every time delete method is requested//
  }, []);

  function showEnrollments() {
    fetch(`${baseURL}/enrollments`)
      .then((res) => res.json())
      .then((enrollData) => setEnrollments(enrollData));
  }
  return (
    <div>
      <div className="enroll-div">
          <div className="enroll-content">
              <div>
                  <h2>Our Upcoming Sessions</h2>
              </div>
              <div className="enroll-items">
                {enrollments.map((enrollment, idx )=> (
                    <div>
                        <h3>{enrollment.enrollment_semester}</h3>
                    </div>
                ))}
              </div>
          </div>
      </div>
    </div>
  );
}

export default Enrollment;
