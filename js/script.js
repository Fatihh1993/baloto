// Simple JavaScript for interactivity

document.addEventListener('DOMContentLoaded', function() {
    console.log('Bal Oto Kurtarma Web Sitesi Yüklendi');
    
    // Mobile menu toggle (if needed)
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
});

// Optional: Add smooth scroll for anchor links
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Optional: Phone number formatting
function formatPhoneNumber(phoneNumber) {
    const cleaned = phoneNumber.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{4})(\d{3})(\d{2})(\d{2})$/);
    if (match) {
        return `${match[1]} ${match[2]} ${match[3]} ${match[4]}`;
    }
    return phoneNumber;
}
