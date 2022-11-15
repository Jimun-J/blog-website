import React from 'react'
import './HomePage.css'
import Navbar from '../components/Navbar/Navbar'
import Banner from '../components/Banner/Banner'
import RecentBlogSection from '../components/Section01/RecentBlogSection'
import AllBlogSection from '../components/Section02/AllBlogSection'
import ProjectSection from '../components/Section03/ProjectSection'
import Contact from '../components/Section04/Contact'
import Footer from '../components/Section05/Footer'

const HomePage = ({ projects, recentPosts, allPosts, scrollToTop }) => {
  return (
    <div className="HomePage">
        <Navbar scrollToTop={scrollToTop} />
        <Banner />
        <RecentBlogSection posts={recentPosts} scrollToTop={scrollToTop} />
        <AllBlogSection posts={allPosts} scrollToTop={scrollToTop}/>
        <ProjectSection projects={projects} scrollToTop={scrollToTop}/>
        <Contact scrollToTop={scrollToTop}/>
        <Footer scrollToTop={scrollToTop} />
    </div>
  )
}

export default HomePage