export const fireConfetti = () => {
    const colors = ['#00D9FF', '#FF6B6B', '#FFD700'];
    let count = 0;
    const shoot = () => {
        if (count++ > 180) return;
        const p = document.createElement('div');
        // Random start position near top center or spread
        const startX = Math.random() * 100;

        p.style.cssText = `
      position: fixed;
      left: ${startX}vw;
      top: -10px;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: ${colors[Math.floor(Math.random() * 3)]};
      box-shadow: 0 0 20px currentColor;
      pointer-events: none;
      z-index: 99999;
    `;

        document.body.appendChild(p);

        const angle = Math.random() * 360;
        const velocity = 12 + Math.random() * 18;

        const animation = p.animate([
            { transform: 'translate(0,0) rotate(0deg)', opacity: 1 },
            { transform: `translate(${Math.cos(angle) * velocity * 30}px, ${window.innerHeight + 50}px) rotate(${angle + 1080}deg)`, opacity: 0 }
        ], {
            duration: 2200 + Math.random() * 1800,
            easing: 'cubic-bezier(0.1, 0.7, 0.3, 1)'
        });

        animation.onfinish = () => p.remove();

        requestAnimationFrame(shoot);
    };
    shoot();
};
