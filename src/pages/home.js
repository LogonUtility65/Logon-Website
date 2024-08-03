import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import HeroSection from '../components/Home/hero_section';
import PromoSection from '../components/Home/promo_section';
import ContentSection from '../components/Home/content_section';
import ContentSection_II from '../components/Home/content_section_2';
import WebSearchSection from '../components/Home/web_search_section';
import ProjectSection from '../components/Home/project_section';
import Testimonial_Section from '../components/Home/testimonial_section';
import Cta_Section from '../components/Home/cta_section';
import Sponsor_Section from '../components/Home/sponsor_section';

import Header from '../components/Global/header';
import DemoSlick from '../components/Home/demo_slick';
import Faq_Section from '../components/Home/faq_section';

function Home() {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Home Page - Your Website</title>
          <meta name="description" content="This is the home page of your website. It includes information about our services, testimonials, and more." />
        </Helmet>

        <HeroSection />
        <PromoSection />
        <ContentSection />
        <ContentSection_II />
        <WebSearchSection />
        {/* <ProjectSection /> */}
        <DemoSlick />
        <Testimonial_Section />
        <Cta_Section />
        {/* <Sponsor_Section /> */}
        <Faq_Section />
      </div>

    </HelmetProvider>
  );
}

export default Home;
