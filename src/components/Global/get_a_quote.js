import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import emailjs from "emailjs-com";
import "../../styles/css/get-a-quote.css";


const Get_Quote = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [formStatus, setFormStatus] = useState("");
    const [showFloatingButton, setShowFloatingButton] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate(); // Hook to navigate programmatically

    const toggleForm = () => {
        setIsOpen(!isOpen);
    };

    const closeForm = () => {
        setIsOpen(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const phone = e.target.phone.value;
        if (phone.length > 10) {
            setFormStatus("Phone number cannot be more than 10 digits.");
            return;
        }

        setLoading(true); // Show loader
        emailjs
            .sendForm("service_ltbxodr", "template_zwb3gwv", e.target, "eJD8KcckxNYfTatsq")
            .then(
                (result) => {
                    setLoading(false); // Hide loader
                    setTimeout(() => {
                        closeForm(); // Close form before redirection
                        navigate('/thank-you'); // Navigate to the Thank You page
                    }, 2000); // Redirect after 2 seconds
                },
                (error) => {
                    setLoading(false); // Hide loader
                    setFormStatus("Failed to send message. Please try again.");
                }
            );

        e.target.reset(); // Reset the form after submission
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            const sectionHeight = windowHeight; // Adjust this as per your section height

            if (scrollPosition > sectionHeight) {
                setShowFloatingButton(true);
            } else {
                setShowFloatingButton(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Add/remove the no-scroll class based on isOpen state
        if (isOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }

        return () => {
            window.removeEventListener("scroll", handleScroll);
            document.body.classList.remove('no-scroll');
        };
    }, [isOpen]);

    return (
        <div>
            {showFloatingButton && (
                <button id="floating-button" aria-label="Request a Quote" onClick={toggleForm}>
                    Request a Quote
                </button>
            )}

            <div id="overlay" className={isOpen ? "active" : ""} onClick={closeForm}></div>

            <div id="form-container" className={`form-container ${isOpen ? "open" : ""}`}>
                <button id="close-form-btn" onClick={closeForm}>×</button>
                <div className="contact-form">
                    <h2>Request a Quote</h2>
                    {loading ? (
                        <div className="loader"></div>
                    ) : (
                        formStatus ? (
                            <div className="thank-you-message">{formStatus}</div>
                        ) : (
                            <form onSubmit={handleSubmit} id="quote-form" className="form-horizontal">
                                <div className="form-group colum-row row">
                                    <div className="col-sm-12">
                                        <input id="name" name="name" type="text" className="form-control" placeholder="Name" required />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-sm-12">
                                        <input type="email" id="email" name="email" className="form-control" placeholder="Email" required />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-sm-12">
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            className="form-control"
                                            placeholder="Phone"
                                            required
                                            pattern="\d{10}"
                                            title="Phone number must be exactly 10 digits."
                                        />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-md-12">
                                        <textarea id="message" name="message" cols={30} rows={5} className="form-control message" placeholder="Message" required />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-md-12">
                                        <button id="submit" className="default-btn btn-blue" type="submit" name="submit">Send Message</button>
                                    </div>
                                </div>
                                <div id="form-messages" className="alert" role="alert">
                                    {formStatus}
                                </div>
                            </form>
                        )
                    )}
                </div>
            </div>
        </div>
    );
};

export default Get_Quote;
