import React, { useState } from 'react';
import { useTheme } from '../layout/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';

// IMPORTAR TUS IMÁGENES REALES AQUÍ
import step1 from '../../assets/setup-1.jpg';
import step2 from '../../assets/setup-2.jpg';
import step3 from '../../assets/setup-3.jpg';

const SetupTimeline = () => {
    const { theme } = useTheme();
    const [activeStep, setActiveStep] = useState(0);

    const steps = [
        {
            number: '1',
            title: 'Lay Flat',
            description: 'Spread the tent flat on the sand. Position it where you want your shade.',
            image: step1,
            time: '5 seconds',
            icon: '📐'
        },
        {
            number: '2',
            title: 'Fill Sand Pockets',
            description: 'Fill the 4 corner pockets with sand. This creates 20+ lbs of natural anchoring.',
            image: step2,
            time: '30 seconds',
            icon: '🏖️'
        },
        {
            number: '3',
            title: 'Pop Up & Relax',
            description: 'Lift the center pole and secure. You\'re done! Instant shade for the whole family.',
            image: step3,
            time: '20 seconds',
            icon: '⛺'
        }
    ];

    return (
        <section style={{
            padding: '40px 0', // Further reduced
            background: theme === 'dark'
                ? 'var(--ocean-deep)'
                : 'linear-gradient(180deg, #F5F7FA 0%, #E1F5FE 100%)',
            position: 'relative',
            overflow: 'hidden',
            minHeight: 'auto'
        }}>
            {/* Ambient Glow */}
            <div style={{
                position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                width: '800px', height: '800px',
                background: theme === 'dark' ? 'radial-gradient(circle, rgba(0,217,255,0.1) 0%, transparent 70%)' : 'radial-gradient(circle, rgba(8,145,178,0.15) 0%, transparent 70%)',
                filter: 'blur(100px)', pointerEvents: 'none'
            }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>

                {/* Compact Header */}
                <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                    <h2 className="animate-fade-in-up" style={{
                        fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
                        marginBottom: '5px',
                        color: 'var(--text-primary)',
                        lineHeight: 1.1
                    }}>
                        Setup in <span style={{ color: 'var(--turquoise)' }}>60 Seconds.</span>
                    </h2>
                    <p className="animate-fade-in-up delay-100" style={{
                        fontSize: '1rem',
                        color: 'var(--text-secondary)',
                        maxWidth: '600px',
                        margin: '0 auto'
                    }}>
                        No poles. No stress. Just instant shade.
                    </p>
                </div>

                {/* Main Content: Side-by-Side */}
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '30px', // More gap
                    alignItems: 'stretch', // Crucial for equal height
                    maxWidth: '1400px', // Wider container for bigger layout
                    margin: '0 auto'
                }}>
                    {/* LEFT: Interactive Image Display */}
                    <div className="animate-fade-in-up delay-200" style={{
                        flex: '1 1 500px',
                        borderRadius: '24px',
                        overflow: 'hidden',
                        boxShadow: 'var(--shadow-float)',
                        border: '1px solid var(--glass-border)',
                        position: 'relative',
                        minHeight: '450px', // Taller minimum height
                        background: '#000'
                    }}>
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={activeStep}
                                src={steps[activeStep].image}
                                alt={steps[activeStep].title}
                                initial={{ opacity: 0, scale: 1.05 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.4 }}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    objectPosition: 'center center',
                                    position: 'absolute', // Absolute to fill container
                                    top: 0,
                                    left: 0
                                }}
                            />
                        </AnimatePresence>

                        {/* Step Number Overlay */}
                        <div style={{
                            position: 'absolute', top: '25px', left: '30px',
                            fontSize: '5rem', fontWeight: '900', lineHeight: 1, // Bigger number
                            color: '#ffffff',
                            textShadow: '0 4px 15px rgba(0,0,0,0.6)',
                            zIndex: 10
                        }}>
                            {steps[activeStep].number}
                        </div>
                    </div>

                    {/* RIGHT: Step Cards List */}
                    <div className="animate-fade-in-up delay-300" style={{
                        flex: '1 1 600px', // Much wider flex basis to dominate right side
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        gap: '25px'
                    }}>
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                onClick={() => setActiveStep(index)}
                                className="glass-card"
                                whileHover={{ scale: 1.02 }}
                                style={{
                                    padding: '30px 35px', // Larger padding for "bigger" feel
                                    borderRadius: '24px',
                                    cursor: 'pointer',
                                    border: activeStep === index
                                        ? `2px solid ${theme === 'dark' ? 'var(--turquoise)' : '#0891B2'}`
                                        : '1px solid var(--glass-border-color)',
                                    background: activeStep === index
                                        ? theme === 'dark' ? 'rgba(0, 217, 255, 0.1)' : 'rgba(8, 145, 178, 0.15)'
                                        : 'var(--glass-bg)',
                                    transition: 'all 0.3s ease',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '30px',
                                    flex: '1'
                                }}
                            >
                                {/* Larger Icon */}
                                <div style={{
                                    fontSize: '3rem', // Even larger icon
                                    filter: activeStep === index ? 'none' : 'grayscale(100%) opacity(0.5)'
                                }}>
                                    {step.icon}
                                </div>

                                <div style={{ flex: 1 }}>
                                    <h3 style={{
                                        fontSize: '1.4rem', fontWeight: '700', // Larger title
                                        color: 'var(--text-primary)', marginBottom: '5px'
                                    }}>
                                        {step.title}
                                    </h3>
                                    <p style={{
                                        fontSize: '1rem', color: 'var(--text-secondary)', // Larger text
                                        margin: 0, lineHeight: '1.4',
                                        display: '-webkit-box',
                                        WebkitLineClamp: 2,
                                        WebkitBoxOrient: 'vertical',
                                        overflow: 'hidden'
                                    }}>
                                        {step.description}
                                    </p>
                                </div>

                                {/* Time Badge */}
                                <div style={{
                                    background: activeStep === index ? 'var(--coral)' : 'transparent',
                                    color: activeStep === index ? '#fff' : 'var(--text-secondary)',
                                    padding: '4px 10px', borderRadius: '12px',
                                    fontSize: '0.75rem', fontWeight: '600',
                                    whiteSpace: 'nowrap',
                                    border: activeStep === index ? 'none' : '1px solid var(--glass-border-color)'
                                }}>
                                    {step.time}
                                </div>
                            </motion.div>
                        ))}

                        {/* Integrated CTA in the column to save vertical space */}
                        <div style={{
                            textAlign: 'center',
                            marginTop: '5px',
                            background: theme === 'dark' ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.02)',
                            borderRadius: '16px',
                            padding: '15px'
                        }}>
                            <p style={{
                                fontSize: '1rem',
                                color: 'var(--text-secondary)',
                                marginBottom: '10px'
                            }}>
                                Total setup: <span style={{ color: theme === 'dark' ? 'var(--turquoise)' : '#0891B2', fontWeight: '800' }}>55s</span>
                            </p>
                            <button className="btn-primary" style={{
                                padding: '12px 30px',
                                fontSize: '1rem',
                                width: '100%'
                            }}>
                                Get Yours Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SetupTimeline;
