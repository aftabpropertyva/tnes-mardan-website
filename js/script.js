document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a.nav-link, a.btn-gold').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 70,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Navbar background change on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-lg');
            navbar.style.backgroundColor = 'rgba(33, 150, 243, 0.95)'; // Use light-blue from CSS
        } else {
            navbar.classList.remove('shadow-lg');
            navbar.style.backgroundColor = '#2196F3'; // Use light-blue from CSS
        }
    });

    // Handle contact form submission for WhatsApp redirection
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent default form submission

            const name = contactForm.querySelector('input[name="name"]').value;
            const email = contactForm.querySelector('input[name="email"]').value;
            const subject = contactForm.querySelector('input[name="subject"]').value;
            const message = contactForm.querySelector('textarea[name="message"]').value;

            const whatsappNumber = '+923159953417'; // Primary WhatsApp number
            const fullMessage = `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`;
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(fullMessage)}`;

            window.open(whatsappUrl, '_blank');

            // Optionally, clear the form after submission
            contactForm.reset();
            alert('Your message is ready to be sent via WhatsApp!');
        });
    }
});
