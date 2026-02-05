import React from 'react';

const Newsletter = () => {
    return (
        <section style={{ padding: '80px 0', backgroundColor: 'var(--ocean-deep)', color: '#fff' }}>
            <div className="container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '60px' }}>
                <div style={{ flex: '1 1 400px' }}>
                    <h2 style={{ fontSize: '3rem', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)', lineHeight: 1 }}>Join The Tribe.</h2>
                    <p style={{ fontSize: '1.2rem', opacity: 0.9, fontWeight: '300' }}>
                        Get exclusive deals, beach tips, and product updates delivered to your inbox.
                    </p>
                </div>
                <div style={{ flex: '1 1 400px' }}>
                    <form style={{ display: 'flex', gap: '15px' }} onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            style={{
                                flex: 1,
                                padding: '18px 30px',
                                borderRadius: '50px',
                                border: '1px solid var(--glass-border)',
                                fontSize: '1rem',
                                outline: 'none',
                                color: 'var(--text-primary)',
                                background: 'var(--input-bg)',
                            }}
                        />
                        <button
                            type="submit"
                            className="btn-primary"
                            style={{
                                padding: '18px 40px',
                                borderRadius: '50px',
                                background: 'var(--coral)', // Ensure consistent primary action color
                                color: 'white',
                                fontWeight: '700',
                                fontSize: '1rem',
                                boxShadow: 'var(--shadow-lg)',
                                border: 'none',
                                cursor: 'pointer'
                            }}
                        >
                            Subscribe
                        </button>
                    </form>
                    <p style={{ fontSize: '0.8rem', opacity: 0.7, marginTop: '1rem', color: '#fff' }}>
                        We respect your privacy. Unsubscribe anytime.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
