// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.offsetTop;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Header Background Change on Scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.15)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
    }
});

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Animate elements on scroll
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.service-card, .review-card, .feature, .about-image');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(el);
    });
});

// Language Toggle (Basic Implementation)
const langToggle = document.getElementById('lang-toggle');
let isSpanish = false;

const translations = {
    en: {
        'Houston\'s Premier Massage Therapy': 'Houston\'s Premier Massage Therapy',
        'Licensed professionals specializing in sports massage and advanced therapeutic techniques for muscle injuries and pain relief.': 'Licensed professionals specializing in sports massage and advanced therapeutic techniques for muscle injuries and pain relief.',
        'Schedule Today': 'Schedule Today',
        'Our Services': 'Our Services',
        'Expert Care for Your Body': 'Expert Care for Your Body',
        'What Our Clients Say': 'What Our Clients Say',
        'Visit Our Houston Location': 'Visit Our Houston Location',
        'Ready to Feel Better?': 'Ready to Feel Better?',
        'Español': 'Español'
    },
    es: {
        'Houston\'s Premier Massage Therapy': 'Terapia de Masajes Premier de Houston',
        'Licensed professionals specializing in sports massage and advanced therapeutic techniques for muscle injuries and pain relief.': 'Profesionales licenciados especializados en masajes deportivos y técnicas terapéuticas avanzadas para lesiones musculares y alivio del dolor.',
        'Schedule Today': 'Reservar Hoy',
        'Our Services': 'Nuestros Servicios',
        'Expert Care for Your Body': 'Cuidado Experto para Su Cuerpo',
        'What Our Clients Say': 'Lo Que Dicen Nuestros Clientes',
        'Visit Our Houston Location': 'Visite Nuestra Ubicación en Houston',
        'Ready to Feel Better?': '¿Listo Para Sentirse Mejor?',
        'Español': 'English'
    }
};

langToggle.addEventListener('click', (e) => {
    e.preventDefault();
    isSpanish = !isSpanish;
    
    const currentLang = isSpanish ? 'es' : 'en';
    langToggle.textContent = translations[currentLang]['Español'];
    
    // Update main headings
    const elementsToTranslate = [
        { selector: '.hero-title', key: 'Houston\'s Premier Massage Therapy' },
        { selector: '.hero-subtitle', key: 'Licensed professionals specializing in sports massage and advanced therapeutic techniques for muscle injuries and pain relief.' },
        { selector: '.btn-primary', key: 'Schedule Today' },
        { selector: '#services .section-title', key: 'Our Services' },
        { selector: '.about-text h2', key: 'Expert Care for Your Body' },
        { selector: '#reviews .section-title', key: 'What Our Clients Say' },
        { selector: '.location-info h2', key: 'Visit Our Houston Location' },
        { selector: '#contact .section-title', key: 'Ready to Feel Better?' }
    ];
    
    elementsToTranslate.forEach(item => {
        const element = document.querySelector(item.selector);
        if (element && translations[currentLang][item.key]) {
            element.innerHTML = element.innerHTML.replace(
                new RegExp(item.key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'),
                translations[currentLang][item.key]
            );
        }
    });
});

// Phone Number Click Tracking
document.querySelectorAll('a[href^="tel:"]').forEach(link => {
    link.addEventListener('click', () => {
        console.log('Phone number clicked:', link.href);
        // Add analytics tracking here if needed
    });
});

// Form Validation (if forms are added later)
function validateForm(form) {
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            field.classList.add('error');
            isValid = false;
        } else {
            field.classList.remove('error');
        }
    });
    
    return isValid;
}

// Add loading animation for external links
document.querySelectorAll('a[target="_blank"]').forEach(link => {
    link.addEventListener('click', function() {
        this.style.opacity = '0.7';
        setTimeout(() => {
            this.style.opacity = '1';
        }, 1000);
    });
});

// Lazy load images when they come into view
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) {
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        }
    });
});

// Add hover effects to cards
document.querySelectorAll('.service-card, .review-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Scroll to top functionality (if needed)
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add scroll progress indicator
function addScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #2c5f41, #7fb069);
        z-index: 9999;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

// Initialize scroll progress on load
document.addEventListener('DOMContentLoaded', addScrollProgress);

// Add subtle parallax effect to hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');
    
    if (hero && heroContent) {
        const rate = scrolled * -0.5;
        heroContent.style.transform = `translateY(${rate}px)`;
    }
});

// Add click ripple effect to buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s ease-out;
            pointer-events: none;
        `;
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Add CSS for ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
    
    .error {
        border: 2px solid #e74c3c !important;
        box-shadow: 0 0 5px rgba(231, 76, 60, 0.3) !important;
    }
`;
document.head.appendChild(style);