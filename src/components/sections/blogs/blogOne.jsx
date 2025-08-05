import { blogData } from '@/db/blogData'
import React from 'react'
import BlogCard from './blogCard'
import Link from 'next/link'

const BlogOne = () => {
    return (
        <div className="blog-section-2 pb-100">
            <div className="container">
                <div className="blog-content-2">
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-lg-7 col-md-7">
                            <div className="content">
                                <div className="sub-title-2" data-animation="fade-down" >
                                    <p>Latest Blogs </p>
                                </div>
                                <h2 data-animation="fade-down" >Latest News &amp; Articles</h2>
                                <p>AI systems can analyze data, recognize patterns, make decisions, and even adapt and improve over time.</p>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-5 col-md-5" data-animation="fade-up" >
                            <div className="blog-content-btn">
                                <Link className="default-btn" href="/blog"><span>More Posts</span> <i className="bx bx-chevron-right" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    {blogData.slice(0, 3).map((blog) => (
                        <div key={blog.id} className="col-xl-4 col-md-6">
                            <BlogCard blog={blog} width={416} height={377}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default BlogOne