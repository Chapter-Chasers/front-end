// TeamMemberCard.js
import React from 'react';
import './TeamMemberCard.css'
import { Link } from 'react-router-dom';

const TeamMemberCard = ({ name, imageSrc, major, leader,gitHub,linkedIn }) => {
    return (
        <div className={`team-member-card ${leader ? 'leader' : ''}`}>
            <img src={imageSrc} alt={`Team Member - ${name}`} />
            <h2>{name}</h2>
            <p>{leader ? 'Team Leader' : 'Team Member'}</p>
            <p>{major}</p>
            <div className='mt-3'>
              <span><Link target="_blank" to={gitHub} className="mx-2 pi pi-github" style={{ color:"black",textDecoration:"none",fontSize:'1.2rem'  }}></Link></span> 
                <span><Link target="_blank" to={linkedIn} className="pi pi-linkedin" style={{color:"black",textDecoration:"none",fontSize:'1.2rem' }}></Link></span>
                
            </div>
        </div>
    );
};

export default TeamMemberCard;
