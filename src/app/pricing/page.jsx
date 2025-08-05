import InstagramGallery from '@/components/sections/instagramGallery'
import PageHeader from '@/components/sections/pageHeader'
import PriceTwo from '@/components/sections/pricing/priceTwo'
import TestimonialOne from '@/components/sections/testimonial/testimonialOne'
import VideoSection from '@/components/sections/videoSection'
import React from 'react'

const Pricing = () => {
    return (
        <>
            <PageHeader
                className={"sbg-8"}
                currentPage={"Pricing Plan"}
                title={"Pricing Plan"}
            />
            <PriceTwo/>
            <VideoSection className={"vid-bg-2"}/>
            <TestimonialOne/>
            <InstagramGallery/>
        </>
    )
}

export default Pricing