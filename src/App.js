import React from 'react';
import { Route, Routes } from 'react-router-dom';  // No need to import HashRouter here
import Header from './components/Header';
import Resume from './components/Resume';
import ModestProposal from './components/ModestProposal';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/modest-proposal" element={<ModestProposal />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
