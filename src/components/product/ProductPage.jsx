import React, { useEffect, useState } from 'react';
import tentHeroImage from '../../assets/hero-image.jpg';
import qualityImage from '../../assets/quality-fabric.jpg';
import setup1 from '../../assets/setup-1.jpg';
import setup2 from '../../assets/setup-2.jpg';
import setup3 from '../../assets/setup-3.jpg';

const ProductPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [selectedColor, setSelectedColor] = useState('blue');

    return (
        <div style={{ background: 'var(--bg-main)', color: '#fff', minHeight: '100vh', overflowX: 'hidden' }}>

            {/* 1. 3D HERO PRODUCT SECTION */}
            <section style={{
                paddingTop: '120px', paddingBottom: '80px',
                background: 'radial-gradient(circle at 50% 0%, #1a3c75 0%, var(--bg-main) 60%)'
            }}>
                <div className="container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '60px' }}>

                    {/* Left: 3D Visual / Interactive Area */}
                    <div className="animate-fade-in-up" style={{ flex: '1 1 500px', perspective: '1000px' }}>
                        {/* 3D Tilt Card Container */}
                        <div style={{
                            position: 'relative', width: '100%', height: '600px',
                            borderRadius: '30px',
                            background: `url(${tentHeroImage}) center/cover`,
                            boxShadow: 'var(--shadow-float)',
                            transform: 'rotateY(5deg) rotateX(2deg)', /* Static tilt for demo */
                            transition: 'transform 0.5s ease'
                        }}>
                            {/* Floating Annotations */}
                            <div style={{ position: 'absolute', top: '20%', right: '-20px', background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', padding: '10px 20px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.2)', animation: 'float 3s infinite ease-in-out' }}>
                                ☀️ UPF 50+
                            </div>
                            <div style={{ position: 'absolute', bottom: '20%', left: '-20px', background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', padding: '10px 20px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.2)', animation: 'float 4s infinite ease-in-out', animationDelay: '1s' }}>
                                🌬️ Wind Stable
                            </div>
                        </div>
                    </div>

                    {/* Right: Glass Buy Box */}
                    <div className="animate-fade-in-up delay-100 glass-panel" style={{
                        flex: '1 1 450px', padding: '40px', borderRadius: '30px', position: 'relative'
                    }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                            <span className="text-gold" style={{ fontWeight: '700', letterSpacing: '1px' }}>★ BEST SELLER</span>
                            <span style={{ color: 'var(--turquoise)' }}>In Stock</span>
                        </div>

                        <h1 style={{ fontSize: '3.5rem', lineHeight: '1', marginBottom: '20px', background: 'linear-gradient(to right, #fff, #cbd5e1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                            The Sun Ninja <br /> Original.
                        </h1>

                        <div style={{ display: 'flex', alignItems: 'baseline', gap: '20px', marginBottom: '30px' }}>
                            <span style={{ fontSize: '2.5rem', fontWeight: '700', color: 'var(--coral)' }}>$129</span>
                            <span style={{ fontSize: '1.2rem', textDecoration: 'line-through', opacity: 0.5 }}>$159</span>
                        </div>

                        {/* 3D Color Selector */}
                        <div style={{ marginBottom: '30px' }}>
                            <p style={{ marginBottom: '15px', color: 'var(--text-secondary)' }}>Select Color: <span style={{ color: '#fff' }}>{selectedColor.charAt(0).toUpperCase() + selectedColor.slice(1)}</span></p>
                            <div style={{ display: 'flex', gap: '15px' }}>
                                {['blue', 'turquoise', 'coral', 'sand'].map(color => (
                                    <button
                                        key={color}
                                        onClick={() => setSelectedColor(color)}
                                        style={{
                                            width: '40px', height: '40px', borderRadius: '50%',
                                            background: `var(--${color === 'blue' ? 'ocean-main' : color})`,
                                            border: selectedColor === color ? '2px solid #fff' : '2px solid transparent',
                                            boxShadow: selectedColor === color ? '0 0 15px var(--turquoise-glow)' : 'none',
                                            transform: selectedColor === color ? 'scale(1.1)' : 'scale(1)',
                                            transition: 'all 0.3s ease'
                                        }}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* CTA */}
                        <button className="btn-primary" style={{ width: '100%', fontSize: '1.2rem', padding: '20px', marginBottom: '20px' }}>
                            Add to Cart
                        </button>

                        <p style={{ textAlign: 'center', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                            🚚 Free Shipping & 30-Day Returns
                        </p>
                    </div>
                </div>
            </section>

            {/* 2. GLASSMORPHISM SPECS GRID */}
            <section style={{ padding: '100px 0', position: 'relative' }}>
                {/* Floating background shape */}
                <div style={{ position: 'absolute', top: '0', right: '0', width: '500px', height: '500px', background: 'var(--ocean-light)', opacity: 0.05, borderRadius: '50%', filter: 'blur(80px)' }}></div>

                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                        {[
                            { title: 'UPF 50+', desc: 'Blocks 98% of UV rays' },
                            { title: 'Wind Stable', desc: 'Anchored by nature (sand)' },
                            { title: 'Water Resistant', desc: 'Quick-dry spandex fabric' }
                        ].map((item, i) => (
                            <div key={i} className="glass-card" style={{ padding: '30px', borderRadius: '20px' }}>
                                <h3 style={{ fontSize: '2rem', marginBottom: '10px', color: 'var(--turquoise)' }}>{item.title}</h3>
                                <p style={{ color: 'var(--text-secondary)' }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. ISOMETRIC SETUP TIMELINE */}
            <section style={{ padding: '100px 0', background: '#020C1F' }}>
                <div className="container">
                    <h2 style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '80px' }}>Instant Setup.</h2>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', position: 'relative' }}>
                        {/* Connecting Line */}
                        <div style={{ position: 'absolute', top: '50%', left: '0', width: '100%', height: '2px', background: 'rgba(255,255,255,0.1)', zIndex: 0, display: 'none' /* hidden on mobile, logical fix needed for desktop */ }}></div>

                        {[
                            { img: setup1, step: '01', title: 'Lay Flat' },
                            { img: setup2, step: '02', title: 'Fill Sand' },
                            { img: setup3, step: '03', title: 'Pop Up' }
                        ].map((item, i) => (
                            <div key={i} className="animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s`, position: 'relative', zIndex: 1, textAlign: 'center' }}>
                                <div style={{
                                    width: '100%', height: '250px', borderRadius: '20px', overflow: 'hidden', marginBottom: '30px',
                                    boxShadow: 'var(--shadow-float)', border: '1px solid rgba(255,255,255,0.1)'
                                }}>
                                    <img src={item.img} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                                <div style={{ fontSize: '4rem', fontWeight: '800', color: 'rgba(255,255,255,0.05)', position: 'absolute', top: '-20px', left: '50%', transform: 'translateX(-50%)' }}>
                                    {item.step}
                                </div>
                                <h3 style={{ fontSize: '1.5rem', color: 'var(--turquoise)' }}>{item.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default ProductPage;
