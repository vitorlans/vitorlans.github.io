import React, { Component } from "react";

class BussinessCard extends Component {
  render() {
    let resume = this.props.resume
    let rowPhone = resume.phoneNumber ? (<p>
                      <a className="text-decoration--none" href={' tel:' + resume.phoneNumber.replace(/ /g, '').replace(/-/g, '')} target="_blank" title="Phone" rel="noopener noreferrer" >                              <i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>
                          {resume.phoneNumber}
                      </a>
                    </p>) : null


    return (
      <div className="w3-row">
        <div className="w3-container w3-third">
          <div className="w3-center image--blur">
            <img
              src={resume.photoUrl}
              alt="Avatar"
              style={{
                maxHeight: 220
              }}
              className="w3-image w3-circle"
            />
          </div>
        </div>
        <div className="w3-container w3-twothird">
          <div>
            <h2>
              {resume.firstName + " " + resume.lastName}
            </h2>
          </div>
          <hr />
          <div className="w3-row">
            <div className="w3-half">
              <p>
                <i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal" />
                {resume.positionName}
              </p>
              <p>
                <i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal" />
                {resume.location}
              </p>
              {rowPhone}
              <p>
                <a
                  className="text-decoration--none"
                  href={"mailto:" + resume.email}
                  target="_blank"
                  title="Email"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal" />
                  {resume.email}
                </a>
              </p>
            </div>
            <div className="w3-half">
              <p>
                <a
                  className="text-decoration--none"
                  href={resume.social[3].url}
                  target="_blank"
                  title="Instagram"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-instagram fa-fw w3-margin-right w3-large w3-text-teal" />
                  {resume.social[3].id}
                </a>
              </p>
              <p>
                <a
                  className="text-decoration--none"
                  href={resume.social[0].url}
                  target="_blank"
                  title="Linkedin"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-linkedin fa-fw w3-margin-right w3-large w3-text-teal" />
                  {resume.social[0].id}
                </a>
              </p>
              <p>
                <a
                  className="text-decoration--none"
                  href={resume.social[1].url}
                  target="_blank"
                  title="Github"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-github fa-fw w3-margin-right w3-large w3-text-teal" />
                  {resume.social[1].id}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BussinessCard;
