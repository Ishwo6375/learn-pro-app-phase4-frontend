import React from 'react'
import "../styles/contact.css"
import emailjs from 'emailjs-com'

function Contact() {


  function sendEmail(e){
   e.preventDefault(); 
   emailjs.sendForm('service_9b93s0p', 'template_x5r8lda', e.target,
    "user_6sPNsSlwqHcFn0VD0xIvh").then(res=>{
      console.log(res);
    }).catch(err => console.log(err));
  }
    return (
        <>
            <h1 className="contact-head">Contact Us</h1>
        <div className="contactme" id="contact">
      <div className="contactOverlay">
        <div className="container">
          <div className="form">
            <form className="form-2" onSubmit={sendEmail}>
              <div className="formWord">
                <h2>Say Hello!</h2>
                <span>Full Name</span>
                <br />
                <input className="input100" type="text" name="name" required />
                <br />
                <span>Phone Number</span>
                <br />
                <input className="input100" type="text" name="phone" required />
                <br />
                <span>Enter Email</span>
                <br />
                <input className="input100" type="text" name="email" required />
                <br />
              </div>
              <div className="formWord">
                <span>Message</span>
                <br />
                <textarea name="message" required></textarea>
                <br />
                <button>SUBMIT</button>

                
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
    )
}

export default Contact
