import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const AboutOne = ({ className, inVideoBg }) => {
    return (
        <div className={`about-section pb-100 ${className}`}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                        {
                            inVideoBg ?
                                <div className="about-wrap" data-animation="fade-zoom-in" data-aos-offset="100">
                                    <div className="about-video-wrap">
                                        <video className="about-video" src="/img/all-img/video-3.mp4" playsInline autoPlay muted loop>
                                        </video>
                                    </div>
                                </div>
                                :
                                <div className="img-wrapper" data-animation="fade-zoom-in" data-delay={0.1}>
                                    <div className="img-box">
                                        <Image width={636} height={630} sizes='100vw' className="image-box-item" src="/img/all-img/about-1.png" alt="image" />
                                        <Image width={636} height={630} sizes='100vw' className="image-box-item" src="/img/all-img/about-3.png" alt="image" />
                                    </div>
                                </div>
                        }
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="about-content" data-animation="fade-up" data-delay={0.2}>
                            <div className="sub-title-2">
                                <p>What Aithm Do</p>
                            </div>
                            <h2>Create your own AI business easily.</h2>
                            <p> AI systems can analyze data, recognize patterns, make decisions, and even adapt and improve over time. Whether it's speech recognition, image processing, or problem solving.</p>
                            <ul>
                                <li><i className="bx bx-check" /> Natural Language Processing</li>
                                <li><i className="bx bx-check" />AI refers to the simulation of human</li>
                                <li><i className="bx bx-check" />Generating art, music, and literature.</li>
                            </ul>
                            <Link className="default-btn" href="/about"> <span>About Us</span> <i className="bx bx-chevron-right" /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AboutOne