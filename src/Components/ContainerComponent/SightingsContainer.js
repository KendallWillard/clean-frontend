import React from 'react'
import SightingCard from './SightingCard'
import FilterByDate from '../../Components/Filter/FilterByDate'
import TopTenPlausibility from '../../Components/Filter/TopTenPlausibility'
import Map from '../../Components/Map/Map.js'
export default class SightingsContainer extends React.Component {
    state = {
        currIndex: 0,
        currentSightings: this.props.sightings.splice(0, 30)
    }

    allTheSightings = () => {
        return this.state.currentSightings.map((sighting, ndx) => <SightingCard {...sighting} key={sighting.id} />)
    }


    nextThirtySightings = () => {
        this.setState({currIndex: this.state.currIndex + 30})
        this.zeroOutState()
        this.setState({
            currentSightings: this.props.sightings.splice(this.state.currIndex, 30)
        })
    }

    filterByDate = () => {
        this.setState({
          currentSightings: this.state.currentSightings.sort((alpha, beta) => beta.incident_occurrence.localeCompare(alpha.incident_occurrence))
        })
      }

    getTopTenSightings = () => {
        const sortedTopTen = (this.props.sightings.sort((alpha, beta) => alpha.plausibility - beta.plausibility )).reverse()
        return sortedTopTen.splice(0, 10)
    }


  zeroOutState = () => {
    this.setState({
      currentSightings: []
    })
  }


  topTenPlausible = () => {
    const topTenSightings = this.getTopTenSightings();
    this.zeroOutState();
    this.setState({
      currentSightings: topTenSightings
    })
  }


    render() {
        {console.log(this.state.currentSightings)}
        return(
            <div>
             <h1>UFO Sightings</h1>
             <Map sightings={this.state.currentSightings} />
             <FilterByDate filterByDate={this.filterByDate} />
             <TopTenPlausibility topTenPlausible={this.topTenPlausible}/>
             <button className='myButton' onClick={this.nextThirtySightings}>Next Thirty Sightings</button>
             {this.allTheSightings()}
            </div>
        )
    }
}
