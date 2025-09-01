import React, { useState, useEffect } from 'react';
import '../App.css'; // Importa estilos generales si es necesario
import WavySeparator from './WavySeparator'; // Import the WavySeparator component

const Home = ({ isHomeContentFlyingAway }) => {
  const name = "ARRIEL ZULIÁN";
  const [typedName, setTypedName] = useState('');
  const [showCursorName, setShowCursorName] = useState(true);

  const phrase = "Desarrollador de Software";
  const [animationStep, setAnimationStep] = useState(0);
  const [typedCode, setTypedCode] = useState('');
  const [currentPhraseStyle, setCurrentPhraseStyle] = useState({});

  const leadPhrase = "Apasionado por el aprendizaje continuo y la creación de aplicaciones funcionales.";
  const leadWords = leadPhrase.split(' '); // Split into words

  const [currentLeadWordIndex, setCurrentLeadWordIndex] = useState(0);
  const [currentWordAnimationStep, setCurrentWordAnimationStep] = useState(0); // 0: initial, 1: red, 2: white, 3: shadow
  const [logoAnimationReady, setLogoAnimationReady] = useState(false);

  // Efecto de tipeo para el Nombre
  useEffect(() => {
    let i = 0;
    let typingTimeoutId; // ID para el setTimeout recursivo
    let cursorIntervalId; // ID para el setInterval del cursor

    const typeCharacter = () => {
      if (i < name.length) {
        setTypedName(prev => prev + name.charAt(i));
        i++;
        typingTimeoutId = setTimeout(typeCharacter, 100); // Almacenar ID
      } else {
        // Tipeo terminado
        let blinkCount = 0;
        const maxBlinks = 4; // 2 parpadeos completos (4 cambios de estado: true, false, true, false)
        cursorIntervalId = setInterval(() => {
          setShowCursorName(prev => !prev);
          blinkCount++;
          if (blinkCount >= maxBlinks) {
            clearInterval(cursorIntervalId);
            setShowCursorName(false); // Asegurarse de que esté oculto
            setTimeout(() => setAnimationStep(1), 1000); // Mover al siguiente paso después de que el cursor desaparezca
          }
        }, 500);
      }
    };

    typeCharacter(); // Iniciar el tipeo inmediatamente

    return () => {
      // Función de limpieza: se ejecuta cuando el componente se desmonta o el efecto se re-ejecuta
      clearTimeout(typingTimeoutId); // Limpiar cualquier setTimeout pendiente
      clearInterval(cursorIntervalId); // Limpiar el setInterval del cursor
    };
  }, []);

  // Animación para la Frase
  useEffect(() => {
    let stepTimeoutId;
    let typingIntervalId; // For the typing effect

    if (animationStep === 1) {
      let currentTypedText = '';
      let charIndex = 0;

      setTypedCode(''); // Clear previous typed content
      setCurrentPhraseStyle({}); // Ensure no style is applied initially

      const typeNextCharacter = () => {
        if (charIndex < phrase.length) {
          currentTypedText += phrase.charAt(charIndex);
          setTypedCode(currentTypedText);
          charIndex++;
          typingIntervalId = setTimeout(typeNextCharacter, 50);
        } else {
          stepTimeoutId = setTimeout(() => setAnimationStep(2), 1500);
        }
      };
      typeNextCharacter(); // Start typing
    } else if (animationStep === 2) {
      setCurrentPhraseStyle({ color: '#E63946' });
      stepTimeoutId = setTimeout(() => setAnimationStep(3), 1500);
    } else if (animationStep === 3) {
      setCurrentPhraseStyle({ color: '#E63946', textShadow: '2px 2px #1E1E1E' });
      stepTimeoutId = setTimeout(() => setAnimationStep(4), 1500);
    } else if (animationStep === 4) {
      setCurrentPhraseStyle({ color: '#E63946', textShadow: '2px 2px #1E1E1E' });
      // No further steps, animation ends here or loops if desired
    }

    return () => {
      clearTimeout(stepTimeoutId);
      clearTimeout(typingIntervalId); // Clean up typing timeout
    };
  }, [animationStep, phrase]); // Add phrase to dependencies

  useEffect(() => {
    let wordAnimationTimeout;

    if (animationStep === 4) { // Start this animation after the first one finishes
      if (currentLeadWordIndex < leadWords.length) {
        if (currentWordAnimationStep === 0) { // Initial state for the word
          wordAnimationTimeout = setTimeout(() => setCurrentWordAnimationStep(1), 50);
        } else if (currentWordAnimationStep === 1) { // Red
          wordAnimationTimeout = setTimeout(() => setCurrentWordAnimationStep(2), 50);
        } else if (currentWordAnimationStep === 2) { // White
          wordAnimationTimeout = setTimeout(() => setCurrentWordAnimationStep(3), 50);
        } else if (currentWordAnimationStep === 3) { // Shadow
          wordAnimationTimeout = setTimeout(() => {
            setCurrentWordAnimationStep(0);
            setCurrentLeadWordIndex(prevIndex => prevIndex + 1);
          }, 50);
        }
      } else {
        // All words animated, trigger logo animation
        setTimeout(() => setLogoAnimationReady(true), 500); // Short delay before starting
      }
    }

    return () => {
      clearTimeout(wordAnimationTimeout);
    };
  }, [animationStep, currentLeadWordIndex, currentWordAnimationStep, leadWords.length]);

  return (
    <section id="home" className="d-flex align-items-center justify-content-center text-center" style={{ minHeight: '100vh', backgroundColor: '#343a40', color: 'white' }}>
      <div className={isHomeContentFlyingAway ? 'fly-away' : ''}> {/* Apply fly-away class conditionally */}
        <div className={`logo-container ${logoAnimationReady ? 'run-animation' : ''}`}>
          <img src={process.env.PUBLIC_URL + '/logo_piramide_codigo.svg'} alt="Logo AZ" width="200" height="200" className="d-block" />
        </div>
        <h1 style={{ textShadow: '2px 2px #1E1E1E' }}>
          {typedName}
          {showCursorName && <span className="blinking-cursor">|</span>}
        </h1>
        {/* Muestra la frase con el estilo animado */}
        {animationStep === 1 && (
          <h2>{typedCode}</h2>
        )}
        {animationStep > 1 && (
          <h2 style={currentPhraseStyle}>{phrase}</h2>
        )} 
        {animationStep >= 4 && (
          <p className="lead">
            {leadWords.map((word, index) => {
              let wordStyle = {};
              if (index < currentLeadWordIndex) {
                // Word has already been animated, show in final state
                wordStyle = { color: 'white', textShadow: '2px 2px #1E1E1E' };
              } else if (index === currentLeadWordIndex) {
                // Current word being animated
                if (currentWordAnimationStep === 1) {
                  wordStyle = { color: '#E63946' }; // Red
                } else if (currentWordAnimationStep === 2) {
                  wordStyle = { color: 'white' }; // White
                } else if (currentWordAnimationStep === 3) {
                  wordStyle = { color: 'white', textShadow: '2px 2px #1E1E1E' }; // Shadow
                }
              } else {
                // Word not yet animated, keep it transparent or hidden
                wordStyle = { opacity: 0 }; // Or display: 'none'
              }
              return (
                <span key={index} style={wordStyle}>
                  {word}{' '}
                </span>
              );
            })}
          </p>
        )}
      </div>
          <WavySeparator /> {/* Render the WavySeparator here */}
    </section>
  );
};

export default Home;