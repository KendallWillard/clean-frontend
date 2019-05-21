import React from 'react'

export default class FilterByDate extends React.Component {


    render() {
        return(
            <div>
                <button onClick={this.props.filterByDate}>Filter By Date</button>
            </div>
        )
    }

}