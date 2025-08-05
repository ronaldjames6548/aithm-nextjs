import AboutOne from '@/components/sections/about/aboutOne'
import Brand from '@/components/sections/brands/brand'
import InstagramGallery from '@/components/sections/instagramGallery'
import PageHeader from '@/components/sections/pageHeader'
import TestimonialOne from '@/components/sections/testimonial/testimonialOne'
import VideoSection from '@/components/sections/videoSection'
import WorkProcess from '@/components/sections/workProcess'
import React from 'react'

const About = () => {
  return (
    <>
      <PageHeader
        className={"sbg-5"}
        currentPage={"About us"}
        title={"About Us"}
      />
      <AboutOne className={"pt-100"} inVideoBg={true}/>
      <Brand />
      <WorkProcess isLampImgTop={true}/>
      <VideoSection className={"vid-bg-1"} />
      <TestimonialOne />
      <InstagramGallery />
    </>
  )
}

export default About