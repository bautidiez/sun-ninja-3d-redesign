// ===================================
// SUN NINJA PREMIUM INTERACTIONS
// ENHANCED VERSION
// ===================================

document.addEventListener('DOMContentLoaded', function () {

    // ===================================
    // SMOOTH SCROLL REVEAL ANIMATIONS
    // ===================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0) scale(1)';
                }, index * 100);
            }
        });
    }, observerOptions);

    // Animate all premium cards
    document.querySelectorAll('.premium-card, .enhanced-card, .benefit-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px) scale(0.95)';
        card.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        revealObserver.observe(card);
    });

    // ===================================
    // COLOR SWATCH SELECTOR
    // ===================================
    const swatches = document.querySelectorAll('.swatch-animated');
    const colorNameDisplay = document.querySelector('.color-name');

    const colorNames = {
        'turquoise': 'Turquoise',
        'navy': 'Deep Navy',
        'royal-blue': 'Royal Blue',
        'green': 'Palm Green'
    };

    swatches.forEach(swatch => {
        swatch.addEventListener('click', function () {
            // Remove active from all
            swatches.forEach(s => s.classList.remove('active'));
            // Add active to clicked
            this.classList.add('active');

            // Update color name
            const colorKey = this.getAttribute('data-color');
            if (colorNameDisplay && colorNames[colorKey]) {
                colorNameDisplay.textContent = colorNames[colorKey];

                // Animate color name change
                colorNameDisplay.style.transform = 'scale(1.1)';
                setTimeout(() => {
                    colorNameDisplay.style.transform = 'scale(1)';
                }, 200);
            }
        });
    });

    // ===================================
    // THUMBNAIL GALLERY NAVIGATION
    // ===================================
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.querySelector('.gallery-main');

    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', function () {
            // Remove active from all
            thumbnails.forEach(t => t.classList.remove('active'));
            // Add active to clicked
            this.classList.add('active');

            // Animate main image change
            if (mainImage) {
                mainImage.style.opacity = '0';
                mainImage.style.transform = 'scale(0.95)';

                setTimeout(() => {
                    mainImage.style.opacity = '1';
                    mainImage.style.transform = 'scale(1)';
                }, 300);
            }
        });
    });

    // ===================================
    // PREMIUM CTA INTERACTIONS
    // ===================================
    const ctaButtons = document.querySelectorAll('.cta-primary');
    const cartCount = document.querySelector('.cart-count');

    ctaButtons.forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();

            const originalText = this.querySelector('.cta-text').textContent;
            const ctaText = this.querySelector('.cta-text');
            const ctaIcon = this.querySelector('.cta-icon');

            // Button feedback
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);

            // Update text
            ctaText.textContent = '✓ Added to Cart!';
            ctaIcon.textContent = '✓';

            // Update cart count
            if (cartCount) {
                const currentCount = parseInt(cartCount.textContent) || 0;
                cartCount.textContent = currentCount + 1;

                // Animate cart count
                cartCount.style.transform = 'scale(1.5)';
                setTimeout(() => {
                    cartCount.style.transform = 'scale(1)';
                }, 300);
            }

            // Reset button after delay
            setTimeout(() => {
                ctaText.textContent = originalText;
                ctaIcon.textContent = '→';
            }, 2000);
        });
    });

    // ===================================
    // COMPARISON TABLE ROW HIGHLIGHTS
    // ===================================
    const tableRows = document.querySelectorAll('.table-row');

    tableRows.forEach(row => {
        row.addEventListener('mouseenter', function () {
            this.style.transform = 'translateX(8px)';
        });

        row.addEventListener('mouseleave', function () {
            this.style.transform = 'translateX(0)';
        });
    });

    // ===================================
    // ANIMATED CHECK MARKS ON SCROLL
    // ===================================
    const checkIcons = document.querySelectorAll('.check-icon.animated');

    const checkObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'none';
                setTimeout(() => {
                    entry.target.style.animation = '';
                }, 10);
            }
        });
    }, { threshold: 0.5 });

    checkIcons.forEach(icon => checkObserver.observe(icon));

    // ===================================
    // PARALLAX EFFECT FOR FINAL CTA
    // ===================================
    const parallaxBg = document.querySelector('.parallax-bg');

    if (parallaxBg) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const sectionTop = parallaxBg.closest('.premium-cta-section').offsetTop;
            const offset = (scrolled - sectionTop) * 0.3;
            parallaxBg.style.transform = `translateY(${offset}px)`;
        });
    }

    // ===================================
    // NAVBAR SCROLL EFFECTS
    // ===================================
    const nav = document.querySelector('.main-nav');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            nav.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.12)';
            nav.style.background = 'rgba(255, 255, 255, 0.95)';
        } else {
            nav.style.boxShadow = '0 4px 24px rgba(0, 0, 0, 0.06)';
            nav.style.background = 'rgba(255, 255, 255, 0.85)';
        }

        // Hide/show nav on scroll
        if (currentScroll > lastScroll && current Scroll > 500) {
        nav.style.transform = 'translateY(-100%)';
    } else {
        nav.style.transform = 'translateY(0)';
    }

    lastScroll = currentScroll;
});

// ===================================
// CARD TILT EFFECT (3D)
// ===================================
const tiltCards = document.querySelectorAll('[data-tilt]');

tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-12px)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// ===================================
// HELPFUL BUTTON INTERACTIONS
// ===================================
const helpfulBtns = document.querySelectorAll('.helpful-btn');

helpfulBtns.forEach(btn => {
    btn.addEventListener('click', function () {
        const match = this.textContent.match(/\d+/);
        if (match) {
            const currentCount = parseInt(match[0]);
            this.textContent = `Helpful (${currentCount + 1})`;

            // Visual feedback
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        }
    });
});

// ===================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// ANIMATE DECORATIONS ON LOAD
// ===================================
setTimeout(() => {
    const decorations = document.querySelectorAll('.decoration-dot, .decoration-spark');
    decorations.forEach((dot, index) => {
        setTimeout(() => {
            dot.style.opacity = '1';
            dot.style.transform = 'scale(1)';
        }, index * 200);
    });
}, 500);

// ===================================
// LOADING ANIMATION FOR IMAGES
// ===================================
const images = document.querySelectorAll('img');
images.forEach(img => {
    img.style.opacity = '0';
    img.addEventListener('load', function () {
        this.style.transition = 'opacity 0.5s ease';
        this.style.opacity = '1';
    });

    // If already loaded
    if (img.complete) {
        img.style.opacity = '1';
    }
});

// ===================================
// SECTION DECORATIONS ANIMATION
// ===================================
const sectionDecorations = document.querySelectorAll('.section-decoration');

const decorationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const lines = entry.target.querySelectorAll('.decoration-line');
            const circle = entry.target.querySelector('.decoration-circle');

            lines.forEach((line, index) => {
                setTimeout(() => {
                    line.style.width = '100px';
                    line.style.opacity = '1';
                }, index * 200);
            });

            if (circle) {
                setTimeout(() => {
                    circle.style.opacity = '1';
                    circle.style.transform = 'scale(1)';
                }, 400);
            }
        }
    });
}, { threshold: 0.5 });

sectionDecorations.forEach(decoration => {
    const lines = decoration.querySelectorAll('.decoration-line');
    const circle = decoration.querySelector('.decoration-circle');

    lines.forEach(line => {
        line.style.width = '0';
        line.style.opacity = '0';
        line.style.transition = 'all 0.6s ease';
    });

    if (circle) {
        circle.style.opacity = '0';
        circle.style.transform = 'scale(0)';
        circle.style.transition = 'all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
    }

    decorationObserver.observe(decoration);
});

// ===================================
// GRADIENT TEXT ANIMATION
// ===================================
const gradientTexts = document.querySelectorAll('.gradient-text');

gradientTexts.forEach(text => {
    text.style.backgroundSize = '200% auto';
    text.style.animation = 'gradient-slide 8s ease infinite';
});

// Add keyframes dynamically
if (!document.querySelector('#gradient-animation')) {
    const style = document.createElement('style');
    style.id = 'gradient-animation';
    style.textContent = `
            @keyframes gradient-slide {
                0%, 100% { background-position: 0% center; }
                50% { background-position: 100% center; }
            }
        `;
    document.head.appendChild(style);
}

// ===================================
// CURSOR GLOW EFFECT (PREMIUM)
// ===================================
const cursorGlow = document.createElement('div');
cursorGlow.className = 'cursor-glow';
cursorGlow.style.cssText = `
        position: fixed;
        width: 200px;
        height: 200px;
        background: radial-gradient(circle, rgba(0, 180, 216, 0.15) 0%, transparent 70%);
        pointer-events: none;
        z-index: 9999;
        transform: translate(-50%, -50%);
        transition: opacity 0.3s;
        opacity: 0;
    `;
document.body.appendChild(cursorGlow);

document.addEventListener('mousemove', (e) => {
    cursorGlow.style.left = e.clientX + 'px';
    cursorGlow.style.top = e.clientY + 'px';
    cursorGlow.style.opacity = '1';
});

document.addEventListener('mouseleave', () => {
    cursorGlow.style.opacity = '0';
});

// ===================================
// CONSOLE MESSAGE
// ===================================
console.log('%c🥷 Sun Ninja Premium Experience Loaded',
    'color: #00B4D8; font-size: 16px; font-weight: bold;');
console.log('%cPowered by advanced CSS & JavaScript interactions',
    'color: #0A2463; font-size: 12px;');
});
