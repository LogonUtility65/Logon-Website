import React, { useState } from 'react';
import '../../../styles/css/faq.css'; // Import your CSS file for custom styles

function Faq_Section() {
    const [activeIndex, setActiveIndex] = useState("0-0"); // Set the first item open by default

    const handleToggle = index => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqData = [
        {
            question: "What is WhatsApp Marketing Service?",
            answer: "Our WhatsApp Marketing Service allows businesses to send personalized and interactive messages to their audience via WhatsApp, enhancing marketing efforts and customer engagement."
        },
        {
            question: "How does WhatsApp Marketing Service work?",
            answer: "Our service enables you to create, manage, and automate WhatsApp campaigns through an easy-to-use web portal. Send messages, track performance, and engage with your audience effectively."
        }, 
        {
            question: "What are the benefits of using WhatsApp for marketing?",
            answer: "WhatsApp offers personalized communication, rich media support, and interactive features. It provides a direct and engaging way to connect with your audience and drive conversions."
        }, 
        {
            question: "Can I track the performance of my WhatsApp campaigns?",
            answer: "Yes, our service includes real-time analytics to monitor delivery rates, open rates, and user interactions, allowing you to optimize your campaigns."
        }, 
        {
            question: "Is the WhatsApp Marketing Service secure?",
            answer: "Yes, our service includes robust security measures, including encryption, to protect your data and messages, ensuring a secure marketing experience."
        }, 
        {
            question: "How can I get support for the WhatsApp Marketing Service?",
            answer: "Our customer support team is available 24/7 to assist with any issues or questions. Contact us anytime for support with your WhatsApp marketing campaigns."
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
                                    <h2 className='faq-hd'>Frequently Asked Questions for WhatsApp Marketing</h2>

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
