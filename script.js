// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
    hamburger.innerHTML = navLinks.classList.contains('active') ? 
        '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
            hamburger.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });
});

// Smooth Scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if (this.getAttribute('href').startsWith('#') && this.getAttribute('href') !== '#') {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80, // Offset for fixed header
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Animation on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.about-image, .benefit-card, .why-us-point, .step-item, .testimonial-card');
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Set initial state for animated elements
document.querySelectorAll('.about-image, .benefit-card, .why-us-point, .step-item, .testimonial-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);


// --- GESTION DES MODALS ---

// Fonction générique pour gérer les modals
function setupModal(modalId, openBtnId, closeBtnId) {
    const modal = document.getElementById(modalId);
    const openBtn = document.getElementById(openBtnId);
    const closeBtn = document.getElementById(closeBtnId);

    if (!modal || !openBtn || !closeBtn) {
        // Affiche une erreur en console si un élément est manquant, pour aider au débogage.
        console.error("Élément de modal manquant:", { modalId, openBtnId, closeBtnId });
        return;
    }

    const open = () => {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    };

    const close = () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    };

    openBtn.addEventListener('click', open);
    closeBtn.addEventListener('click', close);
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            close();
        }
    });
}

// 1. Modal d'avis (code existant adapté)
// CORRECTION : Utilisation de 'closeModal' qui est le bon ID dans votre HTML.
setupModal('reviewModal', 'openReviewModal', 'closeModal');

// 2. NOUVEAU : Modal d'activation
setupModal('activationModal', 'openActivationModal', 'closeActivationModal');


// --- LOGIQUE DU MODAL D'AVIS (EXISTANT) ---
const reviewForm = document.getElementById('reviewForm');
const ratingStars = document.querySelectorAll('#ratingStars i');
const ratingValue = document.getElementById('ratingValue');
const notification = document.getElementById('notification');

if (reviewForm) {
    ratingStars.forEach(star => {
        star.addEventListener('click', () => {
            const rating = parseInt(star.getAttribute('data-rating'));
            ratingValue.value = rating;
            ratingStars.forEach((s, index) => {
                s.classList.toggle('fas', index < rating);
                s.classList.toggle('far', index >= rating);
                s.classList.toggle('active', index < rating);
            });
        });
    });

    reviewForm.addEventListener('submit', (e) => {
        e.preventDefault();
        reviewForm.reset();
        ratingStars.forEach(star => {
            star.classList.remove('fas', 'active');
            star.classList.add('far');
        });
        ratingValue.value = '0';
        document.getElementById('reviewModal').style.display = 'none';
        document.body.style.overflow = 'auto';
        notification.classList.add('show');
        setTimeout(() => {
            notification.classList.remove('show');
        }, 3000);
    });
}


// --- NOUVEAU : LOGIQUE POUR LE FORMULAIRE D'ACTIVATION ---

// Fonctionnalité pour afficher/masquer les codes
document.querySelectorAll('.toggle-password').forEach(toggle => {
    toggle.addEventListener('click', () => {
        const input = toggle.previousElementSibling;
        const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
        input.setAttribute('type', type);
        // Changer l'icône de l'œil
        toggle.classList.toggle('fa-eye');
        toggle.classList.toggle('fa-eye-slash');
    });
});
