import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Cs_Grid_Pg_hd from '../../components/Case_Study/CS_Grid/cs_grid_pg_hd';
import Cs_Grid from '../../components/Case_Study/CS_Grid/cs_grid';

function Case_Study_Grid_Page() {
  return (
    <HelmetProvider>
    <div>
      <Helmet>
        <title>Case Study Single Page - Your Website</title>
        <meta name="description" content="This is the case study page of your website. It includes information about our services, testimonials, and more." />
      </Helmet>

    </div>

    <Cs_Grid_Pg_hd />
    <Cs_Grid />


  </HelmetProvider>
  )
}

export default Case_Study_Grid_Page;
