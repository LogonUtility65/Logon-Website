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
                            <h2>OTP Service by Logon Utility</h2>
                            <div className="row case-list-wrap">
                                <div className="col-md-6 xs-padding">
                                    <ul className="case-list">
                                        <li><FontAwesomeIcon icon={faThumbsUp} style={{ fontSize: '1em', marginRight: '4px', color: '059EE0' }} /> Instant OTP Delivery
                                        Receive and deliver OTPs quickly with our high-speed infrastructure. Ensure that your users get their one-time passwords promptly, facilitating smooth and efficient authentication.</li>
                                        <li><FontAwesomeIcon icon={faThumbsUp} style={{ fontSize: '1em', marginRight: '4px', color: '059EE0' }} /> Multi-Channel Support
                                        Send OTPs via multiple channels, including SMS, email, and voice calls. Provide flexibility to your users and ensure they receive their OTPs through their preferred communication method.</li>
                                        <li><FontAwesomeIcon icon={faThumbsUp} style={{ fontSize: '1em', marginRight: '4px', color: '059EE0' }} /> Customizable OTP Formats
                                        Tailor the format and content of your OTPs to match your business needs. Customize OTP length, format, and message content to enhance user experience and security.</li>
                                        <li><FontAwesomeIcon icon={faThumbsUp} style={{ fontSize: '1em', marginRight: '4px', color: '059EE0' }} /> Real-Time Monitoring and Reporting
                                        Access real-time monitoring and detailed reporting on OTP delivery and usage. Track the performance of your OTP campaigns and gain insights into authentication activities.</li>
                                    </ul>
                                </div>

                                <div className="col-md-6 xs-padding">
                                    <ul className="case-list">
                                        <li><FontAwesomeIcon icon={faThumbsUp} style={{ fontSize: '1em', marginRight: '4px', color: '059EE0' }} /> High Security and Compliance
                                        Our OTP Service adheres to the highest security standards, ensuring that OTPs are encrypted and protected. Comply with industry regulations and best practices for user authentication.</li>
                                        <li><FontAwesomeIcon icon={faThumbsUp} style={{ fontSize: '1em', marginRight: '4px', color: '059EE0' }} /> Scalable Solution
                                        Scale your OTP services effortlessly to accommodate growing user bases. Our service is designed to handle high volumes of OTP requests with reliability and efficiency.</li>
                                        <li><FontAwesomeIcon icon={faThumbsUp} style={{ fontSize: '1em', marginRight: '4px', color: '059EE0' }} /> User-Friendly API
                                        Integrate our OTP Service seamlessly into your applications using our user-friendly API. Our API documentation and support make integration straightforward and efficient.</li>
                                        <li><FontAwesomeIcon icon={faThumbsUp} style={{ fontSize: '1em', marginRight: '4px', color: '059EE0' }} /> 24/7 Support
                                        Benefit from round-the-clock customer support. Our dedicated team is available to assist with any issues or questions related to OTP delivery and integration.</li>
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
