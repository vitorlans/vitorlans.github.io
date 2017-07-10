import React, {Component} from 'react'

export default class Footer extends Component {
    render(){
        return (
        <footer className="w3-container w3-center w3-margin-top">
          <div className="w3-margin">
            <a
              className="w3-padding-small text-decoration--none"
              href="https://facebook.com/vitorlans"
              target="_blank"
              title="Facebook"
              rel="noopener noreferrer"
            >
              <i className="fa fa-facebook-official w3-hover-text-indigo w3-xlarge" />{" "}
            </a>
            {/*<a className="w3-padding-small text-decoration--none" href="https://api.whatsapp.com/send?text=https://vitorlans.github.io" target="_blank" rel="noopener noreferrer" title="Whatsapp" ><i className="fa fa-whatsapp w3-hover-text-green w3-xlarge"></i> </a>*/}
            <a
              className="w3-padding-small text-decoration--none"
              href="https://www.instagram.com/vitorlans"
              target="_blank"
              title="Instagram"
              rel="noopener noreferrer">
              <i className="fa fa-instagram w3-hover-text-purple w3-xlarge" />{" "}
            </a>
            <a
              className="w3-padding-small text-decoration--none"
              href="https://snapchat.com/add/vitorlans"
              target="_blank"
              title="Snapchat"
              rel="noopener noreferrer"
            >
              <i className="fa fa-snapchat w3-hover-text-yellow w3-xlarge" />{" "}
            </a>
            <a
              className="w3-padding-small text-decoration--none"
              href="https://twitter.com/vitorlans"
              target="_blank"
              title="Twitter"
              rel="noopener noreferrer"
            >
              <i className="fa fa-twitter w3-hover-text-light-blue w3-xlarge" />{" "}
            </a>
            <a
              className="w3-padding-small text-decoration--none"
              href="https://github.com/vitorlans"
              target="_blank"
              title="Github"
              rel="noopener noreferrer"
            >
              <i className="fa fa-github w3-hover-text-black w3-xlarge" />{" "}
            </a>
            <a
              className="w3-padding-small text-decoration--none"
              href="https://www.linkedin.com/in/vitorlans"
              target="_blank"
              title="Linkedin"
              rel="noopener noreferrer"
            >
              <i className="fa fa-linkedin w3-hover-text-indigo w3-xlarge" />{" "}
            </a>
          </div>
        </footer>
        )
    }
}