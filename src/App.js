import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import WorkoutDetails from './components/workouts/WorkoutDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateWorkout from './components/workouts/CreateWorkout';


class App extends Component{
render() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path='/workout/:id' component={WorkoutDetails} />
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />
          <Route path='/createworkout' component={CreateWorkout} />

        </Switch>
      </div>
    </BrowserRouter>
  );
}
}
export default App;
