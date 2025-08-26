import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Sobre Mí</h2>
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <p className="lead">
              Profesional con 10+ años de experiencia en administración de empresas, actualmente en transición de carrera hacia el desarrollo de software. Apasionado por el aprendizaje continuo y la aplicación de conocimientos en la creación de aplicaciones funcionales que resuelvan problemas reales.
            </p>
            <hr className="my-4" />
            <p>Villa del Rosario, Córdoba, Argentina</p>
            <p>
              <a href="mailto:azulian093@gmail.com" className="btn btn-outline-dark me-2">Email</a>
              <a href="https://www.linkedin.com/in/ariel-zulián-0ab22b158" target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark me-2">LinkedIn</a>
              <a href="https://github.com/arizu14n" target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark">GitHub</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;