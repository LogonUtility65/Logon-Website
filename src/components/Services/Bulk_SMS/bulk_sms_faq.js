import React, { useState } from 'react';
import '../../../styles/css/faq.css'; // Import your CSS file for custom styles

function Faq_Section() {
    const [activeIndex, setActiveIndex] = useState("0-0"); // Set the first item open by default

    const handleToggle = index => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqData = [
        {
            question: "What makes Logon Mumbai's No. 1 bulk SMS service provider?",
            answer: "Logon is considered Mumbai's No. 1 bulk SMS service provider due to our high-quality services, reliability, and customer support. We offer a wide range of features and tools to help businesses effectively reach and engage with their customers through SMS marketing. Our sms services are easy to use and offers a user-friendly interface, and our team is dedicated to providing the best customer experience.To find the best bulk SMS packages in India, you should research and compare different providers based on factors such as reliability, scalability, cost, and customer support. You should also look for providers that offer a user-friendly interface and a wide range of features and tools."
        },
        {
            question: "What additional features does Logon offer?",
            answer: "Logon offers additional features such as scheduling, message personalization, and bulk uploading of contacts. These features can help businesses to efficiently manage their SMS campaigns and send targeted, personalized messages to their audience."
        },
        {
            question: "Can Bulk SMS be customized?",
            answer: "Yes. The number of messages has the provision to personalize as per the choice to include the customer’s name, order status and even a specific landing page on a website."
        },
        {
            question: "How can I buy Bulk SMS?",
            answer: "To buy Bulk SMS, you can contact Mtalkz sales team or drop a mail to enquiry@mtalkz.com. We will provide you with a user account, where you can manage your contacts, create messages, and send bulk SMS.You can also fill out the form on our contact us page."
        },
        {
            question: "What kind of customer support is available and what are the hours of availability?",
            answer: "Logon has 24*7 Customer support facility. User can connect with support team any time or they can drop a mail on info@logonutility.com"
        },
        {
            question: "How easy is it to integrate bulk SMS service with other applications or systems?",
            answer: "At Logon, we understand the importance of seamless integration between different systems and applications, which is why we make the process of integrating our SMS service with other applications as straightforward as possible. Our bulk SMS service can be easily integrated using an API, which can be obtained directly from the Logon portal."
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
                                    <h2 className='faq-hd'>Frequently Asked Questions for Bulk SMS</h2>

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
