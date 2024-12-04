import React from 'react';
import { Route, Routes } from 'react-router-dom';  // No need to import HashRouter here
import Header from './components/Header';
import Resume from './components/Resume';
import ModestProposal from './components/ModestProposal';
import Home from './components/Home';
import Footer from './components/Footer';
import Bartleby from './components/bartelby';
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/modest-proposal" element={<ModestProposal />} />
        <Route path="/bartleby" element={<Bartleby />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
