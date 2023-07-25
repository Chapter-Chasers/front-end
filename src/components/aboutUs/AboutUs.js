import React from 'react';
import TeamMemberCard from '../TeamMemberCard/TeamMemberCard';
import './Aboutus.css';
const AboutUs = () => {
    const teamMembers = [
        {
            name: 'Mohammad Abushanab',
            imageSrc: '',
            major: 'Computer Engineering',
            leader: true,
        },
        {
            name: 'Ghaidaa',
            imageSrc: 'team_leader.jpg',
            major: 'Computer Engineering',
            leader: false,
        },
        {
            name: 'Zaid izzeldin',
            imageSrc: 'team_leader.jpg',
            major: 'Computer Engineering',
            leader: false,
        },
        {
            name: 'Haya Hassan',
            imageSrc: 'team_leader.jpg',
            major: 'Computer Engineering',
            leader: false,
        },
        {
            name: 'Ahmad Anshasi',
            imageSrc: 'team_leader.jpg',
            major: 'Computer Engineering',
            leader: false,
        },
    ];

    return (
        <div style={{minHeight:'75vh'}}>
            <section className='overview'>
                <div className="overview-container">
                    <h2 className="overview-title">Welcome to our Bookstore and Quote Generator App!</h2>
                    <p className="overview-description">
                        Our app is a modern and user-friendly platform that combines the joy of reading with the inspiration of quotes.
                        <br />
                        We offer an extensive collection of books from various genres and authors, powered by the Google Books API.
                        <br />
                        Whether you're a passionate reader or just starting your reading journey, our bookstore has something for everyone.
                        <br />
                        Looking for some motivation or a dose of wisdom? Our Quote Generator will provide you with inspiring quotes to brighten your day.
                    </p>
                    <div className="overview-tech-stack">
                        <h3>Technology Stack:</h3>
                        <ul>
                            <li>Frontend: React.js</li>
                            <li>Backend: Express.js</li>
                            <li>API Integration: Google Books API, Quote Generator API</li>
                            <li>Deployment: Backend on Render</li>
                        </ul>
                    </div>
                </div>
            </section>
            <h1 className='mt-5'>About Us</h1>
            <div className="team mb-5">
                {teamMembers.map((member, index) => (
                    <TeamMemberCard
                        key={index}
                        name={member.name}
                        imageSrc={member.imageSrc}
                        major={member.major}
                        leader={member.leader}
                    />
                ))}
            </div>
        </div>
    );
};
export default AboutUs