import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faClock } from '@fortawesome/free-solid-svg-icons'; // Import icons

import ContentImage_1_1 from '../../../assets/img/Smpp.png'

function SMPP_overview() {
    return (
        <section className="content-section bg-grey bd-bottom padding" id='why-choose-us'>
            <div className="container">
                <div className="row content-wrap">
                    <div className="col-lg-6 sm-padding">
                        <div className="content-info wow fadeInLeft" data-wow-delay="300ms">
                            <span>Overview</span>
                            <h2>SMPP Service</h2>
                            <p>Our SMPP Service offers a powerful protocol for exchanging SMS messages between your application and SMS service providers. Ideal for high-volume messaging needs, our service supports seamless integration with your existing systems, ensuring efficient and effective communication.</p>

                            <ul className="content-feature">
                                <li className="content-feature-item">
                                    <FontAwesomeIcon icon={faChartLine} className="sb sb-stats color-red" style={{ fontSize: '2em', marginBottom: '10px' }} />
                                    <div className="content-details">
                                        <h3>High-Speed Message Delivery</h3>
                                        <p>Enjoy swift message transmission, designed to handle high volumes with ease</p>
                                    </div>
                                </li>

                                <li className="content-feature-item">
                                    <FontAwesomeIcon icon={faClock} className="sb sb-chart color-green" style={{ fontSize: '2em', marginBottom: '10px' }} />
                                    <div className="content-details">
                                        <h3>Scalable and Flexible</h3>
                                        <p>Adaptable to growing messaging needs, our service supports both small and large-scale operations.</p>
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

export default SMPP_overview
