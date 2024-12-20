AOS.init();

// Carga de Header
document.addEventListener("DOMContentLoaded", function() {
    // Usamos fetch para obtener el contenido del archivo header.html
    fetch('../partials/header.html')
        .then(response => response.text())
        .then(data => {
            // Insercion del contenido en el contenedor con el id 'header'
            document.getElementById('header').innerHTML = data;

            //Funcionalidad de navLinks y Hamburger
            document.getElementById('hamburger').onclick = function() {
                var navLinks = document.getElementById('navLinks');
                if (navLinks.style.display === 'none') {
                    navLinks.style.display = 'flex';
                    navLinks.style.flexDirection = 'column'; 
                } else {
                    navLinks.style.display = 'none';
                }
            }    
        })
        .catch(error => console.error('Error al cargar el header:', error));
});

