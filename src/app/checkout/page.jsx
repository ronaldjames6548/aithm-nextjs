import InstagramGallery from '@/components/sections/instagramGallery'
import PageHeader from '@/components/sections/pageHeader'
import CheckoutForm from '@/components/sections/products/checkoutForm'
import React from 'react'

const Checkout = () => {
    return (
        <>
            <PageHeader
                className={"sbg-2"}
                currentPage={"Checkout"}
                title={"Checkout"}
            />
            <CheckoutForm/>
            <InstagramGallery/>
        </>
    )
}

export default Checkout