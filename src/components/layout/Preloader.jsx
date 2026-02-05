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
