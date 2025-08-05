import Brand from '@/components/sections/brands/brand'
import ImageGallery from '@/components/sections/imageGallery'
import InstagramGallery from '@/components/sections/instagramGallery'
import PageHeader from '@/components/sections/pageHeader'
import VideoSection from '@/components/sections/videoSection'
import React from 'react'

const Gallery = () => {
    return (
        <>
            <PageHeader
                className={"sbg-4"}
                currentPage={"Gallery"}
                title={"Gallery"}
            />
            <ImageGallery className={"pt-100"}/>
            <Brand className={"pb-100"}/>
            <VideoSection className={"vid-bg-1"}/>
            <InstagramGallery/>
        </>
    )
}

export default Gallery