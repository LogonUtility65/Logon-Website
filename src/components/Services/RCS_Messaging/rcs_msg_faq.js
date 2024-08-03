import React, { useState } from 'react';
import '../../../styles/css/faq.css'; // Import your CSS file for custom styles

function Faq_Section() {
    const [activeIndex, setActiveIndex] = useState("0-0"); // Set the first item open by default

    const handleToggle = index => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqData = [
        {
            question: "What is RCS Messaging?",
            answer: "RCS (Rich Communication Services) Messaging is a modern messaging protocol that allows businesses to send rich, interactive messages with multimedia content and interactive features."
        },  
        {
            question: "How does the RCS Messaging Service work?",
            answer: "Our RCS Messaging Service enables you to send messages with rich media and interactive elements. Manage your campaigns through our web portal and track performance with advanced analytics."
        }, 
        {
            question: "What are the benefits of using RCS Messaging?",
            answer: "RCS Messaging provides enhanced user engagement with rich media, interactive features, and personalized content. It also offers advanced analytics and tracking for optimized communication."
        }, 
        {
            question: "Can I track the performance of my RCS campaigns?",
            answer: "Yes, our service includes real-time analytics and performance reports, allowing you to monitor key metrics such as delivery rates, open rates, and user interactions."
        }, 
        {
            question: "Is RCS Messaging secure?",
            answer: "Yes, our RCS Messaging Service includes robust security measures, including encryption, to protect your data and messages, ensuring a secure and reliable communication experience."
        }, 
        {
            question: "How can I get support for the RCS Messaging Service?",
            answer: "Our customer support team is available 24/7 to assist with any issues or questions regarding our RCS Messaging Service. Contact us anytime for support."
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
                                    <h2 className='faq-hd'>Frequently Asked Questions for RCS Messaging</h2>

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
