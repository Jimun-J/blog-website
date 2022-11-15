import React from 'react'
import './ProjectPage.css'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Section05/Footer'
import { Link } from 'react-router-dom'

const ProjectPage = ({ projects }) => {
    console.log(projects);
    return (
        <div className='ProjectPage'>
            <Navbar />
            <div className="project-container">
                <div className="title">
                    <span>Featured<br /></span>
                    Project
                </div>
                <div className="project-grid-container">
                    {projects.map((project, index) => (
                        <Link></Link>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ProjectPage