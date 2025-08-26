import React from 'react';

const Education = () => {
  const educationHistory = [
    {
      title: 'Técnico Superior en Desarrollo de Software',
      institution: 'Instituto Superior Villa del Rosario',
      period: '04/2023 – Presente',
      notes: 'Reconocido como Abanderado del Instituto.'
    },
    {
      title: 'Contador Público Nacional',
      institution: 'Instituto Universitario Aeronáutico',
      period: '04/2013 – 02/2021',
      notes: null
    }
  ];

  const certifications = [
      { name: 'Desarrollador Web Full Stack PHP', issuer: 'Universidad Nacional de Rosario' },
      { name: 'Desarrollador Web Full Stack NodeJS', issuer: 'Codo a Codo (Gobierno de la Ciudad de Buenos Aires)' },
      { name: 'Desarrollador Python', issuer: 'Academia ItMaster+' },
      { name: 'Desarrollo Web Responsivo', issuer: 'freeCodeCamp' },
      { name: 'Curso de Habilidades Blandas', issuer: 'Codo a Codo (Gobierno de la Ciudad de Buenos Aires)' },
  ];

  return (
    <section id="education" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5">Educación y Certificaciones</h2>
        <div className="row">
          <div className="col-md-6">
            <h4 className="text-center mb-4">Formación Académica</h4>
            {educationHistory.map((edu, i) => (
              <div key={i} className="card mb-3">
                <div className="card-body">
                  <h5 className="card-title">{edu.title}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{edu.institution}</h6>
                  <p className="card-text"><small>{edu.period}</small></p>
                  {edu.notes && <p className="card-text"><em>{edu.notes}</em></p>}
                </div>
              </div>
            ))}
          </div>
          <div className="col-md-6">
            <h4 className="text-center mb-4">Certificaciones</h4>
            <div className="list-group">
                {certifications.map((cert, i) => (
                    <div key={i} className="list-group-item">
                        <h6 className="mb-1">{cert.name}</h6>
                        <small className="text-muted">{cert.issuer}</small>
                    </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;