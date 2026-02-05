import React from 'react';
import OceanWaves from '../3d/OceanWaves';

const HeroSection = () => {
    return (
        <section style={{ position: 'relative', height: '100vh', width: '100%', overflow: 'hidden' }}>
            {/* 3D Background - The "WOW" Factor */}
            <OceanWaves />

            {/* Content - Aesthetic Centerpiece */}
            <div className="container" style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', color: 'var(--text-primary)', position: 'relative', zIndex: 2 }}>
                <div style={{ maxWidth: '900px' }}>
                    <h1 className="animate-fade-in-up" style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: 'clamp(3rem, 6vw, 5.5rem)',
                        lineHeight: '1.0',
                        marginBottom: '1.5rem',
                        textShadow: '0 10px 30px rgba(0,0,0,0.5)',
                        letterSpacing: '-2px',
                        background: 'linear-gradient(180deg, #fff 0%, #a5b4fc 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}>
                        Your Private <br />
                        <span style={{ color: 'var(--turquoise)' }}>Beach Sanctuary.</span>
                    </h1>

                    <p className="animate-fade-in-up delay-100" style={{
                        fontSize: '1.4rem',
                        marginBottom: '3rem',
                        color: 'rgba(255,255,255,0.9)',
                        fontWeight: '400',
                        maxWidth: '600px',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        textShadow: '0 2px 10px rgba(0,0,0,0.5)'
                    }}>
                        Engineered for relaxation. The world's most trusted sun shelter with UPF50+ protection.
                    </p>

                    <div className="animate-fade-in-up delay-200" style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <button className="btn-primary">
                            Shop The Tent
                        </button>
                        <button className="btn-glass">
                            Watch the Film
                        </button>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="animate-fade-in-up delay-300" style={{
                position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)',
                opacity: 0.7, animation: 'bounce 2s infinite'
            }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
                </svg>
            </div>
        </section>
    );
};

export default HeroSection;
