import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Anuva from '../../assets/img/Anuvaa.png'
import PtBusiness from '../../assets/img/pt-Business.png'
import AISCE from '../../assets/img/AISCE.png'
import CoderWorkz from '../../assets/img/CoderWorkz.png'
import Dental from '../../assets/img/Dental.png'
import Sancom from '../../assets/img/Sancom.png'


function Testimonial_Section() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="testimonial-section bg-grey bd-bottom padding" id='testimonials-home'>
      <div className="left-design" />
      <div className="right-design" />
      <div className="container">
        <div className="row">
          <div className="col-lg-6 xs-padding d-none d-lg-block">
            <div className="clients-thumb">
              <div className="ct-thumb thumb-1" />
              <div className="ct-thumb thumb-2" />
              <div className="ct-thumb thumb-3" />
              <div className="ct-thumb thumb-4" />
              <div className="ct-thumb thumb-5" />
            </div>
          </div>
          <div className="col-lg-6 xs-padding">
            <div className="section-heading">
              <span>Testimonial</span>
              <h2>What Our Clients Say!</h2>
            </div>
            <Slider {...settings}>
              <div className="testi-item">
                <p>"I used Logon Utilitys Bulk SMS service to promote my business, and i must say that i am one happy customer. The entire team at Logon helped me a lot with all the small queries i had. I enjoy doing business with them and would surely recommend every business to associate with them"</p>
                <div className="testi-thumb">
                  <img src={Anuva} alt="img" />
                  <h3>Raghav Naik<span>Anuvaa</span></h3>
                </div>
              </div>

              <div className="testi-item">
                <p>"We have leased the services of Logon Utility Office since inception and we have reaped tremendous benefits. The services of LUO are both affordable and high-quality. LUO has very high standards of operation and they have always succeeded in meeting our high demands. The services of LUO are best in the industry in terms of cost as well as scalability. Also, the transparency of their operation is always appreciated."</p>
                <div className="testi-thumb">
                  <img src={Sancom} alt="img" />
                  <h3>Varsha Pandit <span>Head of Global Operations, Sancom Engineering Ltd.</span></h3>
                </div>
              </div>

              <div className="testi-item">
                <p>"I have always wanted to do a business. But i dint want to quit my job. Logon gave me the opportunity to start my part time business. Now i am a re seller with logon and make decent money by selling their services to my customers. Thank you Logon for the opportunity."</p>
                <div className="testi-thumb">
                  <img src={PtBusiness} alt="img" />
                  <h3>Ravi Rao <span>Part time Business</span></h3>
                </div>
              </div>

              <div className="testi-item">
                <p>"I used Logon Utilitys Bulk SMS service to promote business as well as handle patient transactions and I am very satisfied with their service. Our business has grown two-fold since the start of the campaign. The customer service team at Logon Utility Office is very friendly, supportive and professional. I enjoy doing business with them and would whole-heartedly recommend every business to associate with them."</p>
                <div className="testi-thumb">
                  <img src={Dental} alt="img" />
                  <h3>Dr. Usha Menon <span>Doctor of Dental Surgery</span></h3>
                </div>
              </div>

              <div className="testi-item">
                <p>"We are a growing company and it is essential to the survival of our business to keep in touch with our customers. I can proudly say that we have been quite successful to that end largely owing to the great service provided by Logon Utility Office. Our partnership in this endeavor has opened up new avenues for our business and I am very happy to associate with a business of such high quality. It is my hope that our partnership will keep growing stronger and enable us to use this synergy to achieve greater heights."</p>
                <div className="testi-thumb">
                  <img src={CoderWorkz} alt="img" />
                  <h3>Ravi Jindal <span>Chief Technology Officer, CoderWorkz</span></h3>
                </div>
              </div>

              <div className="testi-item">
                <p>"The core of our operation involves reaching out to our customers with up-to-date promotions available and Logon Utility Office has enabled us to succeed immensely in that regard. I would like to thank Logon Utility Office for making it so easy for me to keep in touch with my customers with latest promotions. There is customer support for every little problem that needs to be solved. In my experience, the service of Logon Utility Office has always been prompt and high-quality"</p>
                <div className="testi-thumb">
                  <img src={AISCE} alt="img" />
                  <h3>Mangesh Kumar <span>Deputy Chairman of AISCE</span></h3>
                </div>
              </div>
              
              

            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial_Section;
