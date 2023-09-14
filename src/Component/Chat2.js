import React from 'react';
// import './App.css';
import { LanguageProvider } from './LanguageContext';
import Home from './Home';
import About from './About';
import LanguageSelector from './LanguageSelector';

function App() {
  return (
    <div className="App">
      <LanguageProvider>
        <LanguageSelector />
        {/* <Home /> */}
        <About />
      </LanguageProvider>
    </div>
  );
}

export default App;
