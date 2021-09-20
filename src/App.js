import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from './components/Pages/Home';
import CourseContainer from './components/Pages/CourseContainer';
import CourseDetails from './components/Pages/CourseDetails';
import Instructor from './components/Pages/Instructor';
import Students from './components/Pages/Students';
import StudentForm from './components/Forms/StudentForm';
import EditStudents from './components/Forms/EditStudents';
import InstructorForm from './components/Forms/InstructorForm';
import InstructorDetails from './components/Pages/InstructorDetails';
import Footer from './components/Pages/Footer';
import Navbar from './components/NavBar/Navbar';
import CourseForm from './components/Forms/CourseForm';
import Contact from './components/Pages/Contact';




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
          <Route exact path="/course/add">
            <CourseForm />
          </Route>
          <Route exact path="/contact">
           <Contact />
          </Route>
      </Switch>
    
    </div>
        <Footer />
    </Router>
  );
}

export default App;
