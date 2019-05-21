import React, {Component} from  'react'

import './NewSightingModal.css'

export default class NewSightingModal extends Component {
  render() {
    return (
      !this.props.modalVisibility ? null :
      <div className='newSightingModal'>
        <form className='modalForm' onSubmit={this.props.addNewSighting}>
          <span onClick={this.props.toggleNewSightingModal} className="close">&times;</span>
          <input name='plausibility' placeholder='Plausibility 1-10'/>
          <input name='incident_occurrence' placeholder='Date of incident'/>
          <input name='incident_location' placeholder='Location'/>
          <input name='witness_gibberish' placeholder='Witness report'/>
          <input name='blood_alcohol_level' placeholder='BAC'/>
          <input name='responding_police_department_location' placeholder='Responding PD'/>
          <button onSubmit={this.props.addNewSighting}>Submit</button>
        </form>
      </div>
    )
  }
}
