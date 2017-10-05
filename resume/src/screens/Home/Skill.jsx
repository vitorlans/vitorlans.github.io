import React, { Component } from 'react';
import resume from '../../my-resume.json'

class Skill extends Component {
    render() {
        let rows = [];
        resume.skillSets.forEach((value, index) => {
            rows.push(
                <span key={index} className="w3-tag w3-teal w3-round margin-4">
                    {value.name}
                </span>
            );
        });
        return (
            <div className="w3-margin">
                <h2 className="w3-text-grey w3-padding-16">
                    <i className="fa fa-asterisk  fa-fw w3-margin-right w3-xxlarge w3-text-teal" />Skills
                </h2>
                <div className="w3-container w3-padding-16">
                    {rows}
                </div>
            </div>
        );
    }
}

export default Skill;