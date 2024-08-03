import React from "react";
import "../../App.css";
import '../../styles/css/main.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSms, faBullhorn, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';


function PromoSection() {
  return (
    <section className="promo-section bd-bottom padding" id="overview">
      <div className="container">
        <h1
          className="our-services"
          style={{
            "-webkit-text-align": "center",
            "text-align": "center",
            "margin-bottom": "40px",
          }}
        >
          Our Services
        </h1>
        <div className="row promo-wrap">
          <div className="col-lg-3 col-sm-6 sm-padding">
            <div className="promo-item wow fadeInUp" data-wow-delay="200ms">
              <FontAwesomeIcon icon={faSms} size="2x" className="sms-icon" />
              <h3>Bulk SMS</h3>
              <p>
              Send mass SMS messages for promotions, alerts, and notifications.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 sm-padding">
            <div className="promo-item wow fadeInUp" data-wow-delay="300ms">
              <FontAwesomeIcon icon={faBullhorn} size="2x" className="dm-icon" />
              <h3>Digital Marketing</h3>
              <p>
              Use online channels to connect with audiences and boost sales.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 sm-padding">
            <div className="promo-item wow fadeInUp" data-wow-delay="400ms">
              <FontAwesomeIcon icon={faPhone} size="2x" className="voice-icon" />
              <h3>Voice Calls</h3>
              <p>
              Engage customers with personalized voice messages for alerts and suppo
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 sm-padding">
            <div className="promo-item wow fadeInUp" data-wow-delay="500ms">
              <FontAwesomeIcon icon={faWhatsapp} size="2x" className="wp-icon" />
              <h3>WhatsApp API</h3>
              <p>
              Integrate WhatsApp for real-time customer communication and updates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PromoSection;
