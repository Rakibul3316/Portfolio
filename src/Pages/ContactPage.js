import React from 'react'
import ContactItem from '../Components/ContactItem';
import phone from '../img/phone.svg';
import email from '../img/emailme.svg';
import location from '../img/location.svg';
import Tittle from '../Components/Tittle';

function ContactPage() {
    return (
        <div>
            <div className="title">
                <Tittle title={'Contact Me'} span={'Contect Me'} />
            </div>
            <div className="ContactPage">
                <div className="map-sect">
                    <form action="">
                        <p>
                            <input type="text" placeholder="Enter Your name" />
                        </p>
                        <p>
                            <input type="email" placeholder="Enter Your Email" />
                        </p>
                        <p>
                            <textarea cols="30" rows="10" placeholder="Enter your comment" ></textarea>
                        </p>
                        <button type="submit">Submit</button>
                    </form>
                </div>
                <div className="contact-sect">
                    <ContactItem icon={phone} text1={'01888684341'} text2={'01980495857'} title={'Mobile'} />
                    <ContactItem icon={email} text1={'mathrakib3316@gmail.com'} text2={'service.rakib4341@gmail.com'} title={'Email'} />
                    <ContactItem icon={location} text1={'Manda,Mugda,Dhaka-1214'} text2={'Bangladesh'} title={'Address'} />
                </div>
            </div>
        </div>
    )
}

export default ContactPage;
