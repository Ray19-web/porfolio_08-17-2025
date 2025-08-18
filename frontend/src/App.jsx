import React, { useState } from 'react';
import { Route, Routes } from 'react-router';
import HomePage from './pages/HomePage';
import IntroSplash from './components/IntroSplash';
import AboutPage from './pages/AboutPage';

function App() {
  const [showMain, setShowMain] = useState(false);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {!showMain && <IntroSplash onFinish={() => setShowMain(true)} />}
      {showMain && (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
