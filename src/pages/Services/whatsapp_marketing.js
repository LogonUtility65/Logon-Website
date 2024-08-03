import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';

import Whatsapp_Marketing_Header from '../../components/Services/Whatsapp_Marketing/whatsappa_marketing_header';
import Whatsapp_Marketing_OverView from '../../components/Services/Whatsapp_Marketing/whatsappa_marketing_overview';
import Whatsapp_Marketing_Key_Features from '../../components/Services/Whatsapp_Marketing/whatsappa_marketing_key_features';
import Whatsapp_Marketing_FAQ from '../../components/Services/Whatsapp_Marketing/whatsappa_marketing_faq';

import Bulk_SMS_Testimonials from '../../components/Services/Bulk_SMS/bulk_sms_testimonials';
import Cta_Section from '../../components/Home/cta_section';


function Whatsapp_Marketing() {
  return (
    <HelmetProvider>
    <div>
        <Helmet>
            <title>WhatsApp Marketing Services - Logon Utility</title>
            <meta name="description" content="This is the WhatsApp Business API  page of your website. It includes information about our services, testimonials, and more." />
        </Helmet>

        <Whatsapp_Marketing_Header />
        <Whatsapp_Marketing_OverView />
        <Whatsapp_Marketing_Key_Features />
        <Cta_Section />
        <Bulk_SMS_Testimonials />
        <Whatsapp_Marketing_FAQ />
        
    </div>

</HelmetProvider>
  )
}

export default Whatsapp_Marketing;
