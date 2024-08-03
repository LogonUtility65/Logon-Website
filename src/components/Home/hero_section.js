import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import heroImage from '../../assets/img/hero-img-1-1.png';
import PopupForm from "../Global/pop_up_form";

const HeroSection = () => {
    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    const handleWhatsappClick = () => {
        window.open("https://wa.me/8591892112/?text=Hi%20Sam%2C%20Whatsup", "_blank", "noopener,noreferrer");
    };

    return (
        <section className="hero-section bg-grey d-flex align-items-center bd-bottom">
            <div className="hero-bg-shape" />
            <div className="anim-elements">
                <div className="anim-element" />
                <div className="anim-element" />
                <div className="anim-element" />
                <div className="anim-element" />
                <div className="anim-element" />
            </div>
            <div className="container">
                <div className="row hero-wrap d-flex align-items-center">
                    <div className="col-lg-6 sm-padding">
                        <div className="hero-content">
                            <h1>Your Trusted partner for Bulk SMS and Whatsapp Marketing</h1>
                            <p>Engage with your customers through Bulk SMS, Voice Calls, WhatsApp Business API, and more.</p>
                            <div className="btn-group">
                                <button id="floating-button-hr" className="default-btn" onClick={togglePopup}>Request a Quote</button>
                                <button className="whatsapp-btn" onClick={handleWhatsappClick}>
                                    <FontAwesomeIcon icon={faWhatsapp} className="whatsapp-icon" /> Chat with Us
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 sm-padding">
                        <img src={heroImage} alt="hero" />
                    </div>
                </div>
            </div>

            {showPopup && <PopupForm onClose={togglePopup} />}
        </section>
    );
}

export default HeroSection;
