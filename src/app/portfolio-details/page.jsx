import InstagramGallery from '@/components/sections/instagramGallery'
import PageHeader from '@/components/sections/pageHeader'
import PortfolioArticale from '@/components/sections/portfolioArticale'
import React from 'react'

const PortfolioDetails = () => {
    return (
        <>
            <PageHeader
                className={"sbg-2"}
                currentPage={"Portfolio Details"}
                title={"Portfolio Details"}
            />
            <PortfolioArticale/>
            <InstagramGallery />
        </>
    )
}

export default PortfolioDetails