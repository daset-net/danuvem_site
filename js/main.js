document.addEventListener('DOMContentLoaded', () => {
    // Header scroll effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            if (window.scrollY === 0) header.classList.remove('scrolled');
        }
    });
    if (window.scrollY > 50) header.classList.add('scrolled');

    // Mobile menu toggle
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            // Only prevent default and scroll if the target element exists on this page
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                }
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Intersection Observer for scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });

    // Typing animation for hero
    const typeWriterElement = document.getElementById('typewriter');
    if (typeWriterElement) {
        const text = "Sua nuvem. Seus aplicativos. Seu controle.";
        typeWriterElement.innerHTML = '';
        let i = 0;
        function typeWriter() {
            if (i < text.length) {
                typeWriterElement.innerHTML += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        }
        setTimeout(typeWriter, 500);
    }
});
