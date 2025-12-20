function Skills() {
  const skillsData = {
    languages: [
      { name: 'Python', img: 'images/python_icon.png' },
      { name: 'C', img: 'images/c_icon.png' },
      { name: 'Java', img: 'images/icons8-java-144.png' }
    ],
    webTech: [
      { name: 'HTML', img: 'images/html-logo.webp' },
      { name: 'CSS', img: 'images/css-logo.webp' },
      { name: 'JavaScript', img: 'images/javascript-logo.webp' },
      { name: 'React.js', img: 'images/react-logo.webp' },
      { name: 'Node.js', img: 'images/node-logo.webp' },
      { name: 'Express.js', img: 'images/express_js.png' },
      { name: 'Tailwind CSS', img: 'images/tailwind_css.png' }
    ],
    databases: [
      { name: 'MySQL', img: 'images/icons8-mysql-logo-144.png' },
      { name: 'MongoDB', img: 'images/mongo_db.png' }
    ],
    tools: [
      { name: 'Arduino', img: 'images/icons8-arduino-144.png' },
      { name: 'GitHub', img: 'images/icons8-github-logo-250.png' },
      { name: 'MATLAB', img: 'images/icons8-matlab-96.png' },
      { name: 'Ubuntu', img: 'images/icons8-ubuntu-96.png' },
      { name: 'VS Code', img: 'images/icons8-vs-code-96.png' },
      { name: 'Eclipse', img: 'images/eclipse.png' },
      { name: 'PyCharm', img: 'images/pycharm.jpeg' },
      { name: 'Code::Blocks', img: 'images/code_blocks.png' },
      { name: 'Tinkercad', img: 'images/tinkercad.png' },
      { name: 'ChatGPT', img: 'images/chatgpt.png' },
      { name: 'Claude', img: 'images/claude.png' },
      { name: 'LinkedIn', img: 'images/linkedin.png' },
      { name: 'Keil uVision', img: 'images/keil.png' },
      { name: 'StarUML', img: 'images/staruml.jpeg' }
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