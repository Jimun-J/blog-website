import React from 'react'
import { Link } from 'react-router-dom'
import './Contact.css'
import CallMadeIcon from '@mui/icons-material/CallMade';
import MapImage from '../../assets/map.png'
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Contact = () => {
    return (
        <div className="Contact">
            <div className="contact-container">
                <div className="text-wrap">
                    <h2 className="title">Contact</h2>
                    <div className="subtitle">For all enquiries, please go to the following page and email us</div>
                </div>
                <div className="contact-wrap">
                    <div>
                        {/* This section can be further developed with google map api (with billing option) */}
                        <img src={MapImage} alt="google-map-location" className="map-img" />
                    </div>
                    <div className="contact-info-wrapper">
                        <h3>Meet Us</h3>
                        <div className="text-wrap">
                            <div className="cellphone">
                                <CallIcon style={{ marginRight: '10px' }} />
                                778-887-6612
                            </div>
                            <div className="email">
                                <EmailIcon style={{ marginRight: '10px' }} />
                                wkdwlans009@gmail.com
                            </div>
                            <div className="location">
                                <LocationOnIcon style={{ marginRight: '10px' }} />
                                707 Como Lake Ave, Coquitlam, BC
                            </div>
                        </div>
                    </div>
                    <div className="pitch-us">
                        <h3>Pitch Us</h3>
                        <div className="text-wrap">
                            hello, <br /><br />
                            For all enquiries, please go to the following page and email us
                        </div>
                        <Link className="read-more" to="/contact" style={{ marginLeft: '20px'}}>
                            Contact
                            <CallMadeIcon style={{ fontSize: '16px', marginLeft: '5px', transform: 'translateY(3px)' }} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact