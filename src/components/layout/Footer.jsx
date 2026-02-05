import React from 'react';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: 'var(--ocean-deep)', color: '#fff', padding: '60px 0 20px' }}>
            <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', marginBottom: '40px' }}>
                <div>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Sun Ninja</h3>
                    <p style={{ opacity: 0.8, maxWidth: '300px' }}>
                        Premium sun shelters for your outdoor adventures. Making every beach day perfect since 2018.
                    </p>
                </div>
                <div>
                    <h4>Shop</h4>
                    <ul style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', opacity: 0.8 }}>
                        <li><a href="#">Beach Tents</a></li>
                        <li><a href="#">Showers</a></li>
                        <li><a href="#">Accessories</a></li>
                    </ul>
                </div>
                <div>
                    <h4>Support</h4>
                    <ul style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', opacity: 0.8 }}>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Shipping</a></li>
                        <li><a href="#">Returns</a></li>
                    </ul>
                </div>
                <div>
                    <h4>Company</h4>
                    <ul style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', opacity: 0.8 }}>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Terms</a></li>
                        <li><a href="#">Privacy</a></li>
                    </ul>
                </div>
            </div>
            <div className="container" style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px', textAlign: 'center', fontSize: '0.9rem', opacity: 0.6 }}>
                &copy; 2026 Sun Ninja. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
