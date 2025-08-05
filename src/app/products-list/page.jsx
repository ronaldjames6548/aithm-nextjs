import PageHeader from '@/components/sections/pageHeader'
import ProducstGridView from '@/components/sections/products/producstGridView'
import React from 'react'

const ProductsList = () => {
    return (
        <>
            <PageHeader
                className={"sbg-2"}
                currentPage={"Products List"}
                title={"Products List"}
            />
            <ProducstGridView/>
        </>
    )
}

export default ProductsList