import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com';
import "../App.css";
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Contact = () => {
    const [formMessage, setFormMessage] = useState('');
    const navigate = useNavigate(); // Hook to navigate programmatically

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ltbxodr', 'template_ca449bn', e.target, 'eJD8KcckxNYfTatsq')
            .then((result) => {
                console.log(result.text);
                setFormMessage('Thank you! Your message has been sent.');
                e.target.reset();
                setTimeout(() => {
                    navigate('/thank-you'); // Redirect to the Thank You page
                }, 2000); // Redirect after 2 seconds
            }, (error) => {
                console.log(error.text);
                setFormMessage('Oops! Something went wrong, please try again.');
            });
    };

    return (
        <HelmetProvider>
            <div>
                <Helmet>
                    <title>Contact Us - Logon Utility</title>
                    <meta name="description" content="Contact Dynamic Layers for architecture services. Get in touch with us today!" />
                </Helmet>

                <section className="contact-section padding">
                    {/* <div className="mapouter">
                        <div className="gmap_canvas">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15062.794579874042!2d72.858354!3d19.295467!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b13d44ce705d%3A0x4944dbd243f6ca5d!2sLogon%20Utility!5e0!3m2!1sen!2sin!4v1720787172205!5m2!1sen!2sin"
                                width="100%"
                                height="550"
                                style={{ border: '0' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                            <a href="https://www.emojilib.com" />
                        </div>
                    </div> */}

                    <div className="map" />

                    <div className="container" style={{ marginTop: '60px' }}>
                        <div className="contact-wrap d-flex align-items-center row">
                            <div className="col-lg-6 sm-padding">
                                <div className="contact-info">
                                    <h2>Get in touch with us &amp; <br />send us message today!</h2>
                                    <p>Have questions or need support? Fill out the form below, and we’ll get back to you soon. For immediate assistance, email us at [your email address] or call [your phone number]. We’re here to help!</p>

                                    <h3>New Shanti Nagar, Bldg No. A-6, Sector 5,<br />Near Rasaz Mall, Mira Road West,<br />Mira Bhayandar, Maharashtra 401107</h3>

                                    {/* <h3>Sonam Saphhire, A-101, Golden Nest Circle,<br />Geeta Nagar, Bhayandar East,<br />Mira Bhayandar, Maharashtra 401105</h3> */}

                                    <h4><span>Email:</span> <a href="mailto:info@logonutility.com" className='mail-to'><span>info@logonutility.com</span></a> <br />
                                        <span>Phone:</span><a href="tel:+918452059898" className='phone'><span>(+91) 84520 59898</span></a>
                                    </h4>
                                </div>
                            </div>

                            <div className="col-lg-6 sm-padding">
                                <div className="contact-form">
                                    <form action="" method="post" id="ajax_form" className="form-horizontal" onSubmit={handleSubmit}>
                                        <div className="form-group colum-row row">
                                            <div className="col-sm-12">
                                                <input type="text" id="name" name="name" className="form-control" placeholder="Name" required />
                                            </div>
                                        </div>
                                        <div className="form-group colum-row row">
                                            <div className="col-sm-12">
                                                <input type="email" id="email" name="email" className="form-control" placeholder="Email" required />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-md-12">
                                                <input id="number" name="phone" className="form-control" placeholder="Phone" required />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-md-12">
                                                <textarea id="message" name="message" cols={30} rows={5} className="form-control message" placeholder="Message" required defaultValue={""} />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-md-12">
                                                <button id="submit" className="default-btn btn-blue" type="submit">Send Message</button>
                                            </div>
                                        </div>
                                        <div id="form-messages" className="alert" role="alert">
                                            {formMessage}
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </HelmetProvider>
    );
};

export default Contact;
