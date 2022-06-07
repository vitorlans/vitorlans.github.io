import React, { Component } from 'react';
import BussinessCard from '../../components/BusinessCard'
import WorkExperience from './WorkExperience'
import Education from './Education'
import Ability from './Ability'
import Language from './Language'
import Skill from './Skill'

// import Footer from './Footer'
import resume from '../../my-resume.json'

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