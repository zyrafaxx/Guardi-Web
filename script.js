document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================
       SCROLL DO NAVBAR & REVEAL DE ELEMENTOS
    ========================================== */
    const navbar = document.getElementById('navbar');
    const reveals = document.querySelectorAll('.reveal');

    const handleScroll = () => {
        // Estilo glassmorphism da barra de navegação no scroll
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Animação de entrada dos elementos
        const windowHeight = window.innerHeight;
        const revealPoint = 100;

        reveals.forEach(reveal => {
            const revealTop = reveal.getBoundingClientRect().top;
            if (revealTop < windowHeight - revealPoint) {
                reveal.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger inicial

    /* ==========================================
       SMOOTH SCROLL LINKS
    ========================================== */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if(target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    /* ==========================================
       SISTEMA DE PARTÍCULAS (HERO)
    ========================================== */
    const particlesContainer = document.getElementById('particles');
    
    if (particlesContainer) {
        const particleCount = 40;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            
            // Estilos diretamente em JS para dinâmica
            particle.style.position = 'absolute';
            particle.style.background = 'rgba(77, 166, 255, 0.4)'; // blue origin
            particle.style.borderRadius = '50%';
            
            // Random attributes
            const size = Math.random() * 4 + 1; // 1px a 5px
            particle.style.width = size + 'px';
            particle.style.height = size + 'px';
            
            particle.style.left = Math.random() * 100 + 'vw';
            particle.style.top = Math.random() * 100 + 'vh';
            
            particle.style.boxShadow = '0 0 10px rgba(77, 166, 255, 0.8)';
            
            // Animation duration and delay
            const animDuration = Math.random() * 10 + 5;
            const animDelay = Math.random() * 5;
            
            particle.style.animation = `floatParticle ${animDuration}s linear ${animDelay}s infinite`;
            
            particlesContainer.appendChild(particle);
        }
        
        // Keyframe via injeção CSS para o flutuamento
        const styleSheet = document.createElement("style");
        styleSheet.innerText = `
            @keyframes floatParticle {
                0% { transform: translateY(0) translateX(0); opacity: 0; }
                10% { opacity: 1; }
                90% { opacity: 1; }
                100% { transform: translateY(-100vh) translateX(20px); opacity: 0; }
            }
        `;
        document.head.appendChild(styleSheet);
    }

});