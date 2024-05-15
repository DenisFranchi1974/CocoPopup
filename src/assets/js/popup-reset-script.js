function cocoPopupResetPopupClosureCount(popupId) {
 // Azzera lo stato del popup nel local storage
 localStorage.removeItem(`popupClosed_${popupId}`);
    // Esegui una richiesta AJAX per azzerare il conteggio delle chiusure del popup
    jQuery.ajax({
        url: popupResetAdminScriptData.ajaxurl, // URL dell'endpoint AJAX di WordPress
        type: 'POST',
        data: {
            action: 'reset_popup_closure_count', // Nome dell'azione AJAX da eseguire nel tuo codice PHP
            popup_id: popupId // Passa l'ID del popup al server
        },
        success: function(response) {
            // Aggiorna il valore nella tabella a "0"
            var closureCountCell = document.querySelector('td[data-popup-id="' + popupId + '"]'); // Trova la cella con il conteggio delle chiusure del popup
            if (closureCountCell) {
                closureCountCell.textContent = '0'; // Imposta il valore nella tabella a "0"
            } else {
                // Se la cella non esiste, crea una nuova riga nella tabella per il conteggio delle chiusure del popup e impostane il valore a "0"
                var newRow = document.createElement('tr');
                var newCell = document.createElement('td');
                newCell.setAttribute('data-popup-id', popupId);
                newCell.textContent = '0';
                newRow.appendChild(newCell);
                // Trova la tabella e aggiungi la nuova riga
                var tableBody = document.querySelector('table.widefat tbody');
                if (tableBody) {
                    tableBody.appendChild(newRow);
                } else {
                }
            }
            // Se necessario, mostra un messaggio di conferma
            alert(popupResetAdminScriptData.resetSuccessMsg + popupId);
            // Ricarica la pagina per visualizzare il conteggio aggiornato
            location.reload();
        },
        error: function(error) {
            // Se si verifica un errore, mostra un messaggio di errore all'utente o gestisci l'errore di conseguenza
            alert(popupResetAdminScriptData.resetErrorMsg);
        }
    });
}