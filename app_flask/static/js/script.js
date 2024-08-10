document.addEventListener("DOMContentLoaded", function() {
    // Tu código JavaScript aquí
    // Obtener referencia al botón y a la lista de enlaces del menú
    const toggleMenuBtn = document.getElementById('toggleMenu');
    const navLinks = document.querySelector('.nav-links');

    // Agregar evento de clic al botón de alternar menú
    toggleMenuBtn.addEventListener('click', function() {
        // Alternar la clase 'active' en la lista de enlaces del menú
        navLinks.classList.toggle('active');
        document.querySelector('nav').classList.toggle('nav-open');
        });
    });