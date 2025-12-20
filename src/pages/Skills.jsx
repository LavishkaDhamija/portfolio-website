function Skills() {
  const skillsData = {
    languages: [
      { name: 'Python', img: '/portfolio-website/images/python_icon.png' },
      { name: 'C', img: '/portfolio-website/images/c_icon.png' },
      { name: 'Java', img: '/portfolio-website/images/icons8-java-144.png' }
    ],
    webTech: [
      { name: 'HTML', img: '/portfolio-website/images/html-logo.webp' },
      { name: 'CSS', img: '/portfolio-website/images/css-logo.webp' },
      { name: 'JavaScript', img: '/portfolio-website/images/javascript-logo.webp' },
      { name: 'React.js', img: '/portfolio-website/images/react-logo.webp' },
      { name: 'Node.js', img: '/portfolio-website/images/node-logo.webp' },
      { name: 'Express.js', img: '/portfolio-website/images/express_js.png' },
      { name: 'Tailwind CSS', img: '/portfolio-website/images/tailwind_css.png' }
    ],
    databases: [
      { name: 'MySQL', img: '/portfolio-website/images/icons8-mysql-logo-144.png' },
      { name: 'MongoDB', img: '/portfolio-website/images/mongo_db.png' }
    ],
    tools: [
      { name: 'Arduino', img: '/portfolio-website/images/icons8-arduino-144.png' },
      { name: 'GitHub', img: '/portfolio-website/images/icons8-github-logo-250.png' },
      { name: 'MATLAB', img: '/portfolio-website/images/icons8-matlab-96.png' },
      { name: 'Ubuntu', img: '/portfolio-website/images/icons8-ubuntu-96.png' },
      { name: 'VS Code', img: '/portfolio-website/images/icons8-vs-code-96.png' },
      { name: 'Eclipse', img: '/portfolio-website/images/eclipse.png' },
      { name: 'PyCharm', img: '/portfolio-website/images/pycharm.jpeg' },
      { name: 'Code::Blocks', img: '/portfolio-website/images/code_blocks.png' },
      { name: 'Tinkercad', img: '/portfolio-website/images/tinkercad.png' },
      { name: 'ChatGPT', img: '/portfolio-website/images/chatgpt.png' },
      { name: 'Claude', img: '/portfolio-website/images/claude.png' },
      { name: 'LinkedIn', img: '/portfolio-website/images/linkedin.png' },
      { name: 'Keil uVision', img: '/portfolio-website/images/keil.png' },
      { name: 'StarUML', img: '/portfolio-website/images/staruml.jpeg' }
    ]
  };

  return (
    <section className="skills-section">
      <h2>My Skills</h2>

      <div className="skills-group">
        <h3>Languages</h3>
        <div className="cells">
          {skillsData.languages.map((skill, index) => (
            <div className="cell" key={index}>
              <img src={skill.img} alt={skill.name} />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="skills-group">
        <h3>Web Technologies</h3>
        <div className="cells">
          {skillsData.webTech.map((skill, index) => (
            <div className="cell" key={index}>
              <img src={skill.img} alt={skill.name} />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="skills-group">
        <h3>Databases</h3>
        <div className="cells">
          {skillsData.databases.map((skill, index) => (
            <div className="cell" key={index}>
              <img src={skill.img} alt={skill.name} />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="skills-group">
        <h3>Tools & Software</h3>
        <div className="cells">
          {skillsData.tools.map((skill, index) => (
            <div className="cell" key={index}>
              <img src={skill.img} alt={skill.name} />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;