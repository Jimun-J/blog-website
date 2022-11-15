import React from 'react'
import './ProjectPage.css'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Section05/Footer'

const ProjectPage = () => {
    return (
        <div className='ProjectPage'>
            <Navbar />
            <div className="project-container">
                <div className="title">
                    <span>Featured<br /></span>
                    Projects
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ProjectPage