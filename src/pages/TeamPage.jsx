import React from 'react';

const TeamPage = () => {
  const team = [
    { name: 'Patric Adams', role: 'CEO & Co-founder', image: 'https://nest-frontend-v6.netlify.app/assets/imgs/page/about-2.png' },
    { name: 'Dilan Stein', role: 'Head Engineer', image: 'https://nest-frontend-v6.netlify.app/assets/imgs/page/about-3.png' },
    { name: 'Seth Boyle', role: 'Creative Director', image: 'https://nest-frontend-v6.netlify.app/assets/imgs/page/about-4.png' },
    { name: 'Robert Fox', role: 'Store Manager', image: 'https://nest-frontend-v6.netlify.app/assets/imgs/page/about-5.png' },
  ];

  return (
    <div className="team-page py-50">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '40px' }}>Our Team</h2>
          <p style={{ color: 'var(--text-muted)' }}>The people who make Grocen possible every day.</p>
        </div>
        
        <div className="team-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '30px' }}>
          {team.map((member, i) => (
            <div key={i} className="team-member" style={{ textAlign: 'center' }}>
              <img src={member.image} alt={member.name} style={{ width: '100%', borderRadius: '15px', marginBottom: '20px' }} />
              <h3>{member.name}</h3>
              <p style={{ color: 'var(--primary)', fontWeight: '600' }}>{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
