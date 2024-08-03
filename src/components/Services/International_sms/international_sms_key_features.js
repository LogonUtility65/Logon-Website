import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faDownload } from '@fortawesome/free-solid-svg-icons';

function International_SMS_features() {
    return (
        <section className="content-section  bd-bottom padding" id='why-choose-us'>
            <div className="container">
                <div className="row content-wrap">
                    <div className="col-lg-12 sm-padding">
                        <div className="content-info wow fadeInLeft" data-wow-delay="300ms">
                            <span>Key Features</span>
                            <h2>International SMS Service by Logon Utility</h2>
                            <div className="row case-list-wrap">
                                <div className="col-md-6 xs-padding">
                                    <ul className="case-list">
                                        <li><FontAwesomeIcon icon={faThumbsUp} style={{ fontSize: '1em', marginRight: '4px', color: '059EE0' }} /> Global Reach
                                        Send SMS messages to over 200 countries worldwide. Our service offers extensive global coverage to connect with your international audience.</li>

                                        <li><FontAwesomeIcon icon={faThumbsUp} style={{ fontSize: '1em', marginRight: '4px', color: '059EE0' }} /> High Delivery Rates
                                        Experience reliable message delivery with our robust international network. We prioritize high delivery rates to ensure your messages reach their intended recipients.</li>

                                        <li><FontAwesomeIcon icon={faThumbsUp} style={{ fontSize: '1em', marginRight: '4px', color: '059EE0' }} /> User-Friendly Web Portal
                                        Manage your international SMS campaigns through our intuitive web portal. Access your account online and run campaigns easily from anywhere.</li>

                                        <li><FontAwesomeIcon icon={faThumbsUp} style={{ fontSize: '1em', marginRight: '4px', color: '059EE0' }} /> Real-Time Delivery Reports
                                        Track the status of your messages with real-time delivery reports. Monitor message success and troubleshoot issues promptly with detailed insights.</li>

                                    </ul>
                                </div>

                                <div className="col-md-6 xs-padding">
                                    <ul className="case-list">
                                        <li><FontAwesomeIcon icon={faThumbsUp} style={{ fontSize: '1em', marginRight: '4px', color: '059EE0' }} /> Multi-Language Support
                                        Engage with recipients in their preferred language. Our service supports multiple languages, allowing you to tailor your messages for diverse audiences.</li>

                                        <li><FontAwesomeIcon icon={faThumbsUp} style={{ fontSize: '1em', marginRight: '4px', color: '059EE0' }} /> Automated Campaigns
                                        Automate your international SMS campaigns with our user-friendly tools. Set up and manage automated messages to streamline your communication processes.</li>

                                        <li><FontAwesomeIcon icon={faThumbsUp} style={{ fontSize: '1em', marginRight: '4px', color: '059EE0' }} /> Flexible Pricing Plans
                                        Choose from a variety of pricing plans tailored to your needs. Our flexible options accommodate different messaging volumes and budgets.</li>

                                        <li><FontAwesomeIcon icon={faThumbsUp} style={{ fontSize: '1em', marginRight: '4px', color: '059EE0' }} /> 24/7 Customer Support
                                        Receive support anytime with our dedicated customer service team. We're available 24/7 to assist with any issues or inquiries.</li>

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

export default International_SMS_features
