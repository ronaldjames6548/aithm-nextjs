'use client'
import React from 'react'
import BlogComments from './blogComments'
import { PhotoProvider, PhotoView } from 'react-photo-view'
import Link from 'next/link'
import Image from 'next/image'

const BlogArticle = () => {
    return (
        <div className="blog-details-dec">
            <div className="pera-list">
                <p>In the fast-paced world of technology, one innovation stands out as a game-changer: Artificial Intelligence (AI). Over the past few decades, AI has evolved from a theoretical concept to a practical and transformative force. In this blog post, we'll explore the impact of AI technology on various aspects of our lives, from daily tasks to industry landscapes, and delve into the potential it holds for shaping the future.</p>
                <p>In the fast-paced world of technology, one innovation stands out as a game-changer: Artificial Intelligence (AI). Over the past few decades, AI has evolved from a theoretical concept.</p>
            </div>
            <div className="pera-list">
                <h3>Applications in Daily Life</h3>
                <p>AI has seamlessly integrated into our daily lives, often in ways we might not immediately recognize. <b>Virtual personal</b> assistants like Siri and Alexa use natural language processing to understand and respond to our commands. Recommendation algorithms on streaming platforms and e-commerce websites leverage AI to suggest content tailored to our preferences.</p>
            </div>
            <div className="pera-image">
                <PhotoProvider>
                    <div className="row">
                        <div className="col-lg-6 col-sm-6">
                            <PhotoView src="/img/all-img/Gallery-2.png" >
                                <Image width={396} height={392} sizes='100vw' src="/img/all-img/Gallery-2.png" alt="image" className="popup-img"/>
                            </PhotoView>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                            <PhotoView src="/img/all-img/Gallery-3.png">
                                <Image width={396} height={392} sizes='100vw' src="/img/all-img/Gallery-3.png" alt="image" className="popup-img"/>
                            </PhotoView>
                        </div>
                    </div>
                </PhotoProvider>
            </div>
            <div className="pera-list">
                <p>AI has seamlessly integrated into our daily lives, often in ways we might not immediately recognize. assistants like Siri and Alexa use natural language processing to understand and respond to our commands. Recommendation on streaming platforms and e-commerce websites leverage AI to suggest content tailored to our preferences.</p>
                <p>AI has seamlessly integrated into our daily lives, often in ways we might not immediately recognize. assistants like Siri and Alexa use natural language processing to understand and respond to our commands.</p>
            </div>
            <blockquote className="wp-block-quote">
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            </blockquote>
            <div className="pera-list">
                <p>AI is at the forefront of the development of autonomous systems, from self-driving cars and drones to robots in manufacturing. These systems rely on advanced algorithms and sensors to navigate their surroundings, analyze data in real-time, and make decisions without human intervention.</p>
            </div>
            <div className="pera-list">
                <h3>Ethical Considerations:</h3>
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <ul>
                            <li><i className="bx bx-check" /> Striking the right balance between innovation</li>
                            <li><i className="bx bx-check" /> Responsibility is crucial to ensure that AI</li>
                            <li><i className="bx bx-check" /> The future of AI holds boundless possibilities</li>
                            <li><i className="bx bx-check" /> Amplifying our collective capabilities</li>
                        </ul>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <ul>
                            <li><i className="bx bx-check" /> Striking the right balance between innovation</li>
                            <li><i className="bx bx-check" /> Responsibility is crucial to ensure that AI</li>
                            <li><i className="bx bx-check" /> The future of AI holds boundless possibilities</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="pera-list">
                <p>AI is at the forefront of the development of autonomous systems, from self-driving cars and drones to robots in manufacturing. These systems rely on advanced algorithms and sensors to navigate their surroundings, analyze data in real-time, and make decisions without human intervention.</p>
                <p>These systems rely on advanced algorithms and sensors to navigate their surroundings, <Link href="/">Aithm</Link> , and make decisions without human intervention.</p>
            </div>
            <div className="article-footer">
                <div className="article-tags">
                    <span><i className="bx bx-purchase-tag" /></span>
                    <Link href="/blog-standard">City</Link>,{" "}
                    <Link href="/blog-standard">Games</Link>,{" "}
                    <Link href="/blog-standard">Travel</Link>{" "}
                </div>
                <div className="article-share">
                    <ul className="social">
                        <li><span>Share:</span></li>
                        <li><a href="#" className="facebook"><i className="bx bxl-facebook" /></a></li>
                        <li><a href="#" className="twitter"><i className="bx bxl-pinterest" /></a></li>
                        <li><a href="#" className="linkedin"><i className="bx bxl-linkedin" /></a></li>
                        <li><a href="#" className="instagram"><i className="bx bxl-instagram" /></a></li>
                    </ul>
                </div>
            </div>
            <BlogComments />
        </div>
    )
}

export default BlogArticle