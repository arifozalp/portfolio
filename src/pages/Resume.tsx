import './Resume.css'

const Resume = () => {
  return (
    <div className="resume-page">
      <svg className="wave" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path d="M0 224L80 208C160 192 320 160 480 165.3C640 171 800 213 960 208C1120 203 1280 149 1360 122.7L1440 96V0H1360C1280 0 1120 0 960 0 800 0 640 0 480 0 320 0 160 0 80 0H0Z"/>
      </svg>
      <svg className="wave wave2" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path d="M0 96L60 122.7C120 149 240 203 360 208C480 213 600 171 720 165.3C840 160 960 192 1080 181.3C1200 171 1320 117 1380 90.7L1440 64V320H1380C1320 320 1200 320 1080 320 960 320 840 320 720 320 600 320 480 320 360 320 240 320 120 320 60 320H0Z"/>
      </svg>
      
      <div className="container">
        <div className="resume-container slide-up">
          <h1><i className="fas fa-file-alt"></i> Resume</h1>
          
          <section className="resume-block">
            <h2>Summary</h2>
            <div className="resume-group">
              <div className="resume-card">
                <div className="resume-left"><strong>Profile</strong></div>
                <div className="resume-right">
                  <p>
                    Bilgisayar Mühendisliği 4. sınıf öğrencisi olarak, yazılım geliştirme alanında
                    full‑stack teknolojilere odaklanıyor; hem frontend hem de backend tarafında yetkin
                    bir mühendis olmayı hedefliyorum. Ölçeklenebilir ve kullanıcı dostu çözümler
                    geliştirmeye odaklanıyorum. Ekip çalışmasına uyum sağlayabilen ve gerektiğinde
                    liderlik rolü üstlenebilen, yenilikçi projelerde yer almaktan ve kendimi sürekli
                    geliştirmekten keyif alan biriyim. Okul içi ve dışındaki çeşitli kurslar sayesinde
                    pek çok programlama dilinde deneyim kazandım ve bu deneyimleri profesyonel
                    projelere yansıtmayı amaçlıyorum.
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          <section className="resume-block">
            <h2>Education</h2>
            <div className="resume-group">
              <div className="resume-card">
                <div className="resume-left">
                  <strong>2021 – 2026</strong><br/>Ankara Yıldırım Beyazıt University
                </div>
                <div className="resume-right">
                  <strong>Computer Engineering</strong>
                  <p>GPA: 3.61 / 4.00</p>
                </div>
              </div>
              <div className="resume-card">
                <div className="resume-left">
                  <strong>2017 – 2021</strong><br/>Özel Batı Anadolu Lisesi
                </div>
                <div className="resume-right">
                  <strong>Science & Math Focus</strong>
                  <p>GPA: 88.4 / 100.0</p>
                </div>
              </div>
            </div>
          </section>
          
          <section className="resume-block">
            <h2>Languages</h2>
            <div className="resume-group">
              <div className="resume-card">
                <div className="resume-left"><strong>English</strong></div>
                <div className="resume-right"><p>B2 (Independent)</p></div>
              </div>
              <div className="resume-card">
                <div className="resume-left"><strong>Turkish</strong></div>
                <div className="resume-right"><p>Native</p></div>
              </div>
            </div>
          </section>
          
          <section className="resume-block">
            <h2>Experience</h2>
            <div className="resume-group">
              <div className="resume-card">
                <div className="resume-left">
                  <strong>Feb 2024 – Jun 2024</strong><br/>Savunma Sanayii Akademi
                </div>
                <div className="resume-right">
                  <p>Gained foundational knowledge of defense industry structure, systems engineering, project management, product life-cycle, and quality assurance through expert-led sessions.</p>
                </div>
              </div>
              <div className="resume-card">
                <div className="resume-left">
                  <strong>Sep 2024 – Dec 2024</strong><br/>Milli Teknoloji Akademisi
                </div>
                <div className="resume-right">
                  <p>Enhanced AI skills—from fundamentals to advanced topics—by participating in the Artificial Intelligence Academy program.</p>
                </div>
              </div>
              <div className="resume-card">
                <div className="resume-left">
                  <strong>Jun 2025 - Jul 2025</strong><br/>ASELSAN – Software Engineering Intern
                </div>
                <div className="resume-right">
                  <p>
                    Contributed to the development of a software system for remote monitoring and control of unmanned vehicles.<br/>
                    Developed backend and frontend modules using Java, DDS, and Java Swing.<br/>
                    Designed and integrated a dynamic subscriber module using reflection and generics.<br/>
                    Participated in system integration, module testing, and technical presentations.
                  </p>
                </div>
              </div>
              <div className="resume-card">
                <div className="resume-left">
                  <strong>Aug 2025 – Sep 2025</strong><br/>HAVELSAN – Test Automation Software Intern
                </div>
                <div className="resume-right">
                  <strong>Key Contributions</strong>
                  <ul>
                    <li>Actively contributed to Python API development for FastDDS (Fast Data Distribution Service).</li>
                    <li>Built a cross‑platform library by bridging C++ and Python using pybind11.</li>
                    <li>Designed and integrated publisher/subscriber modules for DDS‑based communication systems.</li>
                    <li>Developed modern web UI with React/TypeScript: QoS management, IDL generator, message monitoring.</li>
                    <li>Implemented C++ backend services: WebSocket server, QoS management, and network monitoring.</li>
                    <li>Optimized build and packaging with CMake automation and Electron desktop application bundling.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Resume
