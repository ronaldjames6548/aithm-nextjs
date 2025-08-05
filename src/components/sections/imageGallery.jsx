'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from "motion/react"
import { galleryItemsData } from '@/db/galleryItemsData';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const itemVariants = {
  initial: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
  hidden: { opacity: 0, scale: 0.8 },
};

const ImageGallery = ({ className, isTitleShow }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const filters = ['all', 'creative', 'animate', 'design'];

  const filteredItems = activeFilter === 'all'
    ? galleryItemsData
    : galleryItemsData.filter(item => item.category === activeFilter);

  const handleFilterChange = (newFilter) => {
    setActiveFilter(newFilter);
  };


  return (
    <div className={`gallery-section pb-100 ${className}`}>
      <div className="container">
        {
          isTitleShow &&
          <div className="section-title-2" data-animation="fade-up" data-delay="{0.1}">
            <div className="sub-title-2">
              <p>Aithm Creation</p>
            </div>
            <h2>Unveil New Creative Horizons with Models</h2>
          </div>
        }
        <div className="controls" data-animation="fade-zoom-in" data-aos-offset="{0.2}">
          <ul id="filters" className="clearfix">
            {filters.map((filter) => (
              <li
                key={filter}
                className={`filter ${activeFilter === filter ? 'active' : ''}`}
                data-filter={filter === 'all' ? 'all' : `.${filter}`}
                onClick={() => handleFilterChange(filter)}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </li>
            ))}
          </ul>
        </div>

        <PhotoProvider>
          <div className="item-grid">
            <AnimatePresence>
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  className={`item ${item.category}`}
                  variants={itemVariants}
                  initial="initial"
                  animate="visible"
                  exit="hidden"
                  transition={{ duration: 0.3 }}
                >
                  <PhotoView key={item.id} src={item.src}>
                    <img src={item.src} alt="image" className="popup-img"/>
                  </PhotoView>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </PhotoProvider>
      </div>
    </div>

  )
}

export default ImageGallery