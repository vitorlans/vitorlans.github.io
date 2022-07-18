import React, { Component } from "react";

import resume from "../../my-resume.json";

class Ability extends Component {
  render() {
    return (
      <div className="w3-margin">
        <h2 className="w3-text-grey w3-padding-16">
          <i className="fa fa-star fa-fw w3-margin-right w3-xxlarge w3-text-teal" />
          Abilities
        </h2>
        <div>
          {resume.ability.map((a, idx) => (
            <p key={idx} style={{ whiteSpace: "pre-wrap" }}>
              - {a.description}
            </p>
          ))}
        </div>
      </div>
    );
  }
}

export default Ability;
