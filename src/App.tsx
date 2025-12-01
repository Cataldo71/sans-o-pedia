import React, { useState } from 'react';
import './App.css';
import Home from './components/Home';
import AUs from './components/AUs';
import ATs from './components/ATs';
import Multiverse from './components/Multiverse';
import MainHeader from './assets/main header.jpg';

type Section = 'home' | 'aus' | 'ats' | 'multiverse';

function App() {
  const [currentSection, setCurrentSection] = useState<Section>('home');

  const renderSection = () => {
    switch (currentSection) {
      case 'home':
        return <Home />;
      case 'aus':
        return <AUs />;
      case 'ats':
        return <ATs />;
      case 'multiverse':
        return <Multiverse />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="App">
      <div className="top-banner" role="img" aria-label="Sansopedia site header banner">
        <img src={MainHeader} alt="Sansopedia header banner" className="top-banner-image" />
      </div>
      <nav className="navbar">
        <div className="nav-container">
          <h1 className="nav-title">UNDERTALE MULTIVERSE</h1>
          <div className="nav-buttons">
            <button 
              className={currentSection === 'home' ? 'nav-button active' : 'nav-button'}
              onClick={() => setCurrentSection('home')}
            >
              HOME
            </button>
            <button 
              className={currentSection === 'aus' ? 'nav-button active' : 'nav-button'}
              onClick={() => setCurrentSection('aus')}
            >
              ALTERNATE UNIVERSES
            </button>
            <button 
              className={currentSection === 'ats' ? 'nav-button active' : 'nav-button'}
              onClick={() => setCurrentSection('ats')}
            >
              ALTERNATE TIMELINES
            </button>
            <button
              className={currentSection === 'multiverse' ? 'nav-button active' : 'nav-button'}
              onClick={() => setCurrentSection('multiverse')}
            >
              MULTIVERSE
            </button>
          </div>
        </div>
      </nav>
      <main className="main-content">
        {renderSection()}
      </main>
      <footer className="footer">
        <p>★ Made with DETERMINATION ★</p>
      </footer>
    </div>
  );
}

export default App;
