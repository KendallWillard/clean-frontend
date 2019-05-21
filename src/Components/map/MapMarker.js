import React from 'react'
import spaceship from './green-alien-spaceship-animated.png'

export default class MapMarker extends React.Component {



  render() {
    return(
      <div>
        <p>{this.props.text}</p>
        <img className="marker" src={spaceship} alt="ufo" />
      </div>
    )
  }
}
