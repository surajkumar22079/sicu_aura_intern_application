import React from 'react';
import "./Job_card.css";
// import { connect } from 'react-redux';
import location_vector from "../Images/location_vector.png";
import duration_vector from "../Images/duration_vector.png"

const Job_card = (props) => {
    return (
        <div className='Job_card'>
            <div className="left">
                <h3>{props.heading}</h3>
                <div className="loc_duration">
                    <div className="loc_duration_block">
                        <img src={location_vector} alt="" />
                        <h4>{props.location}</h4>
                    </div>
                    <div className="loc_duration_block">
                        <img src={duration_vector} alt="" />
                        <h4>{props.start_time} - {props.end_time} years</h4>
                    </div>
                </div>
            </div>
            <button className='btn'>View Job</button>
        </div>
    )
}

export default Job_card;