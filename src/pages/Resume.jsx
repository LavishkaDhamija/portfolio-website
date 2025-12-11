function Resume() {
  return (
    <section className="resume-section">
      <div className="resume-header">
        <h2>Resume</h2>
        <a href="/resume.pdf" download className="download-btn">
          <i className="fa-solid fa-download"></i> Download PDF
        </a>
      </div>

      <div className="resume-content">
        <div className="resume-block">
          <h3><i className="fa-solid fa-user"></i> Personal Information</h3>
          <p><strong>Name:</strong> Lavishka Dhamija</p>
          <p><strong>Email:</strong> lavishkadhamija@gmail.com</p>
          <p><strong>Phone:</strong> +91-9817782840</p>
          <p><strong>Location:</strong> Delhi, India</p>
        </div>

        <div className="resume-block">
          <h3><i className="fa-solid fa-graduation-cap"></i> Education</h3>
          <div className="timeline-item">
            <h4>B.Tech in Computer Science & Engineering</h4>
            <p className="institution">Amrita Vishwa Vidyapeetham, Coimbatore</p>
            <p className="duration">2023 - 2027 (Expected)</p>
          </div>
          <div className="timeline-item">
            <h4>Schooling</h4>
            <p className="institution">Delhi Public School (DPS)</p>
          </div>
        </div>

        <div className="resume-block">
          <h3><i className="fa-solid fa-code"></i> Technical Skills</h3>
          <div className="skill-category">
            <h4>Programming Languages</h4>
            <p>Python, C, Java</p>
          </div>
          <div className="skill-category">
            <h4>Web Development</h4>
            <p>HTML, CSS, JavaScript, React.js, Node.js, Express.js, Tailwind CSS</p>
          </div>
          <div className="skill-category">
            <h4>Databases</h4>
            <p>MySQL, MongoDB</p>
          </div>
          <div className="skill-category">
            <h4>Tools & Technologies</h4>
            <p>Git, GitHub, VS Code, Arduino, MATLAB, Ubuntu</p>
          </div>
        </div>

        <div className="resume-block">
          <h3><i className="fa-solid fa-diagram-project"></i> Projects</h3>
          <div className="timeline-item">
            <h4>Portfolio Website</h4>
            <p>Responsive personal portfolio with React, showcasing modern web development skills</p>
          </div>
          <div className="timeline-item">
            <h4>Task Management Application</h4>
            <p>Full-stack MERN application with authentication and CRUD operations</p>
          </div>
          <div className="timeline-item">
            <h4>Arduino Smart Home System</h4>
            <p>IoT-based home automation using Arduino and sensors</p>
          </div>
        </div>

        <div className="resume-block">
          <h3><i className="fa-solid fa-heart"></i> Interests</h3>
          <p>Frontend Development, UI/UX Design, IoT, Web Technologies, Problem Solving</p>
        </div>
      </div>
    </section>
  );
}

export default Resume;