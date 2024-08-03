import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faClock } from '@fortawesome/free-solid-svg-icons'; // Import icons

import ContentImage_1_1 from '../../../assets/img/Whatsapp-api.png'

function voice_calls_overview() {
    return (
        <section className="content-section bg-grey bd-bottom padding" id='why-choose-us'>
            <div className="container">
                <div className="row content-wrap">
                    <div className="col-lg-6 sm-padding">
                        <div className="content-info wow fadeInLeft" data-wow-delay="300ms">
                            <span>Overview</span>
                            <h2>WhatsApp Business API Service</h2>
                            <p>Our WhatsApp Business API Service allows you to connect with your customers through one of the most popular messaging platforms. Send personalized messages, manage customer inquiries, and automate interactions to improve your business communications.</p>

                            <ul className="content-feature">
                                <li className="content-feature-item">
                                    <FontAwesomeIcon icon={faChartLine} className="sb sb-stats color-red" style={{ fontSize: '2em', marginBottom: '10px' }} />
                                    <div className="content-details">
                                        <h3>Fast and Reliable Delivery</h3>
                                        <p>Deliver messages quickly and reliably through WhatsApp’s robust infrastructure.</p>
                                    </div>
                                </li>

                                <li className="content-feature-item">
                                    <FontAwesomeIcon icon={faClock} className="sb sb-chart color-green" style={{ fontSize: '2em', marginBottom: '10px' }} />
                                    <div className="content-details">
                                        <h3>Customizable Messaging Options</h3>
                                        <p>Personalize and tailor messages to suit your audience, enhancing engagement with interactive features.</p>
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

export default voice_calls_overview
