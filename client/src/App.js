import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import 'antd/dist/antd.css'; 
import './App.css'; 
import SignUp from './Views/Signup';
import Login from './Views/Login';
import FacultyDashboard from './Views/Dashboard/Faculty';
import StudentDashboard from './Views/Dashboard/Student';
import Home from './Views/Home';

function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route exact path="/" exact name="Home page" component={Home} />
            <Route exact path="/signup" name="Signup" component={SignUp} />
            <Route exact path="/Login" name="Login" component={Login} />
            <Route exact path="/faculty-dashboard" name="faculty-dashboard" component={FacultyDashboard} />
            <Route exact path="/student-dashboard" name="student-dashboard" component={StudentDashboard} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
