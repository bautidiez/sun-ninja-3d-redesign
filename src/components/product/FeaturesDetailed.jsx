import React from 'react';
import anchorImage from '../../assets/showcase-tent-2.jpg'; // Showing the anchor/tent
import fabricImage from '../../assets/quality-fabric.jpg';
import setupImage from '../../assets/setup-1.jpg';

const FeaturesDetailed = () => {
    // Using Real Assets from src/assets
    const features = [
        {
            title: "Sand Anchor Technology",
            description: "Unlike traditional stakes that fail in sand, our patented pocket system uses the beach itself. Fill with sand for unbeatable stability—even in 30mph winds.",
            image: anchorImage,
            stats: "Tested in 30+ mph winds"
        },
        {
            title: "UPF 50+ Fabric",
            description: "Medical-grade sun protection blocks 98% of harmful UV rays. The breathable spandex keeps you cool while your skin stays safe.",
            image: fabricImage,
            stats: "Blocks 98% UV rays"
        },
        {
            title: "60-Second Setup",
            description: "No poles. No stress. Lay flat, fill pockets, pop up. You'll be relaxing while others are still fighting with their umbrellas.",
            image: setupImage,
            stats: "Under 1 minute"
        }
    ];

    return (
        <section style={{ padding: '100px 0', background: 'var(--bg-main)' }}>
            <div className="container">
                {features.map((feature, index) => (
                    <div key={index} className="animate-fade-in-up" style={{
                        display: 'flex',
                        flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
                        alignItems: 'center',
                        gap: '80px',
                        marginBottom: '150px',
                        flexWrap: 'wrap'
                    }}>
                        {/* Image */}
                        <div style={{ flex: '1 1 500px' }}>
                            <div style={{
                                borderRadius: '30px',
                                overflow: 'hidden',
                                boxShadow: 'var(--shadow-float)',
                                position: 'relative',
                                transform: 'rotate(-2deg)'
                            }}>
                                <img src={feature.image} alt={feature.title} style={{ width: '100%', display: 'block' }} />

                                {/* Floating stat badge */}
                                <div className="glass-panel" style={{
                                    position: 'absolute',
                                    bottom: '30px',
                                    right: '30px',
                                    background: 'var(--coral)',
                                    color: '#fff',
                                    padding: '15px 25px',
                                    borderRadius: '50px',
                                    fontWeight: '800',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                                    border: 'none'
                                }}>
                                    {feature.stats}
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div style={{ flex: '1 1 400px' }}>
                            <h3 style={{
                                fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                                marginBottom: '20px',
                                color: 'var(--text-primary)',
                            }}>
                                {feature.title}
                            </h3>
                            <p style={{
                                fontSize: '1.2rem',
                                color: 'var(--text-secondary)',
                                lineHeight: '1.8'
                            }}>
                                {feature.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeaturesDetailed;
