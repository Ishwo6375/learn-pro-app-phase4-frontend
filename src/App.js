import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from './Pages/Home';
import Navbar from './NavBar/Navbar';
import CourseContainer from './Pages/CourseContainer';
import CourseDetails from './Pages/CourseDetails';
import Instructor from './Pages/Instructor';
import Students from './Pages/Students';
import Enrollment from './Pages/Enrollment';
import StudentForm from './Forms/StudentForm';
import EditStudents from './Forms/EditStudents';
import InstructorForm from './Forms/InstructorForm';
import InstructorDetails from './Pages/InstructorDetails';




function App() {
  return (
    <Router> 
    <div className="div-container">
      <Navbar />
      <Switch>
      <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/courses">
           <CourseContainer />
          </Route>
           <Route exact path="/courses/:id">
            <CourseDetails />
          </Route>
          <Route exact path="/instructors">
           <Instructor />
          </Route>
           <Route exact path="/students">
           <Students />
          </Route>
           {/* <Route exact path="/enrollments">
          <Enrollment />
          </Route> */}
          <Route exact path="/enroll">
         <StudentForm />
          </Route>
          <Route exact path="/students/edit/:id">
            <EditStudents />
          </Route>
          <Route exact path="/instructor/add">
            <InstructorForm />
          </Route>
          <Route exact path="/instructors/:id">
            <InstructorDetails />
          </Route>
          
      </Switch>
    </div>
    </Router>
  );
}

export default App;
