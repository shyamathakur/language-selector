import React from 'react';
import { LanguageProvider } from './LanguageContext';
import About from './About';
import LanguageSelector from './LanguageSelector';

function App() {
  return (
    <div className="App">
      <LanguageProvider>
        <LanguageSelector />
        <About />
      </LanguageProvider>
    </div>
  );
}

export default App;
