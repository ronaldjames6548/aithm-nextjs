import Image from 'next/image'
import React from 'react'

const ProductDescription = () => {
    return (
        <div className="tab-pane fade show active" id="description-tab-pane" role="tabpanel" aria-labelledby="description-tab" tabIndex={0}>
            <p>we are witnessing a transformative evolution in the world of audio with the emergence of AI-powered headphones. These cutting-edge devices are not just about delivering crisp sound quality; they are designed to understand, adapt, and enhance your auditory experience in ways previously unimaginable. In this blog post, we'll explore the fascinating realm of AI headphones, delving into their features, benefits, and the exciting possibilities they bring to the world of audio enthusiasts.</p>
            <div className="row mt-30">
                <div className="col-lg-4 col-md-6">
                    <div className="dectip-img">
                        <Image width={416} height={377} sizes='100vw' src="/img/all-img/product.jpg" alt="image" />
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="dectip-1">
                        <ul>
                            <li>Emotionally Intelligent Sound Profiles</li>
                            <li>Augmented Reality Integration</li>
                            <li>Biometric Authentication</li>
                            <li>Sensory Augmentation</li>
                            <li>Dynamic Learning and Proactive Suggestions</li>
                            <li>Health Monitoring Beyond Audio</li>
                            <li>Collaborative Listening Experiences</li>
                            <li>Customizable 3D Audio Environments</li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="dectip-1">
                        <ul>
                            <li>Environmental Sound Synthesis</li>
                            <li>Integration with Smart Home Ecosystems</li>
                            <li>AI-Enhanced Noise Isolation</li>
                            <li>Personalized Language Learning</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDescription