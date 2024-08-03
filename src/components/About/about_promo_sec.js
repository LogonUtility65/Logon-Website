import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullhorn, faKey, faPhone } from '@fortawesome/free-solid-svg-icons';

function About_Promo_Section() {
  return (
    <div id='overview'>
      <section className="promo-section bg-grey promo-4 bd-bottom padding">
        <div className="container">
          <div className="row promo-wrap">
            <div className="col-lg-4 col-sm-6 sm-padding">
              <div className="promo-item wow fadeInUp" data-wow-delay="200ms">
                <FontAwesomeIcon icon={faBullhorn} style={{ fontSize: '40px', color: '#059EE0', marginBottom: '20px' }} />
                <h3>Promotional SMS</h3>
                <p>Basically used for Business Promotions, Offers, Brand Awareness, etc. Easiest way to reach the targeted user.</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 sm-padding">
              <div className="promo-item wow fadeInUp" data-wow-delay="300ms">
                <FontAwesomeIcon icon={faKey} style={{ fontSize: '40px', color: '#059EE0', marginBottom: '20px' }} />
                <h3>OTP SMS</h3>
                <p>Login, money transfer details, Account Authentication purpose. Used special OTP route for sending faster SMS.</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 sm-padding">
              <div className="promo-item wow fadeInUp" data-wow-delay="400ms">
                <FontAwesomeIcon icon={faPhone} style={{ fontSize: '40px', color: '#059EE0', marginBottom: '20px' }} />
                <h3>Voice SMS</h3>
                <p>With an approved Caller ID, we can send this kind of Jewellery House Offer and Political Promotional Voice SMSs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About_Promo_Section;
