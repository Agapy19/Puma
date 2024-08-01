import React from 'react';
import { FaFacebook, FaTwitter, FaGooglePlus } from 'react-icons/fa';
import './Team.css';

const teamMembers = [
  {
    name: "Alex Buoyega",
    title: "UI/UX DESIGNER",
    img: `${process.env.PUBLIC_URL}/Images/profil3.jpg`,
    description: "A Juneau, Alaska native, Mrs. Applebaum has come a long way since her high school graduation all the way up to getting a Brown University Master’s degree in Economics...",

  },
  {
    name: "Kenneth Richardson",
    title: "PROJECT MANAGER",
    img: `${process.env.PUBLIC_URL}/Images/profil3.jpg`,
    description: "A Juneau, Alaska native, Mrs. Applebaum has come a long way since her high school graduation all the way up to getting a Brown University Master’s degree in Economics...",

  },
  {
    name: "Jonathan Christman",
    title: "BACKEND-DEVELOPPER",
    img: `${process.env.PUBLIC_URL}/Images/profil3.jpg`,
    description: "A Juneau, Alaska native, Mrs. Applebaum has come a long way since her high school graduation all the way up to getting a Brown University Master’s degree in Economics...",

  },
  {
    name: "Mary Applebaum",
    title: "UI/UX DESIGNER",
    img: `${process.env.PUBLIC_URL}/Images/profil3.jpg`,
    description: "A Juneau, Alaska native, Mrs. Applebaum has come a long way since her high school graduation all the way up to getting a Brown University Master’s degree in Economics...",
  },
  {
    name: "Martin Gray",
    title: "PROJECT MANAGER",
    img: `${process.env.PUBLIC_URL}/Images/profil3.jpg`,
    description: "Originally from London, at one point of his sophomore college year, Martin decided to turn the tables for his career and travel to the US...",
  },
  {
    name: "Elisa Hansolo",
    title: "BACKEND-DEVELOPPER",
    img: `${process.env.PUBLIC_URL}/Images/profil3.jpg`,
    description: "Born in New York City, Elisa always felt a strong urge for being an ambitious overachiever...",
  },
];

const Team = () => {
  return (
    <div className="team">
      <h2>Notre Equipe</h2>
      <p className='paragraphe'>Grâce à notre équipe dévouée, nous avons non seulement enrichi notre portefeuille de réalisations mais aussi gagné la confiance de nombreux clients satisfaits!

</p>
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <img src={member.img} alt={member.name} />
            <h3>{member.name}</h3>
            <h4>{member.title}</h4>
            {member.description && <p>{member.description}</p>}
            <div className="icons">
              <FaFacebook />
              <FaTwitter />
              <FaGooglePlus />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
