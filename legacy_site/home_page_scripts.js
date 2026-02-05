// ===================================
// SUN NINJA HOME PAGE - INTERACTIONS
// ===================================

document.addEventListener('DOMContentLoaded', function () {

    // ===================================
    // ANIMATED COUNTER FOR STATS
    // ===================================
    const statNumbers = document.querySelectorAll('.stat-number');

    const animateCounter = (element) => {
        const target = parseFloat(element.getAttribute('data-target'));
        const isDecimal = target % 1 !== 0;
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;

        const counter = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(counter);
            }

            if (isDecimal) {
                element.textContent = current.toFixed(1);
            } else {
                element.textContent = Math.floor(current).toLocaleString();
            }
        }, 16);
    };

    // Observe stat numbers for animation trigger
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.target.textContent === '0') {
                animateCounter(entry.target);
            }
        });
    }, { threshold: 0.5 });

    statNumbers.forEach(stat => statsObserver.observe(stat));

    // ===================================
    // SCROLL ANIMATIONS
    // ===================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Animate cards on scroll
    const cards = document.querySelectorAll(
        '.versatility-card, .review-item, .stat-item'
    );

    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.6s ease ${index * 0.1}s`;
        fadeObserver.observe(card);
    });

    // ===================================
    // HERO BUTTONS
    // ===================================
    const primaryBtn = document.querySelector('.hero-ctas .btn-primary');
    const secondaryBtn = document.querySelector('.hero-ctas .btn-secondary');

    if (primaryBtn) {
        primaryBtn.addEventListener('click', () => {
            document.querySelector('#products').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }

    if (secondaryBtn) {
        secondaryBtn.addEventListener('click', () => {
            alert('Setup demo video would play here.\n\nIn production, this would open a modal with the product setup tutorial.');
        });
    }

    // ===================================
    // PRODUCT SHOWCASE CTA BUTTONS
    // ===================================
    const showcaseBtns = document.querySelectorAll('.showcase-cta .btn-primary');

    showcaseBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const originalText = this.textContent;
            this.textContent = '✓ Added to Cart!';
            this.style.background = 'linear-gradient(135deg, #2D6A4F, #52B788)';

            // Update cart count
            const cartBtn = document.querySelector('.cart-btn');
            if (cartBtn) {
                const currentCount = parseInt(cartBtn.textContent.match(/\d+/)[0]) || 0;
                cartBtn.textContent = `Cart (${currentCount + 1})`;
            }

            setTimeout(() => {
                this.textContent = originalText;
                this.style.background = '';
            }, 2000);
        });
    });

    // ===================================
    // VIDEO REVIEW CLICK
    // ===================================
    const videoThumbnail = document.querySelector('.video-thumbnail');
    if (videoThumbnail) {
        videoThumbnail.addEventListener('click', () => {
            alert('Customer video review would play here.\n\nIn production, this would open a modal with the customer testimonial video.');
        });
    }

    // ===================================
    // NEWSLETTER FORM
    // ===================================
    const newsletterForm = document.querySelector('.newsletter-form');

    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const emailInput = this.querySelector('.email-input');
            const submitBtn = this.querySelector('.btn-submit');
            const originalText = submitBtn.textContent;

            // Visual feedback
            submitBtn.textContent = '✓ Subscribed!';
            submitBtn.style.background = 'linear-gradient(135deg, #2D6A4F, #52B788)';
            emailInput.value = '';

            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.style.background = '';
            }, 3000);
        });
    }

    // ===================================
    // SMOOTH SCROLL FOR ALL LINKS
    // ===================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ===================================
    // NAVBAR SCROLL EFFECT
    // ===================================
    const nav = document.querySelector('.main-nav');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            nav.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.12)';
        } else {
            nav.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
        }

        lastScroll = currentScroll;
    });

    // ===================================
    // VERSATILITY CARD HOVER EFFECTS
    // ===================================
    const versatilityCards = document.querySelectorAll('.versatility-card');

    versatilityCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-12px) scale(1.02)';
        });

        card.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // ===================================
    // PARALLAX EFFECT FOR HERO
    // ===================================
    const hero = document.querySelector('.hero-home');

    if (hero) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallaxSpeed = 0.5;
            hero.style.backgroundPositionY = `${scrolled * parallaxSpeed}px`;
        });
    }

    console.log('🥷 Sun Ninja Home Page loaded successfully!');
});
