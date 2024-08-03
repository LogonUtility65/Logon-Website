import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faDownload } from '@fortawesome/free-solid-svg-icons';

function bulk_sms_key_features() {
    return (
        <section className="content-section  bd-bottom padding" id='why-choose-us'>
            <div className="container">
                <div className="row content-wrap">
                    <div className="col-lg-12 sm-padding">
                        <div className="content-info wow fadeInLeft" data-wow-delay="300ms">
                            <span>Key Features</span>
                            <h2>Voice Calls Service of Logon Utility</h2>
                            <div className="row case-list-wrap">
                                <div className="col-md-6 xs-padding">
                                    <ul className="case-list">
                                        <li><FontAwesomeIcon icon={faThumbsUp} style={{ fontSize: '1em', marginRight: '4px', color: '059EE0' }} /> User-Friendly Web Portal
                                            Easily manage campaigns online, anytime.</li>
                                        <li><FontAwesomeIcon icon={faThumbsUp} style={{ fontSize: '1em', marginRight: '4px', color: '059EE0' }} />
                                            High-Speed Instant Delivery
                                            Broadcast voice messages quickly using our multi-telecom operator route.</li>
                                        <li><FontAwesomeIcon icon={faThumbsUp} style={{ fontSize: '1em', marginRight: '4px', color: '059EE0' }} /> Multi-Language Support
                                            Conduct campaigns in any language.</li>
                                        <li><FontAwesomeIcon icon={faThumbsUp} style={{ fontSize: '1em', marginRight: '4px', color: '059EE0' }} /> Fully Automated & Easy to Use
                                        Automate campaigns with our intuitive system.</li>
                                    </ul>
                                </div>

                                <div className="col-md-6 xs-padding">
                                    <ul className="case-list">
                                        <li><FontAwesomeIcon icon={faThumbsUp} style={{ fontSize: '1em', marginRight: '4px', color: '059EE0' }} /> Flexible Time Validity
                                        No need to worry about account validity; enjoy flexible plans.</li>
                                        <li><FontAwesomeIcon icon={faThumbsUp} style={{ fontSize: '1em', marginRight: '4px', color: '059EE0' }} /> Credit-Based Plan
                                        Upload your list and let our system handle the rest.</li>
                                        <li><FontAwesomeIcon icon={faThumbsUp} style={{ fontSize: '1em', marginRight: '4px', color: '059EE0' }} /> Campaign Reports
                                        Access detailed reports online.</li>
                                        <li><FontAwesomeIcon icon={faThumbsUp} style={{ fontSize: '1em', marginRight: '4px', color: '059EE0' }} /> 100% Secured & Trusted
                                        Your data is encrypted and secure.</li>
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

export default bulk_sms_key_features
