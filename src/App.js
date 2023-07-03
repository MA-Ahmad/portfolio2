import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import About from './pages/About';
import Articles from './pages/Articles';
import OpenSource from './pages/OpenSource';
import Projects from './pages/Projects';
import Layout from './layout/MainLayout';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<About />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/open-source" element={<OpenSource />} />
          <Route path="/projects" element={<Projects />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
