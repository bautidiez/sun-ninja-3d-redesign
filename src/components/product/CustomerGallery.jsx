import React from 'react';
import cust1 from '../../assets/showcase-shower-1.jpg';
import cust2 from '../../assets/showcase-shower-2.jpg';
import cust3 from '../../assets/showcase-shower-3.jpg';
import cust4 from '../../assets/showcase-winter.jpg';
import cust5 from '../../assets/product-tent-4.jpg'; // Using product shot as fallback
import cust6 from '../../assets/showcase-tent-1.jpg';

const CustomerGallery = () => {
    // Social Proof - Real Customer Photos
    return (
        <section style={{ padding: '100px 0', background: 'var(--ocean-deep)' }}>
            <div className="container">
                <h2 className="animate-fade-in-up" style={{
                    textAlign: 'center',
                    fontSize: '3rem',
                    marginBottom: '60px',
                    color: 'var(--text-primary)'
                }}>
                    Real Customers. Real Stories.
                </h2>

                {/* Masonry-style grid of customer photos */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '20px',
                    marginBottom: '60px'
                }}>
                    {[
                        cust1, cust2, cust3, cust4, cust5, cust6
                    ].map((img, i) => (
                        <div key={i} className="glass-card animate-fade-in-up" style={{
                            borderRadius: '20px',
                            overflow: 'hidden',
                            height: i % 2 === 0 ? '350px' : '280px',
                            position: 'relative',
                            cursor: 'pointer',
                            animationDelay: `${i * 0.1}s`
                        }}>
                            <img src={img} alt={`Customer ${i}`} style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover'
                            }} />

                            {/* Hover overlay con review */}
                            <div style={{
                                position: 'absolute',
                                inset: 0,
                                background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)',
                                opacity: 0,
                                transition: 'opacity 0.3s ease',
                                padding: '20px',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'flex-end'
                            }}
                                onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
                                onMouseLeave={(e) => e.currentTarget.style.opacity = 0}
                            >
                                <div style={{ color: '#FFD700', marginBottom: '10px' }}>★★★★★</div>
                                <p style={{ fontSize: '0.9rem', fontStyle: 'italic', color: '#fff' }}>
                                    "Best beach purchase ever! Saved our vacation."
                                </p>
                                <p style={{ fontSize: '0.85rem', marginTop: '5px', color: 'var(--turquoise)' }}>
                                    - Verified Buyer
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Instagram-style caption */}
                <div className="animate-fade-in-up delay-200" style={{ textAlign: 'center' }}>
                    <p style={{
                        fontSize: '1.1rem',
                        color: 'var(--text-secondary)',
                        marginBottom: '20px'
                    }}>
                        Tag us @sunninja for a chance to be featured
                    </p>
                    <button className="btn-glass">
                        View All 9,200+ Reviews
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CustomerGallery;
