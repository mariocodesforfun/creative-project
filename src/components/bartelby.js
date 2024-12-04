// src/components/works/ModestProposal.js
import React from 'react';
import '../styles/works.css'; // Import the works-specific CSS
import bartleby1 from '../bartleby1.jpeg';
import bartelby2 from '../bartelby2.jpeg';
import bartelby3 from '../bartleby3.jpeg';

function Bartleby() {
      return (
          <section id="bartleby" className="work-section">
            <h2>Bartleby, the Scrivener</h2>
            <p style={{textAlign: 'center'}}>
            Herman Melville's Bartleby, the Scrivener is a story about resistance and the power of silence.
            </p>

      <div className="work-content">
        <div className="work-image">
          <img src={bartleby1} alt="Industrial power and working class suffering" />
          <p className="work-image-text" >
            "In this very attitude did I sit when I called to him, rapidly stating what it was I wanted him to do—namely, to examine a small paper with me.
            Imagine my surprise, nay, my consternation, when without moving from his privacy, Bartleby in a singularly mild, firm voice, replied, “I would prefer not to."
          </p>
        </div>
        <div className="work-image">
          <img src={bartelby3} alt="Historical movements" />
          <p className="work-image-text">
            "I would prefer not to quit you,” he replied, gently emphasizing the not.
            “What earthly right have you to stay here? Do you pay any rent? Do you
            pay my taxes? Or is this property yours?"
          </p>
        </div>
        <div className="work-image">
          <img src={bartelby2} alt="Modern resistance movements" />
          <p className="work-image-text">
            "With any other man I should have flown outright into
            a dreadful passion, scorned all further words,
            and thrust him ignominiously from my presence.
            But there was something about Bartleby that not
            only strangely disarmed me, but in a wonderful manner
            touched and disconcerted me."
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

export default Bartleby;
