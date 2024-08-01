import React from 'react';
import './Services.css';
import { FaBullhorn, FaCloudDownloadAlt, FaTv, FaPenFancy, FaStar, FaSmile } from 'react-icons/fa';

const Services = () => {
  return (
    <div className="services-container">
      <div className="header">
        <h1 className="title">Nos Services</h1>
        <p className="subtitle">
        Nous offrons des solutions innovantes et stratégiques pour tous les aspects de la communication et du marketing.
        </p>
      </div>
      <div className="service-grid">
        <div className="service-card">
          <FaBullhorn />
          <h2 className="service-title">Gestion des Médias Sociaux</h2>
          <p className="service-description">
          Nous développons des stratégies sur les médias sociaux pour engager votre audience, renforcer votre présence en ligne et générer des résultats mesurables.
          </p>
        </div>
        <div className="service-card">
          <FaCloudDownloadAlt />
          <h2 className="service-title">Achat Media</h2>
          <p className="service-description">
          Des services d'achat media à travers divers supports modernes pour une visibilité optimale.


          </p>
        </div>
        <div className="service-card">
          <FaTv />
          <h2 className="service-title">Développement Web et Mobile
          </h2>
          <p className="service-description">
          Création de sites web innovants et d’applications mobiles fonctionnelles pour améliorer votre présence en ligne et engager vos utilisateurs.
          </p>
        </div>
        <div className="service-card">
          <FaPenFancy />
          <h2 className="service-title">Publicité Créative</h2>
          <p className="service-description">
          Nous concevons des concepts audacieux et des créations uniques pour des campagnes publicitaires mémorables.
          </p>
        </div>
        <div className="service-card">
          <FaStar />
          <h2 className="service-title">Identité de Marque</h2>
          <p className="service-description">
            L'identité visuelle de votre marque est essentielle à votre succès. Nous développons des identités de marque fortes et distinctives qui résonnent avec vos clients et renforcent votre présence sur le marché.
          </p>
        </div>
        <div className="service-card">
          <FaSmile />
          <h2 className="service-title">Relations Publiques</h2>
          <p className="service-description">
          Nous offrons des services de relations publiques pour une gestion efficace de votre image et de vos relations avec les médias, afin de promouvoir vos initiatives et renforcer votre réputation.


          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
