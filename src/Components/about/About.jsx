import React from 'react';
import { FaUsers, FaThumbsUp, FaFolderOpen, FaBullhorn } from 'react-icons/fa';
import './About.css'; 
import Stats from './Stats';
import Team from './Team';
import Services from './Services';
import FooterBottom from '../footer/FooterBottom';

const About = () => {
  return (
    <div className="about-page">
    <div className="about-container">
      <div className="about-item">
        <FaUsers className="about-icon" />
        <h3>Des Décennies d'Excellence</h3>
        <p>PUMA Communication, est une agence de communication et de marketing de premier plan, enrichie par une équipe de plus d'une centaine de talents exceptionnels. Nos collaborateurs connectent, informent et créent des œuvres inspirantes. Nous redéfinissons les marques pour accroître leur notoriété, améliorer leur positionnement global et les reconnecter de manière significative avec leurs clients finaux.</p>
      </div>
      <div className="about-item">
        <FaThumbsUp className="about-icon" />
        <h3>Équipe de Professionnels d’Exception</h3>
        <p>Dirigée par des pionniers aguerris de l’industrie publicitaire, notre équipe  se distingue par son approche innovante à travers tous les canaux modernes. Composée d’experts en publicité, de créatifs inspirants et de développeurs talentueux, nous proposons des services complets allant des médias publicitaires au marketing stratégique, en passant par les partenariats créatifs, les solutions interactives, le développement de contenu captivant, les analyses perspicaces et la gestion de campagnes, avec une efficacité démontrée et un respect des délais inégalé.</p>
      </div>
      <div className="about-item">
        <FaFolderOpen className="about-icon" />
        <h3>Un Portefeuille de Réalisations Exceptionnelles</h3>
        <p>Bien que jeune, PUMA Communication a rapidement laissé son empreinte en concevant et en mettant en œuvre des solutions numériques emblématiques et des campagnes publicitaires interactives qui redéfinissent les standards de l'industrie. Chaque projet témoigne de notre créativité audacieuse et de notre capacité à innover dans un monde en constante évolution. Nous sommes fiers de dire que cette expérience, bien que récente, nous a dotés d'une perspective unique et d'une expertise croissante pour façonner les projets de demain.

</p>
      </div>
      <div className="about-item">
        <FaBullhorn className="about-icon" />
        <h3>Nous Adorons les Défis !
        </h3>
        <p>En tant qu'agence de communication dynamique, PUMA Communication se passionne pour propulser les marques et les entreprises vers l'avenir. Nous répondons aux besoins évolutifs des communautés et des cultures en créant des visions stratégiques audacieuses qui naviguent avec aisance à travers les parcours consommateurs actuels et émergents. Nous remettons en question les conventions et réinventons les expériences pour établir des connexions profondes et authentiques.</p>
      </div>
    </div>
    <Stats />
    <Team />
    <Services />
    <FooterBottom />



    </div>
  );
};

export default About;
