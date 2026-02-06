import { useEffect, useRef } from 'react';

export const useSound = (base64Audio) => {
    const audioRef = useRef(null);

    useEffect(() => {
        if (!base64Audio) return;

        // Support both raw base64 and data URI
        const src = base64Audio.startsWith('data:')
            ? base64Audio
            : `data:audio/mp3;base64,${base64Audio}`;

        audioRef.current = new Audio(src);
        audioRef.current.volume = 0.4;
    }, [base64Audio]);

    const play = () => {
        if (audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play().catch((e) => console.log("Audio play failed (interaction required):", e));
        }
    };

    return { play };
};
