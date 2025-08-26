import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-4 bg-dark text-white text-center">
      <div className="container">
        <p className="mb-0">Copyright &copy; {currentYear} Ariel Zulián. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;