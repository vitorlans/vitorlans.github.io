import React, {Component} from 'react';

class BussinessCard extends Component {
    render() {
        let resume = this.props.resume;
        return (
                <div className="w3-row">
                    <div className='w3-container w3-third'  >
                        <div className="w3-center image--blur" style={{backgroundImage:`url(${resume.photoUrl})`}} >
                            {/*<img src={resume.photoUrl} alt="Lights" style={{
                                width: '100%', filter: 'blur(5px)' }}/>*/}

                            <img
                                src={resume.photoUrl}
                                alt="Avatar"
                                style={{
                                width: 240
                                
                            }} className="w3-circle"/>

                        </div>
                    </div>
                    <div className="w3-white w3-container w3-twothird">
                        <div>
                            <h2>{resume.firstName + " " + resume.lastName}</h2>
                        </div>
                        <hr />
                        <div className='w3-row'>
                            <div className='w3-half'>
<p>
                            <i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>{resume.positionName}
                        </p>
                          <p>
                            <i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>{resume.location}</p>
<p>
                            <a className="text-decoration--none" href={'mailto:' + resume.email} target="_blank" title="Twitter" rel="noopener noreferrer" >                              <i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>
                          {resume.email}
 </a>

                        </p>
                            </div>
                            <div className='w3-half'>
<p>
                            <a className="text-decoration--none" href={resume.social[2].url} target="_blank" title="Twitter" rel="noopener noreferrer" >                              <i className="fa fa-twitter fa-fw w3-margin-right w3-large w3-text-teal"></i>
                          {resume.social[2].id}
 </a>

                        </p>
<p>
                            <a className="text-decoration--none" href={resume.social[0].url} target="_blank" title="Linkedin" rel="noopener noreferrer" >                              <i className="fa fa-linkedin fa-fw w3-margin-right w3-large w3-text-teal"></i>
                          {resume.social[0].id}
 </a>

                        </p><p>
                            <a className="text-decoration--none" href={resume.social[1].url} target="_blank" title="Github" rel="noopener noreferrer" >                              <i className="fa fa-github fa-fw w3-margin-right w3-large w3-text-teal"></i>
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