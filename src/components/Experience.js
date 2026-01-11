import React from 'react';

const Experience = () => {
  const experiences = [
 {
      role: 'Desarrollador Freelance',
      company: 'AZ - Solutions',
      period: '11/2025 – Presente',
      location: 'Villa del Rosario, Córdoba, Argentina',
      tasks: [
        'Desarrollé 2 sistemas ERP que ya han sido implementados en producción',
        'Desarrollé un ERP genérico para tener de modelo para posibles clientes.',
        'Desarrollé un plug-in para potenciar un software Legacy en mi trabajo de oficina.',
        'Desarrollando un software para operadores de la cadena agrícola.'
      ]
    },
    
    {
      role: 'Pasantía como Desarrollador Junior',
      company: 'GoodApps',
      period: '07/2024 – 07/2025',
      location: 'Villa del Rosario, Córdoba, Argentina',
      tasks: [
        'Desarrollé "features" para varios clientes con sistemas ya implementados.',
        'Formé parte de desarrollos para nuevos clientes.',
        'Aporté conocimientos y experiencias para implementar mejoras en procesos de los sistemas de gestión existentes.'
      ]
    },
    {
      role: 'Administración General',
      company: 'Druetto SRL',
      period: '11/2011 – Presente',
      location: 'Villa del Rosario, Córdoba, Argentina',
      tasks: [
        'Encargado del 100% de los procesos administrativos internos de una empresa que se dedica al acopio de cereales, producción agropecuaria y transporte de cargas generales.',
        'Contacto frecuente con auditores externos, clientes, proveedores y asesores profesionales.'
      ]
    },
    {
      role: 'Administración General',
      company: 'Gallo SA, YPF Jorge Minetti e hijos SRL, y otros',
      period: '10/1995 – 10/2011',
      location: 'Córdoba, Argentina',
      tasks: [
        'Trabajé en empresas tanto comerciales, como productivas y también de servicios.',
        'Colaboré activamente en la sistematización e informatización de procesos.',
        'Realicé tareas de Auditoría Interna, Recursos Humanos, Liquidación de Sueldos e Impuestos.',
        'Realicé tareas correspondientes a Mandos Medios y Supervisión en áreas sensibles.'
      ]
    }
  ];

  return (
    <section id="experience" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5">Experiencia Profesional</h2>
        <div className="row">
          <div className="col-md-10 mx-auto">
            {experiences.map((exp, index) => (
              <div key={index} className="card mb-4 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{exp.role}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{exp.company}</h6>
                  <p className="card-text"><small className="text-muted">{exp.period} | {exp.location}</small></p>
                  <ul>
                    {exp.tasks.map((task, i) => (
                      <li key={i}>{task}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
