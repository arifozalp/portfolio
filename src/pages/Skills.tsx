import { useState } from 'react'
import yapayZekaImage from '../assets/YapayZeka.png'
import savunmaSanayiiImage from '../assets/SavunmaSanayii101.png'
import kariyerYetkinlikImage from '../assets/KariyerYetkinlik.png'
import codeGeekImage from '../assets/CodeGeek.png'
import codeMastersImage from '../assets/CodeMasters.png'
import javaBasicImage from '../assets/JavaBasic.png'
import sqlBasicImage from '../assets/SQLBasic.png'
import aYetenekImage from '../assets/aYetenek3Sertification.png'
import './Skills.css'

const Skills = () => {
  const [selectedCert, setSelectedCert] = useState<{title: string, image: string} | null>(null)

  const certifications = [
    {
      title: 'AI Specialization Program',
      organization: 'Milli Teknoloji Akademisi',
      image: yapayZekaImage
    },
    {
      title: 'Savunma Sanayii 101',
      organization: 'Savunma Sanayii Akademi',
      image: savunmaSanayiiImage
    },
    {
      title: 'Kariyer ve Yetkinlik Buluşmaları',
      organization: 'Savunma Sanayii Akademi',
      image: kariyerYetkinlikImage
    },
    {
      title: 'Code Geek',
      organization: 'Globally Check',
      image: codeGeekImage
    },
    {
      title: 'CodeMasters',
      organization: 'Globally Check',
      image: codeMastersImage
    },
    {
      title: 'Java Basic',
      organization: 'Hackerrank',
      image: javaBasicImage
    },
    {
      title: 'SQL Basic',
      organization: 'Hackerrank',
      image: sqlBasicImage
    },
    {
      title: 'a Yetenek 3 Online Program',
      organization: 'ASELSAN',
      image: aYetenekImage
    }
  ]

  const openModal = (cert: {title: string, image: string}) => {
    setSelectedCert(cert)
  }

  const closeModal = () => {
    setSelectedCert(null)
  }

  return (
    <div className="skills-page">
      <div className="container">
        <div className="skills-container slide-up">
          <h1>Skills & Certifications</h1>
          
          <section className="skills-block">
            <h2>Technical Skills</h2>
            <ul className="skill-list">
              <li><i className="fas fa-terminal skill-icon"></i><strong> Programming Languages:</strong> Python, Java, C, C++</li>
              <li><i className="fab fa-python skill-icon"></i><strong> Python Libraries:</strong> NumPy, SciPy, scikit-learn, tsfresh, Matplotlib</li>
              <li><i className="fab fa-java skill-icon"></i><strong> Java / Android:</strong> OOP principles, Android app development, Volley, MPAndroidChart</li>
              <li><i className="fas fa-database skill-icon"></i><strong> Database:</strong> SQLite, PostgreSQL</li>
              <li><i className="fas fa-server skill-icon"></i><strong> Backend:</strong> Node.js, Express.js</li>
              <li><i className="fas fa-robot skill-icon"></i><strong> AI & Machine Learning:</strong> Machine Learning, Deep Learning, Feature Engineering, CatBoost, XGBoost</li>
              <li><i className="fas fa-gamepad skill-icon"></i><strong> Game & UI Development:</strong> C++, SFML, XML</li>
              <li><i className="fas fa-microchip skill-icon"></i><strong> OS & Systems:</strong> CPU, memory management, concurrency, multithreading (C/C++)</li>
              <li><i className="fas fa-code-branch skill-icon"></i><strong> Version Control:</strong> Git & GitHub</li>
            </ul>
          </section>
          
          <section className="certifications-block">
            <h2>Certifications</h2>
            <div className="certificates-list">
              {certifications.map((cert, index) => (
                <div 
                  key={index}
                  className="certificate-block"
                  onClick={() => openModal(cert)}
                >
                  <img src={cert.image} alt={cert.title} />
                  <div className="certificate-text">
                    <h3>{cert.title}</h3>
                    <p>{cert.organization}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Modal Overlay */}
      {selectedCert && (
        <div className="modal-overlay active" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>&times;</button>
            <img src={selectedCert.image} alt={selectedCert.title} />
            <h3>{selectedCert.title}</h3>
          </div>
        </div>
      )}
    </div>
  )
}

export default Skills
