import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import project1Image from '../assets/project1.png'
import project2Image from '../assets/project2.png'
import project3Image from '../assets/project3.png'
import project4Image from '../assets/project4.png'
import project5Image from '../assets/project5.png'
import './ProjectDetail.css'

interface ProjectData {
  id: string
  title: string
  description: string
  whatIDid: string[]
  technologies: string[]
  githubUrl?: string
  image: string
}

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>()
  const [project, setProject] = useState<ProjectData | null>(null)

  const projects: ProjectData[] = [
    {
      id: '1',
      title: 'Farming Management Game',
      description: 'This project is a simulation-based farming game where players manage a virtual farm by growing crops, raising animals, and making economic decisions. The game emphasizes time and resource management.',
      whatIDid: [
        'Designed core game mechanics',
        'Implemented 2D graphics interface using SFML',
        'Managed data persistence using XML'
      ],
      technologies: ['C++', 'SFML', 'XML'],
      githubUrl: 'https://github.com/OnurCokyigit/Farming-Management-Game',
      image: 'project1.png'
    },
    {
      id: '2',
      title: 'Course Schedule Planner',
      description: 'A comprehensive web application designed to help students and academic advisors create optimal class schedules. The system analyzes course conflicts, prerequisites, and student preferences to generate the best possible timetable.',
      whatIDid: [
        'Developed Angular frontend with responsive design',
        'Implemented PostgreSQL database with complex queries',
        'Created conflict detection algorithms',
        'Built filtering and search functionality'
      ],
      technologies: ['Angular', 'PostgreSQL', 'TypeScript', 'CSS3'],
      image: 'project2.png'
    },
    {
      id: '3',
      title: 'Stock Sector Similarity AI',
      description: 'An advanced machine learning project that analyzes stock market data to classify stocks by sector behavior. The AI model uses time series analysis and feature engineering to predict sector similarities.',
      whatIDid: [
        'Implemented time series feature extraction',
        'Developed machine learning models for classification',
        'Created data preprocessing pipelines',
        'Built visualization tools for results'
      ],
      technologies: ['Python', 'NumPy', 'SciPy', 'scikit-learn', 'Matplotlib'],
      image: 'project3.png'
    },
    {
      id: '4',
      title: 'Mobile Stock Trading App',
      description: 'A comprehensive mobile application for stock market analysis and portfolio management. Users can track real-time stock prices, manage their investment portfolio, and analyze performance through intuitive charts and analytics.',
      whatIDid: [
        'Developed Android app using Java',
        'Integrated real-time stock data APIs',
        'Implemented portfolio management features',
        'Created interactive charts using MPAndroidChart',
        'Built user authentication and data persistence'
      ],
      technologies: ['Java', 'Android SDK', 'Volley', 'MPAndroidChart', 'SQLite'],
      image: 'project4.png'
    },
    {
      id: '5',
      title: 'Deep Learning Performance Tests on Supercomputers',
      description: 'A research project focused on benchmarking distributed deep learning strategies across different GPU architectures. The study compares Data Parallel (DDP) and Fully Sharded Data Parallel (FSDP) approaches on high-performance computing systems.',
      whatIDid: [
        'Implemented distributed training strategies',
        'Conducted performance benchmarks on V100 and P100 GPUs',
        'Analyzed scalability and efficiency metrics',
        'Documented optimization techniques',
        'Presented findings at academic conferences'
      ],
      technologies: ['Python', 'PyTorch', 'PyTorch Lightning', 'CUDA', 'Distributed Computing'],
      image: 'project5.png'
    }
  ]

  useEffect(() => {
    const foundProject = projects.find(p => p.id === id)
    setProject(foundProject || null)
  }, [id])

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

  if (!project) {
    return (
      <div className="project-detail-page">
        <div className="container">
          <div className="project-detail">
            <h1>Project Not Found</h1>
            <p>The project you're looking for doesn't exist.</p>
            <Link to="/projects" className="btn">Back to Projects</Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="project-detail-page">
      <div className="container">
        <div className="project-detail slide-up">
          <h1>{project.title}</h1>
          <img src={getImage(project.image)} alt={`${project.title} Screenshot`} />
          <p>{project.description}</p>
          
          <h3>What I Did:</h3>
          <ul>
            {project.whatIDid.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          
          <h3>Technologies Used:</h3>
          <div className="technologies">
            {project.technologies.map((tech, index) => (
              <span key={index} className="tech-tag">{tech}</span>
            ))}
          </div>
          
          {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn"
            >
              <i className="fab fa-github"></i> View on GitHub
            </a>
          )}
          
          <Link to="/projects" className="btn btn-secondary">
            Back to Projects
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail
