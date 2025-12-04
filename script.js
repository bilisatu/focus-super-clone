document.querySelectorAll('.nav-links a').forEach(anchor => {
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

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

const hero = document.querySelector('.hero');
if (hero) {
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 10 + 's';
        hero.appendChild(particle);
    }
}

// Mobile nav toggle
const nav = document.querySelector('.nav');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (nav && navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('is-open');
        nav.classList.toggle('nav-open', isOpen);
        navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768 && navLinks.classList.contains('is-open')) {
                navLinks.classList.remove('is-open');
                nav.classList.remove('nav-open');
                navToggle.setAttribute('aria-expanded', 'false');
            }
        });
    });
}

// Dark mode toggle
const themeToggle = document.querySelector('.theme-toggle');
const themeIcon = document.querySelector('.theme-icon');

const setTheme = (mode) => {
    if (mode === 'dark') {
        document.body.classList.add('dark');
        if (themeIcon) themeIcon.textContent = '☀️';
    } else {
        document.body.classList.remove('dark');
        if (themeIcon) themeIcon.textContent = '🌙';
    }
    localStorage.setItem('theme', mode);
};

const storedTheme = localStorage.getItem('theme');
if (storedTheme) {
    setTheme(storedTheme);
}

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const isDark = document.body.classList.contains('dark');
        setTheme(isDark ? 'light' : 'dark');
    });
}