import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useTheme } from '../layout/ThemeContext';

const WaveParticles = ({ theme }) => {
    const count = 5000;
    const mesh = useRef();

    // Create particles with random positions
    const particles = useMemo(() => {
        const temp = [];
        for (let i = 0; i < count; i++) {
            const x = (Math.random() - 0.5) * 25;
            const z = (Math.random() - 0.5) * 25;
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

            // Complex wave movement
            positions[i * 3 + 1] =
                Math.sin(x * 0.4 + time * 0.4) * 0.6 +
                Math.cos(z * 0.2 + time * 0.3) * 0.4;
        }
        mesh.current.geometry.attributes.position.needsUpdate = true;
    });

    // Theme-based appearance
    const isDark = theme === 'dark';
    const color = isDark ? '#00D9FF' : '#01579b'; // Neon Cyan vs Deep Blue
    const blending = isDark ? THREE.AdditiveBlending : THREE.NormalBlending; // Glow vs Solid
    const opacity = isDark ? 0.8 : 0.5;

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
                size={0.12}
                color={color}
                transparent
                opacity={opacity}
                sizeAttenuation
                blending={blending}
                depthWrite={false}
            />
        </points>
    );
};

const OceanWaves = () => {
    const { theme } = useTheme();

    return (
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
            {/* Gradient Background - Dynamic based on theme */}
            <div style={{
                position: 'absolute',
                inset: 0,
                background: theme === 'dark'
                    ? 'radial-gradient(circle at center, #0A2463 0%, #020C1F 100%)' // Deep Ocean
                    : 'radial-gradient(circle at center, #E0F7FA 0%, #FFFFFF 100%)', // Light Breeze
                zIndex: -2,
                transition: 'background 0.5s ease'
            }}></div>

            <Canvas camera={{ position: [0, 6, 12], fov: 50 }}>
                <ambientLight intensity={theme === 'dark' ? 0.8 : 1.2} />
                <WaveParticles theme={theme} />
            </Canvas>
        </div>
    );
};

export default OceanWaves;
