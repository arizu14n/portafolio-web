import React from 'react';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#home"><div className="logo-container run-animation" style={{ width: '50px', height: '50px', marginRight: '8px' }}><img src={process.env.PUBLIC_URL + '/logo_piramide_codigo.svg'} alt="Logo AZ" width="50" height="50" className="logo-circular" /></div>Ariel Zulián</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#about">Sobre Mí</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#experience">Experiencia</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">Proyectos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">Habilidades</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#education">Educación</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contacto</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;