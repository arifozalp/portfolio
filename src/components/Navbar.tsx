import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const location = useLocation()

  const isActive = (path: string) => {
    return location.pathname === path
  }

  return (
    <nav className="modern-navbar">
      <div className="container">
        <Link to="/" className="logo-modern">
          <span className="logo-square"></span>
          <div className="logo-text">
            <strong>Arif Özalp</strong>
            <span className="subtitle">/ COMPUTER ENGINEER</span>
          </div>
        </Link>
        <ul className="nav-links">
          <li>
            <Link 
              to="/" 
              className={isActive('/') ? 'active' : ''}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/projects" 
              className={isActive('/projects') ? 'active' : ''}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link 
              to="/resume" 
              className={isActive('/resume') ? 'active' : ''}
            >
              Resume
            </Link>
          </li>
          <li>
            <Link 
              to="/skills" 
              className={isActive('/skills') ? 'active' : ''}
            >
              Skills
            </Link>
          </li>
        </ul>
        <div className="mobile-menu-toggle">
          <i className="fas fa-bars"></i>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
