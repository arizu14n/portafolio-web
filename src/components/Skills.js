import React from 'react';

const Skills = () => {
  const technicalSkills = [
    { category: 'Lenguajes de Programación', skills: 'HTML5, CSS3, JavaScript, VB.Net, Python' },
    { category: 'Frameworks y Librerías', skills: 'Node.js, Express, Bootstrap, React, Flask, Flutter' },
    { category: 'Bases de Datos', skills: 'SQL Server, MySQL, PostgreSQL' },
    { category: 'Control de Versiones', skills: 'Git, GitHub' },
    { category: 'Herramientas de Desarrollo', skills: 'VS Code, Visual Studio, Android Studio, SSMS, Postman' },
  ];

  const softSkills = [
    'Empatía',
    'Trabajo en equipo',
    'Ganas de aprender',
    'Comunicación efectiva',
    'Resolución de problemas',
    'Pensamiento analítico',
    'Gestión del tiempo',
  ];

  return (
    <section id="skills" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5">Aptitudes</h2>
        <div className="row">
          <div className="col-lg-6">
            <h4 className="text-center mb-4">Habilidades Técnicas</h4>
            {technicalSkills.map((cat, i) => (
              <div key={i} className="mb-3">
                <strong>{cat.category}:</strong>
                <p>{cat.skills}</p>
              </div>
            ))}
          </div>
          <div className="col-lg-6">
            <h4 className="text-center mb-4">Habilidades Blandas</h4>
            <ul className="list-group">
              {softSkills.map((skill, i) => (
                <li key={i} className="list-group-item">{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;