import React from 'react'
const brandsData = [
    { id: 1, image: "/img/all-img/brand-1.png", },
    { id: 2, image: "/img/all-img/brand-2.png", },
    { id: 3, image: "/img/all-img/brand-3.png", },
    { id: 4, image: "/img/all-img/brand-4.png", },
    { id: 5, image: "/img/all-img/brand-5.png", },
];
const BrandTwo = () => {
    return (
        <div className="brand-section">
            <div className="container">
                <div className="brand-title">
                    <h4>Over 30k Top Class Brands Working with Aithm</h4>
                </div>
                <div className="row align-items-center justify-content-between">
                    {brandsData.map((brand, index) => (
                        <div key={brand.id} className="col-xl-2 col-lg-2 col-md-4 col-6">
                            <div
                                className="single-brand"
                                data-animation="fade-zoom-in"
                                data-delay={index * 0.1}
                            >
                                <img src={brand.image} alt={`Brand ${brand.id}`} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default BrandTwo