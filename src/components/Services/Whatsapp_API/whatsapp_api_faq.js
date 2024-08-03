import React, { useState } from 'react';
import '../../../styles/css/faq.css'; // Import your CSS file for custom styles

function Faq_Section() {
    const [activeIndex, setActiveIndex] = useState("0-0"); // Set the first item open by default

    const handleToggle = index => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqData = [
        {
            question: "What is the WhatsApp Business API Service?",
            answer: "Our WhatsApp Business API Service enables businesses to communicate with customers through WhatsApp, providing features for sending messages, managing interactions, and automating workflows."
        },
        {
            question: "How does the WhatsApp Business API Service work?",
            answer: "You use our web portal to create and send messages, manage customer interactions, and automate responses. Our integration with WhatsApp ensures efficient communication."
        },
        {
            question: "Can I customize my WhatsApp messages?",
            answer: "Yes, you can personalize and customize your messages to meet your audience's needs and preferences, enhancing engagement and interaction."
        },
        {
            question: "How reliable is the WhatsApp Business API Service?",
            answer: "Our service ensures reliable and prompt delivery of messages by leveraging WhatsApp’s infrastructure and our advanced technology."
        },
        {
            question: "Is the WhatsApp Business API Service secure?",
            answer: "Yes, your data is encrypted and securely handled to ensure privacy and protection, giving you confidence in the security of your communications."
        },
        {
            question: "How can I track the performance of my WhatsApp campaigns?",
            answer: "Detailed reports and analytics are available through our web portal, allowing you to monitor and assess the effectiveness of your WhatsApp campaigns"
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
                                    <h2 className='faq-hd'>Frequently Asked Questions for WhatsApp API Service</h2>

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
