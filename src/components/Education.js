import React, { useState } from 'react';

const Education = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentPdfUrl, setCurrentPdfUrl] = useState('');

  const educationHistory = [
    {
      title: 'Técnico Superior en Desarrollo de Software',
      institution: 'Instituto Superior Villa del Rosario',
      period: '04/2023 – 11/2025',
      notes: 'Reconocido como Abanderado del Instituto.'
    },
    {
      title: 'Técnico Universitario en Administración',
      institution: 'Instituto Universitario Aeronáutico',
      period: '2019',
      notes: 'Título intermedio de la carrera de Contador Público Nacional.'
    },
    {
      title: 'Contador Público Nacional',
      institution: 'Instituto Universitario Aeronáutico',
      period: '04/2013 – 02/2021',
      notes: null
    }
  ];

  const certifications = [
    { name: 'Desarrollador Web Full Stack PHP', issuer: 'Universidad Nacional de Rosario', pdfUrl: '/certificates/php_fullstack.pdf' },
    { name: 'Desarrollador Web Full Stack NodeJS', issuer: 'Codo a Codo (Gobierno de la Ciudad de Buenos Aires)', pdfUrl: '/certificates/nodejs_fullstack.pdf' },
    { name: 'Desarrollador Python', issuer: 'Academia ItMaster+', pdfUrl: '/certificates/python_dev.pdf' },
    { name: 'Desarrollo Web Responsivo', issuer: 'freeCodeCamp', pdfUrl: '/certificates/responsive_web.pdf' },
    { name: 'Curso de Habilidades Blandas', issuer: 'Codo a Codo (Gobierno de la Ciudad de Buenos Aires)', pdfUrl: '/certificates/soft_skills.pdf' },
  ];

  const handleShowModal = (url) => {
    setCurrentPdfUrl(url);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentPdfUrl('');
  };

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
                <div key={i} className="list-group-item list-group-item-action" onClick={() => handleShowModal(process.env.PUBLIC_URL + cert.pdfUrl)} style={{ cursor: 'pointer' }}>
                  <h6 className="mb-1">{cert.name}</h6>
                  <small className="text-muted">{cert.issuer}</small>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bootstrap Modal for PDF Viewer */}
      {showModal && (
        <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" role="dialog" aria-labelledby="pdfModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-xl" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="pdfModalLabel">Certificado</h5>
                <button type="button" className="btn-close" aria-label="Close" onClick={handleCloseModal}></button>
              </div>
              <div className="modal-body" style={{ height: '80vh' }}>
                {currentPdfUrl && (
                  <iframe src={currentPdfUrl} width="100%" height="100%" title="Certificado PDF"></iframe>
                )}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Cerrar</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Education;
