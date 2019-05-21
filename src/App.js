import React, { Component } from 'react';
const BASE_URL = 'https://rocky-ridge-92628.herokuapp.com/sightings'
import './App.css';
import SightingsContainer from './Components/ContainerComponent/SightingsContainer'
import Header from './Components/Header/Header'
// import Map from './Components/Map/Map.js'
import FilterByDate from './Components/Filter/FilterByDate'
import TopTenPlausibility from './Components/Filter/TopTenPlausibility'
const store = []

class App extends Component {
  componentDidMount() {
    fetch(BASE_URL)
    .then(response => response.json())
    .then(sightings => {
      this.setState({sightings})
      store.push(sightings)
    })
    .catch(error => console.error(error))
  }
  state = {
    modalVisibility: false,
    sightings: []
  }

  addNewSighting = event => {
    event.preventDefault()
    const formData = new FormData(event.target)
    let postData = {
      plausibility: formData.get('plausibility'),
      incident_occurrence: formData.get('incident_occurrence'),
      incident_location: formData.get('incident_location'),
      witness_gibberish: formData.get('witness_gibberish'),
      blood_alcohol_level: formData.get('blood_alcohol_level'),
      responding_police_department_location: formData.get('responding_police_department_location'),
      incident_lat: 0,
      incident_long: 0
    }
    fetch(BASE_URL, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(postData)
    }).then(this.toggleNewSightingModal)
  }
  toggleNewSightingModal = _ => {
    this.setState({modalVisibility: this.state.modalVisibility ? false : true})
  }

  zeroOutState = () => {
    this.setState({
      sightings: []
    })
  }
  refillState = () => {
    this.setState({
      sightings: store
    })
  }
  render() {
    return (
      <div className="App">
        <Header modalVisibility={this.state.modalVisibility} addNewSighting={this.addNewSighting} toggleNewSightingModal={this.toggleNewSightingModal}/>
        <SightingsContainer sightings={this.state.sightings} />
        {/* <Map sightings={this.state.sightings}/> */}
      </div>
    )
  }
}

export default App;
