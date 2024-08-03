import React from 'react';
import '../../App.css';


function WebSearchSection() {
    const whatsappNumber = "8591892112"; // Replace with your WhatsApp number
    const whatsappLink = `https://wa.me/${whatsappNumber}`;

    return (
        <section className="web-search-section bg-dark padding">
            <div className="left-design" />
            <div className="right-design" />
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="section-heading text-center mb-40 wow fadeInUp" data-wow-delay="300ms">
                            {/* <span>Ready To Grow</span> */}
                            <h3 className="new-h3-h4-cls-white ready-to-grw">
                            Ready to Boost Your Reach? Contact Us Today to Get Started!

                            </h3>
                        </div>
                        <div className="whatsapp-call-button text-center">
                            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="default-btn call-us-wp">
                                Call Us on WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cloud" />
        </section>
    );
}

export default WebSearchSection;
