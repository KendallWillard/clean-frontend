import React, {Component} from  'react'
import AddButton from './AddButton.js'
import NewSightingModal from './NewSightingModal'
export default class Header extends Component {

  render() {
    return (
      <div>
        <h1 className='title' >C.L.E.A.N.</h1>
        <p className='subtitle'>Cenralized Locator for Extra-terristrial Alien Navigation</p>
        <AddButton toggleNewSightingModal={this.props.toggleNewSightingModal}/>
        <NewSightingModal toggleNewSightingModal={this.props.toggleNewSightingModal} modalVisibility={this.props.modalVisibility} addNewSighting={this.props.addNewSighting}/>
      </div>
    )
  }
}
