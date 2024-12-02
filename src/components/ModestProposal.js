// src/components/works/ModestProposal.js
import React from 'react';
import '../styles/works.css'; // Import the works-specific CSS


function ModestProposal() {
  return (
    <section id="modest-proposal" className="work-section">
      <h2>A Modest Proposal</h2>
      <p>
      Jonathan Swift's A Modest Proposal is a satirical piece that critiques the British exploitation of the Irish people. In this section, we explore how the images reflect Swift's critique of inequality and oppression.
</p>

<div className="work-content">
  <div className="work-image">
    <p>This image illustrates the stark contrast between industrial power and the suffering of the working class, reflecting the themes of exploitation and inequality in A Modest Proposal.</p>
  </div>
  <div className="work-image">
    <p>Modern movements fighting for justice and equality.</p>
  </div>
  <div className="work-image">
    <p>Additional context of historical movements.</p>
  </div>
  <div className="work-image">
    <p>Modern resistance movements today.</p>
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
