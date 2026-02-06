import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingCTA = ({ targetId }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const targetElement = document.getElementById(targetId);
        if (!targetElement) return;

        let timeoutId;

        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];

            // Show ONLY when we scroll completely past the buy box (it exits viewport at the top)
            if (!entry.isIntersecting && entry.boundingClientRect.top < 0) {
                setIsVisible(true);

                // Hide after 4 seconds
                clearTimeout(timeoutId);
                timeoutId = setTimeout(() => {
                    setIsVisible(false);
                }, 4000);
            } else {
                // Hide if we scroll back up to it
                setIsVisible(false);
                clearTimeout(timeoutId);
            }
        }, {
            threshold: 0,
            rootMargin: "0px"
        });

        observer.observe(targetElement);

        return () => {
            observer.disconnect();
            clearTimeout(timeoutId);
        };
    }, [targetId]);

    const handleScrollToProduct = () => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
            setIsVisible(false);
        }
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 24 }}
                    style={{
                        position: 'fixed',
                        bottom: '20px',
                        left: '50%',
                        x: '-50%',
                        transform: 'translateX(-50%)',
                        zIndex: 1000,
                        width: '90%',
                        maxWidth: '400px'
                    }}
                >
                    <div
                        onClick={handleScrollToProduct}
                        style={{
                            background: 'linear-gradient(135deg, #FF6B6B 0%, #00D9FF 100%)',
                            padding: '2px',
                            borderRadius: '12px',
                            cursor: 'pointer',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
                        }}
                    >
                        <div style={{
                            background: 'rgba(255,255,255,0.95)',
                            backdropFilter: 'blur(10px)',
                            padding: '12px 20px',
                            borderRadius: '10px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textAlign: 'center'
                        }}>
                            <motion.div
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ repeat: Infinity, duration: 2 }}
                                style={{
                                    fontSize: '0.9rem',
                                    fontWeight: '700',
                                    color: '#1E2A32',
                                    marginBottom: '4px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '6px'
                                }}
                            >
                                <span>⚡</span> Only 7 left at this price
                            </motion.div>
                            <div style={{ fontSize: '0.8rem', color: '#6B7C85' }}>
                                Tap to claim yours now
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default FloatingCTA;
