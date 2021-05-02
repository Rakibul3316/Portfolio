import React from 'react';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function HomePage() {
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hi, I am
                    <span> Rakibul Islam</span>
                </h1>
                <p className="h-sub-text">
                    I am self motivated webdeveloper. I completed 10+ plus projects using React, Node.js, Express.js, MomgoDB, Bootstrap, Material UI.
                </p>
                <div className="icons">
                    <a href="https://www.facebook.com/mdrakib.islamsarker" target="_blank" rel="noreferrer" className="icon-holder">
                        <FontAwesomeIcon icon={faFacebook} className="icon fb" />
                    </a>
                    <a rel="noreferrer" href="https://github.com/Rakibul3316?tab=repositories" target="_blank" className="icon-holder">
                        <FontAwesomeIcon icon={faGithub} className="icon gh" />
                    </a>
                    <a rel="noreferrer" href="https://www.linkedin.com/in/rakibul-islam-sarker-8b817b211/" target="_blank" className="icon-holder">
                        <FontAwesomeIcon icon={faLinkedinIn} className="icon in" />
                    </a>
                </div>
                <div className="download-cv">
                    <a href="https://drive.google.com/file/d/1997q1CQwoo6535ioDKb_35AyTlSevPFX/view?usp=sharing" target="_blank" rel="noreferrer" >
                        <button className="btn">Download Cv</button>
                    </a>
                </div>
            </header>
        </div>
    )
}

export default HomePage;
