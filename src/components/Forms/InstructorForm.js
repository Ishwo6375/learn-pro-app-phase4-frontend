import React, { useState } from "react";
import  {useHistory } from 'react-router';

function InstructorForm() {
    const baseURL = "https://learn-pro-phase4-backend.herokuapp.com/";
    const history = useHistory();

    const [instructorForm, setInstructorForm] = useState({
        name: "",
        image: "",
        description: ""
       })

       function onHandleChange(e){
        setInstructorForm ({...instructorForm, [e.target.name]: e.target.value});
}

function onSubmitInstructor(e){
        e.preventDefault();
        const config = {
            method: "POST",
             headers: {
          "Content-Type": "application/json"
        }, 
        body: JSON.stringify({
         name: instructorForm.name,
         image: instructorForm.image,
         description:  instructorForm.description
        })   
    };

    fetch(`${baseURL}/instructors`, config)
      .then((res) => res.json())
      .then((newInstructor) => {
        const newInstructors = [instructorForm, newInstructor];
        setInstructorForm(newInstructors);
        history.push('/instructors')
      });

 };

    return (
       <div className="container-1">
            <div>
                <h2 className="add">Enter your details</h2>

                <form className="form-control my-5 py-5 ">
                    <label><h4>FULL NAME</h4></label>
                    <div className="login">
                        <input 
                        className="input" 
                        type="text"
                         placeholder="Enter Name.." 
                         name="name"
                         value={instructorForm.name}
                         onChange={onHandleChange}
                         />
                    </div>
                     <label><h4>Image URL</h4></label>
                    <div className="login">
                        <input 
                        className="input" 
                        type="text"
                         placeholder="Enter image Url.." 
                         name="image"
                         value={instructorForm.image}
                         onChange={onHandleChange}
                         />
                    </div>
                     <label> <h4>ABOUT</h4></label>
                    <div className="login">
                        <input 
                        className="input" 
                        type="text"
                         placeholder="Enter description.." 
                         name="description"
                         value={instructorForm.description}
                         onChange={onHandleChange}
                         />
                    </div>
                    <button onClick={onSubmitInstructor} className="btn-1">
              Join Team
            </button>
                </form>
            </div>

        </div>
    )
}

export default InstructorForm
