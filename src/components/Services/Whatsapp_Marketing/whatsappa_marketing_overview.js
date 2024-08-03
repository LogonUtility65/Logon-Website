import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faClock } from '@fortawesome/free-solid-svg-icons'; // Import icons

import ContentImage_1_1 from '../../../assets/img/whatsapp-marketing.png'

function OTP_overview() {
    return (
        <section className="content-section bg-grey bd-bottom padding" id='why-choose-us'>
            <div className="container">
                <div className="row content-wrap">
                    <div className="col-lg-6 sm-padding">
                        <div className="content-info wow fadeInLeft" data-wow-delay="300ms">
                            <span>Overview</span>
                            <h2>WhatsApp Marketing Service</h2>
                            <p>Our WhatsApp Marketing Service enables businesses to connect with their audience directly on WhatsApp, offering a powerful platform for sending personalized messages, promotions, and updates. Enhance your marketing efforts with targeted campaigns that drive engagement and conversions.</p>

                            <ul className="content-feature">
                                <li className="content-feature-item">
                                    <FontAwesomeIcon icon={faChartLine} className="sb sb-stats color-red" style={{ fontSize: '2em', marginBottom: '10px' }} />
                                    <div className="content-details">
                                        <h3>Personalized Communication</h3>
                                        <p>Deliver customized messages and rich media content to your audience, ensuring relevant and engaging interactions.</p>
                                    </div>
                                </li>

                                <li className="content-feature-item">
                                    <FontAwesomeIcon icon={faClock} className="sb sb-chart color-green" style={{ fontSize: '2em', marginBottom: '10px' }} />
                                    <div className="content-details">
                                        <h3>Efficient Management</h3>
                                        <p>Manage your campaigns easily with our intuitive web portal, enabling smooth scheduling and performance tracking.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 sm-padding wow fadeInRight" data-wow-delay="300ms">
                        <img src={ContentImage_1_1} alt="content-img" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OTP_overview
