function Projects() {
  const projectsData = [
    {
      title: 'Portfolio Website',
      description: 'A responsive personal portfolio website built with React. Features include smooth navigation, mobile-friendly design, and interactive sections.',
      techStack: ['React', 'CSS', 'JavaScript'],
      image: '/images/project1.jpg',
      githubLink: 'https://github.com/LavishkaDhamija',
      liveLink: '#'
    },
    {
      title: 'Task Management App',
      description: 'A full-stack task management application with user authentication, CRUD operations, and real-time updates using React and Node.js.',
      techStack: ['React', 'Node.js', 'MongoDB'],
      image: '/images/project2.jpg',
      githubLink: '#',
      liveLink: '#'
    },
    {
      title: 'Arduino Smart Home System',
      description: 'An IoT-based home automation system using Arduino that controls lights, temperature, and security features through a mobile app.',
      techStack: ['Arduino', 'C++', 'IoT'],
      image: '/images/project3.jpg',
      githubLink: '#',
      liveLink: '#'
    }
  ];

  return (
    <section className="projects-section">
      <h2>My Projects</h2>
      
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.techStack.map((tech, idx) => (
                  <span key={idx}>{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-github"></i> Code
                </a>
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                  <i className="fa-solid fa-arrow-up-right-from-square"></i> Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;