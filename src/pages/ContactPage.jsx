import React, { useRef, useState, forwardRef } from 'react';
import emailjs from 'emailjs-com'
import './ContactPage.css'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Section05/Footer'
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const ContactPage = ({ scrollToTop }) => {
    const formRef = useRef();
    const [open, setOpen] = useState(false);
    const [fail, setFail] = useState(false);

    const Alert = forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        e.target.reset();
        emailjs.sendForm(
            process.env.REACT_APP_EMAILJS_SERVICE_ID, 
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID, 
            formRef.current, 
            process.env.REACT_APP_EMAILJS_APIKEY)
            .then((result) => {
                setOpen(true);
            }, (error) => {
                setFail(true);
            });
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
        setFail(false);
    };

    return (
        <div className="ContactPage">
            <Navbar scrollToTop={scrollToTop}/>
            <div className='contactPage-container'>
                <div className="title">
                    Page <br />
                    <span style={{ color: "black" }}>Contact</span>
                </div>
                <div className="contactPage-contact">
                    <div className="bg"></div>
                    <div className="title" style={{ color: 'black' }}>Let's Start a Conversation</div>
                    <div className="contact-info-wrapper" style={{ backgroundColor: "white" }}>
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
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input type="text" placeholder="Name" name="user_name" autoComplete='off'/>
                        <input type="text" placeholder="Subject" name="user_subject" autoComplete='off'/>
                        <input type="text" placeholder="Email" name="user_email" autoComplete='off' />
                        <textarea rows="5" placeholder='Message' name="message" style={{ width: "100%" }} />
                        <button>Submit</button>
                    </form>

                </div>
            </div>
            <Footer scrollToTop={scrollToTop} />
            
            <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    You Message is Successfully Sent!
                </Alert>
            </Snackbar>

            <Snackbar open={fail} autoHideDuration={5000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                    You Message Cannot be Sent!
                </Alert>
            </Snackbar>
        </div>
    )
}

export default ContactPage