import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faDownload } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import Hosting_Img_1 from '../../../assets/img/coder-1200x750.png'


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
                                    <p>CoderWorkz, led by Chief Technology Officer Ravi Jindal, is a growing company that understands the critical importance of maintaining regular communication with their customers. To enhance their customer engagement strategy, CoderWorkz partnered with Logon Utility to leverage their SMS and WhatsApp messaging solutions.</p>

                                    <p>Logon Utility provided an integrated and customized messaging platform that seamlessly fit into CoderWorkz's communication strategy. This platform allowed CoderWorkz to send timely updates and notifications, ensuring that their clients remained informed about the latest developments, services, and offerings. The simplicity and effectiveness of the Logon Utility admin panel enabled CoderWorkz to manage their communications effortlessly, contributing significantly to their business's success.</p>

                                    <p>By utilizing Logon Utility’s services, CoderWorkz was able to strengthen their connection with customers, fostering a sense of reliability and trust. The high delivery rates ensured that their messages were received promptly, enhancing customer satisfaction. The partnership between CoderWorkz and Logon Utility opened up new avenues for business growth and innovation, exemplifying the synergy between the two companies.</p>
                                </div>

                                <div className="row case-list-wrap">
                                    <div className="col-md-6 xs-padding">
                                        <ul className="case-list">
                                            <li><FontAwesomeIcon icon={faThumbsUp} style={{fontSize: '1em', marginRight:'4px', color:'059EE0'}}/> The integration of SMS and WhatsApp messaging streamlined CoderWorkz’s communication processes, ensuring timely and reliable delivery of messages to clients.</li>
                                            <li><FontAwesomeIcon icon={faThumbsUp} style={{fontSize: '1em', marginRight:'4px', color:'059EE0'}}/> Logon Utility provided a user-friendly admin panel, allowing CoderWorkz to send messages efficiently without technical challenges.</li>
                                        </ul>
                                    </div>
                                    
                                    <div className="col-md-6 xs-padding">
                                        <ul className="case-list">
                                            <li><FontAwesomeIcon icon={faThumbsUp} style={{fontSize: '1em', marginRight:'4px', color:'059EE0'}}/> The reliable and efficient messaging services led to increased customer satisfaction, with clients appreciating the prompt and clear communication.</li>
                                            <li><FontAwesomeIcon icon={faThumbsUp} style={{fontSize: '1em', marginRight:'4px', color:'059EE0'}}/> Ravi Jindal expressed his satisfaction with Logon Utility, highlighting the significant positive impact on CoderWorkz's ability to stay connected with their customers and the new opportunities this partnership has created.</li>
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
                                        <li><span>Client Name:</span> CoderWorkz - Ravi Jindal</li>
                                        <li><span>Budget:</span> $10,000</li>
                                        <li><span>Category:</span> Customer Engagement Solutions</li>
                                        <li><span>Duration:</span> 6 months</li>
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
