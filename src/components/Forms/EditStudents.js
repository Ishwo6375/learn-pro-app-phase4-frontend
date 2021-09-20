import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import "./EditStudent.css";

function EditStudents() {
  const baseURL = "https://learn-pro-phase4-backend.herokuapp.com/";
  const history = useHistory();
  const { id } = useParams();

  const [editStudent, setEditStudent] = useState({
    name: "",
    email: "",
    gender: "",
    image: "",
    Registration_num: "",
  });

  function onHandleChange(e) {
    setEditStudent({ ...editStudent, [e.target.name]: e.target.value });
  }

  useEffect(() => {
    showStudentonForm();
    // eslint-disable-next-line
  }, []);

  function showStudentonForm() {
    fetch(`${baseURL}/students/${id}`)
      .then((res) => res.json())
      .then((stdData) => setEditStudent(stdData));
  }

  //Patch request to get new student

  function onSubmitEditStudent(e) {
    e.preventDefault();
    fetch(`${baseURL}/students/${id}`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "content-Type": "application/json",
      },
      body: JSON.stringify(editStudent),
    })
      .then((res) => res.json())
      .then((newStudent) => {
        setEditStudent(newStudent);
        history.push("/students");
      });
  }

  return (
    <>
      <Link className="btn btn-info" to={"/students"}>Back To Students</Link>
    <div className="container-1">
      <h2 className="add">Edit Student</h2>

      <form className="form-control my-5 py-5 " onSubmit={onSubmitEditStudent}>
        <div>
          <label>
            <h4>FULL NAME</h4>
          </label>
          <input
            className="input"
            type="text"
            placeholder="Enter Student Name.."
            name="name"
            value={editStudent.name}
            onChange={onHandleChange}
          />
        </div>

        <div>
          <label>
            <h4>Email Address</h4>
          </label>
          <input
            className="input"
            type="text"
            placeholder="Enter email address.."
            name="email"
            value={editStudent.email}
            onChange={onHandleChange}
          />
        </div>

        <div>
          <label>
            <h4>GENDER</h4>
          </label>
          <input
            className="input"
            type="text"
            placeholder="Enter gender.."
            name="gender"
            value={editStudent.gender}
            onChange={onHandleChange}
          />
        </div>

        <div>
          <label>
            <h4>IMAGE URL</h4>
          </label>
          <input
            className="input"
            type="text"
            placeholder="Enter image url.."
            name="image"
            value={editStudent.image}
            onChange={onHandleChange}
          />
        </div>

        <div>
          <label>
            <h4>REGISTRATION NUMBER</h4>
          </label>
          <input
            className="input"
            type="number"
            placeholder="Enter registratopm Infromation.."
            name="Registration_num"
            value={editStudent.Registration_num}
            onChange={onHandleChange}
          />

          <br />

          <button className="btn-1">Update</button>
        </div>
      </form>
    </div>
    </>
  );
}

export default EditStudents;
