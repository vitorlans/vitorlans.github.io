import React, { Component } from 'react';
import resume from '../../my-resume.json'

class WorkExperience extends Component {
    render() {

        
        let positions = resume.positions.map((position, key) => {
            return (
            <div key={key}>
            <div className="">
            <h5 className="w3-opacity">
                <b>
                    {position.positionTitle} {" / "}
                    {position.company}
                </b>
            </h5>
            <h6 className="w3-text-teal">
                <i className="fa fa-calendar fa-fw w3-margin-right" />
                {position.startDate} {" - "}
                {position.isCurrentCompany ? 
                 <span className="w3-tag w3-teal w3-round">Current</span> : position.endDate}
            </h6>
            <p style={{ whiteSpace: "pre-wrap" }}>
                {position.positionSummary}
            </p>
        </div>
        <hr />
        </div>)
        })

        return (
            <div className="w3-margin">
                <h2 className="w3-text-grey w3-padding-16">
                    <i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal" />Work
                  Experiences
                </h2>
                {positions}
            </div>
        );
    }
}

export default WorkExperience;