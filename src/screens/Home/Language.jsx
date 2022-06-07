import React, { Component } from 'react';
import resume from '../../my-resume.json'

class Language extends Component {
    render() {
        return (
            <div className="w3-margin">
                <h2 className="w3-text-grey w3-padding-16">
                    <i className="fa fa-language fa-fw w3-margin-right w3-xxlarge w3-text-teal" />Languagues
                </h2>
                <div className="w3-container w3-padding-16">
                    <p>
                        {resume.languages[0].name}
                    </p>
                    <div className="w3-light-grey w3-round-xlarge">
                        <div
                            className="w3-round-xlarge w3-teal"
                            style={{
                                height: 24,
                                width: resume.languages[0].knowledge + "%"
                            }}
                        />
                    </div>
                    <p>
                        {resume.languages[1].name}
                    </p>
                    <div className="w3-light-grey w3-round-xlarge">
                        <div
                            className="w3-round-xlarge w3-teal"
                            style={{
                                height: 24,
                                width: resume.languages[1].knowledge + "%"
                            }}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Language;