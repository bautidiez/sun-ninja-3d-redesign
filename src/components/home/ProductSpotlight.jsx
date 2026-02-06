import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../layout/ThemeContext';

const ProductSpotlight = ({ title, subtitle, description, image, reverse, features, price, badge }) => {
    const { theme } = useTheme();
    return (
        <section style={{ padding: '100px 0', position: 'relative' }}>
            {/* Ambient Background Glow */}
            <div style={{
                position: 'absolute', top: '50%', left: reverse ? '10%' : '90%', width: '400px', height: '400px',
                background: 'var(--turquoise)', opacity: 0.15, filter: 'blur(100px)', borderRadius: '50%',
                transform: 'translate(-50%, -50%)', zIndex: -1
            }}></div>

            <div className="container" style={{
                display: 'flex',
                flexDirection: reverse ? 'row-reverse' : 'row',
                alignItems: 'center',
                gap: '80px',
                flexWrap: 'wrap'
            }}>
                {/* Image Side - 3D Tilt Effect Potential */}
                <div className="animate-fade-in-up" style={{ flex: '1 1 500px', position: 'relative' }}>
                    {/* Decorative Ring */}
                    <div style={{
                        position: 'absolute', inset: '-20px', border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '30px', transform: 'rotate(-3deg)', zIndex: 0
                    }}></div>

                    <div style={{
                        position: 'relative', borderRadius: '30px', overflow: 'hidden',
                        boxShadow: 'var(--shadow-float)', zIndex: 1
                    }}>
                        <img src={image} alt={title} style={{ width: '100%', display: 'block', transition: 'transform 0.5s ease' }} />
                        {badge && (
                            <div style={{
                                position: 'absolute', top: '20px', left: '20px',
                                background: 'rgba(255, 255, 255, 0.9)', color: 'var(--ocean-main)',
                                padding: '8px 16px', borderRadius: '20px', fontWeight: '700',
                                boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
                            }}>
                                {badge}
                            </div>
                        )}
                    </div>
                </div>

                {/* Content Side with Glass Card effect */}
                <div className="animate-fade-in-up delay-100 glass-card" style={{
                    flex: '1 1 450px',
                    padding: '40px',
                    borderRadius: '24px'
                }}>
                    <span style={{
                        color: 'var(--turquoise)', fontWeight: '600', textTransform: 'uppercase',
                        letterSpacing: '2px', fontSize: '0.9rem', display: 'block', marginBottom: '10px'
                    }}>
                        {subtitle}
                    </span>
                    <h2 style={{ fontSize: '3rem', marginBottom: '20px', lineHeight: 1.1, color: 'var(--text-primary)' }}>
                        {title}
                    </h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '30px', fontWeight: '300' }}>
                        {description}
                    </p>

                    {features && (
                        <ul style={{ marginBottom: '3rem', display: 'grid', gap: '1.2rem' }}>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '15px', fontWeight: '500', color: 'var(--text-secondary)' }}>
                                <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: theme === 'dark' ? 'rgba(0, 217, 255, 0.1)' : 'rgba(8, 145, 178, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: theme === 'dark' ? 'var(--turquoise)' : '#0891B2' }}>✓</div>
                                UPF 50+ Sun Protection
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '15px', fontWeight: '500', color: 'var(--text-secondary)' }}>
                                <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: theme === 'dark' ? 'rgba(0, 217, 255, 0.1)' : 'rgba(8, 145, 178, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: theme === 'dark' ? 'var(--turquoise)' : '#0891B2' }}>✓</div>
                                Sand Anchor System (Wind Proof)
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '15px', fontWeight: '500', color: 'var(--text-secondary)' }}>
                                <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: theme === 'dark' ? 'rgba(0, 217, 255, 0.1)' : 'rgba(8, 145, 178, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: theme === 'dark' ? 'var(--turquoise)' : '#0891B2' }}>✓</div>
                                Lightweight & Portable
                            </li>
                        </ul>
                    )}

                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                        <Link to="/product" className="btn-primary" style={{ padding: '20px 50px', borderRadius: '50px', boxShadow: '0 10px 25px rgba(244, 180, 0, 0.3)' }}>
                            Shop Now — $89
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductSpotlight;
