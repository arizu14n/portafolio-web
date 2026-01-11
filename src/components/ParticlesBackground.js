import React, { useEffect, useRef } from 'react';

const ParticlesBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let particles = [];

        // Símbolos de código para mostrar
        const codeSymbols = ['{', '}', '<', '>', ';', '//', '()', '[]', '/*', '*/', '=', '=>', '&&', '||'];

        const resizeCanvas = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Particle class
        class Particle {
            constructor() {
                this.reset();
            }

            reset() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.speedX = (Math.random() - 0.5) * 0.33;
                this.speedY = (Math.random() - 0.5) * 0.33;
                this.opacity = Math.random() * 0.4 + 0.1;

                // Decidir si es un punto o un símbolo
                this.isSymbol = Math.random() > 0.6; // 40% son símbolos

                if (this.isSymbol) {
                    this.symbol = codeSymbols[Math.floor(Math.random() * codeSymbols.length)];
                    this.size = Math.random() * 10 + 12; // Tamaño de fuente 12-22px
                    this.isRed = Math.random() > 0.5;
                } else {
                    this.size = Math.random() * 3 + 1;
                    this.isRed = Math.random() > 0.7;
                }
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                // Wrap around edges
                if (this.x < 0) this.x = canvas.width;
                if (this.x > canvas.width) this.x = 0;
                if (this.y < 0) this.y = canvas.height;
                if (this.y > canvas.height) this.y = 0;

                // Subtle opacity pulsing
                this.opacity += (Math.random() - 0.5) * 0.01;
                this.opacity = Math.max(0.05, Math.min(0.5, this.opacity));
            }

            draw() {
                if (this.isSymbol) {
                    // Dibujar símbolo de código
                    ctx.font = `${this.size}px 'Courier New', monospace`;
                    if (this.isRed) {
                        ctx.fillStyle = `rgba(230, 57, 70, ${this.opacity})`;
                    } else {
                        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity * 0.7})`;
                    }
                    ctx.fillText(this.symbol, this.x, this.y);
                } else {
                    // Dibujar punto
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                    if (this.isRed) {
                        ctx.fillStyle = `rgba(230, 57, 70, ${this.opacity})`;
                    } else {
                        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
                    }
                    ctx.fill();
                }
            }
        }

        // Create particles
        const particleCount = 60;
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        // Animation loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });

            // Draw connecting lines between nearby dot particles only
            const dotParticles = particles.filter(p => !p.isSymbol);
            dotParticles.forEach((p1, i) => {
                dotParticles.slice(i + 1).forEach(p2 => {
                    const dx = p1.x - p2.x;
                    const dy = p1.y - p2.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 80) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(255, 255, 255, ${0.08 * (1 - distance / 80)})`;
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                });
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 1,
            }}
        />
    );
};

export default ParticlesBackground;
