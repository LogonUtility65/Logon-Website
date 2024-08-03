import React, { useState, useEffect } from 'react';
import '../../App.css';
import Logon_ft_logo from '../../assets/img/logon-ft-logo.png';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Footer() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Google Sheet Form Collection Function
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyS2hebHuw_8EbralgOs8KGlJG1YlxEKqLxahnC5lDBqKHt769jR7sa18xnJKUJGOg8PQ/exec';

    useEffect(() => {
        const form = document.forms['submit-to-google-sheet'];
        if (form) {
            form.addEventListener('submit', handleSubmit);
        }

        // Clean up the event listener on component unmount
        return () => {
            if (form) {
                form.removeEventListener('submit', handleSubmit);
            }
        };
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = document.forms['submit-to-google-sheet'];
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => {
                console.log('Success!', response);
                setIsSubmitted(true);
            })
            .catch(error => console.error('Error!', error.message));
    };

    return (
        <div>
            <section className="widget-section bg-dark padding">
                <div className="left-design" />
                <div className="right-design" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6 sm-padding">
                            <div className="widget-content">
                                <a href="#"><img src={Logon_ft_logo} alt="brand" /></a>
                                <p>Make a customer, not a sale.<br />
                                    We know customer’s need.</p>
                                <div className="social-icons">
                                    <a href="https://www.facebook.com/logonutility" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                                    <a href="https://x.com/LoGonUtility/" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                                    <a href="https://www.instagram.com/logonutility/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                                    <a href="https://www.linkedin.com/company/logonutilitycompany/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-sm-6 sm-padding">
                            <div className="widget-content">
                                <h4 className='new-h3-h4-cls-white'>Quick Links</h4>
                                <ul className="widget-links">
                                    <li><a href="/about-us">About</a></li>
                                    <li><a href="#">Services</a></li>
                                    <li><a href="/pricing-plans">Pricing Plans</a></li>
                                    <li><a href="/case-study">Case Study</a></li>
                                    <li><a href="/blog">Blog</a></li>
                                    <li><a href="/contact">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 sm-padding">
                            <div className="widget-content">
                                <h4 className='new-h3-h4-cls-white'>Office Address</h4>
                                <p>Sonam Saphhire, A-101, Golden Nest Circle, Geeta Nagar, Bhayandar East, Mira Bhayandar, Maharashtra 401105</p>
                                <a href="mailto:info@logonutility.com" className='mail-to'><span>info@logonutility.com</span></a>
                                <a href="tel:+918452059898" className='phone'><span>(+91) 84520 59898</span></a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 sm-padding">
                            <div className="widget-content">
                                <h4 className='new-h3-h4-cls-white'>Newsletter Subscription</h4>
                                <p>Subscribe and get 10% off from our <br />architecture company.</p>
                                <div className="subscribe-box clearfix">
                                    <div className="subscribe-form-wrap">
                                        {isSubmitted ? (
                                            <div className="subscription-success">
                                                Thank you for subscribing!
                                            </div>
                                        ) : (
                                            <form name="submit-to-google-sheet" className="subscribe-form">
                                                <input type="email" name="Email" id="subs-email" className="form-input" placeholder="Enter Your Email Address..." required />
                                                <button type="submit" className="submit-btn">Subscribe</button>
                                                <div id="subscribe-result">
                                                    <p className="subscription-success" />
                                                    <p className="subscription-error" />
                                                </div>
                                            </form>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="footer-section bg-dark align-center">
                <div className="container">
                    <p>&copy; <script> document.write(new Date().getFullYear())</script> Logon Utility. All rights reserved. Developed by Logon Utility.</p>
                </div>
            </footer>

        </div>
    );
}

export default Footer;
