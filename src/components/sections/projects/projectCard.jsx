import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const ProjectCard = ({project, index, width, height}) => {
    return (
        <div className="project-img" data-animation="fade-up" data-delay={index * 0.1}>
            <Image width={width} height={height} sizes='100vw' src={project.imgSrc} alt="Project Image" />
            <div className="project-btn">
                <Link href="/portfolio-details">
                    <i className="bx bx-arrow-back bx-rotate-180" /> <span>View Project</span>
                </Link>
            </div>
        </div>
    )
}

export default ProjectCard