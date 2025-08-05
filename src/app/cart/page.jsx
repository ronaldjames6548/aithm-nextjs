import InstagramGallery from '@/components/sections/instagramGallery'
import PageHeader from '@/components/sections/pageHeader'
import CartTable from '@/components/sections/products/cartTable'
import React from 'react'

const Cart = () => {
    return (
        <>
            <PageHeader
                className={"sbg-2"}
                currentPage={"Cart"}
                title={"Cart"}
            />
            <CartTable/>
            <InstagramGallery/>
        </>
    )
}

export default Cart