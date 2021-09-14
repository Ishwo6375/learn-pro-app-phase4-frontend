import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/InstructorDetails.css";

function InstructorDetails() {
  const baseURL = "https://learn-pro-phase4-backend.herokuapp.com/";
  const { id } = useParams();
  const [instructor, setInstructor] = useState([]);

  //getting request by id
  useEffect(() => {
    fetch(`${baseURL}/instructors/${id}`)
      .then((res) => res.json())
      .then((insDetail) => setInstructor(insDetail));
    // eslint-disable-next-line
  }, []);

  return (
    <div className="ins-profile">
      {instructor && (
        <>
          <div className="ins-content">
            <div className="instructor-card">
              <h1 className="ins-heading">{instructor.name}</h1>
            </div>
            <div className="div-content">
              <div className="ins-para">
                <p>{instructor.description}</p>
              </div>
              <img
                className="ins-img"
                alt={"instructor-img"}
                src={instructor.image}
              />
            </div>

            <div>
              <h2 className="contact-head">
                Any Question? Contact directly to {instructor.name}
              </h2>
              <div>
                <>
                  <div className="container1">
                    <p>CONTACT ME</p>

                    <div className="login">
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="input"
                      />
                      <input
                        type="text"
                        placeholder="Your Email Address"
                        className="input"
                      />
                    </div>

                    <div className="subject">
                      <input
                        type="text"
                        placeholder="Subject"
                        className="input"
                      />
                    </div>

                    <div className="msg">
                      <textarea
                        className="area"
                        placeholder="Leave a Message"
                      ></textarea>
                    </div>
                    <div className="btn-2">Send Message</div>
                  </div>
                </>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default InstructorDetails;
