import React from 'react';

const TrustBar = () => {
    return (
        <div style={{
            background: 'rgba(0, 217, 255, 0.05)',
            padding: '30px 0',
            borderTop: '1px solid rgba(0, 217, 255, 0.1)',
            borderBottom: '1px solid rgba(0, 217, 255, 0.1)',
            marginTop: '0px'
        }}>
            <div className="container" style={{
                display: 'flex',
                justifyContent: 'space-around',
                flexWrap: 'wrap',
                gap: '30px',
                textAlign: 'center'
            }}>
                <div className="animate-fade-in-up">
                    <div style={{ fontSize: '2rem', marginBottom: '10px' }}>🛡️</div>
                    <div style={{ fontWeight: '700', fontSize: '1.1rem', color: 'var(--text-primary)' }}>Lifetime Warranty</div>
                    <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>We've got you covered</div>
                </div>
                <div className="animate-fade-in-up delay-100">
                    <div style={{ fontSize: '2rem', marginBottom: '10px' }}>🚚</div>
                    <div style={{ fontWeight: '700', fontSize: '1.1rem', color: 'var(--text-primary)' }}>Free Shipping</div>
                    <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>On orders over $75</div>
                </div>
                <div className="animate-fade-in-up delay-200">
                    <div style={{ fontSize: '2rem', marginBottom: '10px' }}>↩️</div>
                    <div style={{ fontWeight: '700', fontSize: '1.1rem', color: 'var(--text-primary)' }}>30-Day Returns</div>
                    <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>No questions asked</div>
                </div>
                <div className="animate-fade-in-up delay-300">
                    <div style={{ fontSize: '2rem', marginBottom: '10px' }}>⭐</div>
                    <div style={{ fontWeight: '700', fontSize: '1.1rem', color: 'var(--text-primary)' }}>9,200+ Reviews</div>
                    <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>4.8 average rating</div>
                </div>
            </div>
        </div>
    );
};

export default TrustBar;
