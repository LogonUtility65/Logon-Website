import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faDownload } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import Hosting_Img_1 from '../../../assets/img/le-petals-1200x750.png'


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
                                    <p>Riya Shah, a talented designer behind Le Petals, understood the significance of maintaining strong communication with her customers regarding upcoming events and exhibitions. To enhance her customer engagement strategy, Riya partnered with Logon Utility to utilize their SMS and WhatsApp messaging solutions.</p>

                                    <p>With Logon Utility's integrated messaging platform, Riya was able to keep her clients informed about new collections, events, and exhibitions with ease. The user-friendly admin panel allowed Riya and her team to send messages instantly, ensuring that no important updates were missed. This flexibility and ease of use empowered Riya to focus more on her design work while maintaining effective communication with her clients.</p>

                                    <p>By leveraging Logon Utility’s services, Riya was able to enhance her business operations, providing timely updates that resonated with her customer base. The reliability of the messaging services ensured that her clients received important information without delay, which significantly improved customer satisfaction. The seamless integration of SMS and WhatsApp messaging into Le Petals' existing communication channels reinforced Riya’s commitment to outstanding service and customer care.</p>
                                </div>

                                <div className="row case-list-wrap">
                                    <div className="col-md-6 xs-padding">
                                        <ul className="case-list">
                                            <li><FontAwesomeIcon icon={faThumbsUp} style={{fontSize: '1em', marginRight:'4px', color:'059EE0'}}/> The integration of SMS and WhatsApp messaging streamlined Le Petals’ communication processes, ensuring timely and reliable delivery of messages to clients.</li>
                                            <li><FontAwesomeIcon icon={faThumbsUp} style={{fontSize: '1em', marginRight:'4px', color:'059EE0'}}/> Logon Utility provided a simple and intuitive admin panel, allowing Riya and her team to start sending messages instantly without any technical barriers.</li>
                                        </ul>
                                    </div>
                                    
                                    <div className="col-md-6 xs-padding">
                                        <ul className="case-list">
                                            <li><FontAwesomeIcon icon={faThumbsUp} style={{fontSize: '1em', marginRight:'4px', color:'059EE0'}}/> The reliable messaging services led to increased customer satisfaction, with clients appreciating the prompt and clear communication regarding events and exhibitions.</li>
                                            <li><FontAwesomeIcon icon={faThumbsUp} style={{fontSize: '1em', marginRight:'4px', color:'059EE0'}}/> Riya Shah expressed her gratitude towards Logon Utility, highlighting the significant impact their services had on her ability to stay connected with her customers effectively.</li>
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
                                        <li><span>Client Name:</span> Riya Shah</li>
                                        <li><span>Budget:</span> $10,000</li>
                                        <li><span>Category:</span> Customer Engagement Solutions</li>
                                        <li><span>Duration:</span> 3 months</li>
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
