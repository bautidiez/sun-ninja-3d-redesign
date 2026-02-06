import React, { useState } from 'react';
import { useTheme } from '../layout/ThemeContext';

const FAQAccordion = () => {
    const { theme } = useTheme();
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            q: "How long does setup really take?",
            a: "Seriously, under 60 seconds. Lay it flat, fill the sand pockets, and pop it up. That's it. No poles, no complicated instructions."
        },
        {
            q: "Will it blow away in strong wind?",
            a: "Not a chance. The sand anchor system uses 20+ lbs of sand (the beach itself) to keep it stable. Tested in 30mph winds without budging."
        },
        {
            q: "How much shade does it provide?",
            a: "The 4-person tent covers about 7ft x 7ft—enough room for a family of 4 with gear. Blocks 98% of UV rays with UPF 50+ fabric."
        },
        {
            q: "Is it machine washable?",
            a: "Yes! Shake off the sand and toss it in the washing machine on cold. Hang dry. It'll look brand new for your next beach day."
        },
        {
            q: "What if I'm not satisfied?",
            a: "We offer a 30-day money-back guarantee. If you don't love it, return it for a full refund. We'll even cover return shipping."
        }
    ];

    return (
        <section style={{ padding: '100px 0', background: 'var(--bg-main)' }}>
            <div className="container" style={{ maxWidth: '900px' }}>
                <h2 className="animate-fade-in-up" style={{
                    textAlign: 'center',
                    fontSize: '3rem',
                    marginBottom: '60px',
                    color: 'var(--text-primary)'
                }}>
                    Got Questions?
                </h2>

                <div className="animate-fade-in-up delay-100" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    {faqs.map((faq, index) => (
                        <div key={index} className="glass-card" style={{
                            borderRadius: '16px',
                            overflow: 'hidden',
                            transition: 'all 0.3s ease',
                            border: openIndex === index ? '1px solid var(--turquoise)' : 'var(--glass-border)'
                        }}>
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                                style={{
                                    width: '100%',
                                    padding: '25px 30px',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    background: 'transparent',
                                    border: 'none',
                                    color: 'var(--text-primary)',
                                    cursor: 'pointer',
                                    textAlign: 'left'
                                }}
                            >
                                <span style={{ fontSize: '1.2rem', fontWeight: '600' }}>
                                    {faq.q}
                                </span>
                                <span style={{
                                    fontSize: '1.5rem',
                                    transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0)',
                                    transition: 'transform 0.3s ease',
                                    color: 'var(--turquoise)'
                                }}>
                                    ↓
                                </span>
                            </button>

                            <div style={{
                                maxHeight: openIndex === index ? '300px' : '0',
                                overflow: 'hidden',
                                transition: 'max-height 0.3s ease'
                            }}>
                                <p style={{
                                    padding: '0 30px 25px',
                                    color: 'var(--text-secondary)',
                                    fontSize: '1.05rem',
                                    lineHeight: '1.7'
                                }}>
                                    {faq.a}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="animate-fade-in-up delay-200" style={{
                    textAlign: 'center',
                    marginTop: '60px',
                    padding: '40px',
                    background: theme === 'dark'
                        ? 'rgba(0, 217, 255, 0.05)'
                        : 'rgba(8, 145, 178, 0.08)',
                    borderRadius: '20px',
                    border: theme === 'dark'
                        ? '1px solid rgba(0, 217, 255, 0.2)'
                        : '1px solid rgba(8, 145, 178, 0.2)'
                }}>
                    <p style={{ fontSize: '1.1rem', marginBottom: '20px', color: 'var(--text-primary)' }}>
                        Still have questions?
                    </p>
                    <button
                        className="btn-primary"
                        style={{
                            padding: '14px 30px'
                        }}
                    >
                        Chat with our team
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FAQAccordion;
