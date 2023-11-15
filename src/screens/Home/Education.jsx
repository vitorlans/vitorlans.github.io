import React, { Component } from "react";

import resume from "../../my-resume.json";

class Education extends Component {
  render() {
    return (
      <div className="w3-margin">
        <h2 className="w3-text-grey w3-padding-16">
          <i className="fa fa-book fa-fw w3-margin-right w3-xxlarge w3-text-teal" />
          Education
        </h2>
        <div className="">
          <h5 className="w3-opacity">
            <b>{resume.education[0].schoolName}</b>
          </h5>
          <h6 className="w3-text-teal">
            <i className="fa fa-calendar fa-fw w3-margin-right" />
            {resume.education[0].startDate} {" - "}
            {resume.education[0].endDate}
          </h6>
          <p>{resume.education[0].degree}</p>
          <p style={{ whiteSpace: "pre-wrap" }}>
            {resume.education[0].activities}
          </p>
        </div>
        <hr />
      </div>
    );
  }
}

export default Education;
