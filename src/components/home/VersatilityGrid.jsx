import React from 'react';
import tent1 from '../../assets/product-tent-1.jpg';
import backpack from '../../assets/showcase-backpack.jpg';
import tent2 from '../../assets/showcase-tent-2.jpg';
import heroImg from '../../assets/hero-image.jpg';

const VersatilityGrid = () => {
    const items = [
        {
            icon: '🏖️',
            image: tent1,
            title: 'Beach Days',
            desc: 'Perfect for family beach outings',
            testimonial: '"Best beach investment ever!"',
            color: 'var(--color-bg-section)'
        },
        {
            icon: '🏕️',
            image: backpack,
            title: 'Camping Trips',
            desc: 'Lightweight & portable for backcountry',
            testimonial: '"Fits in my backpack easily."',
            color: 'var(--color-bg-section)'
        },
        {
            icon: '🌳',
            image: tent2,
            title: 'Park Picnics',
            desc: 'Instant shade for any gathering',
            testimonial: '"Setup takes literally seconds."',
            color: 'var(--color-bg-section)'
        },
        {
            icon: '🎵',
            image: heroImg,
            title: 'Outdoor Events',
            desc: 'Concerts, sports games, festivals',
            testimonial: '"A lifesaver at music festivals."',
            color: 'var(--color-bg-section)'
        },
    ];

    return (
        <section style={{ padding: '80px 0', backgroundColor: 'var(--bg-surface)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                    <h2 style={{ fontSize: '3rem', color: 'var(--text-primary)', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>Beyond The Beach.</h2>
                    <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-body)', fontWeight: '300' }}>Perfect shade solution for every outdoor adventure.</p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '40px'
                }}>
                    {items.map((item, index) => (
                        <div key={index} className="animate-fade-in-up glass-card" style={{
                            borderRadius: '24px',
                            overflow: 'hidden',
                            height: '450px',
                            position: 'relative',
                            cursor: 'pointer',
                            animationDelay: `${index * 0.1 + 0.2}s`
                        }}>
                            {/* Background Image */}
                            <div style={{
                                position: 'absolute',
                                inset: 0,
                                backgroundImage: `url(${item.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                transition: 'transform 0.5s ease',
                                filter: 'brightness(0.7)'
                            }}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1.0)'}
                            ></div>

                            {/* Content Overlay */}
                            <div style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                right: 0,
                                padding: '30px',
                                background: 'linear-gradient(to top, rgba(5,26,59,0.95), transparent)',
                            }}>
                                <h3 style={{
                                    fontSize: '1.8rem',
                                    color: '#fff',
                                    marginBottom: '10px'
                                }}>
                                    {item.title}
                                </h3>
                                <p style={{
                                    color: 'rgba(255,255,255,0.8)',
                                    marginBottom: '15px'
                                }}>
                                    {item.desc}
                                </p>
                                <p style={{
                                    fontSize: '0.9rem',
                                    fontStyle: 'italic',
                                    color: 'var(--turquoise)'
                                }}>
                                    {item.testimonial}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default VersatilityGrid;
