'use client'
import React from 'react'
import { testimonialsDataTwo } from '@/db/testimonialsDataTwo'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const TestimonialTwo = () => {
    return (
        <div className="testimonial-section pt-100 pb-70">
            <div className="container position-relative">
                <div className="section-title start-text" data-animation="fade-down" >
                    <div className="sub-title">
                        <p>User Experiences</p>
                    </div>
                    <h2>Reviews that speak volumes.</h2>
                </div>
                <Swiper
                    spaceBetween={20}
                    breakpoints={{
                        0: {
                            slidesPerView: 1
                        },
                        768: {
                            slidesPerView: 2
                        },
                        1200: {
                            slidesPerView: 3
                        }
                    }}
                    navigation={{
                        nextEl: ".next-el",
                        prevEl: ".prev-el"
                    }}
                    autoplay={{
                        delay:5000
                    }}
                    speed={2000}
                    loop
                    modules={[Autoplay, Navigation]}
                >
                    {testimonialsDataTwo.map((testimonial) => (
                        <SwiperSlide key={testimonial.id}>
                            <div
                                className="testimonial-item"
                                data-animation="fade-up"
                                data-aos-offset={testimonial.offset}
                            >
                                <ul>
                                    {Array.from({ length: testimonial.rating }, (_, index) => (
                                        <li key={index}>
                                            <i className="bx bxs-star" />
                                        </li>
                                    ))}
                                </ul>
                                <h4>{testimonial.name}</h4>
                                <p>{testimonial.review}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className='navigations'>
                    <button className='prev-el'>
                        <i className='fi fi-tr-arrow-left'></i>
                    </button>
                    <button className='next-el'>
                        <i className='fi fi-tr-arrow-right'></i>
                    </button>
                </div>
            </div>
        </div>

    )
}

export default TestimonialTwo