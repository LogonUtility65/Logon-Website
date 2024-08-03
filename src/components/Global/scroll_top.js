import React, { useState, useEffect } from 'react';
import '../../styles/css/scroll-top.css'
import Up_Arrow from '../../assets/img/up-arr.png'

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div className="scroll-to-top">
            {isVisible && 
                <button onClick={scrollToTop} className="scroll-button"><img src={Up_Arrow} /></button>}
        </div>
    );
}

export default ScrollToTop;
