import { blogDataThree } from '@/db/blogData'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const BlogThree = () => {
    return (
        <div className="blog-section-3">
            <div className="section-canvas bg-14">
                <div className="container">
                    <div className="multip-title" data-animation="fade-up" >
                        <div className="row align-items-center justify-content-between">
                            <div className="col-lg-5 col-sm-8">
                                <h3>Latest News &amp; Articles</h3>
                            </div>
                            <div className="col-lg-6 col-sm-4 text-end">
                                <Link className="default-btn style-3" href="/blog-sidebar"> <span>View More</span> <i className="bx bx-chevron-right" /></Link>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center justify-content-center">
                        {blogDataThree.map((post) => (
                            <div key={post.id} className="col-xl-4 col-lg-6 col-sm-6 col-md-6">
                                <div className="blog-item-3" data-animation="fade-up" data-aos-offset={post.aosOffset}>
                                    <div className="image">
                                        <Link href="/blog-details">
                                            <div className="quate-icon">
                                                <i className="bx bxs-quote-left" />
                                            </div>
                                            <Image width={416} height={377} sizes='100vw' src={post.imgSrc} alt="Blog Image" />
                                        </Link>
                                    </div>
                                    <div className="content">
                                        <span>
                                            <Link className="ctag" href="/blog-standard">{post.category}</Link>
                                        </span>
                                        <h4><Link href="/blog-details">{post.title}</Link></h4>
                                        <ul className="blog-meta">
                                            <li className="athor"><Link href="/blog-details">{post.author}</Link></li>
                                            <li className="date">{post.date}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default BlogThree