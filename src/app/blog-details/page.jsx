import BlogArticle from '@/components/sections/blogs/blogArticle'
import BlogSidebar from '@/components/sections/blogs/blogSidebar'
import React from 'react'
import Link from 'next/link'

const BlogDetails = () => {
    return (
        <>
            <div className="blog-section-banner">
                <div className="container">
                    <div className="blog-title-shape">
                        <h2>The Evolution of AI Features Shaping Tomorrow's Technology Landscape</h2>
                        <ul>
                            <li>March 18, 2022</li>
                            <li><Link href="/blog">Business</Link></li>
                            <li><span>0</span> Comments</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="blog-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <BlogArticle/>
                        </div>
                        <div className="col-lg-4">
                            <BlogSidebar />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default BlogDetails