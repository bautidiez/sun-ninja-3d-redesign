import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from './ThemeContext';
import logo from '../../assets/Sun_Ninja_Logo_White.svg';

const Header = ({ cartCount, onCartClick }) => {
    const { theme, toggleTheme } = useTheme();
    const [isScrolled, setIsScrolled] = useState(false);
    // Local state removed, using prop now
    const location = useLocation();
    const isHome = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Helper to determine styles based on Theme + Route + Scroll
    const isLightMode = theme === 'light';

    // Text Color: Dark if Light Mode AND (Scrolled OR Not Home)
    // Meaning: On Home Top it's White (Video). On Product Top it's Dark (Light BG).
    // In Dark Mode: Always White.
    const textColor = isLightMode && (isScrolled || !isHome)
        ? 'var(--text-primary)'
        : '#fff';

    // Logo Filter: Invert if text is dark
    const logoFilter = isLightMode && (isScrolled || !isHome)
        ? 'invert(1) brightness(0.5)'
        : 'none';

    // Search Background: Darker if text is dark, Lighter if text is white
    const searchBg = isLightMode && (isScrolled || !isHome)
        ? 'rgba(0,0,0,0.05)'
        : 'rgba(255,255,255,0.1)';

    // Nav Background: White if Light Mode & Scrolled. Dark if Dark Mode & Scrolled. Transparent otherwise.
    const navBg = isScrolled
        ? (isLightMode ? 'rgba(255, 255, 255, 0.95)' : 'rgba(10, 36, 99, 0.95)')
        : 'transparent';

    // Inline SVG Icons
    const SearchIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
    );

    const CartIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
    );

    const UserIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
        </svg>
    );

    const SunIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>
    );

    const MoonIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
    );

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            padding: '1rem 0',
            transition: 'all 0.3s ease',
            backgroundColor: navBg,
            backdropFilter: isScrolled ? 'blur(10px)' : 'none',
            boxShadow: isScrolled ? 'var(--shadow-sm)' : 'none',
            color: textColor
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {/* Logo */}
                <Link to="/" className="logo" style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={logo} alt="Sun Ninja" style={{
                        height: '40px',
                        filter: logoFilter
                    }} />
                </Link>

                {/* Nav Links */}
                <ul className="nav-links" style={{
                    display: 'flex',
                    gap: '2.5rem',
                    fontWeight: '500',
                    margin: 0
                }}>
                    {['Home', 'Shop', 'About', 'Reviews'].map((item) => (
                        <li key={item}>
                            <Link to={item === 'Shop' ? '/product' : '/'}
                                style={{
                                    position: 'relative',
                                    opacity: 0.9,
                                    fontSize: '0.95rem'
                                }}
                                onClick={() => window.scrollTo(0, 0)}
                                onMouseEnter={(e) => e.target.style.opacity = '1'}
                                onMouseLeave={(e) => e.target.style.opacity = '0.9'}
                            >
                                {item}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Right Actions */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                    {/* Search Bar */}
                    <div style={{
                        position: 'relative',
                        display: 'flex',
                        alignItems: 'center',
                        background: searchBg,
                        borderRadius: '20px',
                        padding: '6px 16px'
                    }}>
                        <input
                            type="text"
                            placeholder="Search..."
                            className="search-input"
                            style={{
                                background: 'transparent',
                                border: 'none',
                                color: 'inherit',
                                fontSize: '0.9rem',
                                width: '120px',
                                outline: 'none'
                            }}
                        />
                        <SearchIcon />
                    </div>

                    {/* Theme Toggle */}
                    <button onClick={toggleTheme} style={{
                        padding: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'inherit',
                        transition: 'transform 0.2s ease'
                    }}
                        onMouseEnter={(e) => e.target.style.transform = 'rotate(15deg)'}
                        onMouseLeave={(e) => e.target.style.transform = 'rotate(0)'}
                        title={theme === 'dark' ? "Switch to Light Mode" : "Switch to Dark Mode"}
                    >
                        {theme === 'dark' ? <MoonIcon /> : <SunIcon />}
                    </button>

                    {/* Auth */}
                    <button style={{ color: 'inherit', display: 'flex', alignItems: 'center' }}>
                        <UserIcon />
                    </button>

                    {/* Cart */}
                    <button onClick={onCartClick} style={{
                        position: 'relative',
                        color: 'inherit',
                        display: 'flex',
                        alignItems: 'center',
                        cursor: 'pointer'
                    }}>
                        <CartIcon />
                        <span style={{
                            position: 'absolute',
                            top: '-8px',
                            right: '-8px',
                            backgroundColor: 'var(--coral)',
                            color: '#fff',
                            fontSize: '0.7rem',
                            fontWeight: 'bold',
                            height: '18px',
                            width: '18px',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            {cartCount}
                        </span>
                    </button>
                </div>
            </div>
        </nav >
    );
};

export default Header;
