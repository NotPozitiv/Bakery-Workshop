// Параллакс эффект и анимации при скролле
        document.addEventListener('DOMContentLoaded', function() {
            const navbar = document.querySelector('.navbar');
            window.addEventListener('scroll', function() {
                if (window.scrollY > 100) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
            });

            // Плавная прокрутка
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href');
                    const targetSection = document.querySelector(targetId);
                    const offsetTop = targetSection.offsetTop - 80;
                    
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                });
            });

            // Интерактивная духовка
            const ovenTrigger = document.getElementById('ovenTrigger');
            const recipeCards = document.getElementById('recipeCards');
            let ovenOpened = false;

            ovenTrigger.addEventListener('click', function() {
                if (!ovenOpened) {
                    recipeCards.classList.add('active');
                    ovenOpened = true;
                    
                    // Анимация для духовки при открытии
                    this.style.transform = 'scale(1.1)';
                    setTimeout(() => {
                        this.style.transform = 'scale(1)';
                    }, 300);
                }
            });

            // Параллакс для секций с фоновым изображением
            window.addEventListener('scroll', function() {
                const scrolled = window.pageYOffset;
                const parallaxElements = document.querySelectorAll('.parallax');
                
                parallaxElements.forEach(function(el) {
                    const speed = 0.5;
                    el.style.backgroundPositionY = -(scrolled * speed) + 'px';
                });
            });
            
            // Анимация появления элементов при скролле
            const fadeElements = document.querySelectorAll('.fade-in');
            
            const fadeInOnScroll = function() {
                fadeElements.forEach(function(element) {
                    const elementTop = element.getBoundingClientRect().top;
                    const elementVisible = 150;
                    
                    if (elementTop < window.innerHeight - elementVisible) {
                        element.classList.add('visible');
                    }
                });
            };

            window.addEventListener('scroll', fadeInOnScroll);
            fadeInOnScroll(); 
            
            const form = document.getElementById('camp-form');
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                alert('Спасибо за вашу заявку! Мы свяжемся с вами в ближайшее время.');
                form.reset();
            });
        });