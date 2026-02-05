// ===================================
// SUN NINJA PRODUCT PAGE - INTERACTIONS
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ===================================
    // COLOR SWATCH SELECTOR
    // ===================================
    const swatches = document.querySelectorAll('.swatch');
    const colorName = document.querySelector('.color-name');
    
    const colorNames = {
        'turquoise': 'Turquoise',
        'navy': 'Navy',
        'royal-blue': 'Royal Blue',
        'green': 'Green'
    };
    
    swatches.forEach(swatch => {
        swatch.addEventListener('click', function() {
            // Remove active class from all swatches
            swatches.forEach(s => s.classList.remove('active'));
            
            // Add active class to clicked swatch
            this.classList.add('active');
            
            // Update color name
            const color = this.getAttribute('data-color');
            colorName.textContent = colorNames[color] || 'Turquoise';
        });
    });
    
    // ===================================
    // THUMBNAIL CAROUSEL
    // ===================================
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.querySelector('.gallery-main');
    
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', function() {
            // Remove active class from all thumbnails
            thumbnails.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked thumbnail
            this.classList.add('active');
            
            // Update main image if thumbnail has an image
            const thumbImage = this.querySelector('img');
            if (thumbImage) {
                mainImage.src = thumbImage.src;
                mainImage.alt = thumbImage.alt;
            }
        });
    });
    
    // ===================================
    // SCROLL ANIMATIONS
    // ===================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe benefit cards
    const cards = document.querySelectorAll('.benefit-card, .review-card, .trust-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });
    
    // ===================================
    // ANIMATED COUNTERS (UV Stats)
    // ===================================
    const statNumber = document.querySelector('.stat-number');
    if (statNumber) {
        const targetValue = 98;
        let currentValue = 0;
        const duration = 2000; // 2 seconds
        const increment = targetValue / (duration / 16); // 60fps
        
        const statObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting && currentValue === 0) {
                    const counter = setInterval(() => {
                        currentValue += increment;
                        if (currentValue >= targetValue) {
                            currentValue = targetValue;
                            clearInterval(counter);
                        }
                        statNumber.textContent = Math.floor(currentValue) + '%';
                    }, 16);
                }
            });
        }, { threshold: 0.5 });
        
        statObserver.observe(statNumber);
    }
    
    // ===================================
    // COMPARISON BARS ANIMATION
    // ===================================
    const barFills = document.querySelectorAll('.bar-fill');
    if (barFills.length > 0) {
        const barObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const bar = entry.target;
                    const width = bar.style.width;
                    bar.style.width = '0%';
                    setTimeout(() => {
                        bar.style.width = width;
                    }, 100);
                }
            });
        }, { threshold: 0.5 });
        
        barFills.forEach(bar => barObserver.observe(bar));
    }
    
    // ===================================
    // SMOOTH SCROLL FOR NAVIGATION
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
    // CART BUTTON INTERACTION
    // ===================================
    const addToCartButtons = document.querySelectorAll('.cta-primary');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Visual feedback
            const originalText = this.textContent;
            this.textContent = '✓ Added to Cart!';
            this.style.background = 'linear-gradient(135deg, #2D6A4F, #52B788)';
            
            // Update cart count (simulated)
            const cartBtn = document.querySelector('.cart-btn');
            if (cartBtn) {
                const currentCount = parseInt(cartBtn.textContent.match(/\d+/)[0]) || 0;
                cartBtn.textContent = `Cart (${currentCount + 1})`;
            }
            
            // Reset after 2 seconds
            setTimeout(() => {
                this.textContent = originalText;
                this.style.background = '';
            }, 2000);
        });
    });
    
    // ===================================
    // VIDEO PLACEHOLDER CLICK
    // ===================================
    const videoPlaceholder = document.querySelector('.video-placeholder');
    if (videoPlaceholder) {
        videoPlaceholder.addEventListener('click', function() {
            alert('Video demo would play here.\n\nIn production, this would open a modal with the setup demonstration video.');
        });
    }
    
    // ===================================
    // NAVBAR SCROLL EFFECT
    // ===================================
    let lastScroll = 0;
    const nav = document.querySelector('.main-nav');
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            nav.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.12)';
        } else {
            nav.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
        }
        
        lastScroll = currentScroll;
    });
    
    // ===================================
    // SCENARIO CARDS HOVER EFFECT
    // ===================================
    const scenarioCards = document.querySelectorAll('.scenario-card');
    
    scenarioCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    console.log('🥷 Sun Ninja Product Page loaded successfully!');
});
