import React, { Component } from 'react';
import resume from '../../my-resume.json'

class WorkExperience extends Component {
    render() {
        return (
            <div className="w3-margin">
                <h2 className="w3-text-grey w3-padding-16">
                    <i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal" />Work
                  Experiences
                </h2>
                <div className="">
                    <h5 className="w3-opacity">
                        <b>
                            {resume.positions[0].positionTitle} {" / "}
                            {resume.positions[0].company}
                        </b>
                    </h5>
                    <h6 className="w3-text-teal">
                        <i className="fa fa-calendar fa-fw w3-margin-right" />
                        {resume.positions[0].startDate} {" - "}
                        {resume.positions[0].endDate}
                        {/* <span className="w3-tag w3-teal w3-round">Current</span> */}
                    </h6>
                    <p style={{ whiteSpace: "pre-wrap" }}>
                        {resume.positions[0].positionSummary}
                    </p>
                </div>
                <hr />
                <div className="">
                    <h5 className="w3-opacity">
                        <b>
                            {resume.positions[1].positionTitle} {" / "}
                            {resume.positions[1].company}
                        </b>
                    </h5>
                    <h6 className="w3-text-teal">
                        <i className="fa fa-calendar fa-fw w3-margin-right" />
                        {resume.positions[1].startDate} {" - "}
                        {resume.positions[1].endDate}
                    </h6>
                    <p style={{ whiteSpace: "pre-wrap" }}>
                        {resume.positions[1].positionSummary}
                    </p>
                </div>
            </div>
        );
    }
}

export default WorkExperience;