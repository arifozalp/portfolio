import ProjectCard from '../components/ProjectCard'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      id: '1',
      title: 'Farming Management Game',
      shortDesc: '2D farming simulation using C++ and SFML.',
      details: 'Manage crops, animals, and time in this XML-powered farm simulator.',
      image: 'project1.png',
      technologies: ['C++', 'SFML', 'XML']
    },
    {
      id: '2',
      title: 'Course Schedule Planner',
      shortDesc: 'Web app for generating optimal class timetables.',
      details: 'Built with Angular and PostgreSQL, supports filtering and conflict checks.',
      image: 'project2.png',
      technologies: ['Angular', 'PostgreSQL', 'TypeScript']
    },
    {
      id: '3',
      title: 'Stock Sector Similarity AI',
      shortDesc: 'AI to classify stocks by sector behavior.',
      details: 'Analyzes stock time series to provide sector-alike predictions using ML models.',
      image: 'project3.png',
      technologies: ['Python', 'Machine Learning', 'NumPy']
    },
    {
      id: '4',
      title: 'Mobile Stock Trading App',
      shortDesc: 'Mobile app for stock tracking and smart investing.',
      details: 'View real-time stock prices, manage balance and portfolio, and analyze your investment performance with a user-friendly interface.',
      image: 'project4.png',
      technologies: ['Java', 'Android', 'Volley']
    },
    {
      id: '5',
      title: 'Deep Learning Performance Tests on Supercomputers',
      shortDesc: 'Performance benchmarking with distributed deep learning strategies.',
      details: 'Compared DDP and FSDP strategies across GPU types (V100/P100) on TÜBİTAK TRUBA supercomputers using PyTorch Lightning.',
      image: 'project5.png',
      technologies: ['Python', 'PyTorch', 'Deep Learning']
    }
  ]

  return (
    <div className="projects-page">
      <div className="container">
        <div className="projects-container slide-up">
          <h1>My Projects</h1>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
