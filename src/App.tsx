import React, { useState } from 'react';
import './App.css';
import Home from './components/Home';
import AUs from './components/AUs';
import ATs from './components/ATs';
import Multiverse from './components/Multiverse';

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
