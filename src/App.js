import React, { Component } from 'react';

import './App.css';
import SightingsContainer from './Components/ContainerComponent/SightingsContainer'
import Header from './Components/Header/Header'
import Map from './Components/Map/Map.js'


class App extends Component {
  state = {
    sightings: [{incident_occurence: 'Monday',
      incident_location: 'Denver',
      latitude: 39.73,
      longitude: 104.999,
      blood_alcohol_level: 0.4,
      responding_police_department_location: 'Denver'}]
    }

  addNewSighting = event => {
    event.preventDefault()
    alert('YUH YEET')
  }
  render() {
    return (
      <div className="App">
        <Header addNewSighting={this.addNewSighting} />
        <SightingsContainer sightings={this.state.sightings} />
        <Map />
      </div>
    );
  }
}

export default App;
