import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import Navbar from './components/Navbar';
import { theme } from './theme';
import Landing from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </HashRouter>
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals(); 