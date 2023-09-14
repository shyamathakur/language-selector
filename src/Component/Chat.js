import React from 'react';
import { LanguageProvider } from './LanguageContext';
import Home from './Home';
import LanguageSelector from './LanguageSelector';

function App() {
  return (
    <div className="App">
      <LanguageProvider>
        <LanguageSelector />
        <Home />
      </LanguageProvider>
    </div>
  );
}

export default App;
