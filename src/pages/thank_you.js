import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Pg_nt_img from './../assets/img/thank-you-mail-img.png'

const Thank_You_Page = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/');
        }, 10000); // Redirect to home page after 5 seconds

        return () => clearTimeout(timer); // Cleanup timer on component unmount
    }, [navigate]);


    return (
        <HelmetProvider>
            <div>
                <Helmet>
                    <title>Thank You - Logon Utility</title>
                    {/* <meta name="description" content="This is the pricing page of your website. It includes information about our services, testimonials, and more." /> */}
                </Helmet>

                <section className="thank-section bd-top">
                    <div className="container">
                        <div className="thank-content text-center">
                            <img src={Pg_nt_img} alt="img" className='thank-you-mail-img' />
                            <div className="thank-info">
                                <h2 className='thank-u-hd'>Thank You!</h2>
                                <p>Your submission has been received.</p>
                                <p>We appreciate your feedback and will get back to you soon.<br /> <a href="/">Go Back To Homapage</a></p>
                            </div>
                        </div>
                    </div>
                </section>

            </div>

        </HelmetProvider>
    );
}

export default Thank_You_Page;


  