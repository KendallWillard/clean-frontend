import React, {Component} from  'react'

import './NewSightingModal.css'

export default class NewSightingModal extends Component {
  render() {
    return (
      !this.props.modalVisibility ? null :
      <div className='newSightingModal'>
        <form className='modalForm' onSubmit={this.props.addNewSighting}>
          <span onClick={this.props.toggleNewSightingModal} className="close">&times;</span>
          <input name='plausibility' placeholder='plausibility'/>
          <input name='incident_occurrence' placeholder='incident_occurrence'/>
          <input name='incident_location' placeholder='incident_location'/>
          <input name='witness_gibberish' placeholder='witness_gibberish'/>
          <input name='blood_alcohol_level' placeholder='blood_alcohol_level'/>
          <input name='responding_police_department_location' placeholder='responding_police_department_location'/>
          <button onSubmit={this.props.addNewSighting}>Submit</button>
        </form>
      </div>
    )
  }
}
