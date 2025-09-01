import React, { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [isHomeContentFlyingAway, setIsHomeContentFlyingAway] = useState(false);

  return (
    <div className="App">
      <Header setIsHomeContentFlyingAway={setIsHomeContentFlyingAway} />
      <main>
        <Home isHomeContentFlyingAway={isHomeContentFlyingAway} />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;