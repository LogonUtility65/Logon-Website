import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';

import RCS_Message_Header from '../../components/Services/RCS_Messaging/rcs_msg_header';
import RCS_Message_OverView from '../../components/Services/RCS_Messaging/rcs_msg_overview';
import RCS_Message_Key_Features from '../../components/Services/RCS_Messaging/rcs_msg_key_features';
import RCS_Message_FAQ from '../../components/Services/RCS_Messaging/rcs_msg_faq';

import Bulk_SMS_Testimonials from '../../components/Services/Bulk_SMS/bulk_sms_testimonials';
import Cta_Section from '../../components/Home/cta_section';


function RCS_Message() {
  return (
    <HelmetProvider>
    <div>
        <Helmet>
            <title>RCS Messaging Services - Logon Utility</title>
            <meta name="description" content="This is the WhatsApp Business API  page of your website. It includes information about our services, testimonials, and more." />
        </Helmet>

        <RCS_Message_Header />
        <RCS_Message_OverView />
        <RCS_Message_Key_Features />
        <Cta_Section />
        <Bulk_SMS_Testimonials />
        <RCS_Message_FAQ />
        
    </div>

</HelmetProvider>
  )
}

export default RCS_Message;
