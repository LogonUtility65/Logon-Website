import React from 'react';
import '../../App.css'

import ContentImage_2 from '../../assets/img/content-2-2.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullhorn, faFileInvoiceDollar } from '@fortawesome/free-solid-svg-icons';

function ContentSection_II() {
    return (
        <section className="content-section bd-bottom padding pos-rel">
            <div className="anim-elements">
                <div className="anim-element" />
                <div className="anim-element" />
                <div className="anim-element" />
                <div className="anim-element" />
                <div className="anim-element" />
            </div>
            <div className="container">
                <div className="row content-wrap">
                    <div className="col-lg-6 sm-padding wow fadeInLeft" data-wow-delay="300ms">
                        <img src={ContentImage_2} alt="content-img" />
                    </div>
                    <div className="col-lg-6 sm-padding">
                        <div className="content-info wow fadeInRight" data-wow-delay="300ms">
                            <span>Features</span>
                            <h2>How It Works</h2>
                            <p> Simple steps to get started with your services (e.g., Contact Us, Get a Quote, Start Your Campaign).</p>
                            <ul className="content-feature">
                                <li className="content-feature-item">
                                    <FontAwesomeIcon icon={faBullhorn} style={{ fontSize: '2em', color: '#af216b', marginBottom: '10px' }} />
                                    <div className="content-details">
                                        <h3>Start Your Campaign</h3>
                                        <p>Begin creating effective strategies tailored to your business.</p>
                                    </div>
                                </li>
                                <li className="content-feature-item">
                                    <FontAwesomeIcon icon={faFileInvoiceDollar} style={{ fontSize: '2em', color: '#f1b74c', marginBottom: '10px' }} />
                                    <div className="content-details">
                                        <h3>Get a Quote</h3>
                                        <p>Receive a personalized estimate for your project or campaign.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContentSection_II
