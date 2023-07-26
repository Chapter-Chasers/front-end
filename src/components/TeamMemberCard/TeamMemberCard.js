// TeamMemberCard.js
import React from 'react';
import './TeamMemberCard.css';

const TeamMemberCard = ({ name, imageSrc, major, leader }) => {
    return (
        <div className={`team-member-card ${leader ? 'leader' : ''}`}>
            <img src={imageSrc} alt={`Team Member - ${name}`} />
            <h2>{name}</h2>
            <p>{leader ? 'Team Leader' : 'Team Member'}</p>
            <p>{major}</p>
        </div>
    );
};

export default TeamMemberCard;
