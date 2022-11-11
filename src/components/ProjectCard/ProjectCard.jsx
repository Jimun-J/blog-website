import React from 'react'
import './ProjectCard.css'

const ProjectCard = ({ project }) => {
  return (
    <div className="ProjectCard">
      <div className="project-title">{project.title}</div>
      <img
        src={project.thumbnail.url}
        alt="project thumbnail"
        className="project-img"
      />
    </div>
  )
}

export default ProjectCard