import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';

import Bulk_SMS_Header from '../../components/Services/Bulk_SMS/bulk_sms_header';
import Bulk_SMS_Overview from '../../components/Services/Bulk_SMS/bulk_sms_overview';
import Bulk_SMS_Key_Features from '../../components/Services/Bulk_SMS/bulk_sms_key_features';
import Bulk_SMS_Testimonials from '../../components/Services/Bulk_SMS/bulk_sms_testimonials';
import Bulk_SMS_FAQ from '../../components/Services/Bulk_SMS/bulk_sms_faq';
import Testimonial_Section from '../../components/Home/testimonial_section';
import Cta_Section from '../../components/Home/cta_section';

function Bulk_SMS() {
  return (
    <HelmetProvider>
    <div>
        <Helmet>
            <title>Bulk SMS - Logon Utility</title>
            <meta name="description" content="This is the Blog page of your website. It includes information about our services, testimonials, and more." />
        </Helmet>

        <Bulk_SMS_Header />
        <Bulk_SMS_Overview />
        <Bulk_SMS_Key_Features />
        <Cta_Section />
        <Bulk_SMS_Testimonials />
        <Bulk_SMS_FAQ />
       
        
    </div>

</HelmetProvider>
  )
}

export default Bulk_SMS
