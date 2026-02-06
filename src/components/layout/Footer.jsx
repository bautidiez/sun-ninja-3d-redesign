import React from 'react';
import { useTheme } from '../layout/ThemeContext';

const Footer = () => {
    const { theme } = useTheme();

    return (
        <footer style={{
            backgroundColor: theme === 'dark' ? '#051A3B' : '#1E293B', // Más claro en light mode
            color: '#fff',
            padding: '60px 0 20px'
        }}>
            <div className="container" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '40px',
                marginBottom: '40px'
            }}>
                {/* Column 1 - Brand */}
                <div>
                    <h3 style={{
                        fontSize: '1.5rem',
                        marginBottom: '1rem',
                        color: '#fff' // ← Forzar blanco
                    }}>
                        Sun Ninja
                    </h3>
                    <p style={{
                        opacity: 0.8,
                        maxWidth: '300px',
                        color: '#E2E8F0', // ← Gris claro
                        lineHeight: '1.6'
                    }}>
                        Premium sun shelters for your outdoor adventures. Making every beach day perfect since 2018.
                    </p>
                </div>

                {/* Column 2 - Shop */}
                <div>
                    <h4 style={{
                        fontSize: '1.1rem',
                        marginBottom: '1rem',
                        color: '#fff', // ← Forzar blanco
                        fontWeight: '600'
                    }}>
                        Shop
                    </h4>
                    <ul style={{
                        marginTop: '1rem',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.7rem',
                        listStyle: 'none',
                        padding: 0
                    }}>
                        <li>
                            <a href="#" style={{
                                color: '#CBD5E1', // ← Gris claro
                                transition: 'color 0.2s ease',
                                textDecoration: 'none'
                            }}
                                onMouseEnter={(e) => e.target.style.color = '#00D9FF'}
                                onMouseLeave={(e) => e.target.style.color = '#CBD5E1'}
                            >
                                Beach Tents
                            </a>
                        </li>
                        <li>
                            <a href="#" style={{
                                color: '#CBD5E1',
                                transition: 'color 0.2s ease',
                                textDecoration: 'none'
                            }}
                                onMouseEnter={(e) => e.target.style.color = '#00D9FF'}
                                onMouseLeave={(e) => e.target.style.color = '#CBD5E1'}
                            >
                                Showers
                            </a>
                        </li>
                        <li>
                            <a href="#" style={{
                                color: '#CBD5E1',
                                transition: 'color 0.2s ease',
                                textDecoration: 'none'
                            }}
                                onMouseEnter={(e) => e.target.style.color = '#00D9FF'}
                                onMouseLeave={(e) => e.target.style.color = '#CBD5E1'}
                            >
                                Accessories
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Column 3 - Support */}
                <div>
                    <h4 style={{
                        fontSize: '1.1rem',
                        marginBottom: '1rem',
                        color: '#fff',
                        fontWeight: '600'
                    }}>
                        Support
                    </h4>
                    <ul style={{
                        marginTop: '1rem',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.7rem',
                        listStyle: 'none',
                        padding: 0
                    }}>
                        <li>
                            <a href="#" style={{
                                color: '#CBD5E1',
                                transition: 'color 0.2s ease',
                                textDecoration: 'none'
                            }}
                                onMouseEnter={(e) => e.target.style.color = '#00D9FF'}
                                onMouseLeave={(e) => e.target.style.color = '#CBD5E1'}
                            >
                                Contact Us
                            </a>
                        </li>
                        <li>
                            <a href="#" style={{
                                color: '#CBD5E1',
                                transition: 'color 0.2s ease',
                                textDecoration: 'none'
                            }}
                                onMouseEnter={(e) => e.target.style.color = '#00D9FF'}
                                onMouseLeave={(e) => e.target.style.color = '#CBD5E1'}
                            >
                                Shipping
                            </a>
                        </li>
                        <li>
                            <a href="#" style={{
                                color: '#CBD5E1',
                                transition: 'color 0.2s ease',
                                textDecoration: 'none'
                            }}
                                onMouseEnter={(e) => e.target.style.color = '#00D9FF'}
                                onMouseLeave={(e) => e.target.style.color = '#CBD5E1'}
                            >
                                Returns
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Column 4 - Company */}
                <div>
                    <h4 style={{
                        fontSize: '1.1rem',
                        marginBottom: '1rem',
                        color: '#fff',
                        fontWeight: '600'
                    }}>
                        Company
                    </h4>
                    <ul style={{
                        marginTop: '1rem',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.7rem',
                        listStyle: 'none',
                        padding: 0
                    }}>
                        <li>
                            <a href="#" style={{
                                color: '#CBD5E1',
                                transition: 'color 0.2s ease',
                                textDecoration: 'none'
                            }}
                                onMouseEnter={(e) => e.target.style.color = '#00D9FF'}
                                onMouseLeave={(e) => e.target.style.color = '#CBD5E1'}
                            >
                                About Us
                            </a>
                        </li>
                        <li>
                            <a href="#" style={{
                                color: '#CBD5E1',
                                transition: 'color 0.2s ease',
                                textDecoration: 'none'
                            }}
                                onMouseEnter={(e) => e.target.style.color = '#00D9FF'}
                                onMouseLeave={(e) => e.target.style.color = '#CBD5E1'}
                            >
                                Terms
                            </a>
                        </li>
                        <li>
                            <a href="#" style={{
                                color: '#CBD5E1',
                                transition: 'color 0.2s ease',
                                textDecoration: 'none'
                            }}
                                onMouseEnter={(e) => e.target.style.color = '#00D9FF'}
                                onMouseLeave={(e) => e.target.style.color = '#CBD5E1'}
                            >
                                Privacy
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Copyright */}
            <div className="container" style={{
                borderTop: '1px solid rgba(255,255,255,0.1)',
                paddingTop: '20px',
                textAlign: 'center',
                fontSize: '0.9rem',
                color: '#94A3B8' // ← Gris medio
            }}>
                © 2026 Sun Ninja. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
