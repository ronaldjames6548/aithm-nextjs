import AIServicesShowcase from '@/components/sections/aIServicesShowcase'
import ContinuousLearning from '@/components/sections/continuousLearning'
import Features from '@/components/sections/features/features'
import InstagramGallery from '@/components/sections/instagramGallery'
import PageHeader from '@/components/sections/pageHeader'
import WorkProcess from '@/components/sections/workProcess'
import React from 'react'

const Services = () => {
    return (
        <>
            <PageHeader
                className={"sbg-2"}
                currentPage={"Services"}
                title={"Services"}
            />
            <Features/>
            <ContinuousLearning/>
            <AIServicesShowcase/>
            <WorkProcess order={"order-1"} isLampImgTop={false}/>
            <InstagramGallery/>
        </>
    )
}

export default Services