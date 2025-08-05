'use client'
import React from 'react'
import { PhotoProvider, PhotoView } from 'react-photo-view'
import Rating from '../../ui/rating'
import Link from 'next/link'
import Image from 'next/image'

const ProductOverView = () => {
    return (
        <div className='row align-items-center'>
            <div className="col-lg-5 col-md-12">
                <div className="products-details-image">
                    <PhotoProvider>
                        <PhotoView src={"/img/shop/products-img3.jpg"}>
                            <Image width={526} height={601} sizes='100vw' src="/img/shop/products-img3.jpg" alt="image" />
                        </PhotoView>
                    </PhotoProvider>
                </div>
            </div>
            <div className="col-lg-7 col-md-12">
                <div className="products-details-desc">
                    <div className="products-review">
                        <Rating rating={4.5} isCountNumberShow={true}/>
                        
                        <Link href="/single-products" className="rating-count">3 reviews</Link>
                        <span className="in-stock">In Stock</span>
                    </div>
                    <h3>Spider Headphone</h3>
                    <p>One of the standout features of AI headphones is their ability to create adaptive soundscapes tailored to individual users. These headphones learn from your music choices, environmental factors Imagine walking through a bustling city essential ambient sounds while still providing an immersive music experience.</p>
                    <div className="price">
                        <span className="old-price">$210.00</span>
                        <span className="new-price"> $176.00</span>
                    </div>
                    <div className="products-add-to-cart">
                        <div className="input-counter">
                            <span className="minus-btn"><i className="bx bx-minus" /></span>
                            <input type="text" defaultValue={1} />
                            <span className="plus-btn"><i className="bx bx-plus" /></span>
                        </div>
                        <button type="submit" className="default-btn"><i className="bx bxs-cart-add" /> <span>Add to Cart</span></button>
                    </div>
                    <div className="products-meta">
                        <span>SKU : <span className="sku">LGRVUT96</span></span>
                        <span>Category : <Link href="/products-list">Headphone</Link></span>
                        <span>Tag : <Link href="/products-list">Headphone</Link></span>
                    </div>
                    <div className="products-share">
                        <ul className="social">
                            <li><span>Share:</span></li>
                            <li><Link href="#" className="facebook"><i className="bx bxl-facebook" /></Link></li>
                            <li><Link href="#" className="twitter"><i className="bx bxl-pinterest" /></Link></li>
                            <li><Link href="#" className="linkedin"><i className="bx bxl-linkedin" /></Link></li>
                            <li><Link href="#" className="instagram"><i className="bx bxl-instagram" /></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductOverView