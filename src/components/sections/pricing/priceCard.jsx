import React from 'react'
import Link from 'next/link'

const PriceCard = ({plan, index}) => {
    return (
        <div
            className={`pricing-box ${plan.isPopular ? 'active' : ''}`}
            data-animation="fade-zoom-in"
            data-delay={index * 0.1}
        >
            {plan.isPopular && <span>Most Popular</span>}
            {plan.isExclusive && <span>Exclusive</span>}
            <h3>{plan.planName}</h3>
            <p>{plan.description}</p>
            <div className="price-number">
                <h3>
                    ${plan.price}
                    {plan.billingFrequency}
                </h3>
            </div>
            <div className="price-fetures">
                <ul>
                    {plan.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>
            </div>
            <Link className="default-btn" href={'/contact'}>
                <span>{plan.buttonText}</span> <i className="bx bx-chevron-right" />
            </Link>
        </div>
    )
}

export default PriceCard