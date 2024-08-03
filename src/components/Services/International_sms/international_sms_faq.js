import React, { useState } from 'react';
import '../../../styles/css/faq.css'; // Import your CSS file for custom styles

function Faq_Section() {
    const [activeIndex, setActiveIndex] = useState("0-0"); // Set the first item open by default

    const handleToggle = index => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqData = [
        {
            question: "What is the International SMS Service?",
            answer: "Our International SMS Service allows you to send SMS messages to recipients in over 200 countries, providing global coverage for your communication needs"
        },  
        {
            question: "How does the International SMS Service work?",
            answer: "Our service uses a network of international SMS routes to deliver messages globally. You manage and send messages through our web portal"
        },
        {
            question: "Can I track the delivery of my international messages?",
            answer: "Yes, our service provides real-time delivery reports so you can monitor the status of your messages and ensure they reach their destination."
        },
        {
            question: "What are the benefits of using the International SMS Service?",
            answer: "The service offers global reach, high delivery rates, and cost-effective pricing, making it ideal for businesses with international communication needs."
        },
        {
            question: "Is the International SMS Service secure?",
            answer: "Yes, our service includes robust security measures, including data encryption, to protect your messages and personal information."
        },
        {
            question: "How can I get support for the International SMS Service?",
            answer: "Our customer support team is available 24/7 to assist with any issues or questions you may have regarding our International SMS Service."
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
                                    <h2 className='faq-hd'>Frequently Asked Questions for International SMS</h2>

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
