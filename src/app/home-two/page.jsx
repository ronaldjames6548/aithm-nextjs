import AboutTwo from '@/components/sections/about/aboutTwo'
import BlogTwo from '@/components/sections/blogs/blogTwo'
import BrandTwo from '@/components/sections/brands/brandTwo'
import FeaturesTwo from '@/components/sections/features/featuresTwo'
import HeroTwo from '@/components/sections/heros/heroTwo'
import TestimonialTwo from '@/components/sections/testimonial/testimonialTwo'
import TextAnimationSmall from '@/components/sections/textAnimations/textAnimationSmall'
import VideoSection from '@/components/sections/videoSection'
import React from 'react'

const HomeTwo = () => {
    return (
        <>
            <HeroTwo />
            <BrandTwo/>
            <FeaturesTwo/>
            <TextAnimationSmall/>
            <AboutTwo/>
            <VideoSection className={"vid-bg-2"}/>
            <TestimonialTwo/>
            <BlogTwo/>
        </>
    )
}

export default HomeTwo