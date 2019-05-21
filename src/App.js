import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SightingsContainer from './Components/ContainerComponent/SightingsContainer'


class App extends Component {
  state = {
    incident_occurance: "Incident occurance",
    incident_location: "inc location",
    blood_alcohol_level: "yikes",
    police_department: "police"
  }
  render() {
    return (
      <div className="App">
        <SightingsContainer sightings={this.state} />
      </div>
    );
  }
}

export default App;
