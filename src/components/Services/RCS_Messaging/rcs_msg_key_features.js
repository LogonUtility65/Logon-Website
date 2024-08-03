import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faDownload } from '@fortawesome/free-solid-svg-icons';

function RCS_Messaging_features() {
    return (
        <section className="content-section  bd-bottom padding" id='why-choose-us'>
            <div className="container">
                <div className="row content-wrap">
                    <div className="col-lg-12 sm-padding">
                        <div className="content-info wow fadeInLeft" data-wow-delay="300ms">
                            <span>Key Features</span>
                            <h2>OTP Service by Logon Utility</h2>
                            <div className="row case-list-wrap">
                                <div className="col-md-6 xs-padding">
                                    <ul className="case-list">
                                        <li><FontAwesomeIcon icon={faThumbsUp} style={{ fontSize: '1em', marginRight: '4px', color: '059EE0' }} /> Rich Media Support
                                        Send messages with multimedia content such as images, videos, and carousels. Enhance your communications with rich media to capture your audience’s attention.</li>

                                        <li><FontAwesomeIcon icon={faThumbsUp} style={{ fontSize: '1em', marginRight: '4px', color: '059EE0' }} /> Interactive Messaging
                                        Engage your customers with interactive features like quick replies, buttons, and carousels. Enable seamless user interactions and drive higher engagement rates.</li>

                                        <li><FontAwesomeIcon icon={faThumbsUp} style={{ fontSize: '1em', marginRight: '4px', color: '059EE0' }} /> User-Friendly Web Portal
                                        Manage your RCS campaigns effortlessly through our intuitive web portal. Access your account online, create and send messages, and monitor performance from anywhere.</li>

                                        <li><FontAwesomeIcon icon={faThumbsUp} style={{ fontSize: '1em', marginRight: '4px', color: '059EE0' }} /> Personalized Messaging
                                        Customize your messages to provide personalized experiences for your recipients. Tailor content based on user preferences and behavior to improve relevance and engagement.</li>

                                    </ul>
                                </div>

                                <div className="col-md-6 xs-padding">
                                    <ul className="case-list">
                                        <li><FontAwesomeIcon icon={faThumbsUp} style={{ fontSize: '1em', marginRight: '4px', color: '059EE0' }} /> Real-Time Analytics
                                        Access detailed analytics and performance reports in real-time. Track key metrics such as delivery rates, open rates, and user interactions to measure campaign success.</li>

                                        <li><FontAwesomeIcon icon={faThumbsUp} style={{ fontSize: '1em', marginRight: '4px', color: '059EE0' }} /> Seamless Integration
                                        Easily integrate RCS messaging into your existing systems and workflows. Our service supports smooth integration with CRM systems and marketing platforms.</li>

                                        <li><FontAwesomeIcon icon={faThumbsUp} style={{ fontSize: '1em', marginRight: '4px', color: '059EE0' }} /> Multi-Language Support
                                        Communicate with your global audience in their preferred language. Our RCS Messaging Service supports multiple languages for broader reach and effectiveness.</li>

                                        <li><FontAwesomeIcon icon={faThumbsUp} style={{ fontSize: '1em', marginRight: '4px', color: '059EE0' }} /> Flexible Pricing Plans
                                        Choose from a variety of pricing plans to suit your needs. We offer flexible options to accommodate different messaging volumes and business requirements.</li>

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

export default RCS_Messaging_features
