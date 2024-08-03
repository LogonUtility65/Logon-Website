import React, { useState } from 'react';
import '../../styles/css/faq.css'; // Import your CSS file for custom styles

function Faq_Section() {
    const [activeIndex, setActiveIndex] = useState("0-0"); // Set the first item open by default

    const handleToggle = index => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqData = [
        {
            question: "What is Bulk SMS and how does it work?",
            answer: "Bulk SMS allows businesses to send large volumes of text messages to multiple recipients simultaneously. It works by using an SMS gateway to distribute the messages quickly and efficiently."
        },
        {
            question: "How can Bulk SMS benefit my business?",
            answer: "Bulk SMS can enhance customer engagement, promote products, provide instant updates, and improve communication with clients, leading to increased sales and customer satisfaction."
        },
        {
            question: "What is the difference between Promotional and Transactional SMS?",
            answer: "Promotional SMS are used for marketing and advertising purposes, while Transactional SMS are used for informational messages like OTPs, alerts, and notifications."
        },
        {
            question: "How do I get started with Bulk SMS for my business?",
            answer: "You can start by choosing a reliable Bulk SMS service provider, creating an account, and uploading your contact list. Then, compose your message and schedule or send it immediately."
        },
        {
            question: "How much does Bulk SMS cost?",
            answer: "The cost of Bulk SMS varies depending on the service provider, the volume of messages sent, and the destination. It is typically priced per message or in bulk packages."
        },
        {
            question: "Can I schedule Bulk SMS messages?",
            answer: "Yes, most Bulk SMS service providers offer scheduling features that allow you to set a specific date and time for your messages to be sent."
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
                                    <h2 className='faq-hd'>FAQ's</h2>

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
