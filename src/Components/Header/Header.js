import React, {Component} from  'react'
export default class Header extends Component {
  render() {
    return (
      <div>
        <h1>C.L.E.A.N.</h1>
        <p>Cenralized Locator for Extra-terristrial Alien Navigation</p>
        <AddButton addNewSighting={this.props.addNewSighting}/>
      </div>
    )
  }
}
