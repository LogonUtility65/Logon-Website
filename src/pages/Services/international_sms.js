import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';

import Internatoinal_SMS_Header from '../../components/Services/International_sms/international_sms_header';
import Internatoinal_SMS_OverView from '../../components/Services/International_sms/international_sms_overview';
import Internatoinal_SMS_Key_Features from '../../components/Services/International_sms/international_sms_key_features';
import Internatoinal_SMS_FAQ from '../../components/Services/International_sms/international_sms_faq';

import Bulk_SMS_Testimonials from '../../components/Services/Bulk_SMS/bulk_sms_testimonials';
import Cta_Section from '../../components/Home/cta_section';


function International_SMS() {
  return (
    <HelmetProvider>
    <div>
        <Helmet>
            <title>International SMS Services - Logon Utility</title>
            <meta name="description" content="This is the WhatsApp Business API  page of your website. It includes information about our services, testimonials, and more." />
        </Helmet>

        <Internatoinal_SMS_Header />
        <Internatoinal_SMS_OverView />
        <Internatoinal_SMS_Key_Features />
        <Cta_Section />
        <Bulk_SMS_Testimonials />
        <Internatoinal_SMS_FAQ />
        
    </div>

</HelmetProvider>
  )
}

export default International_SMS;
