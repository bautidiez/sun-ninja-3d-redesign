import React from 'react';
import StatsSection from './StatsSection';

const SocialProof = () => {
    return (
        <>
            {/* Premium Animated Stats Section */}
            <StatsSection />

            {/* Customer Reviews Section */}
            <section style={{ padding: '80px 0', backgroundColor: 'var(--bg-surface)', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ fontSize: '2.5rem', color: 'var(--text-primary)', marginBottom: '60px' }}>Loved By Thousands</h2>

                    {/* Reviews Grid */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '30px',
                        textAlign: 'left'
                    }}>
                        {[
                            { name: "Jennifer M.", text: "Game changer for our family beach trips! Setup is ridiculously easy and the shade coverage is perfect." },
                            { name: "Michael T.", text: "Best beach investment ever. Quality is outstanding and the UV protection gives me peace of mind." },
                            { name: "Sarah L.", text: "Survived windy beach conditions without any issues. So much better than our old umbrella." }
                        ].map((review, i) => (
                            <div key={i} className="glass-card" style={{
                                padding: '30px',
                                borderRadius: '16px',
                            }}>
                                <div style={{ color: '#FFD700', fontSize: '1.2rem', marginBottom: '1rem' }}>★★★★★</div>
                                <p style={{ fontStyle: 'italic', marginBottom: '1.5rem', color: 'var(--text-primary)', opacity: 0.9 }}>"{review.text}"</p>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <div style={{ fontWeight: '700', color: 'var(--text-primary)' }}>{review.name}</div>
                                    <span style={{ fontSize: '0.8rem', color: '#28a745', background: 'rgba(40, 167, 69, 0.1)', padding: '2px 8px', borderRadius: '4px' }}>✓ Verified</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div style={{ marginTop: '60px' }}>
                        <button className="btn-glass" style={{ color: 'var(--text-primary)', borderColor: 'var(--glass-border)' }}>
                            View All 9,200+ Reviews
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SocialProof;
