import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from './ThemeContext';
import logo from '../../assets/Sun_Ninja_Logo_White.svg';

const Header = ({ cartCount, onCartClick }) => {
    const { theme, toggleTheme } = useTheme();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMobileMenuOpen]);

    const isLightMode = theme === 'light';

    const textColor = isLightMode && (isScrolled || !isHome)
        ? 'var(--text-primary)'
        : '#fff';

    const logoFilter = isLightMode && (isScrolled || !isHome)
        ? 'invert(1) brightness(0.5)'
        : 'none';

    const searchBg = isLightMode && (isScrolled || !isHome)
        ? 'rgba(0,0,0,0.05)'
        : 'rgba(255,255,255,0.1)';

    const navBg = isScrolled
        ? (isLightMode ? 'rgba(255, 255, 255, 0.95)' : 'rgba(10, 36, 99, 0.95)')
        : 'transparent';

    // Icons
    const SearchIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
    );
    const CartIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
    );
    const UserIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
    );
    const MenuIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
    );
    const XIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
    );
    const SunIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
    );
    const MoonIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
    );

    return (
        <>
            <nav style={{
                position: 'fixed',
                top: 0, left: 0, right: 0,
                zIndex: 1000,
                padding: '1rem 0',
                transition: 'all 0.3s ease',
                backgroundColor: navBg,
                backdropFilter: isScrolled ? 'blur(10px)' : 'none',
                boxShadow: isScrolled ? 'var(--shadow-sm)' : 'none',
                color: textColor
            }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Link to="/" className="logo" style={{ display: 'flex', alignItems: 'center', zIndex: 1100 }}>
                        <img src={logo} alt="Sun Ninja" style={{ height: '40px', filter: logoFilter }} />
                    </Link>

                    {/* DESKTOP Nav Links - Only visible on > 768px */}
                    <ul className="nav-links desktop-only" style={{ display: 'flex', gap: '2.5rem', fontWeight: '500', margin: 0, listStyle: 'none' }}>
                        <style>{`@media (max-width: 768px) { .desktop-only { display: none !important; } }`}</style>
                        {['Home', 'Shop', 'About', 'Reviews'].map((item) => (
                            <li key={item}>
                                <Link to={item === 'Shop' ? '/product' : '/'}
                                    style={{ position: 'relative', opacity: 0.9, fontSize: '0.95rem' }}
                                    onClick={() => window.scrollTo(0, 0)}
                                    onMouseEnter={(e) => e.target.style.opacity = '1'}
                                    onMouseLeave={(e) => e.target.style.opacity = '0.9'}
                                >
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', zIndex: 1100 }}>
                        <div className="desktop-only" style={{ position: 'relative', display: 'flex', alignItems: 'center', background: searchBg, borderRadius: '20px', padding: '6px 16px' }}>
                            <input type="text" placeholder="Search..." style={{ background: 'transparent', border: 'none', color: 'inherit', fontSize: '0.9rem', width: '120px', outline: 'none' }} />
                            <SearchIcon />
                        </div>
                        <button onClick={toggleTheme} style={{ color: 'inherit', display: 'flex' }}>
                            {theme === 'dark' ? <MoonIcon /> : <SunIcon />}
                        </button>
                        <button onClick={onCartClick} style={{ position: 'relative', color: 'inherit', display: 'flex' }}>
                            <CartIcon />
                            <span style={{ position: 'absolute', top: '-8px', right: '-8px', backgroundColor: 'var(--coral)', color: '#fff', fontSize: '0.7rem', fontWeight: 'bold', height: '18px', width: '18px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                {cartCount}
                            </span>
                        </button>
                        <button className="mobile-only" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} style={{ display: 'none', color: textColor, zIndex: 1101, cursor: 'pointer' }}>
                            <style>{`@media (max-width: 768px) { .mobile-only { display: flex !important; } }`}</style>
                            {isMobileMenuOpen ? <XIcon /> : <MenuIcon />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Portal - Renders outside of nav/header context */}
            {ReactDOM.createPortal(
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            style={{
                                position: 'fixed',
                                top: 0, left: 0, right: 0, bottom: 0,
                                backgroundColor: theme === 'dark' ? 'rgba(5, 26, 59, 0.98)' : '#FFFFFF', // High opacity background
                                zIndex: 999, // Below the Header buttons (1000+) but above everything else
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                paddingTop: '60px' // Offset mostly covered by header, but giving space
                            }}
                        >
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', alignItems: 'center', fontSize: '1.8rem', fontWeight: 'bold', listStyle: 'none', padding: 0 }}>
                                {['Home', 'Shop', 'About', 'Reviews'].map((item) => (
                                    <li key={item}>
                                        <Link to={item === 'Shop' ? '/product' : '/'}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            style={{ color: theme === 'dark' ? '#fff' : 'var(--ocean-deep)', textDecoration: 'none' }}
                                        >
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>,
                document.body
            )}
        </>
    );
};

export default Header;
