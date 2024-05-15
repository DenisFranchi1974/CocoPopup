/* Modale */
document.addEventListener("DOMContentLoaded", function() {
    var avatarDashboard = document.getElementById('avatar-dashboard');
    var modal = document.getElementById('myModal'); // Assumi che il tuo modale abbia l'id 'myModal'
    var closeBtn = document.querySelector('.close'); // Seleziona il pulsante di chiusura
    var wrap = document.querySelector('.wrap'); // Seleziona l'elemento con la classe 'wrap'
    // Aggiungi un listener per il clic sull'avatar dashboard
    avatarDashboard.addEventListener('click', function() {
        // Visualizza il modale
        modal.style.display = "block";
        // Aggiungi la classe 'overlay' alla classe 'wrap'
        wrap.classList.add('overlay');
    });
    // Aggiungi un listener al pulsante di chiusura per chiudere il modale
    closeBtn.addEventListener('click', function() {
        modal.style.display = "none";
        // Rimuovi la classe 'overlay' dalla classe 'wrap'
        wrap.classList.remove('overlay');
    });
    // Aggiungi un listener per chiudere il modale quando si clicca al di fuori dell'area del modale
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            // Rimuovi la classe 'overlay' dalla classe 'wrap'
            wrap.classList.remove('overlay');
        }
    }
});
// Seleziona il pulsante
document.addEventListener('DOMContentLoaded', function() {
    var container = document.querySelector('.container');
    container.classList.add('light-theme'); // Imposta il tema chiaro di default
});
var themeToggle = document.getElementById('theme-toggle');
var sunIcon = document.getElementById('sun-icon');
var moonIcon = document.getElementById('moon-icon');
themeToggle.addEventListener('click', function() {
    var container = document.querySelector('.container');
    var isDarkTheme = container.classList.contains('dark-theme');
    // Se il tema è scuro, mostra l'icona del sole e nascondi l'icona della luna; altrimenti, mostra l'icona della luna e nascondi l'icona del sole
    if (isDarkTheme) {
        container.classList.remove('dark-theme');
        container.classList.add('light-theme');
        sunIcon.style.display = 'inline-block'; // Mostra l'icona del sole
        moonIcon.style.display = 'none'; // Nascondi l'icona della luna
    } else {
        container.classList.remove('light-theme');
        container.classList.add('dark-theme');
        sunIcon.style.display = 'none'; // Nascondi l'icona del sole
        moonIcon.style.display = 'inline-block'; // Mostra l'icona della luna
    }
});