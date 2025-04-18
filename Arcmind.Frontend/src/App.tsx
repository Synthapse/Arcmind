import React from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from './theme';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </HashRouter>
    </ThemeProvider>
  );
};

const Landing = () => {
  return (
    <>
      <Hero />
      <Features />
      <Footer />
    </>
  )
}

export default App; 