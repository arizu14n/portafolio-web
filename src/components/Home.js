import React from 'react';
import '../App.css'; // Importa estilos generales si es necesario

const Home = () => {
  return (
    <section id="home" className="d-flex align-items-center justify-content-center text-center" style={{ minHeight: '100vh', backgroundColor: '#343a40', color: 'white' }}>
      <div>
        <h1>ARIEL ZULIÁN</h1>
        <h2>Desarrollador de Software</h2>
        <p className="lead">Apasionado por el aprendizaje continuo y la creación de aplicaciones funcionales.</p>
      </div>
    </section>
  );
};

export default Home;