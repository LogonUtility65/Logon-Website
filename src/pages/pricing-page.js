import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Pricing_Page_Header from '../components/Pricing/pricing_page_header';
import Pricing_Section from '../components/Pricing/pricing_section';


function Pricing_Page() {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Pricing Page - Your Website</title>
          <meta name="description" content="This is the pricing page of your website. It includes information about our services, testimonials, and more." />
        </Helmet>

        <Pricing_Page_Header />
        <Pricing_Section />

      </div>

    </HelmetProvider>
  );
}

export default Pricing_Page;
