import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Mission_Img from '../../assets/img/mission.jpg';
import Vision_Img from '../../assets/img/vision.jpg';

function About_Content_Sec() {
    return (
        <div id='mission-vision'>
            <section className="content-section bd-bottom padding">
                <div className="container">
                    
                    <div className="row content-wrap">
                        <div className="col-lg-6 sm-padding wow fadeInLeft" data-wow-delay="300ms">
                            <img src={Mission_Img} alt="content-img" />
                        </div>
                        <div className="col-lg-6 sm-padding">
                            <div className="content-info wow fadeInRight" data-wow-delay="300ms">
                                <span>Mission</span>
                                <h2>Mission Statement: <br/>Empowering Digital Success</h2>
                                <p>At Logon Utility, our mission is to empower businesses with innovative IT solutions, bespoke website development, and cutting-edge SEO strategies. We strive to deliver exceptional value and create lasting partnerships with our clients.</p>
                                <ul className="content-list">
                                    <li><FontAwesomeIcon icon={faCheck} style={{ fontSize: '16px', color:'#059EE0', marginRight:'5px'}}/><strong>Innovation and Excellence:</strong> Continuously innovate to help clients stay ahead.</li>
                                    <li><FontAwesomeIcon icon={faCheck} style={{ fontSize: '16px', color:'#059EE0', marginRight:'5px'}}/><strong>Client-Centric Approach:</strong> Tailor solutions to meet unique client needs.</li>
                                    <li><FontAwesomeIcon icon={faCheck} style={{ fontSize: '16px', color:'#059EE0', marginRight:'5px'}}/><strong>Sustainable Growth:</strong> Drive long-term success with the latest technology.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="row content-wrap" style={{marginTop:'80px'}}>
                        <div className="col-lg-6 sm-padding">
                            <div className="content-info wow fadeInRight" data-wow-delay="300ms">
                                <span>Vision</span>
                                <h2>Vision Statement:<br/>Shaping Digital Transformation</h2>
                                <p>Our vision is to be a leading provider of transformative digital solutions, recognized for our expertise, creativity, and commitment to client success. We aim to shape the future of digital transformation by evolving with the technological landscape.</p>
                                <ul className="content-list">
                                    <li><FontAwesomeIcon icon={faCheck} style={{ fontSize: '16px', color:'#059EE0', marginRight:'5px'}}/><strong>Leadership:</strong> Set industry standards in digital solutions.</li>
                                    <li><FontAwesomeIcon icon={faCheck} style={{ fontSize: '16px', color:'#059EE0', marginRight:'5px'}}/><strong>Empowerment:</strong> Enable businesses to achieve their full potential.</li>
                                    <li><FontAwesomeIcon icon={faCheck} style={{ fontSize: '16px', color:'#059EE0', marginRight:'5px'}}/><strong>Future-Ready:</strong> Stay at the forefront of technological advancements.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 sm-padding wow fadeInLeft" data-wow-delay="300ms">
                            <img src={Vision_Img} alt="content-img" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About_Content_Sec;
