import React from "react";
import "./App.css";
import {Component} from "react";
import Routes from "./Routes";



class App extends Component {
  render() {
    return (
      <div className='app'>
        <Routes />
        {/* <WorkoutForm /> */}
      </div>
    );
  }
}

export default App;
