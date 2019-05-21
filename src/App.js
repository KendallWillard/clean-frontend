import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  addNewSighting = event => {
    event.preventDefault()
    alert('YUH YEET')
  }
  render() {
    return (
      <div className="App">
        <Header addNewSighting={this.addNewSighting} />
      </div>
    );
  }
}

export default App;
