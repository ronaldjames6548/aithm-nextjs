import React from 'react'
import Link from 'next/link';

const expertiseData = [
    {
        id: 1,
        title: "Web Flow",
        description: "Striking the right balance between innovation and ethical responsibility is crucial to AI benefits society as a whole.",
    },
    {
        id: 2,
        title: "UI Experiences",
        description: "Striking the right balance between innovation and ethical responsibility is crucial to AI benefits society as a whole.",
    },
    {
        id: 3,
        title: "Development",
        description: "Striking the right balance between innovation and ethical responsibility is crucial to AI benefits society as a whole.",
    }
];


const Expertise = () => {
    return (
        <div id="expertise" className="expertise-area ptb-100">
            <div className="container">
                <div className="section-title-2 style-3" data-animation="fade-up" data-delay={0.1}>
                    <div className="sub-title-3">
                        <p>Working Map</p>
                    </div>
                    <h2>Unveil New Creative Horizons with Models</h2>
                </div>
                <div className="row justify-content-center">
                    {expertiseData.map((expertise, index) => (
                        <div key={expertise.id} className="col-xl-4 col-md-6">
                            <div className="expertise-card" data-animation="fade-up" data-delay={index * 0.1}>
                                <h3>{expertise.title}</h3>
                                <p>{expertise.description}</p>
                                <Link href={'/services-details'}>
                                    Read More <i className="bx bx-arrow-back bx-rotate-180" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="section-link-regular" data-animation="fade-zoom-in" data-delay={0.1}>
                    <p>Join with our Journy for Successful Career. <Link href="/services">Join Now Today!</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Expertise