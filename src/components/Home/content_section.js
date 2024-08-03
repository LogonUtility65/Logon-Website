import React from 'react';
import '../../App.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faClock } from '@fortawesome/free-solid-svg-icons'; // Import icons

import ContentImage_1_1 from '../../assets/img/content-1-1.png'

function ContentSection() {
    return (
        <section className="content-section bg-grey bd-bottom padding" id='why-choose-us'>
            <div className="container">
                <div className="row content-wrap">
                    <div className="col-lg-6 sm-padding">
                        <div className="content-info wow fadeInLeft" data-wow-delay="300ms">
                            <span>Features</span>
                            <h2>Why Choose Us</h2>
                            <p>Explore custom IT solutions, expert web development, and effective SEO strategies at Logon Utility</p>
                            <ul className="content-feature">
                                <li className="content-feature-item">
                                <FontAwesomeIcon icon={faChartLine} className="sb sb-stats color-red" style={{ fontSize: '2em' , marginBottom:'10px' }} />

                                    <div className="content-details">
                                        <h3>Effortless Campaigns</h3>
                                        <p>Craft engaging SMS campaigns that resonate with your audience.</p>
                                    </div>
                                </li>
                                <li className="content-feature-item">
                                    <FontAwesomeIcon icon={faClock} className="sb sb-chart color-green" style={{ fontSize: '2em' , marginBottom:'10px'  }} />
                                    <div className="content-details">
                                        <h3>Real-Time Updates</h3>
                                        <p>Get Your Customers in the Know, Instantly. (Focuses on the customer's perspective).</p>
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

export default ContentSection;
