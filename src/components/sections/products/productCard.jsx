import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const ProductCard = ({ product }) => {
    return (
        <div className="single-products-box">
            <div className="products-image">
                <Link href="/single-products" className="main-image">
                    <Image width={416} height={475} sizes='100vw' src={product.image} className="main-image" alt="image" />
                </Link>
                {product.saleTag && <div className="sale-tag">Sale!</div>}
                <Link href="/cart" className="default-btn"><i className="bx bxs-cart-add" /> <span>Add To Cart</span></Link>
                {product.newTag && <div className="new-tag">New!</div>}
            </div>
            <div className="products-content">
                <h3><Link href="/single-products">{product.name}</Link></h3>
                <div className="price">
                    <span className="old-price">{product.oldPrice}</span>
                    <span className="new-price">{product.newPrice}</span>
                </div>
            </div>
        </div>
    )
}

export default ProductCard