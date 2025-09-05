import { Link } from 'react-router-dom'
import profileImage from '../assets/profile.jpg'
import './Home.css'

const Home = () => {
  return (
    <div className="home-page">
      <svg className="wave" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path d="M0 224L80 208C160 192 320 160 480 165.3C640 171 800 213 960 208C1120 203 1280 149 1360 122.7L1440 96V0H1360C1280 0 1120 0 960 0 800 0 640 0 480 0 320 0 160 0 80 0H0Z"/>
      </svg>
      <svg className="wave wave2" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path d="M0 96L60 122.7C120 149 240 203 360 208C480 213 600 171 720 165.3C840 160 960 192 1080 181.3C1200 171 1320 117 1380 90.7L1440 64V320H1380C1320 320 1200 320 1080 320 960 320 840 320 720 320 600 320 480 320 360 320 240 320 120 320 60 320H0Z"/>
      </svg>
      
      <div className="container">
        <section className="hero-section fade-in">
          <img src={profileImage} alt="Profile Photo" className="round-photo" />
          <div className="hero-text">
            <h1>Arif Özalp</h1>
            <h2>Computer Engineering Student</h2>
            <div className="hero-buttons">
              <Link to="/projects" className="btn">What I Do</Link>
              <Link to="/resume" className="btn btn-secondary">My Resume</Link>
            </div>
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/arif-özalp-597374326/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="mailto:ozalpariff@gmail.com" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-envelope"></i>
              </a>
              <a href="https://github.com/arifozalp" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home
