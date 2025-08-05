import Brand from '@/components/sections/brands/brand'
import InstagramGallery from '@/components/sections/instagramGallery'
import PageHeader from '@/components/sections/pageHeader'
import ProjectGrid from '@/components/sections/projects/projectGrid'
import React from 'react'

const Portfolio = () => {
    return (
        <>
            <PageHeader
                className={"sbg-7"}
                currentPage={"Portfolio"}
                title={"Portfolio"}
            />
            <ProjectGrid/>
            <Brand/>
            <InstagramGallery className={"pt-100"}/>
        </>
    )
}

export default Portfolio