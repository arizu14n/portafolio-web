import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">Contacto</h2>
        <div className="row">
          <div className="col-md-8 mx-auto text-center">
            <p className="lead">
              Estoy abierto a nuevas oportunidades y colaboraciones. No dudes en contactarme.
            </p>
            <hr />
            <h5>Ariel Zulián</h5>
            <p>Villa del Rosario, Córdoba, Argentina</p>
            <p><strong>Email:</strong> <a href="mailto:azulian093@gmail.com">azulian093@gmail.com</a></p>
            <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/ariel-zulián-0ab22b158" target="_blank" rel="noopener noreferrer">/in/ariel-zulián-0ab22b158</a></p>
            <p><strong>GitHub:</strong> <a href="https://github.com/arizu14n" target="_blank" rel="noopener noreferrer">arizu14n</a></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
