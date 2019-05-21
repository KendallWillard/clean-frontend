import React, { Component } from 'react';
const BASE_URL = 'https://rocky-ridge-92628.herokuapp.com/sightings'
import './App.css';
import SightingsContainer from './Components/ContainerComponent/SightingsContainer'
import Header from './Components/Header/Header'
import Map from './Components/map/map.js'
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
    sightings: [{incident_occurrence: "2002-07-17T00:00:00.000",
      incident_location: 'Denver',
      latitude: 39.73,
      longitude: -104.999,
      blood_alcohol_level: 0.4,
      responding_police_department_location: 'California',
      plausibility: 8
      },
      {incident_occurrence: "2007-07-17T00:00:00.000",
      incident_location: 'Los Angelos',
      latitude: 34.65,
      longitude: 118.453,
      blood_alcohol_level: 0.9,
      responding_police_department_location: 'LAPD',
      plausibility: 3
      }
    ]
  }
  filterByDate = () => {
    this.setState({
      sightings: this.state.sightings.sort((alpha, beta) => beta.incident_occurrence.localeCompare(alpha.incident_occurrence))
    })
  }
  topTenPlausible = () => {
    const topTenSightings = this.getTopTenSightings();
    this.zeroOutState();
    this.setState({
      sightings: topTenSightings
    })
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
      responding_police_department_location: formData.get('responding_police_department_location')
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
  getTopTenSightings = () => {
    const sortedByPlausibility = this.state.sightings.sort((alpha, beta) => alpha.plausibility < beta.plausibility )
    return sortedByPlausibility.slice(0, 10)
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
        <TopTenPlausibility topTenPlausible={this.topTenPlausible}/>
        <SightingsContainer sightings={this.state.sightings} />
        <Map sightings={this.state.sightings}/>
        <FilterByDate filterByDate={this.filterByDate} />
      </div>
    );
  }
}

export default App;
