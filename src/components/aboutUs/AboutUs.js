import React from 'react';
import TeamMemberCard from '../TeamMemberCard/TeamMemberCard';
import './Aboutus.css';
import Features from './Features';
import Forms from '../forms/Forms';
// import { linkedin } from 'react-bootstrap-icons';
const AboutUs = () => {
    const teamMembers = [
        {
            name: 'Mohammad Abushanab',
            imageSrc: 'https://ca.slack-edge.com/TNGRRLUMA-U057XEAQE2Z-f4f32a67b4f6-512',
            major: 'Computer Engineering',
            leader: true,
            gitHub:'https://github.com/Muhammad-abushanab',
            linkedIn:'https://www.linkedin.com/in/muhammad-abushanab'
        },
        {
            name: 'Ghaidaa Rawad',
            imageSrc: 'https://ca.slack-edge.com/TNGRRLUMA-U0582T8U2VA-e62be42adf5d-512',
            major: 'Software Engineering',
            leader: false,
            gitHub:'https://github.com/Ghaidaa-Alrawad',
            linkedIn:'https://www.linkedin.com/in/ghaidaa-al-rawad'
        },
        {
            name: 'Zaid izzeldin',
            imageSrc: 'https://ca.slack-edge.com/TNGRRLUMA-U057TQ4GJBG-198fbff57158-512',
            major: 'Civil Engineering',
            leader: false,
            gitHub:'https://github.com/Zaidizz96',
            linkedIn:'https://www.linkedin.com/in/zaid-izziddine'
        },
        {
            name: 'Haya Hassan',
            imageSrc: 'https://ca.slack-edge.com/TNGRRLUMA-U05808X81NX-180914d77df9-512',
            major: 'Computer Information Systems',
            leader: false,
            gitHub:'https://github.com/hayahas',
            linkedIn:'https://www.linkedin.com/in/haya-hasan'
        },
        {
            name: 'Ahmad Anshasi',
            imageSrc: 'https://ca.slack-edge.com/TNGRRLUMA-U057TQ479TQ-9499e2c77ab9-512',
            major: 'Multimedia',
            leader: false,
            gitHub:'https://github.com/anshasiq',
            linkedIn:'https://www.linkedin.com/in/ahmadanshasi'
        },
    ];

    return (
        <div style={{ minHeight: '75vh' }}>
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

            <Features />
            <Forms />
            <div className='mb-5' style={{ backgroundColor:'#f2f2f2'}}>
           <h1  className='mt-5'  style={{ color : '#3C4048'}}>About Us</h1>

            <div className="team mb-5">
                {teamMembers.map((member, index) => (
                    <TeamMemberCard
                        key={index}
                        name={member.name}
                        imageSrc={member.imageSrc}
                        major={member.major}
                        leader={member.leader}
                        gitHub={member.gitHub}
                        linkedIn={member.linkedIn}
                    />
                ))}
            </div>
            </div>
           
        </div>
    );
};
export default AboutUs