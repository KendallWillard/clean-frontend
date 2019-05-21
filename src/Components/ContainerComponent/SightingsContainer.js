import React from 'react'
import SightingCard from './SightingCard'

const SightingsContainer = (props) => {

    const allTheSightings = props.sightings.map((sighting, ndx) => <SightingCard {...sighting} key={Date.now() + ndx} />)
   
    return(
        <div>
         <h1>UFO Sightings</h1>
         {allTheSightings}
        </div>
    )
}

export default SightingsContainer