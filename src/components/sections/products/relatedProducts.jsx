import { productsData } from '@/db/productsData'
import React from 'react'
import ProductCard from './productCard'

const RelatedProducts = () => {
    return (
        <div className="products-area pb-70">
            <div className="container">
                <div className="section-title-2">
                    <div className="sub-title-2">
                        <p>Feature Products</p>
                    </div>
                    <h2>Related Products</h2>
                </div>
                <div className="row">
                    {productsData.slice(0,3).map((product) => (
                        <div key={product.id} className="col-lg-4 col-md-6 col-sm-6">
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default RelatedProducts