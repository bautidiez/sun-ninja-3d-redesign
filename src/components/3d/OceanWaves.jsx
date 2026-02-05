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
