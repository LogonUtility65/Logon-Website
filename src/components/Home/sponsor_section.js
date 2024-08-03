import React from 'react';
import '../../App.css'

// Styles import here
import '../../styles/css/animate.min.css'
import '../../styles/css/elegant-font-icons.css'
import '../../styles/css/elegant-line-icons.css'
// import '../../styles/css/fontawesome.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
// import '../../styles/css/main.min.css'
import '../../styles/css/nice-select.css'
import '../../styles/css/odometer.min.css'
import '../../styles/css/owl.carousel.css'
// import '../../styles/css/plugins.min.css'
import '../../styles/css/pricing-table.css'
import '../../styles/css/responsive.css'
import '../../styles/css/saasbiz-icons.css'
import '../../styles/css/slicknav.min.css'
// import '../../styles/css/themify-icons.css'

function Sponsor_Section() {
    return (
        <div className="sponsor-section padding">
            <div className="section-heading mb-40 text-center wow fadeInUp" data-wow-delay="100ms">
                <span>Sponsors</span>
                <h2>Trusted by over 30,000 world’s <br />leading companies!</h2>
            </div>
            <div className="container">
                <div id="sponsor-carousel" className="sponsor-carousel owl-carousel">
                    <div className="sponsor-item">
                        <img src="img/sponsor-1.png" alt="sponsor" />
                    </div>
                    <div className="sponsor-item">
                        <img src="img/sponsor-2.png" alt="sponsor" />
                    </div>
                    <div className="sponsor-item">
                        <img src="img/sponsor-3.png" alt="sponsor" />
                    </div>
                    <div className="sponsor-item">
                        <img src="img/sponsor-4.png" alt="sponsor" />
                    </div>
                    <div className="sponsor-item">
                        <img src="img/sponsor-5.png" alt="sponsor" />
                    </div>
                    <div className="sponsor-item">
                        <img src="img/sponsor-6.png" alt="sponsor" />
                    </div>
                    <div className="sponsor-item">
                        <img src="img/sponsor-3.png" alt="sponsor" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sponsor_Section
