import { blogRecentPosts } from '@/db/blogData';
import React from 'react'
import Link from 'next/link';
const blogCategories = [
    { name: "AI-Generated", count: 1 },
    { name: "Blog", count: 12 },
    { name: "Business", count: 4 },
    { name: "Mindset", count: 23 },
    { name: "Financial", count: 8 },
    { name: "Modern", count: 14 },
    { name: "Post Types", count: 16 },
    { name: "Technology", count: 19 },
    { name: "Trends", count: 21 },
];

const BlogSidebar = () => {
    return (
        <div className="widget-area">
            <div className="widget widget-search">
                <h3 className="widget-title">Search</h3>
                <div className="search-box">
                    <input type="text" className="search-input" placeholder="Search.." />
                    <button className="search-button">
                        <i className="bx bx-search-alt" />
                    </button>
                </div>
            </div>
            <div className="widget widget-categories">
                <h3 className="widget-title">Categories</h3>
                <div className="post-categories">
                    <ul>
                        {blogCategories.map((category, index) => (
                            <li key={index}>
                                <Link href="/blog">
                                    <i className="bx bxs-square" /> {category.name}
                                </Link>
                                <span>({category.count})</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="widget widget-post">
                <h3 className="widget-title">Recent Posts</h3>
                {blogRecentPosts.map((post, index) => (
                    <article className="item" key={index}>
                        <Link href={"/blog-details"} className="thumb">
                            <span className={`fullimage ${post.bgClass}`} role="img" />
                        </Link>
                        <div className="info">
                            <h4 className="title usmall">
                                <Link href={"/blog-details"}>{post.title}</Link>
                            </h4>
                            <ul className="meta">
                                <li><i className="bx bx-calendar" /> {post.date}</li>
                                <li>
                                    <Link href={"/blog-standard"}>
                                        <i className="bx bxs-grid-alt" /> {post.category}
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </article>
                ))}
            </div>
            <div className="widget widget-social">
                <h3 className="widget-title">Stay Connected</h3>
                <div className="social-links">
                    <ul>
                        <li><a href="#"><i className="bx bxl-facebook" /> Facebook</a></li>
                        <li><a href="#"><i className="bx bxl-instagram" /> Instagram</a></li>
                        <li><a href="#"><i className="bx bxl-github" /> Github</a></li>
                        <li><a href="#"><i className="bx bxl-linkedin" /> Linkedin</a></li>
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default BlogSidebar