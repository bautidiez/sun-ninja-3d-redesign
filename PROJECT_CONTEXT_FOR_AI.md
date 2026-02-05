# Project Context: Sun Ninja 3D Redesign

Generated on: 2026-02-05T22:19:59.599Z

## File: index.html
```html
<!doctype html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <link rel="icon" type="image/png" href="/favicon.png?v=4" />
  <link rel="apple-touch-icon" href="/favicon.png?v=4" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Sun Ninja | Premium Beach Shade</title>
</head>

<body>
  <div id="root"></div>
  <script type="module" src="/src/main.jsx"></script>
</body>

</html>
```

## File: package.json
```json
{
  "name": "prueba",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "@react-three/drei": "^10.7.7",
    "@react-three/fiber": "^9.5.0",
    "framer-motion": "^12.33.0",
    "react": "^19.2.0",
    "react-dom": "^19.2.0",
    "react-router-dom": "^7.13.0",
    "react-slick": "^0.31.0",
    "slick-carousel": "^1.8.1",
    "three": "^0.182.0"
  },
  "devDependencies": {
    "@eslint/js": "^9.39.1",
    "@types/react": "^19.2.5",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "^5.1.1",
    "eslint": "^9.39.1",
    "eslint-plugin-react-hooks": "^7.0.1",
    "eslint-plugin-react-refresh": "^0.4.24",
    "globals": "^16.5.0",
    "vite": "^7.2.4"
  }
}

```

## File: vite.config.js
```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})

```

## File: src\App.jsx
```jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './components/home/Home';
import ProductPage from './components/product/ProductPage';
import Preloader from './components/layout/Preloader';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<ProductPage />} />
        {/* Fallback for "Shop" generic links for now */}
        <Route path="/products" element={<ProductPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

```

## File: src\components\3d\OceanWaves.jsx
```jsx
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const WaveParticles = () => {
    const count = 2000;
    const mesh = useRef();

    // Create particles with random positions
    const particles = useMemo(() => {
        const temp = [];
        for (let i = 0; i < count; i++) {
            const x = (Math.random() - 0.5) * 20; // Spread x
            const z = (Math.random() - 0.5) * 20; // Spread z
            const y = 0;
            temp.push(x, y, z);
        }
        return new Float32Array(temp);
    }, [count]);

    useFrame((state) => {
        if (!mesh.current) return;
        const time = state.clock.getElapsedTime();

        // Animate wave movement
        const positions = mesh.current.geometry.attributes.position.array;
        for (let i = 0; i < count; i++) {
            const x = positions[i * 3];
            const z = positions[i * 3 + 2];

            // Wave formula: smooth sine waves mixed
            positions[i * 3 + 1] =
                Math.sin(x * 0.5 + time * 0.5) * 0.5 +
                Math.cos(z * 0.3 + time * 0.3) * 0.5;
        }
        mesh.current.geometry.attributes.position.needsUpdate = true;
    });

    return (
        <points ref={mesh}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={particles.length / 3}
                    array={particles}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.06}
                color="#00D9FF"
                transparent
                opacity={0.6}
                sizeAttenuation
                blending={THREE.AdditiveBlending}
            />
        </points>
    );
};

const OceanWaves = () => {
    return (
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, background: 'linear-gradient(to bottom, #051A3B, #0A2463)' }}>
            <Canvas camera={{ position: [0, 5, 10], fov: 45 }}>
                <fog attach="fog" args={['#051A3B', 5, 20]} />
                <ambientLight intensity={0.5} />
                <WaveParticles />
            </Canvas>
            {/* Vignette Overlay for Depth */}
            <div style={{
                position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                background: 'radial-gradient(circle, transparent 40%, #020C1F 100%)',
                pointerEvents: 'none'
            }}></div>
        </div>
    );
};

export default OceanWaves;

```

## File: src\components\home\HeroSection.jsx
```jsx
import React from 'react';
import OceanWaves from '../3d/OceanWaves';

const HeroSection = () => {
    return (
        <section style={{ position: 'relative', height: '100vh', width: '100%', overflow: 'hidden' }}>
            {/* 3D Background - The "WOW" Factor */}
            <OceanWaves />

            {/* Content - Aesthetic Centerpiece */}
            <div className="container" style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', color: 'var(--text-primary)', position: 'relative', zIndex: 2 }}>
                <div style={{ maxWidth: '900px' }}>
                    <h1 className="animate-fade-in-up" style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: 'clamp(3rem, 6vw, 5.5rem)',
                        lineHeight: '1.0',
                        marginBottom: '1.5rem',
                        textShadow: '0 10px 30px rgba(0,0,0,0.5)',
                        letterSpacing: '-2px',
                        background: 'linear-gradient(180deg, #fff 0%, #a5b4fc 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}>
                        Your Private <br />
                        <span style={{ color: 'var(--turquoise)' }}>Beach Sanctuary.</span>
                    </h1>

                    <p className="animate-fade-in-up delay-100" style={{
                        fontSize: '1.4rem',
                        marginBottom: '3rem',
                        color: 'rgba(255,255,255,0.9)',
                        fontWeight: '400',
                        maxWidth: '600px',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        textShadow: '0 2px 10px rgba(0,0,0,0.5)'
                    }}>
                        Engineered for relaxation. The world's most trusted sun shelter with UPF50+ protection.
                    </p>

                    <div className="animate-fade-in-up delay-200" style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <button className="btn-primary">
                            Shop The Tent
                        </button>
                        <button className="btn-glass">
                            Watch the Film
                        </button>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="animate-fade-in-up delay-300" style={{
                position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)',
                opacity: 0.7, animation: 'bounce 2s infinite'
            }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
                </svg>
            </div>
        </section>
    );
};

export default HeroSection;

```

## File: src\components\home\Home.jsx
```jsx
import React from 'react';
import HeroSection from './HeroSection';
import ProductSpotlight from './ProductSpotlight';
import VersatilityGrid from './VersatilityGrid';
import SocialProof from './SocialProof';
import Newsletter from './Newsletter';
import tentImage from '../../assets/product-tent-1.jpg'; // Updated
import showerImage from '../../assets/showcase-shower-1.jpg';
import winterImage from '../../assets/showcase-winter.jpg';

const Home = () => {
    return (
        <main style={{ minHeight: '100vh', paddingTop: '0', background: 'var(--bg-main)' }}>
            <HeroSection />

            <ProductSpotlight
                title="4-Person Beach Tent"
                subtitle="Best Seller"
                description="The ultimate sun shelter for families. UPF50+ protection, 60-second setup, and built to withstand real beach conditions. Your secret to perfect beach days."
                image={tentImage}
                badge="Top Rated"
                price="$129"
                features={[
                    "Sets up in under 60 seconds",
                    "Blocks 98% of harmful UV rays",
                    "Wind-resistant anchoring system",
                    "Machine washable fabric"
                ]}
            />

            {/* ... other sections ... */}

            <SocialProof />
            <Newsletter />
        </main>
    );
};

export default Home;

```

## File: src\components\home\Newsletter.jsx
```jsx
import React from 'react';

const Newsletter = () => {
    return (
        <section style={{ padding: '80px 0', backgroundColor: 'var(--color-primary)', color: '#fff' }}>
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
                                border: 'none',
                                fontSize: '1rem',
                                outline: 'none',
                                color: '#333'
                            }}
                        />
                        <button
                            type="submit"
                            className="btn-primary"
                            style={{
                                padding: '18px 40px',
                                borderRadius: '50px',
                                background: 'var(--color-secondary)',
                                color: 'white',
                                fontWeight: '700',
                                fontSize: '1rem',
                                boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
                            }}
                        >
                            Subscribe
                        </button>
                    </form>
                    <p style={{ fontSize: '0.8rem', opacity: 0.7, marginTop: '1rem' }}>
                        We respect your privacy. Unsubscribe anytime.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;

```

## File: src\components\home\ProductSpotlight.jsx
```jsx
import React from 'react';
import { Link } from 'react-router-dom';

const ProductSpotlight = ({ title, subtitle, description, image, reverse, features, price, badge }) => {
    return (
        <section style={{ padding: '100px 0', position: 'relative' }}>
            {/* Ambient Background Glow */}
            <div style={{
                position: 'absolute', top: '50%', left: reverse ? '10%' : '90%', width: '400px', height: '400px',
                background: 'var(--turquoise)', opacity: 0.15, filter: 'blur(100px)', borderRadius: '50%',
                transform: 'translate(-50%, -50%)', zIndex: -1
            }}></div>

            <div className="container" style={{
                display: 'flex',
                flexDirection: reverse ? 'row-reverse' : 'row',
                alignItems: 'center',
                gap: '80px',
                flexWrap: 'wrap'
            }}>
                {/* Image Side - 3D Tilt Effect Potential */}
                <div className="animate-fade-in-up" style={{ flex: '1 1 500px', position: 'relative' }}>
                    {/* Decorative Ring */}
                    <div style={{
                        position: 'absolute', inset: '-20px', border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '30px', transform: 'rotate(-3deg)', zIndex: 0
                    }}></div>

                    <div style={{
                        position: 'relative', borderRadius: '30px', overflow: 'hidden',
                        boxShadow: 'var(--shadow-float)', zIndex: 1
                    }}>
                        <img src={image} alt={title} style={{ width: '100%', display: 'block', transition: 'transform 0.5s ease' }} />
                        {badge && (
                            <div style={{
                                position: 'absolute', top: '20px', left: '20px',
                                background: 'rgba(255, 255, 255, 0.9)', color: 'var(--ocean-main)',
                                padding: '8px 16px', borderRadius: '20px', fontWeight: '700',
                                boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
                            }}>
                                {badge}
                            </div>
                        )}
                    </div>
                </div>

                {/* Content Side with Glass Card effect */}
                <div className="animate-fade-in-up delay-100 glass-card" style={{
                    flex: '1 1 450px',
                    padding: '40px',
                    borderRadius: '24px'
                }}>
                    <span style={{
                        color: 'var(--turquoise)', fontWeight: '600', textTransform: 'uppercase',
                        letterSpacing: '2px', fontSize: '0.9rem', display: 'block', marginBottom: '10px'
                    }}>
                        {subtitle}
                    </span>
                    <h2 style={{ fontSize: '3rem', marginBottom: '20px', lineHeight: 1.1, color: '#fff' }}>
                        {title}
                    </h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '30px', fontWeight: '300' }}>
                        {description}
                    </p>

                    {features && (
                        <ul style={{ marginBottom: '3rem', display: 'grid', gap: '1.2rem' }}>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '15px', fontWeight: '500', color: '#444' }}>
                                <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'var(--color-bg-main)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)' }}>✓</div>
                                UPF 50+ Sun Protection
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '15px', fontWeight: '500', color: '#444' }}>
                                <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'var(--color-bg-main)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)' }}>✓</div>
                                Sand Anchor System (Wind Proof)
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '15px', fontWeight: '500', color: '#444' }}>
                                <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'var(--color-bg-main)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)' }}>✓</div>
                                Lightweight & Portable
                            </li>
                        </ul>
                    )}

                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                        <Link to="/product" className="btn-primary" style={{ padding: '20px 50px', borderRadius: '50px', boxShadow: '0 10px 25px rgba(244, 180, 0, 0.3)' }}>
                            Shop Now — $89
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductSpotlight;

```

## File: src\components\home\SocialProof.jsx
```jsx
import React from 'react';

const SocialProof = () => {
    return (
        <section style={{ padding: '80px 0', backgroundColor: '#fff', textAlign: 'center' }}>
            <div className="container">
                <h2 style={{ fontSize: '2.5rem', color: 'var(--color-primary)', marginBottom: '60px' }}>Loved By Thousands</h2>

                {/* Stats */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '80px',
                    marginBottom: '80px',
                    flexWrap: 'wrap'
                }}>
                    <div>
                        <div style={{ fontSize: '3rem', fontWeight: '800', color: 'var(--color-secondary)' }}>9,200+</div>
                        <div style={{ fontSize: '1.1rem', fontWeight: '600', color: '#555' }}>5-Star Reviews</div>
                    </div>
                    <div>
                        <div style={{ fontSize: '3rem', fontWeight: '800', color: 'var(--color-secondary)' }}>4.8</div>
                        <div style={{ fontSize: '1.1rem', fontWeight: '600', color: '#555' }}>Average Rating</div>
                    </div>
                    <div>
                        <div style={{ fontSize: '3rem', fontWeight: '800', color: 'var(--color-secondary)' }}>98%</div>
                        <div style={{ fontSize: '1.1rem', fontWeight: '600', color: '#555' }}>Recommend Us</div>
                    </div>
                </div>

                {/* Reviews Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '30px',
                    textAlign: 'left'
                }}>
                    {[
                        { name: "Jennifer M.", text: "Game changer for our family beach trips! Setup is ridiculously easy and the shade coverage is perfect." },
                        { name: "Michael T.", text: "Best beach investment ever. Quality is outstanding and the UV protection gives me peace of mind." },
                        { name: "Sarah L.", text: "Survived windy beach conditions without any issues. So much better than our old umbrella." }
                    ].map((review, i) => (
                        <div key={i} style={{
                            padding: '30px',
                            background: 'var(--color-surface)',
                            borderRadius: '16px',
                            border: '1px solid #eee'
                        }}>
                            <div style={{ color: '#FFD700', fontSize: '1.2rem', marginBottom: '1rem' }}>★★★★★</div>
                            <p style={{ fontStyle: 'italic', marginBottom: '1.5rem', color: '#444' }}>"{review.text}"</p>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <div style={{ fontWeight: '700', color: 'var(--color-primary)' }}>{review.name}</div>
                                <span style={{ fontSize: '0.8rem', color: '#28a745', background: '#e6f4ea', padding: '2px 8px', borderRadius: '4px' }}>✓ Verified</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SocialProof;

```

## File: src\components\home\VersatilityGrid.jsx
```jsx
import React from 'react';

const VersatilityGrid = () => {
    const items = [
        { icon: '🏖️', title: 'Beach Days', desc: 'Perfect for family beach outings', color: 'var(--color-bg-section)' },
        { icon: '🏕️', title: 'Camping Trips', desc: 'Lightweight & portable for backcountry', color: 'var(--color-bg-section)' },
        { icon: '🌳', title: 'Park Picnics', desc: 'Instant shade for any gathering', color: 'var(--color-bg-section)' },
        { icon: '🎵', title: 'Outdoor Events', desc: 'Concerts, sports games, festivals', color: 'var(--color-bg-section)' },
    ];

    return (
        <section style={{ padding: '80px 0', backgroundColor: 'var(--color-surface)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                    <h2 style={{ fontSize: '3rem', color: 'var(--color-primary)', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>Beyond The Beach.</h2>
                    <p style={{ fontSize: '1.25rem', color: '#666', fontFamily: 'var(--font-body)', fontWeight: '300' }}>Perfect shade solution for every outdoor adventure.</p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '30px'
                }}>
                    {items.map((item, index) => (
                        <div key={index}
                            className="animate-fade-in-up"
                            style={{
                                borderRadius: '24px',
                                overflow: 'hidden',
                                position: 'relative',
                                height: '350px', // Taller for more impact
                                boxShadow: 'var(--shadow-md)',
                                transition: 'all 0.4s ease',
                                cursor: 'default',
                                transform: 'translateY(0)'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-10px)';
                                e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                            }}
                        >
                            <div style={{
                                height: '100%',
                                width: '100%',
                                background: item.color,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <span style={{ fontSize: '5rem', filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.2))' }}>{item.icon}</span>
                            </div>

                            {/* Glassmorphism Overlay */}
                            <div style={{
                                position: 'absolute',
                                bottom: '20px',
                                left: '20px',
                                right: '20px',
                                padding: '24px',
                                background: 'rgba(255,255,255,0.85)',
                                backdropFilter: 'blur(12px)',
                                borderRadius: '20px',
                                border: '1px solid rgba(255,255,255,0.5)'
                            }}>
                                <h3 style={{ fontSize: '1.25rem', color: 'var(--color-primary)', marginBottom: '0.5rem', fontWeight: '800' }}>{item.title}</h3>
                                <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: '1.4' }}>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default VersatilityGrid;

```

## File: src\components\layout\Footer.jsx
```jsx
import React from 'react';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: 'var(--color-primary)', color: '#fff', padding: '60px 0 20px' }}>
            <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: '40px', marginBottom: '40px' }}>
                <div>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Sun Ninja</h3>
                    <p style={{ opacity: 0.8, maxWidth: '300px' }}>
                        Premium sun shelters for your outdoor adventures. Making every beach day perfect since 2018.
                    </p>
                </div>
                <div>
                    <h4>Shop</h4>
                    <ul style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', opacity: 0.8 }}>
                        <li><a href="#">Beach Tents</a></li>
                        <li><a href="#">Showers</a></li>
                        <li><a href="#">Accessories</a></li>
                    </ul>
                </div>
                <div>
                    <h4>Support</h4>
                    <ul style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', opacity: 0.8 }}>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Shipping</a></li>
                        <li><a href="#">Returns</a></li>
                    </ul>
                </div>
                <div>
                    <h4>Company</h4>
                    <ul style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', opacity: 0.8 }}>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Terms</a></li>
                        <li><a href="#">Privacy</a></li>
                    </ul>
                </div>
            </div>
            <div className="container" style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px', textAlign: 'center', fontSize: '0.9rem', opacity: 0.6 }}>
                &copy; 2026 Sun Ninja. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;

```

## File: src\components\layout\Header.jsx
```jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/Sun_Ninja_Logo_White.svg';
// Assuming we strictly want white for transparent header, but logic might vary. 
// Actually, let's stick to the white logo for the overlay style generally used in premium headers, 
// or switch if we implement sticky state with white background.

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            padding: '1.5rem 0',
            transition: 'all 0.3s ease',
            backgroundColor: isScrolled ? 'rgba(10, 36, 99, 0.95)' : 'transparent', // Deep blue sticky
            backdropFilter: isScrolled ? 'blur(10px)' : 'none',
            boxShadow: isScrolled ? 'var(--shadow-sm)' : 'none',
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link to="/" className="logo">
                    <img src={logo} alt="Sun Ninja" style={{ height: '40px' }} />
                </Link>

                <ul style={{ display: 'flex', gap: '2rem', color: '#fff', fontWeight: '500' }} className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/product">Shop</Link></li>
                    <li><a href="#about">About</a></li> {/* Keep anchor for scroll sections if valid */}
                    <li><a href="#reviews">Reviews</a></li>
                </ul>

                <button className="btn-primary" style={{ padding: '8px 20px', fontSize: '0.9rem' }}>
                    Cart (0)
                </button>
            </div>
        </nav>
    );
};

export default Header;

```

## File: src\components\layout\Preloader.jsx
```jsx
import React from 'react';
import logoReload from '../../assets/Sun_Ninja_Logo_White.svg'; // Using SVG for perfect transparency

const Preloader = () => {
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: '#0A2463', // Brand Primary Color (Deep Ocean)
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
        }}>
            <div style={{
                width: '220px',
                marginBottom: '40px'
            }}>
                <img
                    src={logoReload}
                    alt="Sun Ninja"
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                />
            </div>

            {/* Stepped Loading Line */}
            <div className="loading-line-container">
                <div className="loading-line"></div>
            </div>

            <style>{`
        .loading-line-container {
          width: 200px;
          height: 4px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 2px;
          overflow: hidden;
        }

        .loading-line {
          width: 0%;
          height: 100%;
          background: #fff;
          border-radius: 2px;
          animation: steppedProgress 2s ease-out forwards;
        }

        @keyframes steppedProgress {
          0% { width: 0%; }
          30% { width: 40%; }
          60% { width: 75%; }
          100% { width: 100%; }
        }
      `}</style>
        </div>
    );
};

export default Preloader;

```

## File: src\components\layout\ThemeContext.jsx
```jsx
import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme') || 'dark';
    });

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'dark' ? 'light' : 'dark');
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);

```

## File: src\components\product\ProductPage.jsx
```jsx
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

```

## File: src\index.css
```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Inter:wght@300;400;500;600&family=Lora:ital,wght@0,400;0,600;1,400&display=swap');

:root {
  /* --- 3D Ocean Premium Palette --- */

  /* Primary Depths */
  --ocean-deep: #051A3B;
  /* Darker Abyss for contrast */
  --ocean-main: #0A2463;
  /* Standard Brand Blue */
  --ocean-light: #3E92CC;
  /* Suface water */

  /* Highlights & Accents */
  --turquoise: #00D9FF;
  /* Electric Cyan - Tech/Modern feel */
  --turquoise-glow: rgba(0, 217, 255, 0.4);
  --coral: #FF6B6B;
  /* Energetic CTA */
  --coral-hover: #FF8585;
  --sand: #F4E7D7;
  /* Natural warmth */

  /* Backgrounds */
  --bg-main: #020C1F;
  /* Deep spatial background for 3D */
  --bg-surface: #ffffff;
  --bg-glass: rgba(255, 255, 255, 0.03);

  /* Text */
  --text-primary: #FFFFFF;
  /* Default to light on dark for modern feel */
  --text-secondary: #94A3B8;
  --text-dark: #1E293B;
  /* For white cards */

  /* Gradients */
  --gradient-ocean: linear-gradient(135deg, var(--ocean-deep) 0%, var(--ocean-main) 100%);
  --gradient-glow: linear-gradient(90deg, var(--turquoise) 0%, #4facfe 100%);
  --gradient-gold: linear-gradient(45deg, #FFD700 0%, #FDB931 100%);

  /* Typography */
  --font-heading: 'Poppins', sans-serif;
  --font-body: 'Inter', sans-serif;
  --font-accent: 'Lora', serif;

  /* Spacing & Shapes */
  --radius-sm: 8px;
  --radius-md: 16px;
  --radius-lg: 32px;
  --radius-full: 9999px;

  /* 3D Shadows & Glows */
  --shadow-sm: 0 4px 12px rgba(0, 0, 0, 0.2);
  --shadow-float: 0 20px 40px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 217, 255, 0.1);
  --shadow-neon: 0 0 15px var(--turquoise-glow);
  --glass-border: 1px solid rgba(255, 255, 255, 0.1);
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: var(--font-body);
  color: var(--text-primary);
  background-color: var(--bg-main);
  /* Default to dark mode for 3D pop */
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: var(--font-heading);
  font-weight: 700;
  line-height: 1.1;
  color: var(--text-primary);
  letter-spacing: -0.02em;
}

a {
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
}

ul {
  list-style: none;
}

button {
  font-family: var(--font-heading);
  cursor: pointer;
  border: none;
  background: none;
}

/* --- Glassmorphism Utilities --- */

.glass-panel {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: var(--glass-border);
  box-shadow: var(--shadow-sm);
}

.glass-card {
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.glass-card:hover {
  transform: translateY(-5px) scale(1.01);
  box-shadow: var(--shadow-float);
  border-color: rgba(0, 217, 255, 0.3);
}

/* --- Typography Utilities --- */

.text-gradient {
  background: var(--gradient-glow);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.text-gold {
  background: var(--gradient-gold);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* --- Layout Utilities --- */
.container {
  max-width: 1400px;
  /* Wider for modern look */
  margin: 0 auto;
  padding: 0 32px;
}

/* --- Buttons --- */
.btn-primary {
  background: var(--coral);
  color: #fff;
  padding: 16px 40px;
  border-radius: var(--radius-full);
  font-weight: 600;
  letter-spacing: 0.5px;
  box-shadow: 0 10px 20px rgba(255, 107, 107, 0.3);
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-primary:hover {
  background: var(--coral-hover);
  transform: translateY(-3px);
  box-shadow: 0 15px 30px rgba(255, 107, 107, 0.4);
}

.btn-glass {
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 16px 40px;
  border-radius: var(--radius-full);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.btn-glass:hover {
  background: rgba(255, 255, 255, 0.2);
  border-color: #fff;
}

/* --- Animations --- */
.animate-fade-in-up {
  animation: fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  opacity: 0;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.delay-100 {
  animation-delay: 0.1s;
}

.delay-200 {
  animation-delay: 0.2s;
}

.delay-300 {
  animation-delay: 0.3s;
}
```

## File: src\main.jsx
```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

```

