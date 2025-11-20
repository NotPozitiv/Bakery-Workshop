// Параллакс эффект и анимации при скролле
        document.addEventListener('DOMContentLoaded', function() {
            const navbar = document.querySelector('.navbar');
            const hamburger = document.getElementById('hamburger');
            const navLinks = document.getElementById('navLinks');
            
            window.addEventListener('scroll', function() {
                if (window.scrollY > 100) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
            });

            // Меню 
            hamburger.addEventListener('click', function() {
                this.classList.toggle('active');
                navLinks.classList.toggle('active');
            });

            // Закрытие меню при клике
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.addEventListener('click', function() {
                    hamburger.classList.remove('active');
                    navLinks.classList.remove('active');
                });
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

            // Интерактивная картинка
            const ovenTrigger = document.getElementById('ovenTrigger');
            const recipeCards = document.getElementById('recipeCards');
            let ovenOpened = false;

            ovenTrigger.addEventListener('click', function() {
                if (!ovenOpened) {
                    recipeCards.classList.add('active');
                    ovenOpened = true;
                    
                    // при открытии
                    this.style.transform = 'scale(1.1)';
                    setTimeout(() => {
                        this.style.transform = 'scale(1)';
                    }, 300);
                    
                    // Скрыть стрелку после открытия
                    document.querySelector('.bounce-arrow').style.display = 'none';
                }
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