import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
// import OceanWaves from '../3d/OceanWaves'; // Removed during cleanup
import heroVideo1 from '../../assets/hero-video.mp4';
import heroVideo2 from '../../assets/hero-video-beach.mp4';
import { useTheme } from '../layout/ThemeContext';

const HeroSection = () => {
    const { theme } = useTheme();
    // Playlist logic
    const [currentVideo, setCurrentVideo] = React.useState(heroVideo1);

    // Toggle video on end
    const handleVideoEnd = () => {
        setCurrentVideo(prev => prev === heroVideo1 ? heroVideo2 : heroVideo1);
    };

    return (
        <section style={{
            position: 'relative',
            height: '100vh',
            width: '100%',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff'
        }}>
            {/* Video Background */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0
            }}>
                {/* Video Element */}
                <video
                    key={currentVideo}
                    autoPlay
                    muted
                    playsInline
                    onEnded={handleVideoEnd}
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        minWidth: '100%',
                        minHeight: '100%',
                        width: 'auto',
                        height: 'auto',
                        transform: 'translate(-50%, -50%)',
                        objectFit: 'cover',
                        zIndex: 0
                    }}
                >
                    <source src={currentVideo} type="video/mp4" />
                </video>

                {/* Overlay for text contrast */}
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(2, 12, 31, 0.4)', // Consistent dark overlay
                    zIndex: 1
                }} />
            </div>

            {/* Content - Aesthetic Centerpiece */}
            <div className="container" style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', color: 'var(--text-primary)', position: 'relative', zIndex: 2 }}>

                {/* Energy Ring Animation */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: -1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                    <svg width="100%" height="100%" viewBox="0 0 800 800" style={{ opacity: 0.09, maxWidth: '800px', maxHeight: '800px' }}>
                        <defs>
                            <linearGradient id="ring" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#00D9FF" />
                                <stop offset="100%" stopColor="#FF6B6B" />
                            </linearGradient>
                        </defs>
                        <circle cx="400" cy="400" r="380" fill="none" stroke="url(#ring)" strokeWidth="1.5">
                            <animate attributeName="stroke-dasharray" values="0,3000;3000,0;0,3000" dur="25s" repeatCount="indefinite" />
                            <animate attributeName="opacity" values="0.09;0.16;0.09" dur="10s" repeatCount="indefinite" />
                        </circle>
                    </svg>
                </motion.div>

                <div style={{ maxWidth: '900px', position: 'relative', zIndex: 2 }}>
                    <h1 className="animate-fade-in-up" style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: 'clamp(3rem, 6vw, 5.5rem)',
                        lineHeight: '1.0',
                        marginBottom: '1.5rem',
                        color: '#fff', // Force White for video contrast
                        textShadow: '0 4px 20px rgba(0,0,0,0.8)',
                        letterSpacing: '-2px',
                    }}>
                        Your Private <br />
                        <span style={{ color: '#00D9FF', textShadow: '0 0 20px rgba(0,217,255,0.4)' }}>Beach Sanctuary.</span>
                    </h1>

                    <p className="animate-fade-in-up delay-100" style={{
                        fontSize: '1.4rem',
                        marginBottom: '3rem',
                        color: '#fff', // Force White
                        fontWeight: '400',
                        maxWidth: '600px',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        opacity: 0.9,
                        textShadow: '0 2px 5px rgba(0,0,0,0.5)'
                    }}>
                        Engineered for relaxation. The world's most trusted sun shelter with UPF50+ protection.
                    </p>

                    <div className="animate-fade-in-up delay-200" style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link to="/product">
                            <button className="btn-primary" style={{ cursor: 'pointer' }}>
                                Shop The Tent
                            </button>
                        </Link>
                    </div>

                    {/* Trust Badges - CRO Boost */}
                    <div className="animate-fade-in-up delay-300" style={{
                        display: 'flex',
                        gap: '30px',
                        justifyContent: 'center',
                        marginTop: '40px',
                        opacity: 0.9,
                        color: '#fff', // Force White
                        flexWrap: 'wrap'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <span style={{ fontSize: '1.2rem', color: '#00D9FF' }}>✓</span>
                            <span style={{ fontSize: '0.9rem', fontWeight: '500' }}>Free Shipping</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <span style={{ fontSize: '1.2rem', color: '#00D9FF' }}>✓</span>
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
