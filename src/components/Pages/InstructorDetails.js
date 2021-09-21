import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "../styles/InstructorDetails.css";
import emailjs from "emailjs-com";

function InstructorDetails() {
  const baseURL = "https://learn-pro-phase4-backend.herokuapp.com/";
  const { id } = useParams();
  const [instructor, setInstructor] = useState([]);

  const Result = () => {
  return (
    <h5 className="contact-head">Your messege has been successfully sent.{instructor.name} will contact you soon..</h5>
  );
};

  const [result, showResult] = useState(false);

  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_9b93s0p",
        "template_x5r8lda",
        e.target,
        "user_6sPNsSlwqHcFn0VD0xIvh"
      )
      .then((result) => {
        console.log(result.text);
      })
      .catch((error) => console.log(error.text));
    e.target.reset();
    showResult(true);
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
                     <form onSubmit={sendEmail}>
                    <div className="login">
                      <input
                        type="text"
                        placeholder="Your Name"
                        name="name"
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
                        name="subject"
                        placeholder="Subject"
                        className="input"
                        required
                      />
                    </div>

                    <div className="msg">
                      <textarea
                        className="area"
                        name="message"
                        placeholder="Leave a Message"
                        required
                      ></textarea>
                    </div>
                    <div>
                    <button className="btn-3">SUBMIT</button>
                  <div className="row">{result ? <Result /> : null}</div>
             
                    </div>
                    </form>
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
