// src/components/works/ModestProposal.js
import React from 'react';
import '../styles/works.css'; // Import the works-specific CSS

function ModestProposal() {
  return (
    <section id="modest-proposal" className="work-section">
      <h2>A Modest Proposal</h2>
      <p>
        Jonathan Swift's *A Modest Proposal* is a satirical work that critiques British exploitation of the Irish people. In this section, we explore how Swift's critique of inequality and oppression resonates in modern movements.
      </p>

      <div className="work-content">
        <div className="work-image historical-image">
          <p>Historical context and imagery from Swift's time.</p>
        </div>
        <div className="work-image modern-image">
          <p>Modern movements fighting for justice and equality.</p>
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
