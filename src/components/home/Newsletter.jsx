import React from 'react';
import { useTheme } from '../layout/ThemeContext';

const Newsletter = () => {
    const { theme } = useTheme();

    return (
        <section style={{
            padding: '80px 0',
            // Light gradient fading to gray (footer color is #1E293B in Light, #051A3B in Dark)
            // User requested "colors claros y vaya yendose a gris".
            // We'll use a gradient from white/light-gray to a darker gray at the bottom.
            background: theme === 'dark'
                ? 'linear-gradient(to bottom, var(--bg-main) 0%, #111827 100%)' // Dark mode subtle gradient
                : 'linear-gradient(to bottom, #F8FAFC 0%, #E2E8F0 100%)', // Light mode visible gradient
            color: 'var(--text-primary)'
        }}>
            <div className="container" style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '60px'
            }}>
                <div style={{ flex: '1 1 400px' }}>
                    <h2 style={{
                        fontSize: '3rem',
                        marginBottom: '0.5rem',
                        fontFamily: 'var(--font-heading)',
                        lineHeight: 1,
                        color: 'var(--text-primary)' // Changed from white
                    }}>
                        Join The Tribe.
                    </h2>
                    <p style={{
                        fontSize: '1.2rem',
                        opacity: 0.9,
                        fontWeight: '300',
                        color: 'var(--text-secondary)' // Changed from white
                    }}>
                        Get exclusive deals, beach tips, and product updates delivered to your inbox.
                    </p>
                </div>
                <div style={{ flex: '1 1 400px' }}>
                    <form style={{ display: 'flex', gap: '15px' }} onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            style={{
                                flex: 1,
                                padding: '18px 30px',
                                borderRadius: '50px',
                                border: 'none',
                                fontSize: '1rem',
                                outline: 'none',
                                color: '#1E293B', // ← Texto oscuro SIEMPRE
                                background: '#FFFFFF' // ← Fondo blanco SIEMPRE
                            }}
                        />
                        <button
                            type="submit"
                            style={{
                                padding: '18px 40px',
                                borderRadius: '50px',
                                background: '#FF6B6B', // ← Coral directo
                                color: 'white',
                                fontWeight: '700',
                                fontSize: '1rem',
                                border: 'none',
                                cursor: 'pointer',
                                boxShadow: '0 4px 15px rgba(255,107,107,0.3)',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.background = '#FF8585';
                                e.target.style.transform = 'translateY(-2px)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.background = '#FF6B6B';
                                e.target.style.transform = 'translateY(0)';
                            }}
                        >
                            Subscribe
                        </button>
                    </form>
                    <p style={{
                        fontSize: '0.8rem',
                        opacity: 0.7,
                        marginTop: '1rem',
                        color: 'var(--text-muted)'
                    }}>
                        We respect your privacy. Unsubscribe anytime.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
