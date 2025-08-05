import { featuresData } from '@/db/featuresData'
import React from 'react'
import FeatureCard from './featureCard'

const FeaturesTwo = () => {
    return (
        <div className="features-section ptb-100">
            <div className="container">
                <div className="section-title" data-animation="fade-down" >
                    <div className="sub-title">
                        <p>Corporate Service</p>
                    </div>
                    <h2>Find an Ai Solution For Your Business.</h2>
                </div>
                <div className="row">
                    {
                        featuresData.map((feature, index) => (
                            <div key={feature.id} className="col-xl-3 col-lg-6 col-sm-6">
                                <FeatureCard feature={feature} index={index} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>

    )
}

export default FeaturesTwo