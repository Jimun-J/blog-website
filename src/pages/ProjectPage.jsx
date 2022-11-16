import React from 'react'
import './ProjectPage.css'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Section05/Footer'
import { Link } from 'react-router-dom'
import CallMadeIcon from '@mui/icons-material/CallMade';

const ProjectPage = ({ projects, scrollToTop }) => {
    return (
        <div className='ProjectPage'>
            <Navbar scrollToTop={scrollToTop}/>
            <div className="project-container">
                <div className="title">
                    <span>Featured<br /></span>
                    Projects
                </div>
                <div className="project-grid-container">
                    {projects.map((project, index) => (
                        <Link className="project-card" to={"/project/" + project.slug} key={index} onClick={scrollToTop}>
                            <img className="thumbnail" src={project.thumbnail.url} alt="" />
                            <div className="overlay"></div>
                            <div className="text-wrap">
                                <div className="title">{project.title}</div>
                            </div>
                        </Link>
                    ))}
                </div>
                <div className="btn-container">
                    <Link className="contact-us" to="/contact" onClick={scrollToTop}>
                        CONTACT US
                        <CallMadeIcon style={{ fontSize: '16px', transform: 'translateX(15px)' }} />
                    </Link>
                </div>
            </div>
            <Footer scrollToTop={scrollToTop}/>
        </div>
    )
}

export default ProjectPage