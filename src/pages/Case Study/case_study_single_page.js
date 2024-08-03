import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import Case_Study_Header from '../../components/Case_Study/CS_Page_1/case_st_header';
import Case_Details from '../../components/Case_Study/CS_Page_1/case_details';


function Case_Study_Detail_Page() {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Case Study Single Page - Your Website</title>
          <meta name="description" content="This is the case study page of your website. It includes information about our services, testimonials, and more." />
        </Helmet>

      </div>

      <Case_Study_Header />
      <Case_Details />

    </HelmetProvider>
  );
}

export default Case_Study_Detail_Page;
