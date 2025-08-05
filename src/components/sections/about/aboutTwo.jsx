'use client'
import React, { useEffect } from 'react'
import Link from 'next/link';
import Image from 'next/image';

const AboutTwo = () => {
    useEffect(() => {
        let counterObserver = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    let counter = entry.target;
                    let target = parseInt(counter.innerText);
                    let step = target / 200;
                    let current = 0;
                    let timer = setInterval(function () {
                        current += step;
                        counter.innerText = Math.floor(current);
                        if (parseInt(counter.innerText) >= target) {
                            clearInterval(timer);
                        }
                    }, 10);
                    counterObserver.unobserve(counter);
                }
            });
        });

        let counters = document.querySelectorAll(".counter-num");
        counters.forEach(function (counter) {
            counterObserver.observe(counter);
        });
    }, [])
    return (
        <div className="about-section-2">
            <div className="container">
                <div className="about-1">
                    <div className="row align-items-top">
                        <div className="col-xl-6 col-md-7">
                            <div className="img-wrapper">
                                <div className="img-box" data-animation="fade-up" >
                                    <Image width={636} height={630} sizes='100vw' className="image-box-item" src="/img/all-img/about-5.png" alt="image" />
                                    <Image width={636} height={630} sizes='100vw' className="image-box-item" src="/img/all-img/about-7.png" alt="image" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-5">
                            <div className="about-content-2" data-animation="fade-down" >
                                <div className="sub-title-1">
                                    <p>What Aithm Do</p>
                                </div>
                                <h2>Create your own AI business easily.</h2>
                                <p> AI systems can analyze data, recognize patterns, make decisions, and even adapt and improve over time. Whether it's speech recognition, image processing, or problem solving.</p>
                                <Link className="default-btn" href="/about"> <span>About Us</span> <i className="bx bx-chevron-right" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-2">
                    <div className="row">
                        <div className="col-xl-6 col-md-5">
                            <div className="about-content-2" data-animation="fade-down" >
                                <div className="counter">
                                    <p> AI systems can analyze data, recognize patterns, make decisions, and even adapt and improve over time. Whether it's speech recognition, image processing, or problem solving.</p>
                                    <div className="row justify-content-center">
                                        <div className="col-xl-4 col-lg-4 col-sm-4 col-md-6 col-6">
                                            <div className="counter-content">
                                                <h2><span className="counter-num">400</span></h2>
                                                <p>Life Experiences</p>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-sm-4 col-md-6 col-6">
                                            <div className="counter-content">
                                                <h2><span className="counter-num">85</span>+</h2>
                                                <p>Text Experiences</p>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-sm-4 col-md-6 col-6">
                                            <div className="counter-content">
                                                <h2><span className="counter-num">120</span>K</h2>
                                                <p>Chatbot Support</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-7">
                            <div className="img-wrapper part-1">
                                <div className="img-box part-1" data-animation="fade-up" >
                                    <Image width={586} height={580} sizes='100vw' className="image-box-item" src="/img/all-img/about-4.png" alt="image" />
                                    <Image width={586} height={580} sizes='100vw' className="image-box-item" src="/img/all-img/about-6.png" alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AboutTwo