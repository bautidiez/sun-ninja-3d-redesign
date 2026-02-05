import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../layout/ThemeContext';
import TrustBar from './TrustBar';
import FeaturesDetailed from './FeaturesDetailed';
import CustomerGallery from './CustomerGallery';
import FAQAccordion from './FaqAccordion';

const ProductPage = () => {
    const { theme } = useTheme();
    const [selectedColor, setSelectedColor] = useState('Turquoise');

    // Placeholder for 3D Interaction
    const styles = {
        container: {
            paddingTop: '120px',
            paddingBottom: '80px',
            background: 'var(--bg-main)',
            minHeight: '100vh'
        },
        grid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '60px',
            alignItems: 'center'
        },
        viewer3D: {
            height: '600px',
            background: theme === 'dark' ? 'radial-gradient(circle at center, #0A2463 0%, transparent 70%)' : 'radial-gradient(circle at center, #E1F5FE 0%, transparent 70%)',
            borderRadius: 'var(--radius-lg)',
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            perspective: '1000px'
        },
        detailsPanel: {
            padding: '40px',
            borderRadius: '24px',
            height: 'fit-content'
        }
    };

    const colors = [
        { name: 'Turquoise', hex: '#00D9FF' },
        { name: 'Sunset', hex: '#FF6B6B' },
        { name: 'Sand', hex: '#F4E7D7' },
        { name: 'Navy', hex: '#051A3B' }
    ];

    return (
        <div style={{ background: 'var(--bg-main)' }}>
            <div className="container" style={styles.container}>
                <div style={styles.grid}>
                    {/* LEFT: 3D Viewer Placeholder */}
                    <div style={styles.viewer3D}>
                        {/* This image would ideally be a 3D Canvas */}
                        <motion.img
                            src="https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            alt="Sun Ninja Tent"
                            style={{
                                width: '80%',
                                borderRadius: '20px',
                                boxShadow: 'var(--shadow-float)',
                                cursor: 'grab'
                            }}
                            whileHover={{ scale: 1.05, rotateY: 10 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        />

                        <div style={{
                            position: 'absolute', bottom: '30px',
                            background: theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)',
                            backdropFilter: 'blur(10px)',
                            padding: '10px 20px', borderRadius: '30px', fontSize: '0.9rem',
                            color: 'var(--text-primary)',
                            border: '1px solid var(--glass-border)'
                        }}>
                            Drag to Rotate 360°
                        </div>
                    </div>

                    {/* RIGHT: Product Details (Buy Box) */}
                    <div className="glass-panel" style={styles.detailsPanel}>
                        <div style={{ textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--turquoise)', fontWeight: '600', marginBottom: '10px' }}>
                            Best Seller
                        </div>
                        <h1 style={{ fontSize: '3rem', marginBottom: '10px', lineHeight: '1.1', color: 'var(--text-primary)' }}>
                            Sun Ninja <br />Beach Shade
                        </h1>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
                            <span style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--text-primary)' }}>$159.95</span>
                            <span style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', textDecoration: 'line-through' }}>$199.99</span>
                            <span style={{
                                background: 'var(--coral)', color: 'white', padding: '4px 12px',
                                borderRadius: '8px', fontSize: '0.9rem', fontWeight: 'bold'
                            }}>
                                SAVE 20%
                            </span>
                        </div>

                        {/* Urgency Badge - CRO Boost */}
                        <div style={{
                            background: 'linear-gradient(90deg, rgba(255, 107, 107, 0.15), rgba(255, 107, 107, 0.02))',
                            border: '1px solid var(--coral)',
                            borderRadius: '12px',
                            padding: '15px 20px',
                            marginBottom: '20px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px'
                        }}>
                            <span style={{ fontSize: '1.2rem' }}>⚡</span>
                            <div>
                                <div style={{ fontWeight: '700', fontSize: '0.95rem', color: 'var(--coral)' }}>
                                    Only 12 left in stock — Order soon!
                                </div>
                                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                                    2,847 sold this week
                                </div>
                            </div>
                        </div>

                        <p style={{ color: 'var(--text-secondary)', marginBottom: '30px', fontSize: '1.1rem' }}>
                            The ultimate portable beach sanctuary. UPF50+ protection, wind-resistant sand anchors, and a setup time of under 60 seconds.
                        </p>

                        {/* Color Selector */}
                        <div style={{ marginBottom: '30px' }}>
                            <label style={{ display: 'block', marginBottom: '15px', fontWeight: '600', color: 'var(--text-primary)' }}>
                                Select Color: <span style={{ color: 'var(--text-secondary)' }}>{selectedColor}</span>
                            </label>
                            <div style={{ display: 'flex', gap: '15px' }}>
                                {colors.map(c => (
                                    <div
                                        key={c.name}
                                        onClick={() => setSelectedColor(c.name)}
                                        style={{
                                            width: '40px', height: '40px', borderRadius: '50%',
                                            background: c.hex,
                                            cursor: 'pointer',
                                            border: selectedColor === c.name ? '3px solid white' : '2px solid transparent',
                                            boxShadow: selectedColor === c.name ? '0 0 15px var(--turquoise-glow)' : 'none',
                                            transform: selectedColor === c.name ? 'scale(1.1)' : 'scale(1)',
                                            transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                                        }}
                                    ></div>
                                ))}
                            </div>
                        </div>

                        {/* Actions */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            <button className="btn-primary" style={{ width: '100%', fontSize: '1.1rem' }}>
                                Add to Cart - $159.95
                            </button>
                            <p style={{ textAlign: 'center', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                                Free Shipping & 30-Day Returns included.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* New CRO Components */}
            <TrustBar />
            <FeaturesDetailed />
            <CustomerGallery />
            <FAQAccordion />

        </div>
    );
};

export default ProductPage;
