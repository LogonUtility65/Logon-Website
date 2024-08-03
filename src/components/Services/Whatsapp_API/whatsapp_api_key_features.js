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
                            <h2>WhatsApp Business API Service by Logon Utility</h2>
                            <div className="row case-list-wrap">
                                <div className="col-md-6 xs-padding">
                                    <ul className="case-list">
                                        <li><FontAwesomeIcon icon={faThumbsUp} style={{ fontSize: '1em', marginRight: '4px', color: '059EE0' }} /> User-Friendly Web Portal
                                        Access our intuitive web portal online, anytime and from anywhere. Manage your WhatsApp campaigns and interactions effortlessly.</li>
                                        <li><FontAwesomeIcon icon={faThumbsUp} style={{ fontSize: '1em', marginRight: '4px', color: '059EE0' }} />
                                        High-Speed Instant Delivery
                                        Broadcast messages swiftly and efficiently using our platform. Our integration with WhatsApp ensures high-speed delivery of your communications.</li>
                                        <li><FontAwesomeIcon icon={faThumbsUp} style={{ fontSize: '1em', marginRight: '4px', color: '059EE0' }} /> Multi-Language Support
                                        Engage with your audience in multiple languages. Run your campaigns and respond to customer inquiries in their preferred language.</li>
                                        <li><FontAwesomeIcon icon={faThumbsUp} style={{ fontSize: '1em', marginRight: '4px', color: '059EE0' }} /> Fully Automated & Easy to Use
                                        Automate your interactions and messaging workflows with our streamlined system. Our user-friendly portal simplifies the process for you.</li>
                                    </ul>
                                </div>

                                <div className="col-md-6 xs-padding">
                                    <ul className="case-list">
                                        <li><FontAwesomeIcon icon={faThumbsUp} style={{ fontSize: '1em', marginRight: '4px', color: '059EE0' }} /> Flexible Time Validity
                                        Utilize flexible time validity plans to suit your business needs. No need to worry about plan validity; we offer solutions that adapt to your requirements.</li>
                                        <li><FontAwesomeIcon icon={faThumbsUp} style={{ fontSize: '1em', marginRight: '4px', color: '059EE0' }} /> Credit-Based Plan
                                        Manage your WhatsApp communications with our credit-based plan. Upload your contact list and let our system handle the messaging process automatically.</li>
                                        <li><FontAwesomeIcon icon={faThumbsUp} style={{ fontSize: '1em', marginRight: '4px', color: '059EE0' }} /> Get Campaign Report
                                        Access comprehensive reports and analytics of your WhatsApp campaigns from our portal. Track performance and optimize your strategies.</li>
                                        <li><FontAwesomeIcon icon={faThumbsUp} style={{ fontSize: '1em', marginRight: '4px', color: '059EE0' }} /> 100% Secured & Trusted Solution
                                        Your data is protected with state-of-the-art encryption, ensuring security and privacy. Trust Logon Utility for reliable and secure WhatsApp communication.</li>
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
