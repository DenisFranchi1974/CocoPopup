(function($){
    $(document).ready(function() {
        $('.dropbtn').click(function() {
            var $dropdownContent = $(this).next('.dropdown-content');
            var $item = $(this).closest('.item');

            // Toggle della classe 'open' per il menu dropdown
            $dropdownContent.toggleClass('open');

            // Nascondi il bottone di apertura quando il menu è aperto
            $(this).toggleClass('hidden');

            // Calcola l'altezza totale dell'item
            var itemHeight = $item.height();

            // Se il menu dropdown è aperto, allunga l'item per includere il menu
            if ($dropdownContent.hasClass('open')) {
                // Calcola l'altezza del menu dropdown
                var dropdownContentHeight = $dropdownContent.outerHeight(true);

                // Aggiungi l'altezza del menu dropdown all'altezza dell'item
                $item.height(itemHeight + dropdownContentHeight);
            } else {
                // Se il menu dropdown è chiuso, ripristina l'altezza dell'item
                $item.height('auto');
            }
        });

        // Gestisci il click sul pulsante di chiusura del menu
        $('.closebtn').click(function() {
            var $dropdownContent = $(this).closest('.dropdown-content');
            var $item = $dropdownContent.closest('.item');

            // Nascondi il menu dropdown e riporta visibile il bottone di apertura
            $dropdownContent.removeClass('open');
            $item.find('.dropbtn').removeClass('hidden');

            // Ripristina l'altezza dell'item
            $item.height('auto');
        });
    });

    // Seleziona il pulsante dark e light 
    document.addEventListener('DOMContentLoaded', function() {
        var container = document.querySelector('.cocopopup-body-extension');
        container.classList.add('light-theme'); // Imposta il tema chiaro di default
    });
    
    var themeToggle = document.getElementById('theme-toggle');
    var sunIcon = document.getElementById('sun-icon');
    var moonIcon = document.getElementById('moon-icon');
    
    themeToggle.addEventListener('click', function() {
        var container = document.querySelector('.cocopopup-body-extension');
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
    
    /* Modale */
    document.addEventListener("DOMContentLoaded", function() {
        var avatarDashboard = document.getElementById('avatar-dashboard');
        var modal = document.getElementById('myModal'); // Assumi che il tuo modale abbia l'id 'myModal'
        var closeBtn = document.querySelector('.close'); // Seleziona il pulsante di chiusura
        var wrap = document.querySelector('.cocopopup-body-extension'); // Seleziona l'elemento con la classe 'wrap'
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
    
}(jQuery));

/* Item */
const itemsPerPage = 9;
const items = document.querySelectorAll('.item');
const totalPages = Math.ceil(items.length / itemsPerPage);
let currentPage = 1;
function showPage(page) {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    items.forEach((item, index) => {
        if (index >= startIndex && index < endIndex) {
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
        }
    });
    document.getElementById('prevBtn').disabled = page === 1;
    document.getElementById('nextBtn').disabled = page === totalPages;
}
function nextPage() {
    currentPage++;
    showPage(currentPage);
}
function prevPage() {
    currentPage--;
    if (currentPage < 1) {
        currentPage = 1;
    }
    showPage(currentPage);
}
showPage(currentPage);