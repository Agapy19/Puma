import React from 'react';
import './ExperienceSection.css';
import { FaBriefcase, FaUsers, FaDollarSign, FaImage } from 'react-icons/fa';

const ExperienceSection = () => {
    return (
        <div className="experience-wrapper">
            <div className="experience-section">
                <div className="experience-card">
                    <FaBriefcase className="icon" />
                    <h3>Notre expérience</h3>
                    <p>
                    Nous sommes une agence congolaise  de communication et de marketing de premier plan en RDC, forte et avec des employés talentueux.
                    </p>
                </div>
                <div className="experience-card">
                    <FaUsers className="icon" />
                    <h3>Équipe qualifiée</h3>
                    <p>
                    Dirigée par des professionnels chevronnés du secteur de la publicité et du web, notre agence propose des solutions innovantes sur tous les supports disponibles aujourd'hui.

                    </p>
                </div>
                <div className="experience-card">
                    <FaDollarSign className="icon" />
                    <h3>Nous aimons les défis !</h3>
                    <p>
                    Notre mission est de propulser votre marque vers de nouveaux horizons grâce à des solutions publicitaires innovantes et sur mesure. 
                    </p>
                </div>
                <div className="experience-card">
                    <FaImage className="icon" />
                    <h3>Des projets qui parlent</h3>
                    <p>
                    Nous sommes fiers de notre vaste portefeuille de réalisations qui témoignent de notre capacité à créer des campagnes publicitaires efficaces et mémorables pour une variété de clients à travers différents secteurs.
                    </p>
                </div>
            </div>
            <div className="background-image">
            <img
            src={process.env.PUBLIC_URL + '/Images/image2.jpg'}
            alt=""
          />
            </div>
        </div>
    );
};

export default ExperienceSection;
