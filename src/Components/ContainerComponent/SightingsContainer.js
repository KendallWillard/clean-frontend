import React from 'react'
import SightingCard from './SightingCard'

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
        this.setState({
            currentSightings: this.props.sightings.splice(this.state.currIndex, this.state.currIndex + 30)
        })
    }

    render() {
        return(
            <div>
             <h1>UFO Sightings</h1>
             <button onClick={this.nextThirtySightings}>Next Thirty Sightings</button>
             {this.allTheSightings()}
            </div>
        )
    }
}

