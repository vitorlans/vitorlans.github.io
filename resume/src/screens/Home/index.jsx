import React, { Component } from 'react';
import resume from '../../my-resume.json'

class Home extends Component {
    render() {
        return (
            <div>
                <div className="w3-content">
                    <h1 className="w3-center">Resume</h1>
                    <div className="w3-card-4 w3-center">
                        <br/>
                        <img src={resume.photoUrl} alt="Avatar" className="w3-circle" />
                        <div className="w3-container">
                            <h2>{resume.firstName + " " + resume.lastName}</h2>
                        </div>

                        <div className="w3-container">
                            <p><i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>{resume.positionName }</p>
                            <p><i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>{resume.location }</p>
                            <p><i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>{resume.email }</p>
                            {/*<p><i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>{resume.positionName }</p>*/}
                        </div>
                        
                        <div className="w3-container w3-card-2 w3-white w3-margin-bottom">
                            <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Work Experience</h2>
                            <div className="w3-container">
                                <h5 className="w3-opacity"><b>{resume.positions[0].positionTitle} / {resume.positions[0].company}</b></h5>
                                <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>{resume.positions[0].startDate} - <span className="w3-tag w3-teal w3-round">Current</span></h6>
                                <p>{resume.positions[0].positionSummary}</p>

                            </div>
                    </div>

                        {/*<div className="w3-container w3-card-2 w3-white">
                            <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Education</h2>
                            <div className="w3-container">
                                <h5 className="w3-opacity"><b>London Business School</b></h5>
                                <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>2013 - 2015</h6>
                                <p>Master Degree</p>
                                <hr />
                            </div>
                        </div>

                        <div className="w3-container w3-card-2 w3-white">
                            <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Skills</h2>
                            <div className="w3-container">
                                <h5 className="w3-opacity"><b>London Business School</b></h5>
                                <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>2013 - 2015</h6>
                                <p>Master Degree</p>
                                <hr />
                            </div>
                        </div>*/}
                </div>

                </div>
            </div>
        );
    }
}

export default Home;