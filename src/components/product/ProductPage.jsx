import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../layout/ThemeContext';
import TrustBar from './TrustBar';
import SetupTimeline from './SetupTimeline';
import FeaturesDetailed from './FeaturesDetailed';
import CustomerGallery from './CustomerGallery';
import FAQAccordion from './FaqAccordion';
import FloatingCTA from './FloatingCTA';
import { useSound } from '../../hooks/useSound';
import { fireConfetti } from '../../utils/confetti';
// Imports already handled below or previously
import productImg1 from '../../assets/product-tent-1.jpg';
import productImg2 from '../../assets/product-tent-2.jpg';
import productImg3 from '../../assets/product-tent-3.jpg';
import productImg4 from '../../assets/product-tent-4.jpg';

const AUDIO_BASE64 = "SUQzBAAAAAAAIbkAAAAAAAAAAAAAAExAMEAAAAAAAVAf/8YhAAAAANIAAAAAExNTUwAAAAAAAAAnQAAAAAExNQAA";

const ProductPage = ({ addToCart }) => {
    const { theme } = useTheme();
    const [selectedColor, setSelectedColor] = useState('Turquoise'); // Default active
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [showUnavailable, setShowUnavailable] = useState(false);
    const { play } = useSound(AUDIO_BASE64);

    // Requested Images
    const productImages = [productImg1, productImg2, productImg3, productImg4];

    const handleColorSelect = (colorName) => {
        if (colorName === 'Turquoise') {
            setSelectedColor(colorName);
            setShowUnavailable(false);
        } else {
            // Show unavailable message in Spanish and KEEP it (no timeout)
            setShowUnavailable(true);
            setSelectedColor(colorName);
        }
    };

    const handleAddToCart = () => {
        if (showUnavailable) return; // Prevent add to cart
        play();
        fireConfetti();
        if (addToCart) {
            addToCart({
                title: 'Sun Ninja Beach Shade',
                price: 159.95,
                color: 'Turquoise', // Always Turquoise
                image: productImages[0]
            });
        }
    };

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % productImages.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + productImages.length) % productImages.length);
    };

    // Styles
    const styles = {
        pageContainer: {
            paddingTop: '120px',
            paddingBottom: '80px',
            background: 'var(--bg-main)',
            minHeight: '100vh',
            color: 'var(--text-primary)',
            transition: 'background 0.3s ease'
        },
        grid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '60px',
            background: theme === 'dark' ? 'radial-gradient(circle at center, #0A2463 0%, transparent 70%)' : 'radial-gradient(circle at center, #E1F5FE 0%, transparent 70%)',
            borderRadius: 'var(--radius-lg)',
            position: 'relative',
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
        <div style={{ background: 'var(--bg-main)', paddingTop: '80px', minHeight: '100vh' }}>
            <style>{`
                .product-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
                    gap: 60px;
                    background: ${theme === 'dark' ? 'radial-gradient(circle at center, #0A2463 0%, transparent 70%)' : 'radial-gradient(circle at center, #E1F5FE 0%, transparent 70%)'};
                    border-radius: var(--radius-lg);
                    position: relative;
                    justify-content: center;
                    align-items: center;
                    perspective: 1000px;
                }
                @media (max-width: 768px) {
                    .product-grid {
                        grid-template-columns: 1fr; /* Stack vertically */
                        gap: 30px;
                        background: none; /* Cleaner look on mobile */
                    }
                    .product-page-container {
                        padding-top: 0 !important;
                    }
                }
            `}</style>

            <div className="container product-page-container" style={{
                paddingBottom: '80px',
                ...styles.container,
                paddingTop: '20px'
            }}>
                <div className="product-grid">
                    {/* LEFT: 3D Viewer */}
                    {/* LEFT: Image Carousel */}
                    <div className="product-image-container" style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', aspectRatio: '1/1', background: '#fff' }}>

                        <div style={{ position: 'absolute', top: '20px', left: '20px', zIndex: 10 }}>
                            <span style={{ background: 'var(--coral)', color: 'white', padding: '6px 14px', borderRadius: '30px', fontWeight: 'bold', fontSize: '0.9rem', boxShadow: '0 4px 10px rgba(255,107,107,0.3)' }}>
                                New Arrival
                            </span>
                        </div>

                        <AnimatePresence mode='wait'>
                            <motion.img
                                key={currentImageIndex}
                                src={productImages[currentImageIndex]}
                                alt="Sun Ninja Beach Tent"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </AnimatePresence>

                        {/* Navigation Arrows */}
                        <button onClick={prevImage} style={{
                            position: 'absolute', left: '20px', top: '50%', transform: 'translateY(-50%)',
                            width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.9)',
                            border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                            boxShadow: '0 4px 10px rgba(0,0,0,0.1)', color: '#333', zIndex: 5
                        }}>
                            ←
                        </button>
                        <button onClick={nextImage} style={{
                            position: 'absolute', right: '20px', top: '50%', transform: 'translateY(-50%)',
                            width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.9)',
                            border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                            boxShadow: '0 4px 10px rgba(0,0,0,0.1)', color: '#333', zIndex: 5
                        }}>
                            →
                        </button>

                        {/* Dots */}
                        <div style={{
                            position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)',
                            display: 'flex', gap: '8px', zIndex: 5
                        }}>
                            {productImages.map((_, idx) => (
                                <div
                                    key={idx}
                                    onClick={() => setCurrentImageIndex(idx)}
                                    style={{
                                        width: idx === currentImageIndex ? '24px' : '8px',
                                        height: '8px',
                                        borderRadius: '4px',
                                        background: idx === currentImageIndex ? 'var(--coral)' : 'rgba(0,0,0,0.3)',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease'
                                    }}
                                />
                            ))}
                        </div>
                    </div>

                    {/* RIGHT: Product Details (Buy Box) */}
                    <div id="buy-box" className="glass-panel" style={styles.detailsPanel}>
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
                                    Only 7 left in stock — Order soon!
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
                                        onClick={() => handleColorSelect(c.name)}
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
                            {showUnavailable && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    style={{
                                        color: '#EF4444',
                                        marginTop: '15px',
                                        fontSize: '1rem',
                                        fontWeight: '700'
                                    }}
                                >
                                    ⚠️ Lo sentimos, este color no está disponible por el momento.
                                </motion.div>
                            )}
                        </div>

                        {/* Actions */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            <button
                                onClick={handleAddToCart}
                                className="btn-primary"
                                disabled={showUnavailable}
                                style={{
                                    width: '100%',
                                    fontSize: '1.1rem',
                                    opacity: showUnavailable ? 0.6 : 1,
                                    cursor: showUnavailable ? 'not-allowed' : 'pointer',
                                    background: showUnavailable ? '#9ca3af' : ''
                                }}
                            >
                                {showUnavailable ? 'NO DISPONIBLE' : 'Add to Cart - $159.95'}
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

            <SetupTimeline />

            <FeaturesDetailed />
            <CustomerGallery />
            <FAQAccordion />
            <FloatingCTA targetId="buy-box" />

        </div>
    );
};

export default ProductPage;
