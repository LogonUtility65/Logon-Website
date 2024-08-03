import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faDownload } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import Hosting_Img_1 from '../../../assets/img/freesoft-1200-750.png'


function Case_Details() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div>
            <section className="case-details padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 sm-padding">
                            <div className="case-details-wrap">
                                <Slider {...settings} className="case-details-carousel">
                                    <div className="case-item">
                                        <img src={Hosting_Img_1} alt="img" />
                                    </div>
                                    <div className="case-item">
                                        <img src={Hosting_Img_1}  alt="img" />
                                    </div>
                                    <div className="case-item">
                                        <img src={Hosting_Img_1}  alt="img" />
                                    </div>
                                </Slider>
                                <div className="case-heading mt-40">
                                    <h2>Project Description</h2>
                                    <p>FreeSoft, a pioneer in IT modernization and legacy transformation since 1998, sought to enhance their customer communication strategy by leveraging Logon Utility's SMS and WhatsApp messaging services. Known for their proprietary LiberatorWorkbench framework, FreeSoft needed a robust and reliable messaging solution to ensure efficient communication with their clients. Logon Utility provided an integrated and customized messaging platform that aligned with FreeSoft’s needs, delivering high message delivery rates and maintaining transparency in operations.</p>

                                    <p>By utilizing Logon Utility’s services, FreeSoft was able to streamline their customer communication processes, sending timely updates and notifications with ease. The high delivery rates ensured that their clients received important information without delay, enhancing customer satisfaction. The integration of SMS and WhatsApp messaging into FreeSoft’s existing systems was seamless, allowing for efficient and automated communication workflows. This partnership not only improved operational efficiency but also strengthened FreeSoft’s commitment to innovation and excellence in their field.</p>
                                </div>

                                <div className="row case-list-wrap">
                                    <div className="col-md-6 xs-padding">
                                        <ul className="case-list">
                                            <li><FontAwesomeIcon icon={faThumbsUp} style={{fontSize: '1em', marginRight:'4px', color:'059EE0'}}/> The integration of SMS and WhatsApp messaging streamlined FreeSoft’s communication processes, ensuring timely and reliable delivery of messages to clients.</li>
                                            <li><FontAwesomeIcon icon={faThumbsUp} style={{fontSize: '1em', marginRight:'4px', color:'059EE0'}}/> Logon Utility provided the highest message delivery rates in the industry, ensuring that FreeSoft’s important updates and notifications reached their clients without fail.</li>
                                        </ul>
                                    </div>
                                    
                                    <div className="col-md-6 xs-padding">
                                        <ul className="case-list">
                                            <li><FontAwesomeIcon icon={faThumbsUp} style={{fontSize: '1em', marginRight:'4px', color:'059EE0'}}/> Logon Utility maintained transparency in their operations, providing FreeSoft with detailed insights and reports on messaging performance.</li>
                                            <li><FontAwesomeIcon icon={faThumbsUp} style={{fontSize: '1em', marginRight:'4px', color:'059EE0'}}/> The reliable and efficient messaging services led to increased customer satisfaction, with FreeSoft clients appreciating the timely and clear communication.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 sm-padding">
                            <div className="case-sidebar-wrap">
                                <div className="case-sidebar-item mb-50">
                                    <h2>Project Details</h2>
                                    <ul className="case-sidebar-list">
                                        <li><span>Client Name:</span> FreeSoft</li>
                                        <li><span>Budget:</span> $30,000</li>
                                        <li><span>Category:</span> IT Modernization & Legacy Transformation</li>
                                        <li><span>Duration:</span> 4 months</li>
                                        <li><span>Services Provided:</span> SMS and WhatsApp Messaging Solutions</li>
                                    </ul>
                                    <a href="#" className="default-btn btn-blue">Launch Project</a>
                                </div>
                                <div className="case-sidebar-item brochures-btn">
                                    <h2>Brochures</h2>
                                    <a href="#" className="default-btn btn-blue">Download.PDF <FontAwesomeIcon icon={faDownload} style={{fontSize:'20px'}}/></a>
                                    {/* <a href="#" className="default-btn btn-blue">Download.DOC <FontAwesomeIcon icon={faDownload} /></a>
                                    <a href="#" className="default-btn btn-blue">Download.PPT <FontAwesomeIcon icon={faDownload} /></a> */}
                                </div>
                                <div className="case-sidebar-item brochures-btn">
                                    <ul className="social-share">
                                        <li><a href="https://www.facebook.com/logonutility"><FontAwesomeIcon icon={faFacebook} /></a></li>
                                        <li><a href="https://x.com/LoGonUtility/"><FontAwesomeIcon icon={faTwitter} /></a></li>
                                        <li><a href="https://www.instagram.com/logonutility/"><FontAwesomeIcon icon={faInstagram} /></a></li>
                                        <li><a href="https://www.linkedin.com/company/logonutilitycompany/"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Case_Details;
