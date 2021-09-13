import React, { useState } from "react";
import  {useHistory } from 'react-router';

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
        <div className="container1">
            <div>
                <h2 className="add">Add New Students</h2>

                <form>
                    <div className="login">
                        <input 
                        classname="input" 
                        type="text"
                         placeholder="Enter Student Name.." 
                         name="name"
                         value={studentForm.name}
                         onChange={onHandleChange}
                         />
                    </div>

                    <div className="login">
                        <input 
                        classname="input" 
                        type="text"
                         placeholder="Enter email address.." 
                         name="email"
                         value={studentForm.email}
                         onChange={onHandleChange}
                         />
                    </div>

                    <div className="login">
                        <input 
                        classname="input" 
                        type="text"
                         placeholder="Enter gender.." 
                         name="gender"
                         value={studentForm.gender}
                         onChange={onHandleChange}
                         />
                    </div>

                    <div className="login">
                        <input 
                        classname="input" 
                        type="text"
                         placeholder="Enter image url.." 
                         name="image"
                         value={studentForm.image}
                         onChange={onHandleChange}
                         />
                    </div>

                    <div className="login">
                        <input 
                        classname="input" 
                        type="number"
                         placeholder="Enter registratopm Infromation.." 
                         name="Registration_num"
                         value={studentForm.Registration_num}
                         onChange={onHandleChange}
                         />
                    </div>
                    <button onClick={onSubmitAddStudent} className="btn-1">
              ADD Students
            </button>
                </form>
            </div>

        </div>
    );
      }


export default StudentForm
