import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import ExercisesList from './components/Exercise/ExercisesList';
import EditExercise from './components/Exercise/EditExercise';
import CreateExercise from './components/Exercise/CreateExercise';
import CreateUser from './components/User/CreateUser';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={ExercisesList}></Route>
        <Route path="/edit/:id" exact component={EditExercise}></Route>
        <Route path="/create" component={CreateExercise}></Route>
        <Route path="/user" component={CreateUser}></Route>
      </div>
    </Router>
  );
}

export default App;
