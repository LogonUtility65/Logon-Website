import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import About_Spotlight_Section from '../components/About/about_spotlg_sec';
import About_Promo_Section from '../components/About/about_promo_sec';
import About_Content_Sec from '../components/About/about_content_sec';
import About_Counter_Sec from '../components/About/about_counter_sec';
import Our_Team_Sec from '../components/About/about_our_team';

function About_Us() {
    return (
        <HelmetProvider>
          <div>
            <Helmet>
              <title>About Us Page - Your Website</title>
              <meta name="description" content="This is the About page of your website. It includes information about our services, testimonials, and more." />
            </Helmet>

            <About_Spotlight_Section />
            <About_Promo_Section />
            <About_Content_Sec />
            <About_Counter_Sec />
            <Our_Team_Sec />

            
          </div>
    
        </HelmetProvider>
      );
    }

export default About_Us
