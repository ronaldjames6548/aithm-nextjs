'use client'
import React from 'react'
import ProductCard from './productCard'
import { productsData } from '@/db/productsData'
import Pagination from '../../ui/pagination'
import SelectBox from '../selectBox'

const SelectOptions = ["Default", "Popularity", "Latest", "Price: low to high", "Price: high to low"]
const ProducstGridView = () => {
    const handleSelect = (option) => {
        console.log("Selected:", option);
    };
    return (
        <div className="products-area ptb-100">
            <div className="container">
                <div className="grid-sorting row align-items-center">
                    <div className="col-lg-6 col-md-6 result-count">
                        <p>We found <span className="count">6</span> products available for you</p>
                    </div>
                    <div className="col-lg-6 col-md-6 ordering">
                        <SelectBox options={SelectOptions} onSelect={handleSelect} placeholder='Default' />
                    </div>
                </div>
                <div className="row">
                    {productsData.map((product) => (
                        <div key={product.id} className="col-lg-4 col-md-6 col-sm-6">
                            <ProductCard product={product} />
                        </div>
                    ))}
                    <Pagination />
                </div>
            </div>
        </div>

    )
}

export default ProducstGridView