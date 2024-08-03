import React, { useEffect } from 'react';
import $ from 'jquery';
import { Link, useLocation } from 'react-router-dom';
import '../../SlickNav-master/dist/jquery.slicknav.min.js';
// import 'slicknav/dist/jquery.slicknav.css';
// import 'slicknav/dist/jquery.slicknav.js';
import './mob_header.css';

import Logon_logo from '../../assets/img/logon-logo-2.png';

window.jQuery = $;
window.$ = $;

const Header = () => {
  useEffect(() => {
    console.log('jQuery version:', $.fn.jquery);
    console.log('SlickNav loaded:', typeof $.fn.slicknav === 'function');

    $(function () {
      $('.menu-wrap ul.nav').slicknav({
        prependTo: '.header-section .navbar',
        label: '',
        allowParentLinks: true,
        duration: 300 // Animation duration
      });
    });
  }, []);


  const location = useLocation();

  // Function to determine if a path is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header id="header" className="header-section">
      <div className="container">
        <nav className="navbar">
          <Link to="/" className="navbar-brand">
            <img src={Logon_logo} alt="Saasbiz" className="logo" />
          </Link>
          <div className="d-flex menu-wrap">
            <div id="mainmenu" className="mainmenu">
              <ul className="nav" id="menu">
                <li className={isActive('/') ? 'active' : ''}>
                  <Link to="/" className="nav-link">
                    Home<span className="sr-only">(current)</span>
                  </Link>
                  <ul>
                    <li><Link to="/#overview" smooth={true} duration={500}>Overview</Link></li>
                    <li><Link to="/#why-choose-us" smooth={true} duration={500}>Why Choose Us</Link></li>
                    <li><Link to="/#testimonials-home">Testimonials</Link></li>
                    <li><Link to="/#faq">FAQ's</Link></li>
                  </ul>
                </li>
                <li className={isActive('/about-us') ? 'active' : ''}>
                  <Link to="/about-us">About</Link>
                  <ul>
                    <li><Link to="/about-us#overview">Company Overview</Link></li>
                    <li><Link to="/about-us#mission-vision">Mission & Vision</Link></li>
                    <li><Link to="/about-us#our-team">Team</Link></li>
                  </ul>
                </li>
                <li>
                  <Link to="#">Services</Link>
                  <ul>
                    <li>
                      <Link to="#" className="com-sol">
                        Communication Solutions
                      </Link>
                      <ul>
                        <li><Link to="/services/communication-solutions/bulk-sms" className="com-item">Bulk SMS</Link></li>
                        <li><Link to="/services/communication-solutions/voice-calls" className="com-item">Voice Calls</Link></li>
                        <li><Link to="services/communication-solutions/whatsapp-business-api" className="com-item">Whatsapp Business API</Link></li>
                        <li><Link to="services/communication-solutions/smpp" className="com-item">SMPP Service</Link></li>
                        <li><Link to="/services/communication-solutions/otp" className="com-item">OTP Service</Link></li>
                        <li><Link to="/services/communication-solutions/international-sms" className="com-item">International SMS</Link></li>
                        <li><Link to="/services/communication-solutions/rcs-messaging" className="com-item">RCS Messaging</Link></li>
                      </ul>
                    </li>
                    <li>
                      <Link to="#" className="com-sol">
                        Advertising Solutions
                      </Link>
                      <ul>
                        <li><Link to="/services/advertising-solutions/whatsapp-marketing-service" className="com-item">Whatsapp Marketing Service</Link></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className={isActive('/pricing-plans') ? 'active' : ''}>
                  <Link to="/pricing-plans">Pricing Plans</Link>
                </li>
                <li className={isActive('/case-study') ? 'active' : ''}>
                  <Link to="/case-study">Case Study</Link>
                </li>
                <li className={isActive('/blog') ? 'active' : ''}>
                  <Link to="/blog" className="nav-link">Blog</Link>
                </li>
                <li className={isActive('/contact') ? 'active' : ''}>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
