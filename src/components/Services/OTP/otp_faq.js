import React, { useState } from 'react';
import '../../../styles/css/faq.css'; // Import your CSS file for custom styles

function Faq_Section() {
    const [activeIndex, setActiveIndex] = useState("0-0"); // Set the first item open by default

    const handleToggle = index => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqData = [
        {
            question: "What is the OTP Service?",
            answer: "Our OTP Service generates and sends one-time passwords to users for secure authentication. It adds an extra layer of security to user verification processes."
        },  
        {
            question: "How does the OTP Service work?",
            answer: "Our service creates unique OTPs that are sent to users via SMS, email, or voice calls. Users enter the OTP to verify their identity during login or transactions."
        },  
        
        {
            question: "Can I customize the OTP format and message?",
            answer: "Yes, our service allows you to customize the OTP format, length, and message content to fit your business needs and enhance user experience."
        },  
        
        {
            question: "Is the OTP Service secure?",
            answer: "Yes, our OTP Service employs strong encryption and security measures to protect OTPs and ensure secure authentication."
        },  
        
        {
            question: "How can I monitor OTP delivery and performance?",
            answer: "Our service provides real-time monitoring and reporting tools to track OTP delivery, usage, and overall performance."
        },  
        
        {
            question: "What if I need support with the OTP Service?",
            answer: "Our customer support team is available 24/7 to assist with any issues or questions related to OTP delivery and integration."
        },  
        
        
    ];

    return (
        <div id='faq'>
            <section className="faq-section bd-bottom padding">
                <div className="container">
                    <div className="row">
                        {Array(1).fill(0).map((_, colIndex) => (
                            <div className="col-md-12 padding-15" key={colIndex}>
                                <div id={`accordion${colIndex + 1}`} className="faq-item">
                                    <h2 className='faq-hd'>Frequently Asked Questions for OTP Service</h2>

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
