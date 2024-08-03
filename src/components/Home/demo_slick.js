import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Portfolio_Img_1 from '../../assets/img/freesoft-800x603.png';
import Portfolio_Img_2 from '../../assets/img/le-petals-800x603.png';
import Portfolio_Img_3 from '../../assets/img/coder-800x603.png';
import Portfolio_Img_4 from '../../assets/img/portfolio-4.jpg';


function DemoSlick() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 300000,
    cssEase: 'linear',
    centerMode: true,
    centerPadding: '0px',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  return (
    <section className="project-section bd-bottom padding">
      <div className="container">
        <div className="section-heading text-center mb-40">
          <span>Projects</span>
          <h2>Our Case Studies</h2>
        </div>
        <div className="row">
          <div className="col-lg-10 offset-lg-1 sm-padding">
            <Slider {...settings}>

              <div className="project-item">
                <img src={Portfolio_Img_1} alt="img" />
                <div className="project-content">
                  <span>Marketing</span>
                  <h3><a href="/case-study/freesoft-transformation-logon-utility">FreeSoft's Transformation with Logon Utility's SMS and WhatsApp Services</a></h3>
                  <a href="/case-study/freesoft-transformation-logon-utility" className="read-more"><i className="ti-plus" />+</a>
                </div>
              </div>
              <div className="project-item">
                <img src={Portfolio_Img_2} alt="img" />
                <div className="project-content">
                  <span>Marketing</span>
                  <h3><a href="/case-study/le-petals-logon-utility">Le Petals Enhances Customer Engagement with Logon Utility</a></h3>
                  <a href="/case-study/le-petals-logon-utility" className="read-more"><i className="ti-plus" />+</a>
                </div>
              </div>
              <div className="project-item">
                <img src={Portfolio_Img_4} alt="img" />
                <div className="project-content">
                  <span>Marketing</span>
                  <h3><a href="#">Twice profit than before you ever got in business.</a></h3>
                  <a href="#" className="read-more"><i className="ti-plus" />+</a>
                </div>
              </div>
              <div className="project-item">
                <img src={Portfolio_Img_3} alt="img" />
                <div className="project-content">
                  <span>Marketing</span>
                  <h3><a href="/case-study/coderworkz-ravi-jindal-logon-utility">CoderWorkz Boosts Customer Communication with Logon Utility</a></h3>
                  <a href="/case-study/coderworkz-ravi-jindal-logon-utility" className="read-more"><i className="ti-plus" />+</a>
                </div>
              </div>


            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DemoSlick;
