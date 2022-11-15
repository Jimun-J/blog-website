import React from 'react'
import './ProjectCard.css'

const ProjectCard = ({ project }) => {
  return (
    <div className="ProjectCard">
      <div className="overlay"></div>
      <img
        src={project.thumbnail.url}
        alt="project thumbnail"
        className="project-img"
      />
      <div className="project-title">{project.title}</div>
    </div>
  )
}

export default ProjectCard