import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../layout/ThemeContext';
import AnimatedCounter from '../common/AnimatedCounter';

// Import local assets
import cust1 from '../../assets/product-tent-1.jpg';
import cust2 from '../../assets/product-tent-2.jpg';
import cust3 from '../../assets/product-tent-3.jpg';
import cust4 from '../../assets/product-tent-4.jpg';
import cust5 from '../../assets/showcase-shower-1.jpg';
import cust6 from '../../assets/showcase-tent-1.webp';

const CustomerGallery = () => {
    const { theme } = useTheme();
    // Generate 5 items as requested
    const originalImages = [cust1, cust2, cust3, cust4, cust5, cust6]; // limiting to 5 unique if possible, or cycling
    const galleryItems = Array.from({ length: 5 }, (_, i) => ({
        id: i,
        image: originalImages[i % originalImages.length],
        username: `@sunlover_${i + 1}`,
        location: ['Miami, FL', 'Sydney, AU', 'Malibu, CA', 'Cancun, MX', 'Gold Coast'][i % 5],
        likes: 120 + i * 15
    }));

    return (
        <section style={{ padding: '80px 0', background: 'var(--bg-main)', overflow: 'hidden' }}>
            <div className="container">
                {/* Header with Animated Number */}
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h2 className="animate-fade-in-up" style={{
                        fontSize: 'clamp(2rem, 4vw, 3rem)',
                        color: 'var(--text-primary)',
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        alignItems: 'baseline',
                        gap: '10px'
                    }}>
                        {/* Conditional color: White for dark mode, Text Primary for light mode */}
                        <div style={{ display: 'inline-block', width: '180px' }}>
                            <AnimatedCounter
                                value={9427}
                                duration={2500}
                                color={theme === 'dark' ? '#FFFFFF' : '#000000'}
                            />
                        </div>
                        <span style={{ color: 'var(--text-primary)' }}>beach days saved</span>
                    </h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>and counting...</p>
                </div>

                {/* 5-Column Grid */}
                <div style={{
                    display: 'grid',
                    // Using auto-fit to center them or specific repeat(5, 1fr) if we want a strip.
                    // Given "5 photos nomas", a single strips looks nice, but responsiveness is key.
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '10px',
                    marginBottom: '60px'
                }}>
                    {galleryItems.map((item, i) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            style={{
                                position: 'relative',
                                aspectRatio: '1/1',
                                overflow: 'hidden',
                                cursor: 'pointer',
                                borderRadius: '16px', // Adding slight radius for aesthetics
                                boxShadow: 'var(--shadow-lg)' // Added shadow for effect matching dark mode depth
                            }}
                            className="group"
                        >
                            <img
                                src={item.image}
                                alt={`Customer ${item.username}`}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    transition: 'transform 0.5s ease'
                                }}
                            />

                            {/* Hover Overlay */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 1 }}
                                style={{
                                    position: 'absolute',
                                    inset: 0,
                                    background: 'rgba(0,0,0,0.4)', // 40% black overlay
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    color: 'white'
                                }}
                            >
                                <div style={{ fontSize: '3rem', marginBottom: '10px' }}>♥</div>
                                <div style={{ fontWeight: '700' }}>{item.username}</div>
                                <div style={{ fontSize: '0.8rem', opacity: 0.8 }}>📍 {item.location}</div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                <div style={{ textAlign: 'center' }}>
                    {/* Changed to btn-primary to ensure visibility in light mode since btn-glass might be too subtle on white */}
                    <button className="btn-primary" style={{ fontSize: '1.2rem', padding: '15px 40px' }}>
                        See All Customer Photos →
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CustomerGallery;
