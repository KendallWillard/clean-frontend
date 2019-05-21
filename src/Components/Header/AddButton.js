import React, {Component} from  'react'
export default class AddButton extends Component {
  render() {
    return (
      <button onClick={this.props.showNewSightingModal}>Report New Sighting</button>
    )
  }
}
