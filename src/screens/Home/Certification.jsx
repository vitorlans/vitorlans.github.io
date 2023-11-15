import React, { Component } from "react";

import resume from "../../my-resume.json";

class Certification extends Component {
  render() {
    return (
      <div className="w3-margin">
        <h2 className="w3-text-grey w3-padding-16">
          <i className="fa fa-graduation-cap fa-fw w3-margin-right w3-xxlarge w3-text-teal" />
          Certifications and Training
        </h2>
        {resume.certificationsTraining.map((cert, index) => {
          return (
            <div key={"cert" + index} className="">
              <div style={{ display: "flex" }}>
                <h5 className="w3-opacity">
                  <b>{cert.schoolName} </b>
                </h5>
                <p style={{ marginLeft: 10, marginTop: 13 }}> {cert.degree}</p>
              </div>

              <h6 className="w3-text-teal" style={{ marginTop: 0 }}>
                <i className="fa fa-calendar fa-fw w3-margin-right" />
                {cert.startDate}
              </h6>
              <hr />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Certification;
