import './AboutUs.css';

const AboutUs = () => {
    return (
        <div className="about-us">
            <section className="about-section">
                <h2>Qui sommes-nous ?</h2>
                <p>
                    PUMA Communication est une agence de publicité et de visibilité dédiée à accompagner les entreprises dans leur croissance. Avec une équipe passionnée et expérimentée, nous offrons une gamme complète de services publicitaires adaptés aux besoins spécifiques de chaque client. Nous croyons en la puissance de la créativité et de la stratégie pour transformer vos ambitions en succès tangibles.
                </p>
            </section>
            <div className="video-section">
                <iframe 
                    src="https://www.youtube.com/embed/Fnd0C6YctZg?start=70" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen>
                </iframe>
            </div>
        </div>
    );
};

export default AboutUs;
