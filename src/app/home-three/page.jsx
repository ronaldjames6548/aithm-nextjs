import BlogThree from '@/components/sections/blogs/blogThree'
import Brand from '@/components/sections/brands/brand'
import Expertise from '@/components/sections/expertise'
import HeroThree from '@/components/sections/heros/heroThree'
import ProjectsSlider from '@/components/sections/projects/projectsSlider'
import Skills from '@/components/sections/skills'
import TextAnimationBig from '@/components/sections/textAnimations/textAnimationBig'
import React from 'react'

const HomeThree = () => {
  return (
    <>
      <HeroThree />
      <Brand className={"pt-100"}/>
      <Expertise/>
      <Skills/>
      <ProjectsSlider/>
      <TextAnimationBig/>
      <BlogThree/>
    </>
  )
}

export default HomeThree