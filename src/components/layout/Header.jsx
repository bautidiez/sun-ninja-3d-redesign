import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/Sun_Ninja_Logo_White.svg';
// Assuming we strictly want white for transparent header, but logic might vary. 
// Actually, let's stick to the white logo for the overlay style generally used in premium headers, 
// or switch if we implement sticky state with white background.

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            padding: '1.5rem 0',
            transition: 'all 0.3s ease',
            backgroundColor: isScrolled ? 'rgba(10, 36, 99, 0.95)' : 'transparent', // Deep blue sticky
            backdropFilter: isScrolled ? 'blur(10px)' : 'none',
            boxShadow: isScrolled ? 'var(--shadow-sm)' : 'none',
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link to="/" className="logo">
                    <img src={logo} alt="Sun Ninja" style={{ height: '40px' }} />
                </Link>

                <ul style={{ display: 'flex', gap: '2rem', color: '#fff', fontWeight: '500' }} className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/product">Shop</Link></li>
                    <li><a href="#about">About</a></li> {/* Keep anchor for scroll sections if valid */}
                    <li><a href="#reviews">Reviews</a></li>
                </ul>

                <button className="btn-primary" style={{ padding: '8px 20px', fontSize: '0.9rem' }}>
                    Cart (0)
                </button>
            </div>
        </nav>
    );
};

export default Header;
