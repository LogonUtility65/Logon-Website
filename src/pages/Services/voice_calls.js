import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';

import Voice_Calls_Header from '../../components/Services/Voice_Calls/voice_calls_header';
import Voice_Calls_OverView from '../../components/Services/Voice_Calls/voice_calls_overview';
import Voice_Calls_Key_Features from '../../components/Services/Voice_Calls/voice_calls_key_features';
import Voice_Calls_FAQ from '../../components/Services/Voice_Calls/voice_calls_faq';
import Bulk_SMS_Testimonials from '../../components/Services/Bulk_SMS/bulk_sms_testimonials';

import Cta_Section from '../../components/Home/cta_section';


function Voice_Calls() {
  return (
    <HelmetProvider>
    <div>
        <Helmet>
            <title>Voice Calls - Logon Utility</title>
            <meta name="description" content="This is the voice calls page of your website. It includes information about our services, testimonials, and more." />
        </Helmet>

        <Voice_Calls_Header />
        <Voice_Calls_OverView />
        <Voice_Calls_Key_Features />
        <Cta_Section />
        <Bulk_SMS_Testimonials />
        <Voice_Calls_FAQ />
        
    </div>

</HelmetProvider>
  )
}

export default Voice_Calls
