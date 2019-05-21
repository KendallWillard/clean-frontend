import React, {Component} from  'react'
export default class NewSightingModal extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.addNewSighting}>
          <input placeholder='yeet'>
          <input>
        </form>
      </div>
    )
  }
}
