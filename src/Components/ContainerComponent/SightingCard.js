import React from 'react'

const SightingCard = (props) => {
    return(
        <div>
            <h2>Incident Occurance: {props.incident_occurrence}</h2>
            <h2>Incident Location: {props.incident_location}</h2>
            <h4>Blood Level: {props.blood_alcohol_level}</h4>
            <h4>Police Department: {props.responding_police_department_location}</h4>
        </div>
    )
}

export default SightingCard