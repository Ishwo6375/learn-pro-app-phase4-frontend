import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from './Pages/Home';

function App() {
  return (
    <div>
      <Home />
    </div>
  );
}

export default App;
