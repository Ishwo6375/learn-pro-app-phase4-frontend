import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from './Pages/Home';
import About from './Pages/About';
import Navbar from './NavBar/Navbar';
import CourseContainer from './Pages/CourseContainer';
import CourseDetails from './Pages/CourseDetails';
import Instructor from './Pages/Instructor';
import Students from './Pages/Students';

function App() {
  return (
    <Router> 
    <div className="div-container">
      <Navbar />
      <Switch>
      <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
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
          
      </Switch>
    </div>
    </Router>
  );
}

export default App;
