import React, { Component } from 'react';
import resume from '../../my-resume.json'

class Ability extends Component {
    render() {
        return (
              <div className="w3-margin">
                <h2 className="w3-text-grey w3-padding-16">
                  <i className="fa fa-star fa-fw w3-margin-right w3-xxlarge w3-text-teal" />Abilities
                  </h2>
                <div>
                  <p style={{ whiteSpace: "pre-wrap" }}>
                    - {resume.ability[0].description}
                  </p>
                  <p style={{ whiteSpace: "pre-wrap" }}>
                    - {resume.ability[1].description}
                  </p>
                  <p style={{ whiteSpace: "pre-wrap" }}>
                    - {resume.ability[2].description}
                  </p>
                  <p style={{ whiteSpace: "pre-wrap" }}>
                    - {resume.ability[3].description}
                  </p>
                  <p style={{ whiteSpace: "pre-wrap" }}>
                    - {resume.ability[4].description}
                  </p>
                </div>
              </div>
        );
    }
}

export default Ability;