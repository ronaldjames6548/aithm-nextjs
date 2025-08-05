import BlogCard from '@/components/sections/blogs/blogCard'
import BlogSidebar from '@/components/sections/blogs/blogSidebar'
import InstagramGallery from '@/components/sections/instagramGallery'
import PageHeader from '@/components/sections/pageHeader'
import Pagination from '@/components/ui/pagination'
import { blogData } from '@/db/blogData'
import React from 'react'

const BlogWithSidebar = () => {
  return (
    <>
      <PageHeader
        className={"sbg-6"}
        currentPage={"Blog Sidebar"}
        title={"Blog Sidebar"}
      />
      <div className="blog-section-2 ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-lists">
                <div className="row">
                  {
                    blogData.map((blog) => (
                      <div key={blog.id} className="col-xl-6 col-lg-6">
                        <BlogCard blog={blog} cardClass="grid" height={377} width={416}/>
                      </div>
                    ))
                  }

                  <div className="blog-pagi">
                    <Pagination />
                  </div>
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

export default BlogWithSidebar