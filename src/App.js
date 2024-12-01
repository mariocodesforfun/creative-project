import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Resume from './components/Resume';
import ModestProposal from './components/ModestProposal';

import Home from './components/Home';
import Footer
 from './components/Footer';
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="resume" element={<Resume />} />
        <Route path="/modest-proposal" element={<ModestProposal />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
