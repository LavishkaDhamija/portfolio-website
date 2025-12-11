import { Link } from 'react-router-dom';

function Home() {
  return (
    <section className="hero-section">
      <div className="text">
        <h2>Hi, I'm Lavishka 👋</h2>
        <p>
          I enjoy working on frontend development and designing intuitive user interfaces. 
          I love experimenting with new technologies and solving problems through creative approaches. 
          I'm organized, curious, and enjoy working on projects that challenge me to grow. 
          My goal is to become a strong frontend developer and continue building meaningful, 
          user-focused digital experiences.
        </p>
        
        <div className="education">
          <h3>Education</h3>
          <ul>
            <li>
              <strong>Currently pursuing B.Tech in Computer Science & Engineering (2023-2027)</strong>
            </li>
          </ul>
          <p>- Amrita Vishwa Vidyapeetham, Coimbatore</p>
          <ul start="2">
            <li>Schooling – Delhi Public School (DPS)</li>
          </ul>
        </div>

        <div className="links">
          <Link to="/skills">
            <i className="fa-solid fa-code"></i>
            <span>View Skills</span>
          </Link>
          
          <Link to="/projects">
            <i className="fa-solid fa-diagram-project"></i>
            <span>My Projects</span>
          </Link>
          
          <Link to="/contact">
            <i className="fa-solid fa-envelope"></i>
            <span>Contact Me</span>
          </Link>
        </div>
      </div>

      <div className="headshot">
        <img src="/images/myProfile.webp" alt="Lavishka's profile" />
      </div>
    </section>
  );
}

export default Home;