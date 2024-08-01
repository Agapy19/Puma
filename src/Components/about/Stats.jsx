import React from 'react';
import CountUp from 'react-countup';
import './Stats.css'; 

const Stats = () => {
  return (
    <div className="stats-container">
      <div className="stat-item">
        <CountUp start={0} end={25} duration={2.75} className="stat-number" />
        <p>Projets terminés</p>
      </div>
      <div className="stat-item">
        <CountUp start={0} end={12} duration={2.75} className="stat-number" />
        <p>Membres du personnel</p>
      </div>
      <div className="stat-item">
        <CountUp start={0} end={15} duration={2.75} className="stat-number" />
        <p>Millions d'heures</p>
      </div>
      <div className="stat-item">
        <CountUp start={0} end={50} duration={2.75} className="stat-number" />
        <p>Entreprises serivies</p>
      </div>
    </div>
  );
};

export default Stats;
