'use client'
import React, { useEffect, useState } from 'react'

const ScrollToTop = () => {
    const [showGoTop, setShowGoTop] = useState(false);


    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        const handleScroll = () => {
            setShowGoTop(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {
                showGoTop && (
                    <div className="go-top active" onClick={scrollToTop}>
                        <i className="bx bx-up-arrow-alt" />
                    </div>
                )
            }
        </>
    )
}

export default ScrollToTop