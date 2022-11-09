import React from 'react'
import './HomePage.css'
import Navbar from '../components/Navbar/Navbar'
import Banner from '../components/Banner/Banner'
import RecentBlogSection from '../components/Section01/RecentBlogSection'

const HomePage = () => {
  return (
    <div className="HomePage">
        <Navbar />
        <Banner />
        <RecentBlogSection />
    </div>
  )
}

export default HomePage