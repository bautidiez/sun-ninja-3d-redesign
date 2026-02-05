import React from 'react';
// import OceanWaves from '../3d/OceanWaves'; // Keeping for reference if needed
import heroVideo from '../../assets/hero-video.mp4';
import { useTheme } from '../layout/ThemeContext';

const HeroSection = () => {
    const { theme } = useTheme();

    return (
        <section style={{ position: 'relative', height: '100vh', width: '100%', overflow: 'hidden', zIndex: 1 }}>
            {/* Video Background */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        minWidth: '100%',
                        minHeight: '100%',
                        width: 'auto',
                        height: 'auto',
                        transform: 'translate(-50%, -50%)',
                        objectFit: 'cover'
                    }}
                >
                    <source src={heroVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Overlay for text contrast */}
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: theme === 'dark'
                        ? 'rgba(2, 12, 31, 0.5)' // Darker overlay for dark mode
                        : 'rgba(255, 255, 255, 0.1)', // Lighter/Subtle overlay for light mode (to let video shine)
                    // Actually, for legibility on a video, a dark overlay is almost always needed if text is white.
                    // If text switches to dark in light mode, we need a light overlay.
                    // Let's stick to the Premium Feel: slightly dark overlay, white text OR 
                    // Since we fixed the text to be theme-aware:
                    // Dark Mode: White Text -> Needs Dark Overlay
                    // Light Mode: Dark Text -> Needs Light/White Overlay
                    zIndex: 1
                }} />
            </div>

            {/* Content - Aesthetic Centerpiece */}
            <div className="container" style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', color: 'var(--text-primary)', position: 'relative', zIndex: 2 }}>
                <div style={{ maxWidth: '900px' }}>
                    <h1 className="animate-fade-in-up" style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: 'clamp(3rem, 6vw, 5.5rem)',
                        lineHeight: '1.0',
                        marginBottom: '1.5rem',
                        color: 'var(--text-primary)', // Solid color fallback
                        textShadow: '0 4px 12px rgba(0,0,0,0.3)', // Stronger shadow for video
                        letterSpacing: '-2px',
                    }}>
                        Your Private <br />
                        <span style={{ color: 'var(--turquoise)', textShadow: '0 0 20px rgba(0,217,255,0.4)' }}>Beach Sanctuary.</span>
                    </h1>

                    <p className="animate-fade-in-up delay-100" style={{
                        fontSize: '1.4rem',
                        marginBottom: '3rem',
                        color: 'var(--text-primary)',
                        fontWeight: '400',
                        maxWidth: '600px',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        opacity: 0.9,
                        textShadow: 'var(--shadow-sm)'
                    }}>
                        Engineered for relaxation. The world's most trusted sun shelter with UPF50+ protection.
                    </p>

                    <div className="animate-fade-in-up delay-200" style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <button className="btn-primary">
                            Shop The Tent
                        </button>
                        <button className="btn-glass" style={{ color: 'var(--text-primary)', borderColor: 'var(--glass-border)' }}>
                            Watch the Film
                        </button>
                    </div>

                    {/* Trust Badges - CRO Boost */}
                    <div className="animate-fade-in-up delay-300" style={{
                        display: 'flex',
                        gap: '30px',
                        justifyContent: 'center',
                        marginTop: '40px',
                        opacity: 0.9,
                        color: 'var(--text-primary)',
                        flexWrap: 'wrap'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <span style={{ fontSize: '1.2rem', color: 'var(--turquoise)' }}>✓</span>
                            <span style={{ fontSize: '0.9rem', fontWeight: '500' }}>Free Shipping</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <span style={{ fontSize: '1.2rem', color: 'var(--turquoise)' }}>✓</span>
                            <span style={{ fontSize: '0.9rem', fontWeight: '500' }}>30-Day Returns</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <span style={{ fontSize: '1.2rem', color: '#FFD700' }}>★</span>
                            <span style={{ fontSize: '0.9rem', fontWeight: '500' }}>9,200+ Reviews</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="animate-fade-in-up delay-300" style={{
                position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)',
                opacity: 0.7, animation: 'bounce 2s infinite', zIndex: 2
            }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
                </svg>
            </div>
        </section>
    );
};

export default HeroSection;
