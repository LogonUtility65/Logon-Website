import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import Case_Study_Header_Pg_1 from '../../components/Case_Study/CS_Page_1/case_st_header_pg_1';
import Case_Details_Pg_1 from '../../components/Case_Study/CS_Page_1/case_details_pg_1';


function Case_Study_Detail_Page() {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>FreeSoft’s Transformation with Logon Utility’s SMS and WhatsApp Services</title>
          <meta name="description" content="Discover how FreeSoft, a leader in IT modernization, enhanced their customer communication with Logon Utility's SMS and WhatsApp messaging services, achieving high delivery rates and improved customer satisfaction." />
        </Helmet>

      </div>

      <Case_Study_Header_Pg_1 />
      <Case_Details_Pg_1 />

    </HelmetProvider>
  );
}

export default Case_Study_Detail_Page;
