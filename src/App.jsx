import React from 'react';
import {HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Team from './pages/Team';
import Events from './pages/Events';
import Inventory from './pages/Inventory';
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';
import Footer from './components/Footer';
import Workshops from './pages/Workshops';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './Globalstyle';
import "./index.css"

const App = () => {
  const theme = {
    colors: {
      heading: '#001824',
      text_heading: '#6C10C6',
      nav_color: '#484848',
      white: '#fff',
      gradient: 'radial-gradient(40.83% 40.83% at 50% 50%, rgba(108, 16, 198, 0.5) 0%, rgba(186, 104, 200, 0) 100%) ',
      media: { mobile: '768px', tab: '1127px' }
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <HashRouter >
        <Navbar />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="team" element={<Team />} />
          <Route path="events" element={<Events />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="workshops" element={<Workshops />} />
        </Routes>
        <Footer />
      </HashRouter>
    </ThemeProvider>
  );
};

export default App;
