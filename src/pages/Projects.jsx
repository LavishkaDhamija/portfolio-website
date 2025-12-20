function Projects() {
  const projectsData = [
    {
      title: 'Optimised Load Balancing (OLB) Simulation for Smart Healthcare IoT',
      description: 'A modularized, high-fidelity simulation of the Optimised Load Balancing (OLB) algorithm for IoT-enabled smart healthcare systems, built on the YAFS framework.',
      techStack: ['Python', 'YAFS', 'Numpy'],
      image: 'images/edge_project.jpg',
      githubLink: 'https://github.com/LavishkaDhamija/proofread_eval_pipeline'
    },
     {
      title: 'Proofread_eval_pipeline',
      description: 'A text correction pipeline with synthetic noise generation, spelling correction (PySpellChecker), grammar correction (FLAN-T5), and custom evaluation metrics (EM, NEM, Error Ratio, Good/Bad Ratio, Diff Meaning Ratio).',
      techStack: ['Pandas', 'NLTK/spacy','Python'],
      image: 'images/nlp.png',
      githubLink: 'https://github.com/23CSE362-edge-computing-2025-26-odd/capstone-project-10-bitmistake'
    },
    {
      title: 'Cache System With Access Pattern',
      description: 'Explored various cache optimization techniques that can help you unlock the full potential of your caching infrastructure and drive tangible business results.',
      techStack: ['DLL','HashMap'],
      image: 'images/dsa.jpg',
      githubLink: '#',
      
    },
    {
      title: 'Proximity-Based Access Alarm System',
      description: 'An STM32F401CCU6-based security system that detects unauthorized approach using ultrasonic sensing, providing multi-stage visual and audible alerts with real-time status display.',
      techStack: ['C'],
      image: 'images/embedded.jpg',
      githubLink: 'https://github.com/LavishkaDhamija/proximity-access-alarm',
      
    },
    {
      title: 'Portfolio Website',
      description: 'A responsive personal portfolio website built with React. Features include smooth navigation, mobile-friendly design, and interactive sections.',
      techStack: ['React', 'CSS', 'JavaScript'],
      image: 'images/port.png',
      githubLink: 'https://github.com/LavishkaDhamija/portfolio-website',
      
    },
    {
      title: 'Tic-Tac-Toe Game',
      //description: 'A modularized, high-fidelity simulation of the Optimised Load Balancing (OLB) algorithm for IoT-enabled smart healthcare systems, built on the YAFS (Yet Another Fog Simulator) framework.',
      techStack:['React', 'CSS', 'JavaScript'] ,
      image: 'images/tic.jpg',
      githubLink: 'https://github.com/23CSE362-edge-computing-2025-26-odd/capstone-project-10-bitmistake'
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
                {/* <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                  <i className="fa-solid fa-arrow-up-right-from-square"></i> Live Demo
                </a> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;