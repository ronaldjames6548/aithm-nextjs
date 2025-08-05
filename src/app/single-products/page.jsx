import InstagramGallery from '@/components/sections/instagramGallery'
import PageHeader from '@/components/sections/pageHeader'
import ProductDescription from '@/components/sections/products/productDescription'
import ProductOverView from '@/components/sections/products/productOverView'
import ProductReviewDetails from '@/components/sections/products/productReviewDetails'
import RelatedProducts from '@/components/sections/products/relatedProducts'
import React from 'react'

const SingleProducts = () => {
    return (
        <>
            <PageHeader
                className={"sbg-2"}
                currentPage={"Spider Headphone"}
                title={"Spider Headphone"}
            />
            <section className="products-details-area ptb-100">
                <div className="container">
                    <ProductOverView />
                    <div className="row align-items-center">

                        <div className="col-lg-12 col-md-12">
                            <div className="products-details-tabs">
                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="description-tab" data-bs-toggle="tab" data-bs-target="#description-tab-pane" role="tab" aria-controls="description-tab-pane">Description</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="reviews-tab" data-bs-toggle="tab" data-bs-target="#reviews-tab-pane" role="tab" aria-controls="reviews-tab-pane">Reviews (2)</a>
                                    </li>
                                </ul>
                                <div className="tab-content" id="myTabContent">
                                    <ProductDescription />
                                    <ProductReviewDetails />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <RelatedProducts />
            <InstagramGallery/>
        </>
    )
}

export default SingleProducts