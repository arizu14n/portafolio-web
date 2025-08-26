import React from 'react';

const Projects = () => {
  const personalProjects = [
    { name: 'Infopeliculas', url: '' },
    { name: 'Templates - AZ', url: '' },
    { name: '4toParcial_ArielZulian', url: '' },
    { name: 'dashboard', url: '' },
  ];

  const collaborativeProjects = [
    { name: 'Delishare', url: '' },
    { name: 'Proyecto-CAC', url: '' },
  ];

  return (
    <section id="projects" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5">Proyectos</h2>
        <div className="row">
          {/* Proyectos Personales */}
          <div className="col-lg-6 mb-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h4 className="card-title text-center">Personales</h4>
                <p className="text-center text-muted">Explora mis repositorios en GitHub.</p>
                <div className="list-group">
                  {personalProjects.map((proj, i) => (
                    <a href={proj.url || '#'} key={i} className="list-group-item list-group-item-action">{proj.name}</a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Proyectos Colaborativos */}
          <div className="col-lg-6 mb-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h4 className="card-title text-center">Colaborativos</h4>
                <p className="text-center text-muted">Proyectos en los que he trabajado en equipo.</p>
                <div className="list-group">
                  {collaborativeProjects.map((proj, i) => (
                    <a href={proj.url || '#'} key={i} className="list-group-item list-group-item-action">{proj.name}</a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
            <p className="lead">Puedes ver más de mi trabajo en mis perfiles de GitHub:</p>
            <a href="https://github.com/arizu14n" className="btn btn-dark me-3" target="_blank" rel="noopener noreferrer">arizu14n</a>
            <a href="https://github.com/arielzulian" className="btn btn-dark" target="_blank" rel="noopener noreferrer">arielzulian</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;