import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faChartBar, faTools, faRibbon } from '@fortawesome/free-solid-svg-icons';
import Odometer from 'react-odometerjs';
import 'odometer/themes/odometer-theme-default.css';

function About_Counter_Sec() {
    const [transactionalSmsCount, setTransactionalSmsCount] = useState(0);
    const [whatsappSmsCount, setWhatsappSmsCount] = useState(0);
    const [happyClientsCount, setHappyClientsCount] = useState(0);
    const [voiceCallsCount, setVoiceCallsCount] = useState(0);

    useEffect(() => {
        setTimeout(() => setTransactionalSmsCount(25), 100);
        setTimeout(() => setWhatsappSmsCount(10), 200);
        setTimeout(() => setHappyClientsCount(12000), 300);
        setTimeout(() => setVoiceCallsCount(50), 400);
    }, []);

    return (
        <div>
            <section className="counter-section bd-bottom padding">
                <div className="path" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6 sm-padding">
                            <div className="counter-item wow fadeInUp" data-wow-delay="200ms">
                                <FontAwesomeIcon icon={faDownload} className="color-red" style={{ fontSize: '50px', marginBottom:'20px'}}/>
                                <h3>
                                    <Odometer value={transactionalSmsCount} format="d" duration={5000} /><span> Cr+ </span>
                                </h3>
                                <h4>Transactional Bulk SMS Monthly</h4>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 sm-padding">
                            <div className="counter-item wow fadeInUp" data-wow-delay="300ms">
                                <FontAwesomeIcon icon={faChartBar} className="color-orange" style={{ fontSize: '50px', marginBottom:'20px'}}/>
                                <h3>
                                    <Odometer value={whatsappSmsCount} format="d" duration={5000} /><span> Cr+ </span>
                                </h3>
                                <h4>WhatsApp Bulk SMS Monthly</h4>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 sm-padding">
                            <div className="counter-item wow fadeInUp" data-wow-delay="400ms">
                                <FontAwesomeIcon icon={faTools} className="color-yellow" style={{ fontSize: '50px', marginBottom:'20px'}}/>
                                <h3>
                                    <Odometer value={happyClientsCount} format="d" duration={5000} /><span>+ </span>
                                </h3>
                                <h4>Happy Clients of Logon Utility</h4>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 sm-padding">
                            <div className="counter-item wow fadeInUp" data-wow-delay="500ms">
                                <FontAwesomeIcon icon={faRibbon} className="color-green" style={{ fontSize: '50px', marginBottom:'20px'}}/>
                                <h3>
                                    <Odometer value={voiceCallsCount} format="d" duration={5000} /><span> Lakhs+ </span>
                                </h3>
                                <h4>Monthly Voice Calls</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About_Counter_Sec;
