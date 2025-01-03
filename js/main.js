AOS.init();

// Carga de Header
document.addEventListener("DOMContentLoaded", function () {
    // Fetch para obtener el contenido del archivo header.html
    fetch('../partials/header.html')
        .then(response => response.text())
        .then(data => {
            // Insercion del contenido en el contenedor con el id 'header'
            document.getElementById('header').innerHTML = data;

            //Funcionalidad de navLinks y Hamburger
            document.getElementById('hamburger').onclick = function () {
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

// Carga el Footer
document.addEventListener("DOMContentLoaded", function () {
    // Fetch para obtener el contenido del archivo header.html
    fetch('../partials/footer.html')
        .then(response => response.text())
        .then(data => {
            // Insercion del contenido en el contenedor con el id 'header'
            document.getElementById('sfooter').innerHTML = data;
        })
        .catch(error => console.error('Error al cargar el header:', error));
});

//Redirige a un enlace de whatsapp
function redirectWa() {
    window.location.href = "https://wa.me/593978672488";
}

//Redirige a enlace HV
function downloadHV() {
    const enlace = document.createElement('a');
    enlace.href = '/assets/archive/hv.pdf';
    enlace.download = 'Hoja de Vida.pdf';
    enlace.click();
}
