import { blogDataTwo } from '@/db/blogData'
import React from 'react'
import Link from 'next/link'

const BlogTwo = () => {
    return (
        <div className="blog-section pt-100 pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-xl-4">
                        <div className="section-content" data-animation="fade-down" >
                            <div className="sub-title">
                                <p>Daily Blogs</p>
                            </div>
                            <h2>What's News?</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum dolore nobis quia accusamus fuga quaerat voluptas.</p>
                            <Link href="/blog" className="default-btn"><span>View More</span> <i className="bx bx-chevron-right" /></Link>
                        </div>
                    </div>
                    <div className="col-xl-8">
                        {blogDataTwo.map((post) => (
                            <div key={post.id} className="blog-content" data-animation="fade-right" >
                                <div className="row">
                                    <div className="col-xl-3 col-sm-3">
                                        <div className="blog-date">
                                            <h4>{post.readTime}</h4>
                                            <span>{post.date}</span>
                                        </div>
                                    </div>
                                    <div className="col-xl-7 col-sm-9">
                                        <div className="blog-title">
                                            <h2>
                                                <Link href={"/blog-details"}>{post.title}</Link>
                                            </h2>
                                            <p>{post.description}</p>
                                        </div>
                                    </div>
                                    <div className="col-xl-2">
                                        <div className="blog-btn">
                                            <Link href={"/blog-details"}>
                                                Read More <i className="bx bx-arrow-back bx-rotate-180" />
                                            </Link>
                                        </div>
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

export default BlogTwo