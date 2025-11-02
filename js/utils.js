// Utility functions for La Rotonda Restaurant

// Hamburger menu functionality
class MobileMenu {
    constructor() {
        this.toggle = document.getElementById('nav-toggle');
        this.menu = document.getElementById('nav-menu');
        this.links = document.querySelectorAll('.nav-link');

        this.init();
    }

    init() {
        if (this.toggle && this.menu) {
            this.toggle.addEventListener('click', () => this.toggleMenu());

            // Close menu when clicking on links
            this.links.forEach(link => {
                link.addEventListener('click', () => this.closeMenu());
            });

            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!this.menu.contains(e.target) && !this.toggle.contains(e.target)) {
                    this.closeMenu();
                }
            });
        }
    }

    toggleMenu() {
        this.menu.classList.toggle('mobile-menu-active');
        this.toggle.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    }

    closeMenu() {
        this.menu.classList.remove('mobile-menu-active');
        this.toggle.classList.remove('active');
        document.body.classList.remove('menu-open');
    }
}

// Menu tabs functionality
class MenuTabs {
    constructor() {
        this.buttons = document.querySelectorAll('.tab-btn');
        this.panels = document.querySelectorAll('.tab-panel');

        this.init();
    }

    init() {
        if (!this.buttons.length || !this.panels.length) {
            return;
        }

        this.buttons.forEach(button => {
            button.addEventListener('click', () => this.switchTab(button));
        });
    }

    switchTab(button) {
        const targetId = button.dataset.tab;

        if (!targetId) {
            return;
        }

        this.buttons.forEach(btn => btn.classList.remove('active'));
        this.panels.forEach(panel => {
            panel.classList.remove('active');
            panel.classList.add('hidden');
        });

        button.classList.add('active');

        const targetPanel = document.getElementById(targetId);
        if (targetPanel) {
            targetPanel.classList.remove('hidden');
            targetPanel.classList.add('active');
        }
    }
}

// Smooth scroll functionality
class SmoothScroll {
    constructor() {
        this.init();
    }

    init() {
        const links = document.querySelectorAll('a[href^="#"]');

        links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();

                const targetId = link.getAttribute('href');
                if (targetId === '#') return;

                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0;
                    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
}

// Navbar scroll effect
class NavbarScroll {
    constructor() {
        this.navbar = document.querySelector('.navbar');
        this.init();
    }

    init() {
        if (this.navbar) {
            window.addEventListener('scroll', this.debounce(() => {
                if (window.scrollY > 50) {
                    this.navbar.classList.add('scrolled');
                } else {
                    this.navbar.classList.remove('scrolled');
                }
            }, 10));
        }
    }

    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
}

// Analytics tracking
class Analytics {
    constructor() {
        this.init();
    }

    init() {
        // Track button clicks
        const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
        buttons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.trackEvent('button_click', btn.textContent.trim());
            });
        });

        // Track phone and email clicks
        const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
        const emailLinks = document.querySelectorAll('a[href^="mailto:"]');

        phoneLinks.forEach(link => {
            link.addEventListener('click', () => {
                this.trackEvent('phone_click', link.textContent.trim());
            });
        });

        emailLinks.forEach(link => {
            link.addEventListener('click', () => {
                this.trackEvent('email_click', link.textContent.trim());
            });
        });
    }

    trackEvent(action, label) {
        if (typeof gtag !== 'undefined') {
            gtag('event', action, {
                event_category: 'engagement',
                event_label: label,
                value: 1
            });
        }
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Set current year in footer
    const currentYear = document.getElementById('current-year');
    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }

    // Initialize all components
    new MobileMenu();
    new MenuTabs();
    new SmoothScroll();
    new NavbarScroll();
    new Analytics();
});

// Export for potential use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        MobileMenu,
        MenuTabs,
        SmoothScroll,
        NavbarScroll,
        Analytics
    };
}

