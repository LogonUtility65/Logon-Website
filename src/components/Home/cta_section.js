import React, { useState } from "react";
import '../../App.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';


import PopupForm from "../Global/pop_up_form";

function Cta_Section() {
    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };


    return (
        <section className="cta-section bg-dark padding">
            <div className="cta-shape-1" />
            <div className="cta-shape-2" />
            <div className="cta-shape-3" />
            <div className="container">
                <div className="row cta-wrap">
                    <div className="col-lg-8 col-md-6 sm-padding">
                        <div className="cta-content wow fadeInLeft" data-wow-delay="300ms">
                            <h2 className="new-h3-h4-cls-white">Build your Business with Logon Utility</h2>
                            <p>Engage Your Customers with Bulk SMS, Voice Calls, WhatsApp Business API, and More!
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 sm-padding text-right wow fadeInRight" data-wow-delay="300ms">
                        {/* <a href="#" className="default-btn">Get Started Now</a> */}
                        <button id="floating-button-hr" className="default-btn" onClick={togglePopup}>Get Started Now</button>
                    </div>
                </div>
            </div>

            {showPopup && <PopupForm onClose={togglePopup} />}
        </section>
    )
}

export default Cta_Section
