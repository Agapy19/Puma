import React from 'react';
import './OurSkills.css';


const OurSkills = () => {
  return (
    <div className="skills-section" >
      <div className="content">
        <h2 className="skills-title">Notre Expertise</h2>
        <p className="skills-subtitle">
        Voici un aperçu de nos compétences clés et de notre savoir-faire !
        </p>
        <div className="skills-articles">
          <div className="article">
            <p className="article-date">Création de Contenu</p>
            <h3 className="article-title">Création de Contenu</h3>
          </div>
          <div className="article">
            <p className="article-date">Création des sites web</p>
            <h3 className="article-title">Création des sites web et mobiles</h3>
          </div>
          <div className="article">
            <p className="article-date">Stratégies Phygital</p>
            <h3 className="article-title">Stratégies Phygital</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurSkills;
