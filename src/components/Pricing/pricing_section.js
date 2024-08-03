import React from 'react'

function Pricing_Header() {
    return (
        <div>
            <section className="pricing-section padding bd-bottom">
                <div className="container">
                    <div className="cd-pricing-switcher-container">
                        <div className="cd-pricing-switcher text-center">
                            <p className="fieldset">
                                <input type="radio" name="duration-1" defaultValue="monthly" id="monthly-1" defaultChecked />
                                <label htmlFor="monthly-1">Monthly</label>
                                <input type="radio" name="duration-1" defaultValue="yearly" id="yearly-1" />
                                <label htmlFor="yearly-1">Yearly</label>
                                <span className="cd-switch" />
                            </p>
                        </div>
                    </div> {/* .cd-pricing-switcher */}

                    <div className="row">
                        <div className="col-lg-12 xs-padding">
                            <div className="pricing-wrap cd-pricing-container">
                                <ul className="cd-pricing-list cd-bounce-invert row">

                                    <li className="cd-popular col-lg-4">
                                        <ul className="cd-pricing-wrapper">

                                            <li data-type="monthly" className="is-visible pricing-box">
                                                <div className="pricing-head">
                                                    <img src="https://html.dynamiclayers.net/dl/saasbiz/img/pricing-head-1.jpg" alt="img" />
                                                    <h3>$29.00</h3>
                                                    <span>Starter</span>
                                                </div>
                                                <ul className="pricing-list">
                                                    <li>1024 MB Memory</li>
                                                    <li>10 Websites</li>
                                                    <li>Unlimited Bandwidth</li>
                                                    <li>24/7 Support</li>
                                                </ul>
                                                <div className="pricing-footer">
                                                    <a href="#" className="default-btn btn-blue">Get Started</a>
                                                </div>
                                            </li>
                                            <li data-type="yearly" className="is-hidden pricing-box">
                                                <div className="pricing-head">
                                                    <img src="https://html.dynamiclayers.net/dl/saasbiz/img/pricing-head-1.jpg" alt="img" />
                                                    <h3>$49.00</h3>
                                                    <span>Starter</span>
                                                </div>
                                                <ul className="pricing-list">
                                                    <li>1024 MB Memory</li>
                                                    <li>10 Websites</li>
                                                    <li>Unlimited Bandwidth</li>
                                                    <li>24/7 Support</li>
                                                </ul>
                                                <div className="pricing-footer">
                                                    <a href="#" className="default-btn btn-blue">Get Started</a>
                                                </div>
                                            </li>

                                        </ul> {/* .cd-pricing-wrapper */}
                                    </li>


                                    <li className="col-lg-4">
                                        <ul className="cd-pricing-wrapper">

                                            <li data-type="monthly" className="is-visible pricing-box">
                                                <div className="price-tag"><span>Recommended</span></div>
                                                <div className="pricing-head">
                                                    <img src="https://html.dynamiclayers.net/dl/saasbiz/img/pricing-head-1.jpg" alt="img" />
                                                    <h3>$49.00</h3>
                                                    <span>Premium</span>
                                                </div>
                                                <ul className="pricing-list">
                                                    <li>1024 MB Memory</li>
                                                    <li>10 Websites</li>
                                                    <li>Unlimited Bandwidth</li>
                                                    <li>24/7 Support</li>
                                                </ul>
                                                <div className="pricing-footer">
                                                    <a href="#" className="default-btn btn-blue">Get Started</a>
                                                </div>
                                            </li>
                                            <li data-type="yearly" className="is-hidden pricing-box">
                                                <div className="pricing-head">
                                                    <img src="https://html.dynamiclayers.net/dl/saasbiz/img/pricing-head-1.jpg" alt="img" />
                                                    <h3>$69.00</h3>
                                                    <span>Premium</span>
                                                </div>
                                                <ul className="pricing-list">
                                                    <li>1024 MB Memory</li>
                                                    <li>10 Websites</li>
                                                    <li>Unlimited Bandwidth</li>
                                                    <li>24/7 Support</li>
                                                </ul>
                                                <div className="pricing-footer">
                                                    <a href="#" className="default-btn btn-blue">Get Started</a>
                                                </div>
                                            </li>

                                        </ul> {/* .cd-pricing-wrapper */}
                                    </li>

                                    <li className="col-lg-4">
                                        <ul className="cd-pricing-wrapper">

                                            <li data-type="monthly" className="is-visible pricing-box">
                                                <div className="pricing-head">
                                                    <img src="https://html.dynamiclayers.net/dl/saasbiz/img/pricing-head-1.jpg" alt="img" />
                                                    <h3>$89.00</h3>
                                                    <span>Business</span>
                                                </div>
                                                <ul className="pricing-list">
                                                    <li>1024 MB Memory</li>
                                                    <li>10 Websites</li>
                                                    <li>Unlimited Bandwidth</li>
                                                    <li>24/7 Support</li>
                                                </ul>
                                                <div className="pricing-footer">
                                                    <a href="#" className="default-btn btn-blue">Get Started</a>
                                                </div>
                                            </li>
                                            <li data-type="yearly" className="is-hidden pricing-box">
                                                <div className="pricing-head">
                                                    <img src="https://html.dynamiclayers.net/dl/saasbiz/img/pricing-head-1.jpg" alt="img" />
                                                    <h3>$99.00</h3>
                                                    <span>Business</span>
                                                </div>
                                                <ul className="pricing-list">
                                                    <li>1024 MB Memory</li>
                                                    <li>10 Websites</li>
                                                    <li>Unlimited Bandwidth</li>
                                                    <li>24/7 Support</li>
                                                </ul>
                                                <div className="pricing-footer">
                                                    <a href="#" className="default-btn btn-blue">Get Started</a>
                                                </div>
                                            </li>

                                        </ul> {/* .cd-pricing-wrapper */}
                                    </li>
                                    
                                </ul> {/* .cd-pricing-list */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Pricing_Header;
