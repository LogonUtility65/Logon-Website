import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faDownload } from '@fortawesome/free-solid-svg-icons';

function OTP_features() {
    return (
        <section className="content-section  bd-bottom padding" id='why-choose-us'>
            <div className="container">
                <div className="row content-wrap">
                    <div className="col-lg-12 sm-padding">
                        <div className="content-info wow fadeInLeft" data-wow-delay="300ms">
                            <span>Key Features</span>
                            <h2>WhatsApp Marketing Service by Logon Utility</h2>
                            <div className="row case-list-wrap">
                                <div className="col-md-6 xs-padding">
                                    <ul className="case-list">
                                        <li><FontAwesomeIcon icon={faThumbsUp} style={{ fontSize: '1em', marginRight: '4px', color: '059EE0' }} /> Personalized Messaging
                                        Send customized messages to your audience based on their preferences and behavior. Personalize your communication to make each message relevant and engaging.</li>


                                        <li><FontAwesomeIcon icon={faThumbsUp} style={{ fontSize: '1em', marginRight: '4px', color: '059EE0' }} /> Rich Media Support
                                        Utilize WhatsApp’s rich media capabilities to include images, videos, and audio files in your marketing campaigns. Enhance your messages with multimedia content to capture attention.</li>

                                        <li><FontAwesomeIcon icon={faThumbsUp} style={{ fontSize: '1em', marginRight: '4px', color: '059EE0' }} /> Automated Campaigns
                                        Set up and automate your WhatsApp campaigns with our user-friendly tools. Schedule messages, create automated responses, and manage your campaigns with ease.</li>

                                        <li><FontAwesomeIcon icon={faThumbsUp} style={{ fontSize: '1em', marginRight: '4px', color: '059EE0' }} /> Interactive Features
                                        Engage with your audience through interactive elements like quick replies, buttons, and carousels. Foster higher engagement with interactive content that encourages user interaction.</li>

                                    </ul>
                                </div>

                                <div className="col-md-6 xs-padding">
                                    <ul className="case-list">
                                        <li><FontAwesomeIcon icon={faThumbsUp} style={{ fontSize: '1em', marginRight: '4px', color: '059EE0' }} /> Real-Time Analytics
                                        Monitor the performance of your campaigns with real-time analytics. Track key metrics such as delivery rates, open rates, and user interactions to optimize your marketing strategies.</li>

                                        <li><FontAwesomeIcon icon={faThumbsUp} style={{ fontSize: '1em', marginRight: '4px', color: '059EE0' }} /> Segmented Targeting
                                        Target specific audience segments with tailored messages. Our service allows you to segment your audience based on various criteria to deliver more relevant content.</li>

                                        <li><FontAwesomeIcon icon={faThumbsUp} style={{ fontSize: '1em', marginRight: '4px', color: '059EE0' }} /> Easy Integration
                                        Integrate WhatsApp marketing into your existing CRM or marketing platforms seamlessly. Our service supports smooth integration to enhance your marketing efforts.</li>

                                        <li><FontAwesomeIcon icon={faThumbsUp} style={{ fontSize: '1em', marginRight: '4px', color: '059EE0' }} /> Flexible Pricing Plans
                                        Choose from a variety of pricing plans to fit your needs. Our flexible options accommodate different campaign sizes and budgets.</li>

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

export default OTP_features
