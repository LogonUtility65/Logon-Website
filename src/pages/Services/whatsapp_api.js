import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';

import Whatsapp_API_Header from '../../components/Services/Whatsapp_API/whatsapp_api_header';
import Whatsapp_API_OverView from '../../components/Services/Whatsapp_API/whatsapp_api_overview';
import Whatsapp_API_Key_Features from '../../components/Services/Whatsapp_API/whatsapp_api_key_features';
import Whatsapp_API_FAQ from '../../components/Services/Whatsapp_API/whatsapp_api_faq';
import Bulk_SMS_Testimonials from '../../components/Services/Bulk_SMS/bulk_sms_testimonials';

import Cta_Section from '../../components/Home/cta_section';


function WhatsApp_API() {
  return (
    <HelmetProvider>
    <div>
        <Helmet>
            <title>WhatsApp Business API - Logon Utility</title>
            <meta name="description" content="This is the WhatsApp Business API  page of your website. It includes information about our services, testimonials, and more." />
        </Helmet>

        <Whatsapp_API_Header />
        <Whatsapp_API_OverView />
        <Whatsapp_API_Key_Features />
        <Cta_Section />
        <Bulk_SMS_Testimonials />
        <Whatsapp_API_FAQ />
        
    </div>

</HelmetProvider>
  )
}

export default WhatsApp_API;
