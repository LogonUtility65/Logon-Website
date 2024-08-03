import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faClock } from '@fortawesome/free-solid-svg-icons'; // Import icons

import ContentImage_1_1 from '../../../assets/img/bulk-sms.png'

function bulk_sms_overview() {
    return (
        <section className="content-section bg-grey bd-bottom padding" id='why-choose-us'>
            <div className="container">
                <div className="row content-wrap">
                    <div className="col-lg-6 sm-padding">
                        <div className="content-info wow fadeInLeft" data-wow-delay="300ms">
                            <span>Overview</span>
                            <h2>Bulk SMS Service</h2>
                            <p>Efficiently reach your audience with our Bulk SMS service. Send mass messages quickly and easily to your customers, clients, or subscribers.</p>

                            <ul className="content-feature">
                                <li className="content-feature-item">
                                    <FontAwesomeIcon icon={faChartLine} className="sb sb-stats color-red" style={{ fontSize: '2em', marginBottom: '10px' }} />
                                    <div className="content-details">
                                        <h3>Fast and Reliable Delivery</h3>
                                        <p>Our service ensures that your messages are delivered swiftly and reliably, ensuring your audience receives your communications without delay.</p>
                                    </div>
                                </li>

                                <li className="content-feature-item">
                                    <FontAwesomeIcon icon={faClock} className="sb sb-chart color-green" style={{ fontSize: '2em', marginBottom: '10px' }} />
                                    <div className="content-details">
                                        <h3>Customizable Messaging Options</h3>
                                        <p>Personalize your messages to fit your audience’s needs with our customizable messaging options. Tailor content to maximize engagement.</p>
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

export default bulk_sms_overview
