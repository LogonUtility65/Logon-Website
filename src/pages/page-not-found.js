import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Pg_nt_img from './../assets/img/404-1.png'

function Page_Not_Found() {
    return (
        <HelmetProvider>
            <div>
                <Helmet>
                    <title>Page Not Found - Logon Utility</title>
                    {/* <meta name="description" content="This is the pricing page of your website. It includes information about our services, testimonials, and more." /> */}
                </Helmet>


                {/* <section class="page-header padding">
                    <div class="anim-elements">
                        <div class="anim-element"></div>
                        <div class="anim-element"></div>
                        <div class="anim-element"></div>
                        <div class="anim-element"></div>
                        <div class="anim-element"></div>
                    </div>
                    <div class="container">
                        <div class="page-content text-center">
                            <h2 className='h2-hd'>PAGE NOT FOUND</h2>
                            <h3 className='h2-hd'></h3>
                        </div>
                    </div>
                </section> */}

                <section className="error-section bd-top">
                    <div className="container">
                        <div className="error-content text-center">
                            <img src={Pg_nt_img} alt="img" />
                            <div className="error-info">
                                <h2 className='pg-nt-hd'>404</h2>
                                <p>Aha! You see! You can be wrong! <br />...either way, you should probably <br /> <a href="/">Go Back To Homapage</a></p>
                            </div>
                        </div>
                    </div>
                </section>

            </div>

        </HelmetProvider>
    );
}

export default Page_Not_Found;
