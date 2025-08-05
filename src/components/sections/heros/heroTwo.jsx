import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const HeroTwo = () => {
    return (
        <div className="hero-section">
            <div className="container-fluid">
                <div className="row g-0">
                    <div className="col-xl-7 col-lg-7 col-md-7">
                        <div className="hero-content">
                            <div className="sub-title" data-animation="fade-down" >
                                <p>Text Generator</p>
                            </div>
                            <h2 data-animation="flip-up" data-delay={0.3}><span>Text Generator</span> Helps You Write Better, <span>Faster</span> And <span>Smarter</span></h2>
                            <div className="text-generator-box" data-animation="fade-down" >
                                <h3>What is your request or topic?</h3>
                                <div className="searchwrapper">
                                    <div className="searchbox">
                                        <div className="row align-items-center">
                                            <div className="col-md-9">
                                                <form>
                                                    <input type="text" className="form-control" placeholder="What is your request or topic?" /></form></div>
                                            <div className="col-xl-3">
                                                <form>
                                                    <button className="btn" type="submit">Generate</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="short-prompt" data-animation="fade-zoom-in">
                                <ul>
                                    <li><p>Quick Try :</p></li>
                                    <li><Link href="/portfolio">What is Ai?</Link></li>
                                    <li><Link href="/portfolio">Wright a Blog About Ai!</Link></li>
                                    <li><Link href="/portfolio">Help me debug</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-5 col-md-5">
                        <div className="hero-image" data-animation="fade-up" >
                            <div className="effect">
                                <Image width={582} height={615} sizes='100vw' className="image-effect" src="/img/all-img/robot.png" alt="image" />
                                <Image width={582} height={615} sizes='100vw' className="image-effect" src="/img/all-img/robot-2.png" alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default HeroTwo