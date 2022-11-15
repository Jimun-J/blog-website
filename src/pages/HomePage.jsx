import React from 'react'
import './HomePage.css'
import Navbar from '../components/Navbar/Navbar'
import Banner from '../components/Banner/Banner'
import RecentBlogSection from '../components/Section01/RecentBlogSection'
import AllBlogSection from '../components/Section02/AllBlogSection'
import ProjectSection from '../components/Section03/ProjectSection'
import Contact from '../components/Section04/Contact'
import Footer from '../components/Section05/Footer'

const HomePage = ({ projects, recentPosts, allPosts }) => {
  return (
    <div className="HomePage">
        <Navbar />
        <Banner />
        <RecentBlogSection posts={recentPosts} />
        <AllBlogSection posts={allPosts} />
        <ProjectSection projects={projects}/>
        <Contact />
        <Footer />
    </div>
  )
}

export default HomePage