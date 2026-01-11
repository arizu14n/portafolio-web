import React from 'react';

const Skills = () => {
  // Tecnologías con sus iconos de devicon
  const technologies = [
    // Lenguajes
    { name: 'HTML5', icon: 'devicon-html5-plain colored' },
    { name: 'CSS3', icon: 'devicon-css3-plain colored' },
    { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
    { name: 'Python', icon: 'devicon-python-plain colored' },
    // Frameworks y Librerías
    { name: 'React', icon: 'devicon-react-original colored' },
    { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
    { name: 'Express', icon: 'devicon-express-original' },
    { name: 'Bootstrap', icon: 'devicon-bootstrap-plain colored' },
    { name: 'Flask', icon: 'devicon-flask-original' },
    { name: 'FastAPI', icon: 'devicon-fastapi-plain colored' },
    // Bases de Datos
    { name: 'SQL Server', icon: 'devicon-microsoftsqlserver-plain colored' },
    { name: 'MySQL', icon: 'devicon-mysql-plain colored' },
    { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored' },
    // Herramientas
    { name: 'Git', icon: 'devicon-git-plain colored' },
    { name: 'GitHub', icon: 'devicon-github-original' },
    { name: 'Docker', icon: 'devicon-docker-plain colored' },
    { name: 'VS Code', icon: 'devicon-vscode-plain colored' },
    { name: 'Visual Studio', icon: 'devicon-visualstudio-plain colored' },
    { name: 'Postman', icon: 'devicon-postman-plain colored' },
    { name: 'Azure', icon: 'devicon-azure-plain colored' },
  ];

  const softSkills = [
    { name: 'Empatía', icon: '🤝' },
    { name: 'Trabajo en equipo', icon: '👥' },
    { name: 'Ganas de aprender', icon: '📚' },
    { name: 'Comunicación efectiva', icon: '💬' },
    { name: 'Resolución de problemas', icon: '🧩' },
    { name: 'Pensamiento analítico', icon: '🔍' },
    { name: 'Gestión del tiempo', icon: '⏱️' },
  ];

  return (
    <section id="skills" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5">Aptitudes</h2>

        {/* Habilidades Técnicas con Iconos */}
        <div className="mb-5">
          <h4 className="text-center mb-4">Habilidades Técnicas</h4>
          <div className="tech-icons-grid">
            {technologies.map((tech, i) => (
              <div key={i} className="tech-icon-item">
                <i className={`${tech.icon} tech-icon`}></i>
                <span className="tech-name">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Habilidades Blandas */}
        <div>
          <h4 className="text-center mb-4">Habilidades Blandas</h4>
          <div className="soft-skills-grid">
            {softSkills.map((skill, i) => (
              <div key={i} className="soft-skill-item">
                <span className="soft-skill-icon">{skill.icon}</span>
                <span className="soft-skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;