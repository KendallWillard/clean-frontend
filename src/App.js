import React, { Component } from 'react';
import Header from './Components/Header/Header.js'
import logo from './logo.svg';
import './App.css';
import SightingsContainer from './Components/ContainerComponent/SightingsContainer'


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
