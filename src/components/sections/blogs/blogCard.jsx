import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const BlogCard = ({ blog, cardClass, width, height }) => {
    return (
        <div className={`blog-card ${cardClass}`}>
            <div className="blog-img">
                <Image
                    width={width }
                    height={height }
                    sizes='100vw'
                    src={blog.imageSrc}
                    alt="Image"
                    className="trasnition"
                />
                <ul className="blog-metainfo">
                    <li>
                        <i className="bx bx-calendar" />{' '}
                        <Link href="/blog">{blog.publishDate}</Link>
                    </li>
                    <li>
                        <i className="bx bx-time" />
                        {blog.readTime}
                    </li>
                </ul>
            </div>
            <div className="blog-info">
                <h3>
                    <Link href={'/blog-details'}>{blog.title}</Link>
                </h3>
                <Link href={"/blog-details"} className="btn-link">
                    Read More
                </Link>
            </div>
        </div>
    )
}

export default BlogCard