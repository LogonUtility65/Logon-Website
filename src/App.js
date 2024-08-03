import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/css/main.css';
import './styles/css/bootstrap.min.css'
import 'animate.css/animate.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import './styles/css/plugins.min.css';
import './styles/css/animate.min.css';
import './components/Global/mob_header.css';


// Global Import Here
import Header from './components/Global/header';
import Footer from './components/Global/footer';
import Get_Quote from './components/Global/get_a_quote';
import useWindowSize from './useWindowSize'; // Custom hook to get window size
import PreLoader from './components/Global/pre_loader'; // Import PreLoader component
import ScrollToTop from './components/Global/scroll_top';


// Pages Import Here
import Home from './pages/home';
import About from './pages/about-us';
import Blog from './pages/blog';
import Contact from './pages/contact';
import Case_Study from './pages/Case Study/case_study_grid_page'
import Cs_FreeSoft_1 from './pages/Case Study/cs_freesoft_1';
import Cs_Le_Petals from './pages/Case Study/cs_le_petals';
import Cs_Coder_Workz from './pages/Case Study/cs_coder_workz';
import Pricing_Page from './pages/pricing-page';
import Page_Not_Found from './pages/page-not-found';
import Thank_You from './pages/thank_you'


// Services Pages
import Bulk_SMS from './pages/Services/bulk_sms';
import Voice_Calls from './pages/Services/voice_calls';
import WhatsApp_API from './pages/Services/whatsapp_api';
import SMPP from './pages/Services/smpp';
import OTP from './pages/Services/otp';
import International_SMS from './pages/Services/international_sms';
import RCS_Message from './pages/Services/rcs_message';
import WhatsApp_Marketing from './pages/Services/whatsapp_marketing';


// Components Import
import IndividualPost from './components/Blog/IndividualPost';



function App() {
  const { width } = useWindowSize();
  const [loading, setLoading] = useState(true); // State to manage loading state

  useEffect(() => {
    // Simulate a loading time (e.g., 3 seconds)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <PreLoader />; // Show PreLoader while loading
  }

  return (
    <Router>
      <div>
        <Header />
        {/* {width > 768 ? <Header /> : <Mob_Header />} */}
        <Get_Quote />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<IndividualPost />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/case-study" element={<Case_Study />} />
          <Route path="/pricing-plans" element={<Pricing_Page />} />
          <Route path='/case-study/freesoft-transformation-logon-utility' element={<Cs_FreeSoft_1 />} />
          <Route path='/case-study/le-petals-logon-utility' element={<Cs_Le_Petals />} />
          <Route path='/case-study/coderworkz-ravi-jindal-logon-utility' element={<Cs_Coder_Workz />} />
          <Route path="/services/communication-solutions/bulk-sms" element={<Bulk_SMS />} />
          <Route path="/services/communication-solutions/voice-calls" element={<Voice_Calls />} />
          <Route path="/services/communication-solutions/whatsapp-business-api" element={<WhatsApp_API />} />
          <Route path="/services/communication-solutions/smpp" element={<SMPP />} />
          <Route path="/services/communication-solutions/otp" element={<OTP />} />
          <Route path="/services/communication-solutions/international-sms" element={<International_SMS />} />
          <Route path="/services/communication-solutions/rcs-messaging" element={<RCS_Message />} />
          <Route path="/services/advertising-solutions/whatsapp-marketing-service" element={<WhatsApp_Marketing />} />


          <Route path='/thank-you' element={<Thank_You />} />
          {/* Catch-all route for 404 */}
          <Route path="*" element={<Page_Not_Found />} />
        </Routes>

        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
