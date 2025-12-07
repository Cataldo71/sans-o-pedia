import React, { useState } from 'react';
import './App.css';
import Home from './components/Home';
import AUs from './components/AUs';
import ATs from './components/ATs';
import Multiverse from './components/Multiverse';
import Interpretations from './components/Interpretations';
import CrossAUIncidents from './components/CrossAUIncidents';
import BlendingUniverses from './components/BlendingUniverses';
import Locations from './components/Locations';

type Section = 'home' | 'locations' | 'aus' | 'ats' | 'cross' | 'blend' | 'multiverse' | 'interpretations';

function App() {
  const [currentSection, setCurrentSection] = useState<Section>('home');

  const renderSection = () => {
    switch (currentSection) {
      case 'home':
        return <Home />;
      case 'locations':
        return <Locations />;
      case 'aus':
        return <AUs />;
      case 'ats':
        return <ATs />;
      case 'cross':
        return <CrossAUIncidents />;
      case 'blend':
        return <BlendingUniverses />;
      case 'multiverse':
        return <Multiverse />;
      case 'interpretations':
        return <Interpretations />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="App">
      <header className="app-header">
        <h1 className="site-title">UNDERTALE MULTIVERSE</h1>
      </header>
      <div className="layout">
        <aside className="sidebar">
          <nav className="side-nav">
            <button
              className={currentSection === 'home' ? 'side-nav-button active' : 'side-nav-button'}
              onClick={() => setCurrentSection('home')}
            >
              Home
            </button>
            <button
              className={currentSection === 'locations' ? 'side-nav-button active' : 'side-nav-button'}
              onClick={() => setCurrentSection('locations')}
            >
              Locations
            </button>
            <button
              className={currentSection === 'aus' ? 'side-nav-button active' : 'side-nav-button'}
              onClick={() => setCurrentSection('aus')}
            >
              AUs
            </button>
            <button
              className={currentSection === 'ats' ? 'side-nav-button active' : 'side-nav-button'}
              onClick={() => setCurrentSection('ats')}
            >
              ATs
            </button>
            <button
              className={currentSection === 'cross' ? 'side-nav-button active' : 'side-nav-button'}
              onClick={() => setCurrentSection('cross')}
            >
              Cross-AU Incidents
            </button>
            <button
              className={currentSection === 'blend' ? 'side-nav-button active' : 'side-nav-button'}
              onClick={() => setCurrentSection('blend')}
            >
              Blending Universes
            </button>
            <button
              className={currentSection === 'multiverse' ? 'side-nav-button active' : 'side-nav-button'}
              onClick={() => setCurrentSection('multiverse')}
            >
              Multiverse
            </button>
            <button
              className={currentSection === 'interpretations' ? 'side-nav-button active' : 'side-nav-button'}
              onClick={() => setCurrentSection('interpretations')}
            >
              Interpretations
            </button>
          </nav>
        </aside>
        <main className="content">
          {renderSection()}
        </main>
      </div>
      <footer className="footer">
        <p>★ Made with DETERMINATION ★</p>
      </footer>
    </div>
  );
}

export default App;
