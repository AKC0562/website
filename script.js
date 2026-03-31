// ==================== HAMBURGER MENU FUNCTIONALITY ====================
const hamburgerBtn = document.getElementById('hamburgerBtn');
const navMenu = document.getElementById('navMenu');

// Toggle mobile menu
hamburgerBtn.addEventListener('click', function() {
    navMenu.classList.toggle('active');
    hamburgerBtn.classList.toggle('active');
});

// Close menu when clicking on a link
function closeMenu() {
    navMenu.classList.remove('active');
    hamburgerBtn.classList.remove('active');
}

// ==================== SMOOTH SCROLL FUNCTIONALITY ====================
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        closeMenu();
    }
}

// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const targetSection = document.querySelector(href);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// ==================== BACK TO TOP BUTTON ====================
const backToTopBtn = document.getElementById('backToTop');

// Show/hide back to top button based on scroll position
window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});

// Scroll to top function
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// ==================== FORM SUBMISSION ====================
function submitForm(event) {
    event.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const course = document.getElementById('course').value;
    const studentClass = document.getElementById('class').value;
    const message = document.getElementById('message').value;
    
    // Basic validation
    if (!name || !email || !phone || !course || !studentClass) {
        alert('Please fill in all required fields!');
        return;
    }
    
    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address!');
        return;
    }
    
    // Phone validation (basic check for digits)
    const phoneRegex = /^[0-9\-\+\s]+$/;
    if (!phoneRegex.test(phone) || phone.replace(/\D/g, '').length < 10) {
        alert('Please enter a valid phone number!');
        return;
    }
    
    // If all validations pass, show success message
    const courseNames = {
        'jee': 'JEE Main & Advanced',
        'neet': 'NEET Preparation',
        'board': 'Board Preparation',
        'foundation': 'Foundation Course',
        'olympiad': 'Olympiad Coaching',
        'english': 'Spoken English'
    };
    
    const successMessage = `
Thank you for your inquiry, ${name}!

Your Details:
- Email: ${email}
- Phone: ${phone}
- Course Interest: ${courseNames[course]}
- Current Class: ${studentClass}

We will contact you soon to discuss your enrollment and provide more details about the course.

For immediate assistance, please call us at: +91 98765 43210
    `;
    
    alert(successMessage);
    
    // Reset the form
    event.target.reset();
    
    // Optional: You can uncomment the lines below to send the form data to a server
    // fetch('process_form.php', {
    //     method: 'POST',
    //     body: new FormData(event.target)
    // })
    // .then(response => response.text())
    // .then(data => console.log(data));
}

// ==================== ANIMATED COUNTERS ====================
let countersStarted = false;

function startCounters() {
    if (countersStarted) return;
    countersStarted = true;
    
    const counters = document.querySelectorAll('.stat-card h3');
    
    counters.forEach(counter => {
        const target = parseInt(counter.textContent);
        const increment = target / 50;
        let current = 0;
        
        const updateCounter = setInterval(() => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.floor(current) + (counter.textContent.includes('+') ? '+' : counter.textContent.includes('%') ? '%' : '');
            } else {
                counter.textContent = counter.getAttribute('data-target') || target + (counter.textContent.match(/[+%]/g)?.[0] || '');
                clearInterval(updateCounter);
            }
        }, 30);
    });
}

// Trigger counter animation when scrolling to about section
window.addEventListener('scroll', () => {
    const aboutSection = document.querySelector('.about');
    if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            startCounters();
        }
    }
});

// ==================== FORM INPUT VALIDATION ====================
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');

// Real-time email validation
if (emailInput) {
    emailInput.addEventListener('blur', function() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (this.value && !emailRegex.test(this.value)) {
            this.style.borderColor = '#dc3545';
            this.classList.add('error');
        } else {
            this.style.borderColor = '#28a745';
            this.classList.remove('error');
        }
    });
}

// Real-time phone validation
if (phoneInput) {
    phoneInput.addEventListener('blur', function() {
        const phoneRegex = /^[0-9\-\+\s]+$/;
        const digitCount = this.value.replace(/\D/g, '').length;
        
        if (this.value && (!phoneRegex.test(this.value) || digitCount < 10)) {
            this.style.borderColor = '#dc3545';
            this.classList.add('error');
        } else {
            this.style.borderColor = '#28a745';
            this.classList.remove('error');
        }
    });
}

// ==================== COURSE CARD INTERACTIVE EFFECTS ====================
const courseCards = document.querySelectorAll('.course-card');

courseCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// ==================== KEYBOARD ACCESSIBILITY ====================
document.addEventListener('keydown', function(event) {
    // Press 'H' to go to home
    if (event.code === 'KeyH' && event.ctrlKey) {
        scrollToSection('home');
    }
    
    // Press 'C' to go to courses
    if (event.code === 'KeyC' && event.ctrlKey) {
        scrollToSection('courses');
    }
    
    // Press 'T' for top
    if (event.code === 'KeyT' && event.ctrlKey) {
        scrollToTop();
    }
});

// ==================== ACTIVE NAV LINK HIGHLIGHTING ====================
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 200) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === currentSection) {
            link.style.color = 'var(--secondary-color)';
        }
    });
});

// ==================== PAGE LOAD ANIMATION ====================
window.addEventListener('load', function() {
    document.body.style.animation = 'fadeIn 0.5s ease-in';
});

// ==================== MOBILE TOUCH MENU CLOSE ====================
document.addEventListener('click', function(event) {
    const isClickInsideNav = navMenu.contains(event.target);
    const isClickOnHamburger = hamburgerBtn.contains(event.target);
    
    if (!isClickInsideNav && !isClickOnHamburger && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        hamburgerBtn.classList.remove('active');
    }
});

// ==================== INTERSECTION OBSERVER FOR ANIMATIONS ====================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeIn 0.6s ease-in-out';
        }
    });
}, observerOptions);

// Observe all cards and elements
document.querySelectorAll('.course-card, .feature-item, .testimonial-card, .stat-card').forEach(el => {
    observer.observe(el);
});

// ==================== CONSOLE MESSAGE ====================
console.log('%c Welcome to RAW ALMOND Coaching Center', 'color: #8B4513; font-size: 20px; font-weight: bold;');
console.log('%c Excellence in Education, Excellence in Results', 'color: #D2B48C; font-size: 14px;');
console.log('%c Keyboard Shortcuts:', 'color: #8B4513; font-weight: bold;');
console.log('Ctrl + H - Go to Home');
console.log('Ctrl + C - Go to Courses');
console.log('Ctrl + T - Scroll to Top');
