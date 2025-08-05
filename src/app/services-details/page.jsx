import AIServicesShowcase from '@/components/sections/aIServicesShowcase'
import ContinuousLearning from '@/components/sections/continuousLearning'
import PageHeader from '@/components/sections/pageHeader'
import Image from 'next/image'
import React from 'react'

const ServicesDetails = () => {
    return (
        <>
            <PageHeader
                className={"pf-bg"}
                currentPage={"Services Details"}
                title={"Services Details"}
            />
            <section className="services-details-area ptb-100">
                <div className="container">
                    <div className="services-details-overview">
                        <div className="services-details-desc" data-animation="fade-up" >
                            <h2>Dragon Service</h2>
                            <p>Dragons are mythical creatures that appear in the folklore, mythology, and legends of various cultures around the world. While the characteristics and depictions of dragons can vary widely across different traditions, there are some common themes associated with these majestic and often fearsome creatures.</p>
                            <div className="features-text">
                                <h3><i className="bx bx-check" /> Physical Characteristics</h3>
                                <p>Dragons are typically portrayed as large, reptilian creatures with scales covering their bodies.</p>
                            </div>
                            <div className="features-text">
                                <h3><i className="bx bx-check" /> Cultural Variations</h3>
                                <p>Norse mythology features dragons like Jormungandr, a giant serpent that encircles guarding a cursed treasure.</p>
                            </div>
                        </div>
                        <div className="services-details-image" data-animation="fade-zoom-in" >
                            <Image width={646} height={562} sizes='100vw' src="/img/all-img/services-details-1.jpg" alt="image" />
                        </div>
                    </div>
                    <div className="services-details-overview">
                        <div className="services-details-image" data-animation="fade-zoom-in" >
                            <Image width={646} height={562} sizes='100vw' src="/img/all-img/services-details-2.jpg" alt="image" />
                        </div>
                        <div className="services-details-desc" data-animation="fade-up" >
                            <h2>Dragon Service</h2>
                            <p>Dragons are mythical creatures that appear in the folklore, mythology, and legends of various cultures around the world. While the characteristics and depictions of dragons can vary widely across different traditions, there are some common themes associated with these majestic and often fearsome creatures.</p>
                            <div className="features-text">
                                <h3><i className="bx bx-check" /> Symbolism</h3>
                                <p>Dragons are typically portrayed as large, reptilian creatures with scales covering their bodies.</p>
                            </div>
                            <div className="features-text">
                                <h3><i className="bx bx-check" /> Role in Myths and Legends</h3>
                                <p>Norse mythology features dragons like Jormungandr, a giant serpent that encircles guarding a cursed treasure.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ContinuousLearning/>
            <AIServicesShowcase/>
        </>
    )
}

export default ServicesDetails