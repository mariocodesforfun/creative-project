// src/components/works/ModestProposal.js
import React from 'react';
import '../styles/works.css'; // Import the works-specific CSS
import modest_proposal1 from '../modest_proposal5.jpeg';
import modest_proposal2 from '../modest_proposal6.jpeg';
import modest_proposal3 from '../modest_proposal2.jpeg';
import modest_proposal7 from '../modest_proposal7.jpeg';
import modest_proposal8 from '../modest_proposal8.jpeg';

function ModestProposal() {
      return (
          <section id="modest-proposal" className="work-section">
            <h2>A Modest Proposal</h2>
            <p style={{textAlign: 'center'}}>
            Jonathan Swift's A Modest Proposal is a satirical piece that critiques the British exploitation of the Irish people.
            </p>

      <div className="work-content">
        <div className="work-image">
          <img src={modest_proposal1} alt="Industrial power and working class suffering" />
          <p className="work-image-text" >
            "But my intention is very far from being confined to provide
            only for the children of professed beggars: it is of a much greater extent,
            and shall take in the whole number of infants at a certain age,
            who are born of parents in effect as little able to support them,
            as those who demand our charity in the streets"
          </p>
        </div>
        <div className="work-image">
          <img src={modest_proposal3} alt="Historical movements" />
          <p className="work-image-text">
            "A young healthy child well nursed is, at a year old, a most delicious,
            nourishing, and wholesome food, whether stewed, roasted, baked, or boiled..."
          </p>
        </div>
        <div className="work-image">
          <img src={modest_proposal8} alt="Modern resistance movements" />
          <p className="work-image-text">
            "I have been assured by a principal gentleman of my acquaintance in the city of Dublin,
            that a young healthy child well nursed is at a year old a most delicious,
            nourishing, and wholesome food, whether stewed, roasted, baked, or boiled;
            and I make no doubt that it will equally serve in a fricassee or a ragout."
          </p>
        </div>
      </div>

      <div className="work-links">
        <a href="https://en.wikipedia.org/wiki/A_Modest_Proposal" target="_blank" rel="noopener noreferrer">
          Learn more about *A Modest Proposal*
        </a>
      </div>
    </section>
  );
}

export default ModestProposal;
