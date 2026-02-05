import React from 'react';
import HeroSection from './HeroSection';
import ProductSpotlight from './ProductSpotlight';
import VersatilityGrid from './VersatilityGrid';
import ComparisonSection from './ComparisonSection'; // New import
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
            <VersatilityGrid />
            <ComparisonSection /> {/* Added Comparison Section */}

            <SocialProof />
            <Newsletter />
        </main>
    );
};

export default Home;
