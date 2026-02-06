import React from 'react';
import { useTheme } from '../layout/ThemeContext';

import comparisonUmbrella from '../../assets/sombrilla.png';
import comparisonPopup from '../../assets/pop-up-tents.png';
import sunNinjaProduct from '../../assets/Sun-Ninja_4_person_tent_turquoise_4.png';

const ComparisonSection = () => {
    const { theme } = useTheme();

    // Image styles for consistency
    const imageStyle = {
        width: '120px',
        height: '120px',
        objectFit: 'contain',
        marginBottom: '20px',
        filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.1))'
    };

    return (
        <section style={{
            padding: 'clamp(60px, 10vw, 100px) 0', // Responsive padding
            background: theme === 'dark'
                ? 'linear-gradient(180deg, var(--bg-main) 0%, var(--ocean-deep) 100%)'
                : 'linear-gradient(180deg, #F5F7FA 0%, #E1F5FE 100%)',
            position: 'relative'
        }}>
            <div className="container">
                <h2 className="animate-fade-in-up" style={{
                    textAlign: 'center',
                    fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                    marginBottom: '80px',
                    color: 'var(--text-primary)'
                }}>
                    Why Sun Ninja <span style={{ color: 'var(--turquoise)' }}>Wins</span>
                </h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', // Reduced min-width for mobile
                    gap: '40px',
                    textAlign: 'center'
                }}>
                    {/* Competitor 1 - Traditional Umbrellas */}
                    <div className="glass-panel animate-fade-in-up delay-100" style={{
                        padding: '40px',
                        borderRadius: '20px',
                        background: theme === 'dark'
                            ? 'rgba(255, 255, 255, 0.03)'
                            : 'rgba(0, 0, 0, 0.03)',
                        border: theme === 'dark'
                            ? '1px solid rgba(255, 255, 255, 0.1)'
                            : '1px solid rgba(0, 0, 0, 0.08)'
                    }}>
                        {/* Image Replacement */}
                        <img src={comparisonUmbrella} alt="Traditional Umbrella" style={imageStyle} />

                        <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: 'var(--text-primary)' }}>
                            Traditional Umbrellas
                        </h3>
                        <ul style={{ textAlign: 'left', listStyle: 'none' }}>
                            <li style={{
                                marginBottom: '15px',
                                display: 'flex',
                                gap: '10px',
                                color: theme === 'dark' ? '#94A3B8' : '#475569'
                            }}>
                                <span style={{ color: '#EF4444', fontSize: '1.2rem' }}>❌</span>
                                <span style={{ fontSize: '1rem' }}>Blow away in wind</span>
                            </li>
                            <li style={{
                                marginBottom: '15px',
                                display: 'flex',
                                gap: '10px',
                                color: theme === 'dark' ? '#94A3B8' : '#475569'
                            }}>
                                <span style={{ color: '#EF4444', fontSize: '1.2rem' }}>❌</span>
                                <span style={{ fontSize: '1rem' }}>Limited coverage (2 people)</span>
                            </li>
                            <li style={{
                                marginBottom: '15px',
                                display: 'flex',
                                gap: '10px',
                                color: theme === 'dark' ? '#94A3B8' : '#475569'
                            }}>
                                <span style={{ color: '#EF4444', fontSize: '1.2rem' }}>❌</span>
                                <span style={{ fontSize: '1rem' }}>Hard to anchor securely</span>
                            </li>
                        </ul>
                    </div>

                    {/* Sun Ninja - Winner */}
                    <div className="glass-card animate-fade-in-up" style={{
                        padding: '40px',
                        borderRadius: '20px',
                        border: `2px solid ${theme === 'dark' ? 'var(--turquoise)' : '#0891B2'}`,
                        position: 'relative',
                        transform: 'scale(1.05)',
                        background: theme === 'dark'
                            ? 'rgba(0, 217, 255, 0.05)'
                            : 'rgba(8, 145, 178, 0.08)',
                        zIndex: 2
                    }}>
                        {/* Winner Badge */}
                        <div style={{
                            position: 'absolute',
                            top: '-15px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            background: 'linear-gradient(45deg, #FFD700 0%, #FFA500 100%)',
                            padding: '8px 20px',
                            borderRadius: '20px',
                            fontWeight: '800',
                            fontSize: '0.9rem',
                            color: '#000',
                            boxShadow: '0 5px 15px rgba(255, 215, 0, 0.4)'
                        }}>
                            👑 BEST CHOICE
                        </div>

                        {/* Image Replacement */}
                        <img src={sunNinjaProduct} alt="Sun Ninja Tent" style={{
                            ...imageStyle,
                            transform: 'scale(1.2)' // Make hero product slightly larger
                        }} />

                        <h3 style={{
                            fontSize: '1.8rem',
                            marginBottom: '15px',
                            color: theme === 'dark' ? 'var(--turquoise)' : '#0891B2'
                        }}>
                            Sun Ninja
                        </h3>
                        <ul style={{ textAlign: 'left', listStyle: 'none' }}>
                            <li style={{
                                marginBottom: '15px',
                                color: 'var(--text-primary)',
                                display: 'flex',
                                gap: '10px',
                                fontSize: '1.1rem'
                            }}>
                                <span style={{
                                    color: theme === 'dark' ? 'var(--turquoise)' : '#0891B2',
                                    fontSize: '1.2rem'
                                }}>✓</span>
                                <span>Sand-anchored stability (30mph+)</span>
                            </li>
                            <li style={{
                                marginBottom: '15px',
                                color: 'var(--text-primary)',
                                display: 'flex',
                                gap: '10px',
                                fontSize: '1.1rem'
                            }}>
                                <span style={{
                                    color: theme === 'dark' ? 'var(--turquoise)' : '#0891B2',
                                    fontSize: '1.2rem'
                                }}>✓</span>
                                <span>UPF 50+ protection (Whole Family)</span>
                            </li>
                            <li style={{
                                marginBottom: '15px',
                                color: 'var(--text-primary)',
                                display: 'flex',
                                gap: '10px',
                                fontSize: '1.1rem'
                            }}>
                                <span style={{
                                    color: theme === 'dark' ? 'var(--turquoise)' : '#0891B2',
                                    fontSize: '1.2rem'
                                }}>✓</span>
                                <span>60-second easy setup</span>
                            </li>
                        </ul>
                    </div>

                    {/* Competitor 2 - Pop-up Tents */}
                    <div className="glass-panel animate-fade-in-up delay-200" style={{
                        padding: '40px',
                        borderRadius: '20px',
                        background: theme === 'dark'
                            ? 'rgba(255, 255, 255, 0.03)'
                            : 'rgba(0, 0, 0, 0.03)',
                        border: theme === 'dark'
                            ? '1px solid rgba(255, 255, 255, 0.1)'
                            : '1px solid rgba(0, 0, 0, 0.08)'
                    }}>
                        {/* Image Replacement */}
                        <img src={comparisonPopup} alt="Pop-up Tent" style={imageStyle} />

                        <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: 'var(--text-primary)' }}>
                            Pop-up Tents
                        </h3>
                        <ul style={{ textAlign: 'left', listStyle: 'none' }}>
                            <li style={{
                                marginBottom: '15px',
                                display: 'flex',
                                gap: '10px',
                                color: theme === 'dark' ? '#94A3B8' : '#475569'
                            }}>
                                <span style={{ color: '#EF4444', fontSize: '1.2rem' }}>❌</span>
                                <span style={{ fontSize: '1rem' }}>Heavy & bulky to carry</span>
                            </li>
                            <li style={{
                                marginBottom: '15px',
                                display: 'flex',
                                gap: '10px',
                                color: theme === 'dark' ? '#94A3B8' : '#475569'
                            }}>
                                <span style={{ color: '#EF4444', fontSize: '1.2rem' }}>❌</span>
                                <span style={{ fontSize: '1rem' }}>Complicated to fold back</span>
                            </li>
                            <li style={{
                                marginBottom: '15px',
                                display: 'flex',
                                gap: '10px',
                                color: theme === 'dark' ? '#94A3B8' : '#475569'
                            }}>
                                <span style={{ color: '#EF4444', fontSize: '1.2rem' }}>❌</span>
                                <span style={{ fontSize: '1rem' }}>Poor ventilation (Hot)</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ComparisonSection;
