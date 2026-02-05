import React from 'react';

const ComparisonSection = () => {
    return (
        <section style={{
            padding: '100px 0',
            background: 'linear-gradient(180deg, var(--bg-main) 0%, var(--ocean-deep) 100%)',
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
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '40px',
                    textAlign: 'center'
                }}>
                    {/* Competitor 1 */}
                    <div className="glass-panel animate-fade-in-up delay-100" style={{ padding: '40px', borderRadius: '20px', opacity: 0.8 }}>
                        <div style={{ fontSize: '4rem', marginBottom: '20px' }}>🏖️</div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: 'var(--text-primary)' }}>Traditional Umbrellas</h3>
                        <ul style={{ textAlign: 'left', color: 'var(--text-secondary)', listStyle: 'none' }}>
                            <li style={{ marginBottom: '15px', display: 'flex', gap: '10px' }}>
                                <span>❌</span> Blow away in wind
                            </li>
                            <li style={{ marginBottom: '15px', display: 'flex', gap: '10px' }}>
                                <span>❌</span> Limited coverage (2 people)
                            </li>
                            <li style={{ marginBottom: '15px', display: 'flex', gap: '10px' }}>
                                <span>❌</span> Hard to anchor securely
                            </li>
                        </ul>
                    </div>

                    {/* Sun Ninja - Winner */}
                    <div className="glass-card animate-fade-in-up" style={{
                        padding: '40px',
                        borderRadius: '20px',
                        border: '2px solid var(--turquoise)',
                        position: 'relative',
                        transform: 'scale(1.05)',
                        background: 'rgba(0, 217, 255, 0.05)',
                        zIndex: 2
                    }}>
                        {/* Winner Badge */}
                        <div style={{
                            position: 'absolute',
                            top: '-15px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            background: 'var(--gradient-gold)',
                            padding: '8px 20px',
                            borderRadius: '20px',
                            fontWeight: '800',
                            fontSize: '0.9rem',
                            color: '#000',
                            boxShadow: '0 5px 15px rgba(255, 215, 0, 0.4)'
                        }}>
                            👑 BEST CHOICE
                        </div>

                        <div style={{ fontSize: '4rem', marginBottom: '20px' }}>⛺</div>
                        <h3 style={{ fontSize: '1.8rem', marginBottom: '15px', color: 'var(--turquoise)' }}>Sun Ninja</h3>
                        <ul style={{ textAlign: 'left', listStyle: 'none' }}>
                            <li style={{ marginBottom: '15px', color: 'var(--text-primary)', display: 'flex', gap: '10px', fontSize: '1.1rem' }}>
                                <span style={{ color: 'var(--turquoise)' }}>✓</span> Sand-anchored stability (30mph+)
                            </li>
                            <li style={{ marginBottom: '15px', color: 'var(--text-primary)', display: 'flex', gap: '10px', fontSize: '1.1rem' }}>
                                <span style={{ color: 'var(--turquoise)' }}>✓</span> UPF 50+ protection (Whole Family)
                            </li>
                            <li style={{ marginBottom: '15px', color: 'var(--text-primary)', display: 'flex', gap: '10px', fontSize: '1.1rem' }}>
                                <span style={{ color: 'var(--turquoise)' }}>✓</span> 60-second easy setup
                            </li>
                        </ul>
                    </div>

                    {/* Competitor 2 */}
                    <div className="glass-panel animate-fade-in-up delay-200" style={{ padding: '40px', borderRadius: '20px', opacity: 0.8 }}>
                        <div style={{ fontSize: '4rem', marginBottom: '20px' }}>🏕️</div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: 'var(--text-primary)' }}>Pop-up Tents</h3>
                        <ul style={{ textAlign: 'left', color: 'var(--text-secondary)', listStyle: 'none' }}>
                            <li style={{ marginBottom: '15px', display: 'flex', gap: '10px' }}>
                                <span>❌</span> Heavy & bulky to carry
                            </li>
                            <li style={{ marginBottom: '15px', display: 'flex', gap: '10px' }}>
                                <span>❌</span> Complicated to fold back
                            </li>
                            <li style={{ marginBottom: '15px', display: 'flex', gap: '10px' }}>
                                <span>❌</span> Poor ventilation (Hot)
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ComparisonSection;
