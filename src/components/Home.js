// src/Home.js
import React, { useState, useEffect } from 'react';
import '../styles/Home.css';


function Home() {
  const sentences = [
    'Resistance then and now',
    'Resistance through literature',
  ];

  const [displayedText, setDisplayedText] = useState('');
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);

  useEffect(() => {
    if (letterIndex < sentences[sentenceIndex].length) {
      const typingInterval = setInterval(() => {
        setDisplayedText((prev) => prev + sentences[sentenceIndex][letterIndex]);
        setLetterIndex((prev) => prev + 1);
      }, 100);

      return () => clearInterval(typingInterval);
    } else {
      const pauseInterval = setTimeout(() => {
        setDisplayedText('');
        setLetterIndex(0);
        setSentenceIndex((prev) => (prev + 1) % sentences.length);
      }, 2000);

      return () => clearTimeout(pauseInterval);
    }
  }, [letterIndex, sentenceIndex]);

  return (
    <div>
      <section className="hero-section">
        <div className="hero-content">
          <h1>RESISTANCE</h1>
          <h2 className="typing-text">{displayedText}</h2>
        </div>
      </section>

      <section className="about-section">
        <div className="about-text">
          <h2>Resistance</h2>
          <p>This project focuses on:</p>
          <ul>
            <li>Great works of literature that explore resistance</li>
            <li>Connecting historical resistance with modern resistance</li>
            <li>Offering images that represent resistance in both past and present</li>
            <li>Exploring the ongoing relevance of resistance in society today</li>
          </ul>
        </div>
        <div className="about-links">
          <h2>Navigate</h2>
          <ul>
            <li><a href="#modest-proposal">A Modest Proposal</a></li>
            <li>The Wretched of the Earth</li>
            <li>The Confessions of Nat Turner</li>
            <li>Bartleby, the Scrivener</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Home;
