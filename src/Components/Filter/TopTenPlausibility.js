import React from 'react'

export default class TopTenPlausibility extends React.Component {


    render() {
        return (
            <div>
                <button className='myButton' onClick={this.props.topTenPlausible}>Show Top 10 Most Plausible Cases</button>
            </div>
        )
    }
}
