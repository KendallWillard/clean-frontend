import React, {Component} from  'react'

import './NewSightingModal.css'

export default class NewSightingModal extends Component {
  render() {
    return (
      !this.props.modalVisibility ? null :
      <div className='newSightingModal'>
        <form onSubmit={this.props.addNewSighting}>
          <input placeholder='yeet'/>
          <input placeholder='meet'/>
          <button onSubmit={this.props.addNewSighting}>Submit</button>
        </form>
      </div>
    )
  }
}
