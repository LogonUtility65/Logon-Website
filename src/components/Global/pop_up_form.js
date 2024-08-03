import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com';
import '../../styles/css/popup-form.css';

const PopupForm = ({ onClose }) => {
    const [formStatus, setFormStatus] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate(); // Hook to navigate programmatically

    const handleSubmit = (e) => {
        e.preventDefault();

        const phone = e.target.phone.value;
        if (phone.length !== 10) {
            setFormStatus("Phone number must be exactly 10 digits.");
            return;
        }

        setLoading(true); // Show loader
        emailjs
            .sendForm("service_ltbxodr", "template_zwb3gwv", e.target, "eJD8KcckxNYfTatsq")
            .then(
                (result) => {
                    setFormStatus('Thank you! Your message has been sent.');
                    setTimeout(() => {
                        setLoading(false); // Hide loader
                        onClose(); // Close the popup form
                        navigate('/thank-you'); // Redirect to the Thank You page
                    }, 2000); // Redirect after 2 seconds
                },
                (error) => {
                    setLoading(false); // Hide loader
                    setFormStatus('Failed to send message. Please try again.');
                }
            );

        e.target.reset(); // Reset the form after submission
    };

    useEffect(() => {
        // Add/remove the no-scroll class based on the isOpen state
        document.body.classList.add('no-scroll');
        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, []);

    return (
        <div className="popup-container">
            <div className="popup-overlay" onClick={onClose}></div>
            <div className="popup-content">
                <span className="close-icon" onClick={onClose}>&times;</span>
                <h2>Request a Quote</h2>
                {loading ? (
                    <div className="loader"></div>
                ) : (
                    formStatus ? (
                        <div className="thank-you-message">{formStatus}</div>
                    ) : (
                        <form onSubmit={handleSubmit} id="quote-form" className="form-horizontal popup-form">
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
    );
};

export default PopupForm;
