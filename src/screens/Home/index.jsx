import React, { Component } from "react";

import Ability from "./Ability";
import BussinessCard from "../../components/BusinessCard";
import Certification from "./Certification";
import Education from "./Education";
import Language from "./Language";
import Skill from "./Skill";
import WorkExperience from "./WorkExperience";
import resume from "../../my-resume.json";

// import Footer from './Footer'

class Home extends Component {
  render() {
    return (
      <div>
        <header>
          <h1 className="w3-center">Resumé</h1>
        </header>

        <div className="w3-padding">
          <BussinessCard resume={resume} />

          <div className="w3-row">
            <div className="w3-twothird">
              <WorkExperience />

              <Education />

              <Certification />

              <Ability />
            </div>
            <div className="w3-third">
              <Language />

              <Skill />
            </div>
          </div>
        </div>

        {/* <Footer />  */}
      </div>
    );
  }
}

export default Home;
