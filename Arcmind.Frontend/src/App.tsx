import React from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
import ReadingMotivationSelector from './components/ReadingMotivationSelector';
import PracticalNeeds from './components/PracticalNeeds';
import ReadingArchetypes from './components/ReadingArchetypes';

const Landing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Features />
      <ReadingArchetypes />
      <ReadingMotivationSelector />
      <Footer />
    </div>
  )
}

const App = () => {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <HashRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/practical-needs" element={<PracticalNeeds />} />
          </Routes>
        </main>
      </HashRouter>
    </div>
  );
};

export default App; 