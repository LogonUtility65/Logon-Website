import React, { useState } from 'react';
import '../../../styles/css/faq.css'; // Import your CSS file for custom styles

function Faq_Section() {
    const [activeIndex, setActiveIndex] = useState("0-0"); // Set the first item open by default

    const handleToggle = index => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqData = [
        {
            question: "What is the SMPP Service?",
            answer: "Our SMPP Service is a protocol for exchanging SMS messages between your application and SMS service providers. It’s designed for high-speed and high-volume messaging."
        },
        {
            question: "How does the SMPP Service work?",
            answer: "Our SMPP Service facilitates communication between your systems and SMS providers through a standardized protocol, ensuring efficient message delivery."
        },
        {
            question: "Can I integrate SMPP Service with my existing systems?",
            answer: "Yes, our SMPP Service is designed for easy integration with your existing systems, allowing for a seamless setup and operation."
        },
        {
            question: "What are the benefits of using SMPP for messaging?",
            answer: "SMPP offers high-speed delivery, scalability, and flexibility, making it ideal for businesses with large or growing messaging needs."
        },
        {
            question: "Is the SMPP Service secure?",
            answer: "Yes, our service includes robust security features to protect your data and messages, ensuring a secure and reliable messaging experience"
        },
        {
            question: "How can I track the performance of my messages?",
            answer: "Our service provides real-time reporting and monitoring tools to track message delivery and performance, giving you valuable insights into your messaging operations."
        }
        
        
        
    ];

    return (
        <div id='faq'>
            <section className="faq-section bd-bottom padding">
                <div className="container">
                    <div className="row">
                        {Array(1).fill(0).map((_, colIndex) => (
                            <div className="col-md-12 padding-15" key={colIndex}>
                                <div id={`accordion${colIndex + 1}`} className="faq-item">
                                    <h2 className='faq-hd'>Frequently Asked Questions for SMPP Service</h2>

                                    {faqData.map((faq, index) => (
                                        <div className="card" key={index}>
                                            <div className="card-header">
                                                <h5 className="mb-0">
                                                    <button
                                                        className="btn btn-link"
                                                        onClick={() => handleToggle(`${colIndex}-${index}`)}
                                                        aria-expanded={activeIndex === `${colIndex}-${index}`}
                                                    >
                                                        {faq.question}
                                                        <span className="icon">
                                                            {activeIndex === `${colIndex}-${index}` ? '-' : '+'}
                                                        </span>
                                                    </button>
                                                </h5>
                                            </div>
                                            <div
                                                id={`faq${colIndex * faqData.length + index + 1}`}
                                                className={`collapse ${activeIndex === `${colIndex}-${index}` ? 'show' : ''}`}
                                                aria-labelledby={`faq${colIndex * faqData.length + index + 1}`}
                                                data-parent={`#accordion${colIndex + 1}`}
                                            >
                                                <div className="card-body">
                                                    {faq.answer}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Faq_Section;
