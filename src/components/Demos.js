import React, { useState } from 'react';

const Demos = () => {
    const [selectedDemo, setSelectedDemo] = useState(null);

    const demos = [
        {
            id: 1,
            name: 'ERP Comercio PYM',
            category: 'Sistema de Gestión Comercial',
            description: 'Software de gestión integral para comercios enfocados en venta al público. Diseñado para PyMEs que necesitan control total de su operación.',
            features: [
                'Multiusuario con vistas según roles',
                'Control de stock con alertas de mínimo e inmovilizados',
                'Listas de precios, ofertas y combos/kits',
                'Facturación AFIP e interna',
                'Presupuestos y cuentas corrientes',
                'Control de caja y tablero de control'
            ],
            technologies: ['React', 'FastAPI', 'PostgreSQL', 'Docker'],
            youtubeId: '', // Placeholder - agregar ID del video de YouTube
            thumbnail: 'https://img.youtube.com/vi/YOUTUBE_ID/maxresdefault.jpg'
        },
        {
            id: 2,
            name: 'ERP Talleres y Venta Repuestos',
            category: 'Sistema de Gestión para Talleres',
            description: 'Software especializado para talleres de reparación de vehículos con gestión de stock propio y venta de repuestos.',
            features: [
                'Multiusuario con vistas según roles',
                'Stock real/disponible con pedidos automáticos',
                'Órdenes de reparación completas',
                'Facturación AFIP e interna',
                'Presupuestos y cuentas corrientes',
                'Control de caja y tablero de control'
            ],
            technologies: ['React', 'FastAPI', 'SQL Server', 'Azure', 'Docker'],
            youtubeId: '', // Placeholder - agregar ID del video de YouTube
            thumbnail: 'https://img.youtube.com/vi/YOUTUBE_ID/maxresdefault.jpg'
        },
        {
            id: 3,
            name: 'Plug-in Acopio',
            category: 'Extensión de Software Legacy',
            description: 'Plug-in que potencia el software BETTER (VFP9) para acopios de cereales, agregando funcionalidades críticas que el sistema original no posee.',
            features: [
                'Emisión de Carta de Porte Electrónica',
                'Liquidación Secundaria de Granos',
                'Dashboard de gestión con cards',
                'Agenda sincronizada con Google Sheets',
                'Control de fletes y combustible',
                'Pedidos de cupos por WhatsApp'
            ],
            technologies: ['Python', 'Flask', 'PostgreSQL', 'Docker', 'HTML/CSS/JS'],
            youtubeId: '', // Placeholder - agregar ID del video de YouTube
            thumbnail: 'https://img.youtube.com/vi/YOUTUBE_ID/maxresdefault.jpg'
        }
    ];

    const openModal = (demo) => {
        setSelectedDemo(demo);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedDemo(null);
        document.body.style.overflow = 'auto';
    };

    const handleBackdropClick = (e) => {
        if (e.target.classList.contains('demo-modal-backdrop')) {
            closeModal();
        }
    };

    return (
        <section id="demos" className="py-5 bg-light">
            <div className="container">
                <h2 className="text-center mb-3">Demos de Proyectos</h2>
                <p className="text-center text-muted mb-5">
                    Proyectos privados en producción. Videos demostrativos de las funcionalidades principales.
                </p>

                <div className="row">
                    {demos.map((demo) => (
                        <div key={demo.id} className="col-lg-4 col-md-6 mb-4">
                            <div className="card demo-card h-100">
                                <div className="demo-card-header">
                                    <span className="demo-category-badge">{demo.category}</span>
                                    <h4 className="demo-card-title">{demo.name}</h4>
                                </div>
                                <div className="card-body d-flex flex-column">
                                    <p className="demo-description">{demo.description}</p>

                                    <div className="demo-features mb-3">
                                        <h6 className="demo-features-title">Características principales:</h6>
                                        <ul className="demo-features-list">
                                            {demo.features.slice(0, 4).map((feature, i) => (
                                                <li key={i}>{feature}</li>
                                            ))}
                                            {demo.features.length > 4 && (
                                                <li className="text-muted">+{demo.features.length - 4} más...</li>
                                            )}
                                        </ul>
                                    </div>

                                    <div className="demo-technologies mt-auto mb-3">
                                        {demo.technologies.map((tech, i) => (
                                            <span key={i} className="demo-tech-badge">{tech}</span>
                                        ))}
                                    </div>

                                    <button
                                        className="btn btn-demo-watch"
                                        onClick={() => openModal(demo)}
                                        disabled={!demo.youtubeId}
                                    >
                                        {demo.youtubeId ? (
                                            <>
                                                <span className="play-icon">▶</span> Ver Demo
                                            </>
                                        ) : (
                                            <>
                                                <span className="coming-soon-icon">🎬</span> Próximamente
                                            </>
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal para reproducir video */}
            {selectedDemo && (
                <div className="demo-modal-backdrop" onClick={handleBackdropClick}>
                    <div className="demo-modal">
                        <button className="demo-modal-close" onClick={closeModal}>×</button>
                        <div className="demo-modal-header">
                            <h3>{selectedDemo.name}</h3>
                            <span className="demo-category-badge">{selectedDemo.category}</span>
                        </div>
                        <div className="demo-modal-video">
                            {selectedDemo.youtubeId ? (
                                <iframe
                                    src={`https://www.youtube.com/embed/${selectedDemo.youtubeId}?autoplay=1`}
                                    title={selectedDemo.name}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            ) : (
                                <div className="demo-video-placeholder">
                                    <p>Video próximamente disponible</p>
                                </div>
                            )}
                        </div>
                        <div className="demo-modal-body">
                            <p>{selectedDemo.description}</p>
                            <h6>Todas las características:</h6>
                            <ul>
                                {selectedDemo.features.map((feature, i) => (
                                    <li key={i}>{feature}</li>
                                ))}
                            </ul>
                            <div className="demo-technologies">
                                {selectedDemo.technologies.map((tech, i) => (
                                    <span key={i} className="demo-tech-badge">{tech}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Demos;
