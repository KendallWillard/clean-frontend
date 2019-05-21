import React, {Component} from  'react'
export default class AddButton extends Component {
  render() {
    return (
      <button className="myButton" onClick={this.props.toggleNewSightingModal}>Report New Sighting</button>
    )
  }
}
