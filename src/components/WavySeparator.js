import React, { useEffect, useRef, useState } from 'react';
import '../App.css';

const WavySeparator = () => {
  const autoScrollTimerRef = useRef(null);
  const redDotAnimRef = useRef(null);
  const blackDotAnimRef = useRef(null);

  const [isHovered, setIsHovered] = useState(false);

  const handleScrollToAbout = () => {
    if (autoScrollTimerRef.current) {
      clearTimeout(autoScrollTimerRef.current);
      autoScrollTimerRef.current = null;
    }
    // Stop dot animations if they are running
    if (redDotAnimRef.current) redDotAnimRef.current.endElement();
    if (blackDotAnimRef.current) blackDotAnimRef.current.endElement();

    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Effect to control animations and timer based on hover state
  useEffect(() => {
    if (isHovered) {
      // Start dot animations
      if (redDotAnimRef.current) redDotAnimRef.current.beginElement();
      if (blackDotAnimRef.current) blackDotAnimRef.current.beginElement();

      // Set a timer for auto-scroll
      autoScrollTimerRef.current = setTimeout(() => {
        handleScrollToAbout();
      }, 10000); // 10 seconds for the dots to "race"
    } else {
      // Ensure animations are stopped and timer cleared when not hovered
      if (redDotAnimRef.current) redDotAnimRef.current.endElement();
      if (blackDotAnimRef.current) blackDotAnimRef.current.endElement();
      if (autoScrollTimerRef.current) {
        clearTimeout(autoScrollTimerRef.current);
        autoScrollTimerRef.current = null;
      }
    }

    // Cleanup function: clear timer and stop animations if component unmounts or hover state changes
    return () => {
      if (autoScrollTimerRef.current) {
        clearTimeout(autoScrollTimerRef.current);
      }
      if (redDotAnimRef.current) redDotAnimRef.current.endElement();
      if (blackDotAnimRef.current) blackDotAnimRef.current.endElement();
    };
  }, [isHovered]); // Re-run effect when isHovered changes

  const motionPath = "M0,70 C200,10 400,100 600,70 S800,0 1000,70";

  return (
    <div
      className="wavy-separator-container"
      onMouseEnter={() => setIsHovered(true)} // Set hovered to true on mouse enter
      onMouseLeave={() => setIsHovered(false)} // Set hovered to false on mouse leave
    >
      <div className="wavy-figure">
        <svg viewBox="0 0 1000 100" preserveAspectRatio="none">
          {/* Gradiente para la onda */}
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f8f9fa" />
              <stop offset="50%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#f8f9fa" />
            </linearGradient>
            {/* Glow effect para los dots */}
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Wave fill with gradient */}
          <path d="M0,70 C200,10 400,100 600,70 S800,0 1000,70 V100 H0 Z" fill="url(#waveGradient)"></path>

          {/* Línea de borde sutil en la onda */}
          <path d="M0,70 C200,10 400,100 600,70 S800,0 1000,70" fill="none" stroke="rgba(230, 57, 70, 0.3)" strokeWidth="2"></path>

          {/* Motion path for the dots (hidden) */}
          <path id="motionPath" d={motionPath} fill="none" stroke="none" />

          {/* Red Dot with glow */}
          <circle cx="0" cy="0" r="10" fill="#E63946" filter="url(#glow)">
            <animateMotion
              ref={redDotAnimRef}
              dur="8s"
              repeatCount="indefinite"
              keyPoints="0;1"
              keyTimes="0;1"
              calcMode="linear"
              begin="indefinite"
            >
              <mpath xlinkHref="#motionPath" />
            </animateMotion>
          </circle>

          {/* White Dot with dark border */}
          <circle cx="0" cy="0" r="8" fill="white" stroke="#343a40" strokeWidth="2">
            <animateMotion
              ref={blackDotAnimRef}
              dur="10s"
              repeatCount="indefinite"
              keyPoints="0;1"
              keyTimes="0;1"
              calcMode="linear"
              begin="indefinite"
            >
              <mpath xlinkHref="#motionPath" />
            </animateMotion>
          </circle>
        </svg>
      </div>

      <div className="wavy-hover-effect" onClick={handleScrollToAbout}>
        <svg viewBox="0 0 1000 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="hoverGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#c62836" />
              <stop offset="50%" stopColor="#E63946" />
              <stop offset="100%" stopColor="#c62836" />
            </linearGradient>
          </defs>
          <path d="M0,70 C200,10 400,100 600,70 S800,0 1000,70 V100 H0 Z" fill="url(#hoverGradient)"></path>
        </svg>
        <div className="wavy-text-content">
          <span className="arrow-down pulse-animation">&#x2193;</span>
          <span className="wavy-cta-text">Abajo se pone más interesante. ¡Haz Click!</span>
          <span className="arrow-down pulse-animation">&#x2193;</span>
        </div>
      </div>
    </div>
  );
};

export default WavySeparator;