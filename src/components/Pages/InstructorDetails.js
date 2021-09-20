import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "../styles/InstructorDetails.css";

function InstructorDetails() {
  const baseURL = "https://learn-pro-phase4-backend.herokuapp.com/";
  const { id } = useParams();
  const [instructor, setInstructor] = useState([]);

  function onSubmit(e) {
    e.preventDefault();
    return <p>Your Messege is sent!!!</p>;
  }

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
          <Link className="btn btn-info" to={"/instructors"}>
            Back
          </Link>
          <div className="ins-content">
            <div>
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
              <h1 className="contact-head">
                Any Question? Contact directly to {instructor.name}
              </h1>
              <br />
              <h2 className="contact-head">
                Scroll up to know More about {instructor.name}{" "}
              </h2>
              <div>
                <>
                  <div className="container1">
                    <p className="contact-p">CONTACT {instructor.name}</p>

                    <div className="login">
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="input"
                        required
                      />
                      <input
                        type="text"
                        placeholder="Your Email Address"
                        className="input"
                        required
                      />
                    </div>

                    <div className="subject">
                      <input
                        type="text"
                        placeholder="Subject"
                        className="input"
                        required
                      />
                    </div>

                    <div className="msg">
                      <textarea
                        className="area"
                        placeholder="Leave a Message"
                        required
                      ></textarea>
                    </div>
                    <div>
                      <button onClick={onSubmit} className="btn-3">
                        {" "}
                        Send Message
                      </button>
                    </div>
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
