import React, { useState } from "react";
import  {useHistory } from 'react-router';
import './EditStudent.css'




function StudentForm() {
    const baseURL = "https://learn-pro-phase4-backend.herokuapp.com/";
    const history = useHistory();

         //setting initial value as empty string to hold form data//
    const [studentForm, setStudentForm] = useState({
        name: "",
        email: "",
        gender: "",
        image: "",
        Registration_num: ""
       })
  

    function onHandleChange(e){
        setStudentForm ({...studentForm, [e.target.name]: e.target.value});
    }

    //Post request to get new student
    
    function onSubmitAddStudent(e){
        e.preventDefault();
        const config = {
            method: "POST",
             headers: {
          "Content-Type": "application/json"
        }, 
        body: JSON.stringify({
         name: studentForm.name,
         email: studentForm.email,
         gender: studentForm.gender,
         image: studentForm.image,
         Registration_num: studentForm.Registration_num
        })   
    };

    fetch(`${baseURL}/students`, config)
      .then((res) => res.json())
      .then((newStudent) => {
        const newStudents = [studentForm, newStudent];
        setStudentForm(newStudents);
        history.push('/students')
      });

 };




    return (
        <div className="container-1">
            <div>
                <h2 className="add">Enter your Details</h2>

                <form className="form-control my-5 py-5">
                    <label><h4>STUDENT FULL NAME</h4></label>
                    <div>
                        <input 
                        className="input" 
                        type="text"
                         placeholder="Enter Student Name.." 
                         name="name"
                         value={studentForm.name}
                         onChange={onHandleChange}
                         />
                    </div>

                        <label><h4>Email Address</h4></label>
                    <div >
                        <input 
                        className="input-1" 
                        type="text"
                         placeholder="Enter email address.." 
                         name="email"
                         value={studentForm.email}
                         onChange={onHandleChange}
                         />
                    </div>
                     <label><h4>GENDER</h4></label>
                    <div className="login">
                        <input 
                        className="input-1" 
                        type="text"
                         placeholder="Enter gender.." 
                         name="gender"
                         value={studentForm.gender}
                         onChange={onHandleChange}
                         />
                    </div>
                      <label><h4>IMAGE URL</h4></label>
                    <div className="login">
                        <input 
                        className="input-1" 
                        type="text"
                         placeholder="Enter image url.." 
                         name="image"
                         value={studentForm.image}
                         onChange={onHandleChange}
                         />
                    </div>
                       
                       <label><h4>REGISTRATION NUMBER</h4></label>
                    <div className="login">
                        <input 
                        className="input-1" 
                        type="number"
                         placeholder="Enter registration Infromation.." 
                         name="Registration_num"
                         value={studentForm.Registration_num}
                         onChange={onHandleChange}
                         />
                    <button onClick={onSubmitAddStudent} className="btn-1">
             Submit
            </button>
                    </div>
                    
                </form>
            </div>

        </div>
    );
      }


export default StudentForm
