import React from 'react';
import { useTheme } from '../layout/ThemeContext';
import AnimatedCounter from '../common/AnimatedCounter';

const StatsSection = () => {
    const { theme } = useTheme();

    const stats = [
        { value: 50000, label: 'Happy Customers', suffix: '+' },
        { value: 4.9, label: 'Average Rating', suffix: '★', decimals: 1 },
        { value: 100, label: 'UV Protection', suffix: '%' },
    ];

    return (
        <section style={{
            padding: '60px 0',
            background: theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : '#fff',
            borderTop: '1px solid var(--glass-border)',
            borderBottom: '1px solid var(--glass-border)'
        }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '40px',
                    textAlign: 'center'
                }}>
                    {stats.map((stat, index) => (
                        <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                            <div style={{
                                fontSize: '3rem',
                                fontWeight: '700',
                                color: theme === 'dark' ? '#FFFFFF' : 'var(--text-primary)', // Forced white in dark mode as per requirements
                                fontFamily: 'var(--font-heading)',
                                marginBottom: '10px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <AnimatedCounter
                                    value={stat.value}
                                    duration={2000}
                                    decimals={stat.decimals || 0}
                                    color={theme === 'dark' ? '#FFFFFF' : undefined}
                                />
                                <span>{stat.suffix}</span>
                            </div>
                            <div style={{
                                fontSize: '1.1rem',
                                color: 'var(--text-secondary)',
                                fontWeight: '500',
                                textTransform: 'uppercase',
                                letterSpacing: '1px'
                            }}>
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
