import React, { Component } from 'react';
import resume from '../../my-resume.json'

class Home extends Component {
    render() {
        let rows = [];
        resume.skillSets.forEach((value, index) => {
            rows.push(<span key={index} className="w3-tag w3-teal w3-round margin-4">{value.name}</span>);
        })

        return (
            <div>
                <header>
                    <h1 className="w3-center">Resume</h1>
                </header>
                <div className="w3-center">
                    <div className="w3-card-4 w3-margin">
                        <img src={resume.photoUrl} alt="Avatar" style={{ height: 150, width: 150, marginTop: 10 }} className="w3-circle" />
                        <div className="w3-container">
                            <h2>{resume.firstName + " " + resume.lastName}</h2>
                        </div>

                        <div className="w3-container">
                            <p><i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>{resume.positionName}</p>
                            <p><i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>{resume.location}</p>
                            <p><i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>{resume.email}</p>
                            {/*<p><i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>{resume.positionName }</p>*/}
                        </div>
                    </div>

                    <div className="w3-card-4 w3-margin">
                        <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Work Experience</h2>
                        <div className="w3-container">
                            <h5 className="w3-opacity"><b>{resume.positions[0].positionTitle} / {resume.positions[0].company}</b></h5>
                            <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>{resume.positions[0].startDate} - <span className="w3-tag w3-teal w3-round">Current</span></h6>
                            <p>{resume.positions[0].positionSummary}</p>
                        </div>
                    </div>
                            <div className='w3-card-4 w3-margin'>
                                <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Education</h2>
                                <div className="w3-container">
                                    <h5 className="w3-opacity"><b>{resume.education[0].schoolName}</b></h5>
                                    <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>{resume.education[0].startDate} - {resume.education[0].endDate}</h6>
                                    <p>{resume.education[0].degree}</p>
                                </div>
                            </div>
                            <div className="w3-card-4 w3-margin">
                                <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Languagues</h2>
                                <div className="w3-container w3-padding-16">
                                    <p>{resume.languages[0].name}</p>
                                    <div className="w3-light-grey w3-round-xlarge">
                                        <div className="w3-round-xlarge w3-teal" style={{height:24, width: resume.languages[0].knowledge+'%'}}></div>
                                    </div>
                                    <p>{resume.languages[1].name}</p>
                                    <div className="w3-light-grey w3-round-xlarge">
                                        <div className="w3-round-xlarge w3-teal" style={{height:24, width: resume.languages[1].knowledge+'%'}}></div>
                                    </div>
                            </div>
                    </div>
                    <div className="w3-card-4 w3-margin">
                        <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Skills</h2>
                        <div className="w3-container w3-padding-16">
                            {rows}
                        </div>
                    </div>
                </div>
                <footer className="w3-container w3-center w3-margin-top">
                    {/*  */}
                    <div className="w3-margin">
                        <a className="w3-padding-small" href="https://facebook.com/vitorlans" target="_blank" title="Facebook" rel="noopener noreferrer" ><i className="fa fa-facebook-official w3-hover-text-indigo w3-xlarge"></i> </a>
                        <a className="w3-padding-small" href="whatsapp://send?text=https://vitorlans.github.io" target="_blank" rel="noopener noreferrer" title="Whatsapp" ><i className="fa fa-whatsapp w3-hover-text-green w3-xlarge"></i> </a>
                        <a className="w3-padding-small" href="https://www.instagram.com/vitorlans" target="_blank" title="Instagram" rel="noopener noreferrer"><i className="fa fa-instagram w3-hover-text-purple w3-xlarge"></i> </a>
                        <a className="w3-padding-small" href="https://snapchat.com/add/vitorlans" target="_blank" title="Snapchat" rel="noopener noreferrer"><i className="fa fa-snapchat w3-hover-text-yellow w3-xlarge"></i> </a>
                        <a className="w3-padding-small" href="https://twitter.com/vitorlans" target="_blank" title="Twitter" rel="noopener noreferrer" ><i className="fa fa-twitter w3-hover-text-light-blue w3-xlarge"></i> </a>
                        <a className="w3-padding-small" href="https://github.com/vitorlans" target="_blank" title="Github" rel="noopener noreferrer"><i className="fa fa-github w3-hover-text-black w3-xlarge"></i> </a>
                        <a className="w3-padding-small" href="https://www.linkedin.com/in/vitorlans" target="_blank" title="Linkedin" rel="noopener noreferrer" ><i className="fa fa-linkedin w3-hover-text-indigo w3-xlarge"></i> </a>
                    </div>
                </footer>
            </div>

        );
    }
}

export default Home;