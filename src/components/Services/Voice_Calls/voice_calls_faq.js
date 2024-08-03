import React, { useState } from 'react';
import '../../../styles/css/faq.css'; // Import your CSS file for custom styles

function Faq_Section() {
    const [activeIndex, setActiveIndex] = useState("0-0"); // Set the first item open by default

    const handleToggle = index => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqData = [
        {
            question: "What is the Voice Calls Service?",
            answer: "Our Voice Calls Service allows you to deliver automated voice messages to your audience. It's ideal for notifications, reminders, and customer engagement."
        },
        {
            question: "How does the Voice Calls Service work?",
            answer: "You upload your contact list and message content to our web portal. Our system automatically makes the calls and delivers your message to your recipients."
        },
        {
            question: "Can I customize my voice messages?",
            answer: "Yes, you can personalize your voice messages to suit your audience’s needs. Our service offers various customization options."
        },
        {
            question: "How reliable is the Voice Calls Service?",
            answer: "Our service ensures high-speed and reliable delivery of voice messages. We use a robust infrastructure to maintain clear and timely communication."
        },
        {
            question: "Is the Voice Calls Service secure?",
            answer: "Absolutely. Your data is secured and encrypted to ensure the highest level of protection and privacy."
        },
        {
            question: "How can I track the performance of my campaigns?",
            answer: "You can view detailed reports and analytics of your voice campaigns directly from our web portal, helping you monitor and optimize your communication strategies."
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
                                    <h2 className='faq-hd'>Frequently Asked Questions for Voice Calls</h2>

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
