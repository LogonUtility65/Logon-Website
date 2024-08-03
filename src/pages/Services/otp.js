import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';

import OTP_Header from '../../components/Services/OTP/otp_header';
import OTP_OverView from '../../components/Services/OTP/otp_overview';
import OTP_Key_Features from '../../components/Services/OTP/otp_key_features';
import OTP_FAQ from '../../components/Services/OTP/otp_faq';

import Bulk_SMS_Testimonials from '../../components/Services/Bulk_SMS/bulk_sms_testimonials';
import Cta_Section from '../../components/Home/cta_section';


function OTP() {
  return (
    <HelmetProvider>
    <div>
        <Helmet>
            <title>OTP Services - Logon Utility</title>
            <meta name="description" content="This is the WhatsApp Business API  page of your website. It includes information about our services, testimonials, and more." />
        </Helmet>

        <OTP_Header />
        <OTP_OverView />
        <OTP_Key_Features />
        <Cta_Section />
        <Bulk_SMS_Testimonials />
        <OTP_FAQ />
        
    </div>

</HelmetProvider>
  )
}

export default OTP;
