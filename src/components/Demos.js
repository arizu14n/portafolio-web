import React, { useState } from 'react';

const Demos = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);

    const demos = [
        {
            id: 4,
            name: 'ERP Librería Artística',
            category: 'Sistema de Gestión Simplificado',
            description: 'ERP simplificado para una librería artística con interfaz moderna y estética cuidada. Base de datos diseñada para soportar una futura implementación de e-commerce y facturación electrónica AFIP.',
            features: [
                'Interfaz moderna con Tailwind CSS',
                'Kardex mostrador para consultas por ID',
                'Gestión de productos y categorías',
                'Control de stock y movimientos',
                'Preparado para e-commerce futuro',
                'Preparado para facturación electrónica AFIP'
            ],
            technologies: ['Python', 'FastAPI', 'React Vite', 'PostgreSQL', 'Docker'],
            videos: [
                { name: 'Demo General', youtubeId: '-JD2JTDUTEE' }
            ]
        },
        {
            id: 1,
            name: 'ERP Comercio PyME',
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
            videos: [
                { name: 'Modo Vendedor', youtubeId: '2z4x9s_GY5M' },
                { name: 'Modo Supervisor', youtubeId: '10dPiKCUUCA' }
            ]
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
            videos: [
                { name: 'Demo General', youtubeId: 'xjJjA4WSCiU' }
            ]
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
            videos: [
                { name: 'Demo General', youtubeId: 'MyZ_JW0Cjmo' }
            ]
        }
    ];

    const openModal = (demo, video) => {
        setSelectedVideo({ demo, video });
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedVideo(null);
        document.body.style.overflow = 'auto';
    };

    const handleBackdropClick = (e) => {
        if (e.target.classList.contains('demo-modal-backdrop')) {
            closeModal();
        }
    };

    // Verifica si el proyecto tiene al menos un video disponible
    const hasAvailableVideos = (demo) => {
        return demo.videos && demo.videos.some(v => v.youtubeId);
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

                                    {/* Botones de video */}
                                    <div className="demo-video-buttons">
                                        {hasAvailableVideos(demo) ? (
                                            demo.videos.map((video, i) => (
                                                <button
                                                    key={i}
                                                    className={`btn btn-demo-watch ${!video.youtubeId ? 'btn-demo-disabled' : ''}`}
                                                    onClick={() => openModal(demo, video)}
                                                    disabled={!video.youtubeId}
                                                >
                                                    {video.youtubeId ? (
                                                        <>
                                                            <span className="play-icon">▶</span> {video.name}
                                                        </>
                                                    ) : (
                                                        <>
                                                            <span className="coming-soon-icon">🎬</span> {video.name}
                                                        </>
                                                    )}
                                                </button>
                                            ))
                                        ) : (
                                            <button className="btn btn-demo-watch btn-demo-disabled" disabled>
                                                <span className="coming-soon-icon">🎬</span> Próximamente
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal para reproducir video */}
            {selectedVideo && (
                <div className="demo-modal-backdrop" onClick={handleBackdropClick}>
                    <div className="demo-modal">
                        <button className="demo-modal-close" onClick={closeModal}>×</button>
                        <div className="demo-modal-header">
                            <h3>{selectedVideo.demo.name} - {selectedVideo.video.name}</h3>
                            <span className="demo-category-badge">{selectedVideo.demo.category}</span>
                        </div>
                        <div className="demo-modal-video">
                            {selectedVideo.video.youtubeId ? (
                                <iframe
                                    src={`https://www.youtube.com/embed/${selectedVideo.video.youtubeId}?autoplay=1`}
                                    title={`${selectedVideo.demo.name} - ${selectedVideo.video.name}`}
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
                            <p>{selectedVideo.demo.description}</p>
                            <h6>Todas las características:</h6>
                            <ul>
                                {selectedVideo.demo.features.map((feature, i) => (
                                    <li key={i}>{feature}</li>
                                ))}
                            </ul>
                            <div className="demo-technologies">
                                {selectedVideo.demo.technologies.map((tech, i) => (
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
