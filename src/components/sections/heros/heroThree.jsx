'use client'
import React from 'react'
import Link from 'next/link'
import TeamCard from '../team/teamCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import { teamMembers } from '@/db/teamMembers'

const HeroThree = () => {
    return (
        <div className="hero-section-4">
            <div className="section-canvas bg-14">
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-lg-6">
                            <div className="hero-content-3" data-animation="fade-up">
                                <div className="sub-title-3">
                                    <p>Aithm Developers</p>
                                </div>
                                <h2>Hair our <span>Developers</span> for personal support.</h2>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="hero-content-3">
                                <div className="content">
                                    <p data-animation="fade-right" data-delay={0.1}> AI systems can analyze data, recognize patterns, make decisions, and even adapt and improve over time. Whether it's speech recognition, image processing, or problem solving.</p>
                                    <Link className="default-btn style-3" href="/contact" data-animation="fade-right" data-delay={0.2}> <span>Let's Talk for Project!</span> <i className="bx bx-chevron-right" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="developes-infos">
                                <Swiper
                                    spaceBetween={10}
                                    breakpoints={{
                                        0: {
                                            slidesPerView: 1
                                        },
                                        575: {
                                            slidesPerView: 2
                                        },
                                        992: {
                                            slidesPerView: 3
                                        }
                                    }}
                                    autoplay={{
                                        delay: 5000
                                    }}
                                    speed={2000}
                                    modules={[Autoplay]}
                                    loop
                                    data-animation="fade-zoom-in" data-delay={0.2}
                                >
                                    {
                                        teamMembers.map(({ description, image, name, role, social, id }) => (
                                            <SwiperSlide key={id}>
                                                <TeamCard description={description} imgSrc={image} name={name} role={role} social={social} height={505} width={425}/>
                                            </SwiperSlide>
                                        ))
                                    }
                                </Swiper>
                            </div>
                        </div>
                    </div>
                    <div className="scroll-down-item" data-animation="fade-zoom-in">
                        <a href="#expertise">
                            <div className="mouse" />
                            <h4>Scroll Dwon</h4>
                        </a>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default HeroThree