import React, { Component } from 'react';

import './App.css';
import SightingsContainer from './Components/ContainerComponent/SightingsContainer'
import Header from './Components/Header/Header'
import Map from './Components/Map/Map.js'


class App extends Component {

  addNewSighting = event => {
    event.preventDefault()
    alert('YUH YEET')
  }
  render() {
    return (
      <div className="App">
        <Header addNewSighting={this.addNewSighting} />
        <SightingsContainer sightings={this.state} />
      </div>
    );
  }
}

export default App;
