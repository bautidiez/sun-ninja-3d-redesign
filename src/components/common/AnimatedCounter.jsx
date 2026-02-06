import React, { useState, useRef, useCallback } from 'react';

const AnimatedCounter = ({ value, suffix = '', duration = 2000, label, decimals = 0, color }) => {
    const [displayValue, setDisplayValue] = useState(0);
    const hasAnimated = useRef(false);
    const observerRef = useRef(null);

    // Format number helper
    const formatNumber = (num) => {
        if (decimals > 0) {
            return num.toFixed(decimals);
        }
        return Math.floor(num).toLocaleString();
    };

    const startAnimation = () => {
        if (hasAnimated.current) return;
        hasAnimated.current = true;

        let startTimestamp = null;
        const startValue = 0;
        const endValue = parseFloat(value);

        if (isNaN(endValue)) {
            setDisplayValue(0);
            return;
        }

        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 3); // easeOutCubic

            setDisplayValue(startValue + (endValue - startValue) * ease);

            if (progress < 1) {
                window.requestAnimationFrame(step);
            } else {
                setDisplayValue(endValue);
            }
        };
        window.requestAnimationFrame(step);
    };

    // Callback ref to ensure observer attaches exactly when DOM node exists
    const elementRef = useCallback(node => {
        if (node) {
            // Disconnect potential existing observer
            if (observerRef.current) observerRef.current.disconnect();

            observerRef.current = new IntersectionObserver(entries => {
                const entry = entries[0];
                // Only trigger if intersecting and hasn't animated yet
                if (entry.isIntersecting && !hasAnimated.current) {
                    startAnimation();
                    if (observerRef.current) observerRef.current.disconnect();
                }
            }, {
                threshold: 0.5, // Strict 50% visibility required
                rootMargin: '0px'
            });

            observerRef.current.observe(node);
        }
    }, [value, duration]);

    return (
        <div ref={elementRef} style={{ textAlign: 'center', minHeight: '100px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{
                fontFamily: 'var(--font-heading, sans-serif)',
                fontSize: '3.5rem',
                fontWeight: '600',
                lineHeight: '1.1',
                color: color || 'var(--color-text-main, #1E2A32)',
                marginBottom: '0.5rem',
                letterSpacing: '-1px'
            }}>
                {formatNumber(displayValue)}{suffix}
            </div>
            {label && (
                <div style={{
                    fontFamily: 'var(--font-body, sans-serif)',
                    fontSize: '1rem',
                    color: 'var(--color-text-muted, #6B7C85)',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    fontWeight: '500'
                }}>
                    {label}
                </div>
            )}
        </div>
    );
};

export default AnimatedCounter;
