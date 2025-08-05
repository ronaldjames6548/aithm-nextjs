import BlogSidebar from '@/components/sections/blogs/blogSidebar'
import InstagramGallery from '@/components/sections/instagramGallery'
import PageHeader from '@/components/sections/pageHeader'
import React from 'react'

const PrivacyPolicy = () => {
    return (
        <>
            <PageHeader
                className={"sbg-6"}
                currentPage={"Privacy Policy"}
                title={"Privacy Policy"}
            />
            <div className="cookie-section ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="cookie-content">
                                <div className="pera-list">
                                    <h2>Intellectual Property</h2>
                                    <p>All content and materials on this website, including but not limited to text, images, graphics, logos, and software, are the property of [Your Company] and are protected by intellectual property laws.</p>
                                </div>
                                <div className="notice">
                                    <div className="row align-items-center">
                                        <div className="col-lg-2">
                                            <div className="icon">
                                                <i className="bx bx-error-circle" />
                                            </div>
                                        </div>
                                        <div className="col-lg-10">
                                            <p>Creating terms and conditions for a specific website involves addressing various legal and operational aspects. Here's a basic template for terms and conditions related to an AI image generator website.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="pera-list">
                                    <h2>Use of the AI Image Generator</h2>
                                    <ul>
                                        <li><b>Essential Cookies:</b> Users are granted a limited, non-exclusive, and non-transferable license to use the AI image generator for personal or non-commercial purposes.</li>
                                        <li><b>Analytical/Performance Cookies:</b> Users may not reproduce, distribute, modify, or reverse engineer the AI image generator.</li>
                                        <li><b>Governing Law:</b> These cookies enable the Website to remember choices you make (such as your username, language, or region) and provide enhanced, personalized features.</li>
                                    </ul>
                                </div>
                                <div className="pera-list">
                                    <h2>Third-Party</h2>
                                    <p>Some content on the Website may be provided by third parties. These third parties may also set cookies on your device. We do not have control over these cookies, and you should refer to the respective privacy policies of these third parties for more information.</p>
                                </div>
                                <div className="pera-list">
                                    <h2>Changes to this Policy</h2>
                                    <p>We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically for any changes.</p>
                                </div>
                                <div className="pera-list">
                                    <h2>Use of Data</h2>
                                    <p>Aithm uses the collected data for various purposes:</p>
                                    <ul className="style-1">
                                        <li>To provide and maintain the Service</li>
                                        <li>To provide customer care and support</li>
                                        <li>To provide analysis or valuable information so that we can improve the Service</li>
                                        <li>To monitor the usage of the Service</li>
                                        <li>To detect, prevent, and address technical issues</li>
                                        <li>To notify you about changes to our Service</li>
                                        <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
                                    </ul>
                                </div>
                                <div className="pera-list">
                                    <h2> Your Data Protection Rights Under General Data Protection Regulation (GDPR)</h2>
                                    <p>If you are a resident of the European Economic Area (EEA), you have certain data protection rights. [Your Company Name] aims to take reasonable steps to allow you to correct, amend, delete, or limit the use of your Personal Data.</p>
                                    <p>If you wish to be informed about what Personal Data we hold about you and if you want it to be removed from our systems, please contact us.</p>
                                </div>
                                <div className="pera-list">
                                    <h2>Links to Other Sites</h2>
                                    <p>Our Service may contain links to other sites that are not operated by us. If you click on a third party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.</p>
                                    <p>We have no control over and assume no responsibility for the content, privacy policies, or practices of any third party sites or services.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <BlogSidebar />
                        </div>
                    </div>
                </div>
            </div>
            <InstagramGallery />
        </>
    )
}

export default PrivacyPolicy