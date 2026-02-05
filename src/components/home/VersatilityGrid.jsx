import React from 'react';

const VersatilityGrid = () => {
    const items = [
        { icon: '🏖️', title: 'Beach Days', desc: 'Perfect for family beach outings', color: 'var(--color-bg-section)' },
        { icon: '🏕️', title: 'Camping Trips', desc: 'Lightweight & portable for backcountry', color: 'var(--color-bg-section)' },
        { icon: '🌳', title: 'Park Picnics', desc: 'Instant shade for any gathering', color: 'var(--color-bg-section)' },
        { icon: '🎵', title: 'Outdoor Events', desc: 'Concerts, sports games, festivals', color: 'var(--color-bg-section)' },
    ];

    return (
        <section style={{ padding: '80px 0', backgroundColor: 'var(--color-surface)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                    <h2 style={{ fontSize: '3rem', color: 'var(--color-primary)', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>Beyond The Beach.</h2>
                    <p style={{ fontSize: '1.25rem', color: '#666', fontFamily: 'var(--font-body)', fontWeight: '300' }}>Perfect shade solution for every outdoor adventure.</p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '30px'
                }}>
                    {items.map((item, index) => (
                        <div key={index}
                            className="animate-fade-in-up"
                            style={{
                                borderRadius: '24px',
                                overflow: 'hidden',
                                position: 'relative',
                                height: '350px', // Taller for more impact
                                boxShadow: 'var(--shadow-md)',
                                transition: 'all 0.4s ease',
                                cursor: 'default',
                                transform: 'translateY(0)'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-10px)';
                                e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                            }}
                        >
                            <div style={{
                                height: '100%',
                                width: '100%',
                                background: item.color,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <span style={{ fontSize: '5rem', filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.2))' }}>{item.icon}</span>
                            </div>

                            {/* Glassmorphism Overlay */}
                            <div style={{
                                position: 'absolute',
                                bottom: '20px',
                                left: '20px',
                                right: '20px',
                                padding: '24px',
                                background: 'rgba(255,255,255,0.85)',
                                backdropFilter: 'blur(12px)',
                                borderRadius: '20px',
                                border: '1px solid rgba(255,255,255,0.5)'
                            }}>
                                <h3 style={{ fontSize: '1.25rem', color: 'var(--color-primary)', marginBottom: '0.5rem', fontWeight: '800' }}>{item.title}</h3>
                                <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: '1.4' }}>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default VersatilityGrid;
