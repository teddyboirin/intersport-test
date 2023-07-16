import React from 'react';

import IntersportLight from '../../icons/IntersportLight';

import Journal from '../../images/journal.png';
import Banderole from '../../images/banderole-7.svg';
import Banderole2 from '../../images/banderole-8.svg';

export default function ECat() {
  return (
    <section className="catalogue">
      <div className="catalogue__container_banderole">
        <img src={Banderole} alt="banderole" />
      </div>
      <div className="catalogue__container_banderole catalogue__container_banderole--right">
        <img src={Banderole2} alt="banderole" />
      </div>
      <div className="catalogue__container_journal">
        <img src={Journal} alt="journal" />
      </div>
      <div className="intersport__logo">
        <IntersportLight />
      </div>
      <div className="catalogue__container">
        <div>
          <span>E-</span>
          <span>Catalogue</span>
        </div>
        <p>Découvrez notre toute dernière sélection black friday</p>
        <button type="button" className="button-secondary">
          Découvrir
        </button>
      </div>
    </section>
  );
}
