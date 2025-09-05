import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import project1Image from '../assets/project1.png'
import project2Image from '../assets/project2.png'
import project3Image from '../assets/project3.png'
import project4Image from '../assets/project4.png'
import project5Image from '../assets/project5.png'
import './ProjectCard.css'

interface Project {
  id: string
  title: string
  shortDesc: string
  details: string
  image: string
  technologies: string[]
}

interface ProjectCardProps {
  project: Project
  index: number
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, index * 200)
    return () => clearTimeout(timer)
  }, [index])

  const getImage = (imageName: string) => {
    switch (imageName) {
      case 'project1.png': return project1Image
      case 'project2.png': return project2Image
      case 'project3.png': return project3Image
      case 'project4.png': return project4Image
      case 'project5.png': return project5Image
      default: return project1Image
    }
  }

  return (
    <div className={`project-card ${isVisible ? 'visible' : ''}`}>
      <img src={getImage(project.image)} alt={project.title} />
      <div className="project-info">
        <h3>{project.title}</h3>
        <p className="short-desc">{project.shortDesc}</p>
        <p className="details">{project.details}</p>
        <div className="technologies">
          {project.technologies.map((tech, idx) => (
            <span key={idx} className="tech-tag">{tech}</span>
          ))}
        </div>
        <Link to={`/project/${project.id}`} className="btn">
          See Details
        </Link>
      </div>
    </div>
  )
}

export default ProjectCard
