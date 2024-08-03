import React from 'react'
import Team_Member_Img from '../../assets/img/team-1-1.jpg'

function Our_Team_Sec() {
    return (
        <div id='our-team'>
            <section className="tophic-team padding">
                <div className="container">
                    <div className="section-heading text-center mb-40">
                        <span>Team Members</span>
                        <h2>Our Expert Team Would Like <br /> To Hear From You!</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-sm-6 sm-padding">
                            <div className="team-wrap">
                                <div className="team-box">
                                    <div className="overlay" />
                                    <img src={Team_Member_Img} alt="img" />
                                    <ul className="team-social">
                                        <li><a href="#"><i className="ti-facebook" /></a></li>
                                        <li><a href="#"><i className="ti-twitter" /></a></li>
                                        <li><a href="#"><i className="ti-instagram" /></a></li>
                                        <li><a href="#"><i className="ti-youtube" /></a></li>
                                    </ul>
                                </div>
                                <div className="team-content">
                                    <h3>Amarjeet Singh<span>Sales Person</span></h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 sm-padding">
                            <div className="team-wrap">
                                <div className="team-box">
                                    <div className="overlay" />
                                    <img src={Team_Member_Img} alt="img" />
                                    <ul className="team-social">
                                        <li><a href="#"><i className="ti-facebook" /></a></li>
                                        <li><a href="#"><i className="ti-twitter" /></a></li>
                                        <li><a href="#"><i className="ti-instagram" /></a></li>
                                        <li><a href="#"><i className="ti-youtube" /></a></li>
                                    </ul>
                                </div>
                                <div className="team-content">
                                    <h3>Aarti <span>Sales Person</span></h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 sm-padding">
                            <div className="team-wrap">
                                <div className="team-box">
                                    <div className="overlay" />
                                    <img src={Team_Member_Img} alt="img" />
                                    <ul className="team-social">
                                        <li><a href="#"><i className="ti-facebook" /></a></li>
                                        <li><a href="#"><i className="ti-twitter" /></a></li>
                                        <li><a href="#"><i className="ti-instagram" /></a></li>
                                        <li><a href="#"><i className="ti-youtube" /></a></li>
                                    </ul>
                                </div>
                                <div className="team-content">
                                    <h3>Rahul<span>Sales Person</span></h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 sm-padding">
                            <div className="team-wrap">
                                <div className="team-box">
                                    <div className="overlay" />
                                    <img src={Team_Member_Img} alt="img" />
                                    <ul className="team-social">
                                        <li><a href="#"><i className="ti-facebook" /></a></li>
                                        <li><a href="#"><i className="ti-twitter" /></a></li>
                                        <li><a href="#"><i className="ti-instagram" /></a></li>
                                        <li><a href="#"><i className="ti-youtube" /></a></li>
                                    </ul>
                                </div>
                                <div className="team-content">
                                    <h3>Neha<span>Accountant</span></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Our_Team_Sec
