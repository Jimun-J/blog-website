import React from 'react'
import { Link } from 'react-router-dom'
import './ProjectSection.css'
import HorizontalScrollbar from '../HorizontalScrollbar/HorizontalScrollbar'
import CallMadeIcon from '@mui/icons-material/CallMade';


const ProjectSection = ({ projects }) => {
    return (
        <div className="ProjectSection">
            <div className="project-section">
                <div className="text-wrap">
                    <h2 className="title">Projects</h2>
                    <div className="sub-title">
                        Check out complete projects
                    </div>
                </div>
                <HorizontalScrollbar projects={projects} />
                <Link className="read-more" to="/projects">
                    Read More
                    <CallMadeIcon style={{ fontSize: '16px', marginLeft: '5px', transform: 'translateY(3px)' }} />
                </Link>
            </div>
        </div>
    )
}

export default ProjectSection