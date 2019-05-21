import React, {Component} from  'react'
import AddButton from './AddButton.js'
import NewSightingModal from './NewSightingModal'
import logo from '../../logoAlien.png'
export default class Header extends Component {

  render() {
    return (
      <div>
        <img src={logo} alt='CLEAN Logo'/>
        <h1 className='title' >C.L.E.A.N.</h1>
        <p className='subtitle'>Centralized Locator for Extra-terrestrial Alien Navigation</p>
        <AddButton toggleNewSightingModal={this.props.toggleNewSightingModal}/>
        <NewSightingModal toggleNewSightingModal={this.props.toggleNewSightingModal} modalVisibility={this.props.modalVisibility} addNewSighting={this.props.addNewSighting}/>
      </div>
    )
  }
}
