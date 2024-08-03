import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';

import SMPP_Header from '../../components/Services/SMPP/smpp_header';
import SMPP_OverView from '../../components/Services/SMPP/smpp_overview';
import SMPP_Key_Features from '../../components/Services/SMPP/smpp_key_features';
import SMPP_FAQ from '../../components/Services/SMPP/smpp_faq';

import Bulk_SMS_Testimonials from '../../components/Services/Bulk_SMS/bulk_sms_testimonials';
import Cta_Section from '../../components/Home/cta_section';


function SMPP() {
  return (
    <HelmetProvider>
    <div>
        <Helmet>
            <title>SMPP Services - Logon Utility</title>
            <meta name="description" content="This is the WhatsApp Business API  page of your website. It includes information about our services, testimonials, and more." />
        </Helmet>

        <SMPP_Header />
        <SMPP_OverView />
        <SMPP_Key_Features />
        <Cta_Section />
        <Bulk_SMS_Testimonials />
        <SMPP_FAQ />
        
    </div>

</HelmetProvider>
  )
}

export default SMPP;
