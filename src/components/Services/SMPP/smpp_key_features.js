import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faDownload } from '@fortawesome/free-solid-svg-icons';

function SMPP_features() {
    return (
        <section className="content-section  bd-bottom padding" id='why-choose-us'>
            <div className="container">
                <div className="row content-wrap">
                    <div className="col-lg-12 sm-padding">
                        <div className="content-info wow fadeInLeft" data-wow-delay="300ms">
                            <span>Key Features</span>
                            <h2>SMPP Service by Logon Utility</h2>
                            <div className="row case-list-wrap">
                                <div className="col-md-6 xs-padding">
                                    <ul className="case-list">
                                        <li><FontAwesomeIcon icon={faThumbsUp} style={{ fontSize: '1em', marginRight: '4px', color: '059EE0' }} /> Easy Integration
                                            Quick and straightforward setup with your existing systems.</li>
                                        <li><FontAwesomeIcon icon={faThumbsUp} style={{ fontSize: '1em', marginRight: '4px', color: '059EE0' }} /> Fast Throughput
                                            High-speed delivery for large volumes of messages.</li>
                                        <li><FontAwesomeIcon icon={faThumbsUp} style={{ fontSize: '1em', marginRight: '4px', color: '059EE0' }} /> Multi-Tenant Support
                                            Manage multiple clients or units from a single connection.</li>
                                        <li><FontAwesomeIcon icon={faThumbsUp} style={{ fontSize: '1em', marginRight: '4px', color: '059EE0' }} /> Real-Time Monitoring
                                            Access detailed reports and track message performa</li>
                                    </ul>
                                </div>

                                <div className="col-md-6 xs-padding">
                                    <ul className="case-list">
                                        <li><FontAwesomeIcon icon={faThumbsUp} style={{ fontSize: '1em', marginRight: '4px', color: '059EE0' }} /> Advanced Routing
                                            Direct messages through optimal channels for reliable delivery.</li>
                                        <li><FontAwesomeIcon icon={faThumbsUp} style={{ fontSize: '1em', marginRight: '4px', color: '059EE0' }} /> 24/7 Support
                                            Dedicated support available around the clock.</li>
                                        <li><FontAwesomeIcon icon={faThumbsUp} style={{ fontSize: '1em', marginRight: '4px', color: '059EE0' }} /> Flexible Pricing
                                            Choose from various pricing plans to suit your needs.</li>
                                        <li><FontAwesomeIcon icon={faThumbsUp} style={{ fontSize: '1em', marginRight: '4px', color: '059EE0' }} /> Secure & Reliable
                                            Robust security measures to protect your data and messages.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SMPP_features
