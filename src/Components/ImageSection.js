import React from 'react';
import about from '../img/about.jpg';

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt="" />
            </div>
            <div className="about-info">
                <h4>I am<span> Rakibul Islam</span></h4>
                <p className="about-text">
                    I am a student of Mathematics but programming is my interset. I am some much expert in the development and desinging field. I am created many customer friendly and looking good design.
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Address</p>
                        <p>Country</p>
                    </div>
                    <div className="right-section">
                        <p>: Rakibul Islam Sarker</p>
                        <p>: 23</p>
                        <p>: Bangaldeshi</p>
                        <p>: Bangla, English</p>
                        <p>: Manda, Mugda, Dhaka-1214</p>
                        <p>: Bangladesh</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageSection;
