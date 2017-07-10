import React, { Component } from 'react';
import BussinessCard from '../../components/BusinessCard'
import Footer from './Footer'
import resume from '../../my-resume.json'

class Home extends Component {
  render() {
    let rows = [];
    resume.skillSets.forEach((value, index) => {
      rows.push(
        <span key={index} className="w3-tag w3-teal w3-round margin-4">
          {value.name}
        </span>
      );
    });
    console.log(resume.positions[0].positionSummary);
    return (
      <div>
        <header>
          <h1 className="w3-center">Resumé</h1>
        </header>

        <div className="w3-padding">
          <BussinessCard resume={resume} />

          <div className="w3-row">
            <div className="w3-twothird">
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
                    <span className="w3-tag w3-teal w3-round">Current</span>
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
              <div className="w3-margin">
                <h2 className="w3-text-grey w3-padding-16">
                  <i className="fa fa-book fa-fw w3-margin-right w3-xxlarge w3-text-teal" />Education
                </h2>
                <div className="">
                  <h5 className="w3-opacity">
                    <b>
                      {resume.education[0].schoolName}
                    </b>
                  </h5>
                  <h6 className="w3-text-teal">
                    <i className="fa fa-calendar fa-fw w3-margin-right" />
                    {resume.education[0].startDate} {" - "}
                    {resume.education[0].endDate}
                  </h6>
                  <p>
                    {resume.education[0].degree}
                  </p>
                  <p style={{ whiteSpace: "pre-wrap" }}>
                    {resume.education[0].activities}
                  </p>
                </div>
              </div>
            </div>
            <div className="w3-third">
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
              <div className="w3-margin">
                <h2 className="w3-text-grey w3-padding-16">
                  <i className="fa fa-asterisk  fa-fw w3-margin-right w3-xxlarge w3-text-teal" />Skills
                </h2>
                <div className="w3-container w3-padding-16">
                  {rows}
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Home;