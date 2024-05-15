document.addEventListener('DOMContentLoaded', function() {
    // Ottenere tutti gli elementi con attributo data-popup-id
    const popups = document.querySelectorAll('[data-popup-id]');
    // Iterare su ogni popup e gestire la configurazione
    popups.forEach(popupElement => {
        // Gestire il setup del popup
        setupPopup(popupElement);
    });
});

// Funzione per configurare il popup
function setupPopup(popupElement) {
    // Ottenere l'ID del popup corrente
    const popupId = popupElement.getAttribute("data-popup-id");

    // Verifica se l'elemento popup esiste e ha l'ID
    if (popupElement && popupId) {

        const delay = parseInt(popupElement.getAttribute("data-delay")); // Converti la stringa in un numero intero Regolazione ritardo
        const selectOptionPage = popupElement.getAttribute("data-select-option-page"); // Opzione per impostare l'altezza della pagina
        const scrollTimeout = parseInt(popupElement.getAttribute("data-time")); // Inattività allo scroll
        const textButton = popupElement.getAttribute("text-button"); // Text Button
        const popupUrlExt = popupElement.getAttribute("data-url-extern"); // External Url
        const desiredURL = popupUrlExt; // URL desiderato
        const popupName = popupElement.getAttribute("data-popup-name"); // Popup Name
        const timeExit = parseInt(popupElement.getAttribute("data-time-exit")); // Converti la stringa in un numero intero Regolazione ritardo
        const scrollDirection = popupElement.getAttribute("data-direction-scroll"); // Top or down
        const timeScrollDirection = parseInt(popupElement.getAttribute("data-time-direction"));
        const exitVisitNumberString = popupElement.getAttribute("data-logic-7"); // Loginc 7
        const exitVisitNumber = exitVisitNumberString === "true"; // Loginc 7
        const exitUrlString = popupElement.getAttribute("data-logic-8"); // Loginc 8
        const exitUrl = exitUrlString === "true"; // Loginc 8
        const exitExternalString = popupElement.getAttribute("data-logic-9"); // Loginc 9
        const exitExternal = exitExternalString === "true"; // Loginc 9
        const exitLogUserString = popupElement.getAttribute("data-logic-10"); // Loginc 10
        const exitLogUser = exitLogUserString === "true"; // Loginc 10
        let popupClosureCount =parseInt(localStorage.getItem("popupClosureCount")) || 0;
        let popupVisible = false; // Flag per tenere traccia dello stato del popup
        const exitDesktopString = popupElement.getAttribute("data-desktop"); // Logic 11
        const exitDesktop = exitDesktopString === "true"; // Logic 11
        const pxDesktop = parseInt(popupElement.getAttribute("data-px-desktop"));
        const exitTabletString = popupElement.getAttribute("data-tablet"); // Logic 12
        const exitTablet = exitTabletString === "true"; // Logic 12
        const pxTablet = parseInt(popupElement.getAttribute("data-px-tablet"));
        const exitMobileString = popupElement.getAttribute("data-mobile"); // Logic 13
        const exitMobile = exitMobileString === "true"; // Logic 13
        const pxMobile = parseInt(popupElement.getAttribute("data-px-mobile"));
        const popupClassName = popupElement.getAttribute("data-class"); // Class Popup
        const numberVisit = parseInt(popupElement.getAttribute("data-number-visit"),); // Number Visit
        const timeUrl = parseInt(popupElement.getAttribute("data-time-url")); // Delay time url
        const timeExternaLink = parseInt(popupElement.getAttribute("data-time-external-link")); // Delay time external link
        const timeLogged = parseInt(popupElement.getAttribute("data-time-logged")); // Delay time logged
        const disablePopupClosingString = popupElement.getAttribute("data-disable-closing-popup"); // Disable popup closing
        const disablePopupClosing = disablePopupClosingString === "true"; // Disable popup closing
        const exitLanguageString = popupElement.getAttribute("data-language-extit"); // Exit Language
        const exitLanguage = exitLanguageString === "true"; // Exit Language
        const selectedLanguages = popupElement.getAttribute("data-language-select"); // Selected Languages
        const exitScheduleString = popupElement.getAttribute("data-schedule"); // Exit Schedule
        const exitSchedule = exitScheduleString === "true"; // Exit Schedule
        const date = popupElement.getAttribute("data-date-popup"); // Date Popup
        const endDate = popupElement.getAttribute("data-date-end-popup"); // Date Popup End
        const exitOperationSystemString = popupElement.getAttribute("data-operation-system"); // Exit Operation System
        const exitOperationSystem = exitOperationSystemString === "true"; // Exit Operation System
        const exitWindowsString = popupElement.getAttribute("data-windows"); // Exit Windows
        const exitWindows = exitWindowsString === "true"; // Exit Windows
        const exitMacString = popupElement.getAttribute("data-mac"); // Exit Windows
        const exitMac = exitMacString === "true"; // Exit Windows
        const exitLinusString = popupElement.getAttribute("data-linus"); // Exit Windows
        const exitLinus = exitLinusString === "true"; // Exit Windows
        const exitBrowserString = popupElement.getAttribute("data-browser"); // Exit Browser
        const exitBrowser = exitBrowserString === "true"; // Exit Browser
        const selectBrowser = popupElement.getAttribute("data-browser-select"); // Select Browser
        const timeClosedPopup = parseInt(popupElement.getAttribute("data-time-popup-closed")); // Delay time Popup Closed
        const exitWooCartEmptyString = popupElement.getAttribute("data-woo-cart-empty"); // Exit Empty Cart
        const exitWooCartEmpty = exitWooCartEmptyString === "true"; // Exit Empty Cart
        const exitWooCartCountString = popupElement.getAttribute("data-woo-cart-count"); // Exit Cart Count
        const exitWooCartCount = exitWooCartCountString === "true"; // Exit Cart Count
        const exitWooCartIdString = popupElement.getAttribute("data-woo-cart-id"); // Exit Cart ID
        const exitWooCartId = exitWooCartIdString === "true"; // Exit Cart ID
        const numberProductCart = popupElement.getAttribute("data-woo-number-product-cart"); // Number Product in Cart
        const productId = popupElement.getAttribute("data-product-id"); // Product ID
        const exitWooCartAmountString = popupElement.getAttribute("data-woo-cart-amount"); // Exit Cart Amount
        const exitWooCartAmount = exitWooCartAmountString === "true"; // Exit Cart Amount
        const amountProductCart = parseInt(popupElement.getAttribute("data-woo-amount-product-cart")); // Amount Product in Cart
        const selectedAmountCart = popupElement.getAttribute("data-woo-select-amount"); // Select Logic Amount
        const conditionAndOr= popupElement.getAttribute("data-condition-and-or"); // Select Condition and / or
        const classNameElement = popupElement.getAttribute("data-class-element"); // Element class Name
        const reopenPopupString = popupElement.getAttribute("data-popup-reopen"); // Reopen Popup
        const reopenPopup = reopenPopupString === "true"; // Reopen Popup
        const classNameElementHover = popupElement.getAttribute("data-class-element-hover"); // Element class Name
        const exitAllString = popupElement.getAttribute("data-exit-all"); //  Exit For All
        const exitAll = exitAllString === "true"; //  Exit For All
        const fileAudio = popupElement.getAttribute("data-file-audio"); // File Audio
        const selectedEvents = popupElement.getAttribute("data-events-select"); // Select Events
        const selectedClosed = popupElement.getAttribute("data-select-closed"); // Select Closed
        const openSoundString = popupElement.getAttribute("data-open-sound"); //  Exit For All
        const openSound = openSoundString === "true"; //  Exit For All
        const timeOpacityExit = parseInt(popupElement.getAttribute("data-time-opacity-exit")); // Ritardo chiusura opacity
        const timeOpacity = parseInt(popupElement.getAttribute("data-time-opacity")); // Ritardo chiusura opacity
        const colorContdown = popupElement.getAttribute("data-color-contdown"); // Color Contdown
        const secondContdown = parseInt(popupElement.getAttribute("data-second-contdown")); // Seconds Contdown
        const textContdownBefore = popupElement.getAttribute("data-text-before-contdown"); // Text Contdown Before
        const textContdownAfter = popupElement.getAttribute("data-text-after-contdown"); // Text Contdown After
        const overflowBodyString = popupElement.getAttribute("data-overflow-body"); // Overflow Body
        const overflowBody = overflowBodyString === "true"; // Overflow Body
        const filterBodyString = popupElement.getAttribute("data-filter-body"); // Filter Body
        const filterBody = filterBodyString === "true"; // Filter Body
        const sizeContdown = parseInt(popupElement.getAttribute("data-size-contdown")); // Font Size Text Contdown
        const verticalContdown = parseInt(popupElement.getAttribute("data-vertical-contdown")); // Vertical Contdown
        const horizontalContdown = parseInt(popupElement.getAttribute("data-horizontal-contdown")); // Horizontal Contdown
        const colorContdownText = popupElement.getAttribute("data-color-text-contdown"); // Color Text Contdown       
        const zIndexButton = parseInt(popupElement.getAttribute("data-zindex-button")); //Z Index Button
        const selectedAnimationPopupIn = popupElement.getAttribute("data-animation-popup-in"); // Select Animation Popup In
        const classClosePopup = popupElement.getAttribute("data-class-close-popup"); // Class Close Popup
        const percentagePage = parseInt(popupElement.getAttribute("data-percentage-page")); // Percentage Page
        const enableButton2String = popupElement.getAttribute("data-enable-button-2"); // Enable Button 2
        const enableButton2 = enableButton2String === "true"; // Enable Button 2
        const textButton2 = popupElement.getAttribute("data-text-button-2"); // Text Button 2
        const selectedContdown = popupElement.getAttribute("data-select-contdown"); // Select Contdown
        const dateContdown = popupElement.getAttribute("data-date-contdown"); // Date Contdown
        const contdownSecondAutomaticCloseString = popupElement.getAttribute("data-close-contdown-automatic"); // Automatic close contdown seconds
        const contdownSecondAutomaticClose = contdownSecondAutomaticCloseString === "true"; // Automatic close contdown seconds
        const enableFlipContString = popupElement.getAttribute("data-enable-flip-contdown"); // Enable Flip Contdown
        const enableFlipCont = enableFlipContString === "true"; // Enable Flip Contdown
        const weightCont = popupElement.getAttribute("data-font-weight-cont"); // Font Weight Contdown
        const contDays = popupElement.getAttribute("data-text-days-round"); // Text Days Contdown Round
        const contHours = popupElement.getAttribute("data-text-hours-round"); // Text Hours Contdown Round
        const contMinutes = popupElement.getAttribute("data-text-days-minutes"); // Text Minutes Contdown Round
        const contSeconds = popupElement.getAttribute("data-text-days-seconds"); // Text Seconds Contdown Round
        const filterBodyImageString = popupElement.getAttribute("data-body-image"); // Enable Image Body
        const filterBodyImage = filterBodyImageString === "true"; // Enable Image Body
        const imageUrl = popupElement.getAttribute("data-url-image"); // Url Image Body
        const textDayAge = popupElement.getAttribute("data-text-day-age"); // Text Day Age
        const textMonthAge = popupElement.getAttribute("data-text-month-age"); // Text month Age
        const textYearAge = popupElement.getAttribute("data-text-year-age"); // Text year Age
        const selectedAgeMonth = popupElement.getAttribute("data-language-month-age"); // Selected language month age
        const errorFormAge = popupElement.getAttribute("data-error-form-age"); // Error form age
        const errorAgeAge = popupElement.getAttribute("data-error-age-age"); // Error age age
        const enableWelcomeAgeString = popupElement.getAttribute("data-enable-welcome-age"); // Enable welcome message age
        const enableWelcomeAge = enableWelcomeAgeString === "true"; // Enable welcome message age
        const welcomeAge = popupElement.getAttribute("data-welcome-age"); // Welcome message age
        const linkButtonOneAge = popupElement.getAttribute("data-link-button-one-age"); // Link button one age
        const linkButtonOneAgeWindowString = popupElement.getAttribute("data-link-button-one-age-window"); // Enable new window link button one age
        const linkButtonOneAgeWindow = linkButtonOneAgeWindowString === "true"; // Enable new window link button one age
        const buttonOneAge = popupElement.getAttribute("data-text-button-one-age"); // button one age
        const buttonTwoAge = popupElement.getAttribute("data-text-button-two-age"); // button two age
        const enableButtonOneString = popupElement.getAttribute("data-enable-button-one"); // Enable button one age
        const enableButtonOne = enableButtonOneString === "true"; // Enable button one age
        const timecolsePopupAge = parseInt(popupElement.getAttribute("data-delay-close-age")); // Regolazione ritardo chiusura popup age
        const gapFormAge = parseInt(popupElement.getAttribute("data-gap-form-age")); // Gap form popup age
        const heightFormAge = parseInt(popupElement.getAttribute("data-height-form-age")); // Height form popup age
        const sizeFormAge = parseInt(popupElement.getAttribute("data-size-form-age")); // Size form popup age
        const borderWidthFormAge = parseInt(popupElement.getAttribute("data-border-width-form-age")); // Border width form popup age
        const borderStyleFormAge = popupElement.getAttribute("data-border-style-form-age"); // border style form age
        const borderColorFormAge = popupElement.getAttribute("data-border-color-form-age"); // border color form age
        const borderColorHoverFormAge = popupElement.getAttribute("data-border-color-hover-form-age"); // border color hover form age
        const transitionBorderColorFormAge = parseInt(popupElement.getAttribute("data-trasition-border-color-form-age")); // Transition border color form popup age
        const marginFormAge = parseInt(popupElement.getAttribute("data-margin-form-age")); // Margin form popup age
        const backgroundColorFormAge = popupElement.getAttribute("data-background-color-form-age"); // background color form age
        const backgroundColorHoverFormAge = popupElement.getAttribute("data-background-color-hover-form-age"); // background color hover form age
        const backgroundGradientFormAge = popupElement.getAttribute("data-background-gradient-form-age"); // background gradient color form age
        const backgroundGradientHoverFormAge = popupElement.getAttribute("data-background-gradient-hover-form-age"); // background gradient hover color form age
        const transitionBackgroundColorFormAge = parseInt(popupElement.getAttribute("data-transition-background-color-form-age")); // Transition background color form popup age
        const colorFormAge = popupElement.getAttribute("data-color-form-age"); //  color form age
        const colorHoverFormAge = popupElement.getAttribute("data-color-hover-form-age"); //  color hover form age
        const transitionColorFormAge = parseInt(popupElement.getAttribute("data-transition-color-form-age")); // Transition color form popup age
        const gapButtonAge = parseInt(popupElement.getAttribute("data-gap-button-age")); // Gap button popup age
        const paddingButtonAgeTop = parseInt(popupElement.getAttribute("data-padding-button-age-top")); // Padding Top button popup age
        const paddingButtonAgeBottom = parseInt(popupElement.getAttribute("data-padding-button-age-bottom")); // Padding Bottom button popup age
        const paddingButtonAgeLeft = parseInt(popupElement.getAttribute("data-padding-button-age-left")); // Padding Left button popup age
        const paddingButtonAgeRight = parseInt(popupElement.getAttribute("data-padding-button-age-right")); // Padding Left button popup age
        const borderRadiusButtonAge = parseInt(popupElement.getAttribute("data-border-radius-button-age")); // Border Radius button popup age
        const borderWidthButtonAge = parseInt(popupElement.getAttribute("data-border-width-button-age")); // Border width button popup age
        const borderRadiusFormAge = parseInt(popupElement.getAttribute("data-border-radius-form-age")); // Border radius button popup age
        const borderStyleButtonAge = popupElement.getAttribute("data-border-style-button-age"); // border style button age
        const borderColorButtonAge = popupElement.getAttribute("data-border-color-button-age"); // border color button age
        const borderColorHoverButtonAge = popupElement.getAttribute("data-border-color-hover-button-age"); // border color hover button age
        const transitionBorderColorButtonAge = parseInt(popupElement.getAttribute("data-trasition-border-color-button-age")); // Transition border color button popup age
        const sizeButtonAge = parseInt(popupElement.getAttribute("data-size-button-age")); // Size button popup age
        const backgroundColorButtonAge = popupElement.getAttribute("data-background-color-button-age"); // background color button age
        const backgroundColorHoverButtonAge = popupElement.getAttribute("data-background-color-hover-button-age"); // background color hover button age
        const backgroundGradientButtonAge = popupElement.getAttribute("data-background-gradient-button-age"); // background gradient color button age
        const backgroundGradientHoverButtonAge = popupElement.getAttribute("data-background-gradient-hover-button-age"); // background gradient hover color button age
        const transitionBackgroundColorButtonAge = parseInt(popupElement.getAttribute("data-transition-background-color-button-age")); // Transition background color button popup age
        const colorButtonAge = popupElement.getAttribute("data-color-button-age"); //  color button age
        const colorHoverButtonAge = popupElement.getAttribute("data-color-hover-button-age"); //  color hover button age
        const transitionColorButtonAge = parseInt(popupElement.getAttribute("data-transition-color-button-age")); // Transition color button popup age
        const backgroundColorContdownSeconds  = popupElement.getAttribute("data-background-seconds"); // background seconds
        const borderRadiusContdownSeconds = parseInt(popupElement.getAttribute("data-radius-seconds")); // border radius seconds
        const paddingContdownSeconds = parseInt(popupElement.getAttribute("data-padding-seconds")); // padding top/bottom seconds
        const paddingContdownSecondsRight = parseInt(popupElement.getAttribute("data-padding-right-second")); // padding left/right seconds
        const linkRedirectButtonNo = popupElement.getAttribute("data-link-button-no"); // Link button No
        const linkRedirectButtonNoWindowString = popupElement.getAttribute("data-link-button-no-window"); // Enable new window link button No
        const linkRedirectButtonNoWindow = linkRedirectButtonNoWindowString === "true"; // Enable new window link button No
        const linkRedirectButtonYes = popupElement.getAttribute("data-link-button-yes"); // Link button Yes
        const linkRedirectButtonYesWindowString = popupElement.getAttribute("data-link-button-yes-window"); // Enable new window link button Yes
        const linkRedirectButtonYesWindow = linkRedirectButtonYesWindowString === "true"; // Enable new window link button Yes
        const enableBlurString = popupElement.getAttribute("data-blur"); // Enable blur filter
        const enableBlur = enableBlurString === "true"; // Enable blur filter
        const blurIntens = parseInt(popupElement.getAttribute("data-blur-intens")); // Filter intens
        const enabelButtonClassString = popupElement.getAttribute("data-close-button"); // Enable close button
        const enabelButtonClass = enabelButtonClassString === "true"; // Enable close button
        const durationAnimationClose = parseInt(popupElement.getAttribute("data-animation-close")); //duration animation close popup

        let popupClosed = localStorage.getItem(`popupClosed_${popupId}`) === "true";

        // Aggiungi gestione del click sul bottone di chiusura
        const closeButton = document.createElement("button");
        closeButton.classList.add("cocopopup-button-close-popup");
        closeButton.textContent = textButton;
        closeButton.style.zIndex = zIndexButton;
        closeButton.addEventListener("click", () => handleClosePopup(popupId));
        closeButton.addEventListener("click", () => {
            handleClosePopup(popupId);

            // Chiudi il popup
            if (popupElement) {
                 popupElement.style.animation = 'fadeOut '+durationAnimationClose+'ms ease'; // Applica l'animazione
                // Attendi il completamento dell'animazione prima di nascondere l'elemento
                setTimeout(() => {
                    popupElement.style.display = 'none'; // Nasconde il popup dopo l'animazione
                    popupElement.style.animation = ''; // Rimuove l'animazione per il prossimo utilizzo
                }, durationAnimationClose); // 300 ms è il tempo dell'animazione definita
            }
            // Filter
            if ( filterBody === true ) {
                hideOverlay();
            }

        });
        popupElement.appendChild(closeButton);

        if (enableButton2 === true) {
            // Creazione del secondo pulsante di chiusura per rispondere "sì"
            const yesButton = document.createElement("button");
            yesButton.classList.add("cocopopup-button-close-2-popup");
            yesButton.textContent = textButton2;
            yesButton.addEventListener("click", () => handleYesResponse());
            // Aggiungi il pulsante "Sì" al popup
            popupElement.appendChild(yesButton);
            // Funzione per gestire la risposta "sì"
            function handleYesResponse() {
              // Specifica l'URL a cui reindirizzare l'utente
                var redirectURL = linkRedirectButtonYes; 
                // Controlla il valore di linkRedirectButtonYesWindow
                if (linkRedirectButtonYesWindow === false) {
                    // Apre l'URL nella stessa finestra
                    window.location.href = redirectURL;
                } else {
                    // Apre l'URL in una nuova finestra
                    window.open(redirectURL, "_blank");
                }
            }
        }

        // Funzione per rimuovere il Button
        function removeCloseButton(popupElement) {
            // Seleziona il bottone di chiusura all'interno del popup
            const closeButton = popupElement.querySelector('.cocopopup-button-close-popup');
            // Rimuovi il bottone di chiusura se esiste
            if (closeButton) {
                closeButton.parentNode.removeChild(closeButton);
            }
        }

        // Funzione per creare un filtro al body 
        function createOverlay() {
            const overlay = document.createElement("div");
            overlay.id = "cocopopup-overlay-contdown";
            overlay.style.backgroundColor = colorContdown; 
            if (enableBlur === true) {
                const blurValue = `${blurIntens}px`; 
                overlay.style.filter=`blur(${blurValue})`;
                overlay.style["-webkit-filter"] = `blur(${blurValue})`;
                overlay.style.backdropFilter=`blur(${blurValue})`;
                overlay.style["-webkit-backdrop-filter"] =`blur(${blurValue})`;
            }
            document.body.appendChild(overlay);
        }
        function showOverlay() {
            let overlay = document.getElementById("cocopopup-overlay-contdown");
            if (!overlay) {
                createOverlay(); // Se l'overlay non esiste, crealo
                overlay = document.getElementById("cocopopup-overlay-contdown"); // Ottieni di nuovo l'elemento appena creato
            }
            overlay.style.display = "block";
        }
        function hideOverlay() {
            const overlay = document.getElementById("cocopopup-overlay-contdown");
            if (overlay) {
                overlay.style.display = "none";
            }
        }

        // Funzione per mostrare una immagine in background
        function createImageOverlay(imageUrlS) {
            const imageOverlay = document.createElement("img");
            imageOverlay.id = "cocopopup-image-overlay"; // ID dell'immagine overlay
            imageOverlay.src = imageUrlS; // URL dell'immagine da utilizzare come overlay
            imageOverlay.style.position = "fixed";
            imageOverlay.style.top = "0";
            imageOverlay.style.left = "0";
            imageOverlay.style.width = "100%";
            imageOverlay.style.height = "100%";
            imageOverlay.style.objectFit = "cover"; // per adattare l'immagine alle dimensioni del body
            imageOverlay.style.zIndex = "99"; // per posizionare l'immagine sopra a tutto il resto
            document.body.appendChild(imageOverlay);
        }
        
        function showImageOverlay(imageUrlS) {
            let imageOverlay = document.getElementById("cocopopup-image-overlay");
            if (!imageOverlay) {
                createImageOverlay(imageUrl);
                imageOverlay = document.getElementById("cocopopup-image-overlay"); // Ottieni di nuovo l'elemento appena creato
            }
            imageOverlay.style.display = "block";
        }
        
        function hideImageOverlay() {
            const imageOverlay = document.getElementById("cocopopup-image-overlay");
            if (imageOverlay) {
                imageOverlay.style.display = "none";
            }
        }
        
        // Enable image body 
        if (filterBodyImage === true) {
            showImageOverlay();
        }

         /* EVENTI */
         function cocoPopupEvents() {
            // Uscita dalla pagina
            if (selectedEvents === 'exitPage') {
                logicExitPage();
            }
            // Click su classe elemento specifico
            if (openSound === true) {
                if (selectedEvents === 'logicExitElementClass') {
                    logicExitClickByClassWithSound(classNameElement);
                }
            }
            if (openSound === false) {
                if (selectedEvents === 'logicExitElementClass') {
                    logicExitClickByClass(classNameElement);
                }
            }
            // Hover su classe elemento specifico
            if (selectedEvents === 'logicExitElementClassHover') {
                logicExitHoverByClass(classNameElementHover);
            }
            // Uscita ritardata
            if (selectedEvents === 'exitTime') {
                logicExitTime();
            }
            // Inattività dello scroll
            if (selectedEvents === 'exitScrollNo') {
                logicExitScrollInactive();
            }
            // Posizione pagina
            if (selectedEvents === 'exitScrollPosition') {
                logicExitScrollPosition();
            }
            // Direzione Scroll
            if (selectedEvents === 'exitScrollDirection') {
                logicExitScrollDirection();
            }
            // Classe specifica
            if (selectedEvents === 'exitClass') {
                logicExitClass();
            }
        }

        /* CONDIZIONI */
        function allCondition() {
            let shouldShowPopup = true;

            // Verifica la modalità di concatenazione delle condizioni
            if (conditionAndOr === 'and') {
                // Concatenazione con 'and'
                shouldShowPopup =
                    (!exitAll ||  logicExitAll()) &&
                    (!exitVisitNumber || logicExitVisitNumber()) &&
                    (!exitUrl || logicExitUrl()) &&
                    (!exitExternal || logicExitLinkExt()) &&
                    (!exitLogUser || logicExitLoggedUser()) &&
                    (!exitLanguage || logicExitLanguage()) &&
                    (!exitOperationSystem || logicExitOS()) &&
                    (!exitBrowser || logicExitBrowser());
            } else if (conditionAndOr === 'or') {
                // Concatenazione con 'or'
                shouldShowPopup =
                    (exitAll &&  logicExitAll()) ||
                    (exitVisitNumber && logicExitVisitNumber()) ||
                    (exitUrl && logicExitUrl()) ||
                    (exitExternal && logicExitLinkExt()) ||
                    (exitLogUser && logicExitLoggedUser()) ||
                    (exitLanguage && logicExitLanguage()) ||
                    (exitOperationSystem && logicExitOS()) ||
                    (exitBrowser && logicExitBrowser());
            }

            if (shouldShowPopup) {
                cocoPopupEvents();
            }
        }
        // Chiamata alla funzione per controllare se mostrare il popup
        allCondition();

        //   WOOCOMMERCE  //

        // Schedule
        if (exitSchedule === true) {
            logicExitSchedule();
        }
        // Carrello vuoto
        if (exitWooCartEmpty === true) {
            logicExitWooCartEmpty();
        }
        // Carrello contiene numero prodotti
        if (exitWooCartCount === true) {
            logicExitWooCartCount();
        }
        // ID prodotto
        if (exitWooCartId === true) {
            logicExitWooProductId(productId);
        }
        // Ammontare carrello
        if (exitWooCartAmount === true) {
            logicExitCartAmount();
        }

        /* FUNZIONE DISPOSITIVI */

        // Funzione per mostrare il popup solo su dispositivi desktop
        function showPopupOnDesktop() {
            const isDesktop = window.matchMedia(
                "(min-width: " + pxDesktop + "px)",
            ).matches; // Match solo se il dispositivo è un desktop
            if (isDesktop) {
                showPopup();
            }
        }

        // Funzione per mostrare il popup solo su dispositivi Tablet
        function showPopupOnTablet() {
            const isTablet = window.matchMedia(
                "(max-width: " + pxTablet + "px)",
            ).matches; // Match solo se il dispositivo è un tablet
            if (isTablet) {
                showPopup();
            }
        }

        // Funzione per mostrare il popup solo su dispositivi Mobile
        function showPopupOnMobile() {
            const isMobile = window.matchMedia(
                "(max-width: " + pxMobile + "px)",
            ).matches; // Match solo se il dispositivo è un mobile
            if (isMobile) {
                showPopup();
            }
        }
        // Funzione dispositivi
        function showPopupDevices() {
            if (exitDesktop === true) {
                showPopupOnDesktop();
            }
            if (exitTablet === true) {
                showPopupOnTablet();
            }
            if (exitMobile === true) {
                showPopupOnMobile();
            }
        }

        /* FUNZIONI EVENTI */
        
        // Uscita dall pagina
        function logicExitPage() {

            let timer; // Variabile per memorizzare il timeout
            document.body.addEventListener("mouseout", function (event) {
                // Verifica se il mouse sta lasciando la finestra del browser
                if (!event.relatedTarget && !popupVisible) {
                    // Cancella il timeout precedente se presente
                    clearTimeout(timer);
                    // Imposta un nuovo timeout per mostrare il popup dopo il periodo di ritardo specificato
                    timer = setTimeout(function () {
                        showPopupDevices();
                    }, timeExit);
                }
            });
        }

        // Funzione per aprire il popup al clic di una classe specifica con audio anche
        function logicExitClickByClassWithSound(elementClass, enableSoundCustom = true) {
            const elements = document.querySelectorAll('.' + elementClass);
            let defaultAudio = new Audio(plugin_data.pluginUrl + 'audio/open-1.mp3');
        
            elements.forEach(function(element) {
                element.addEventListener('click', function() {
                    let customAudio = null;
                    
                    // Leggi l'attributo fileAudio dall'elemento HTML
                    const fileAudioUp = fileAudio;
                    
                    // Se è stato specificato un file audio personalizzato, caricalo
                    if (fileAudioUp) {
                        customAudio = new Audio(fileAudioUp);
                    }
                    
                    // Se l'audio personalizzato è abilitato, riproduci il suono personalizzato
                    if (enableSoundCustom && customAudio) {
                        customAudio.play();
                    }
                    // Altrimenti, riproduci il suono predefinito
                    else {
                        defaultAudio.play();
                    }
                    
                    if (reopenPopup === false) {
                        if (!popupVisible) { // Se il popup non è stato ancora mostrato
                            showPopupDevices(); // Mostra il popup
                            popupVisible = true; // Imposta il flag a vero
                        }
                    }
                    if (reopenPopup === true) {
                        showPopupDevices();
                    }
                });
            });
            
            if (elements.length === 0) {
               
            }
        }

        // Uscita con una classe specifica
        function logicExitClickByClass(elementClass) {
            const elements = document.querySelectorAll('.' + elementClass);
            elements.forEach(function(element) {
                element.addEventListener('click', function() {
                    if (reopenPopup === false) {
                        if (!popupVisible) { // Se il popup non è stato ancora mostrato
                            showPopupDevices(); // Mostra il popup
                            popupVisible = true; // Imposta il flag a vero
                        }
                    }
                    if (reopenPopup === true) {
                        showPopupDevices();
                    }
                });
            });
            if (elements.length === 0) {
              
            }
        }
      
        // Funzione per mostrare il popup quando un elemento con una determinata classe viene passato sopra con il mouse
        function logicExitHoverByClass(elementClass) {
            // Seleziona tutti gli elementi con la classe specificata
            const elements = document.querySelectorAll('.' + elementClass);

            // Aggiungi un gestore di eventi per il passaggio del mouse su ciascun elemento
            elements.forEach(function(element) {
                element.addEventListener('mouseenter', function() {
                    if (reopenPopup === false) {
                        if (!popupVisible) { // Se il popup non è stato ancora mostrato
                            showPopupDevices(); // Mostra il popup
                            popupVisible = true; // Imposta il flag a vero
                        }
                    }
                    if (reopenPopup === true) {
                        showPopupDevices();
                    }
                });
            });

            // Se non ci sono elementi con la classe specificata, emetti un messaggio di errore
            if (elements.length === 0) {
                console.error('Nessun elemento trovato con la classe: ' + elementClass);
            }
        }

        // Uscita ritardata
        function logicExitTime() {
            setTimeout(function () {
                showPopupDevices();
            }, delay);
        }
        
        // Inattività dello Scroll
        function logicExitScrollInactive(){
            let timeoutId;
            function showPopupWithDebounce() {
                clearTimeout(timeoutId);
                timeoutId = setTimeout(function () {
                    if (!popupVisible && !popupClosed) {
                    showPopupDevices();
                    }
                }, scrollTimeout);
            }
            document.addEventListener("scroll", showPopupWithDebounce);
        }
        
        // Posizione Pagina
        function logicExitScrollPosition() {
            let triggerPosition; // Dichiarare la variabile triggerPosition all'esterno dei blocchi condizionali
        
            function showPopupOnScrollPosition() {
                const scrollPosition = window.scrollY;
                const windowHeight = window.innerHeight;
                const documentHeight = document.body.scrollHeight;
        
                // Calcola la posizione in base alla percentuale della pagina
                if (selectOptionPage === "page-percent") {
                    triggerPosition = (percentagePage * (documentHeight - windowHeight)) / 100;
                } else {
                
                    // Assegna il valore corretto a triggerPosition in base all'opzione selezionata
                    if (selectOptionPage === "page-1") {
                        triggerPosition = (3 * windowHeight) / 4;
                    } else if (selectOptionPage === "page-2") {
                        triggerPosition = windowHeight / 2;
                    } else if (selectOptionPage === "page-3") {
                        triggerPosition = document.body.scrollHeight - windowHeight;
                    }
               }
                
                // Verifica se il popup non è visibile e non è stato chiuso
                if (!popupVisible && !popupClosed) {
                    // Mostra o nascondi il popup in base alla posizione di trigger
                    if (scrollPosition >= triggerPosition) {
                        showPopupDevices();
                    } else {
                        hidePopup(); // Nascondi il popup solo se non è già visibile e non è stato chiuso
                    }
                }
            }
        
            // Aggiungi l'ascoltatore degli eventi scroll solo se il popup non è stato chiuso
            if (!popupClosed) {
                document.addEventListener("scroll", showPopupOnScrollPosition);
            }
        }
        
        // Direzione scroll
        function logicExitScrollDirection() {
            if (scrollDirection === "up") {
                let lastScrollTop =
                    window.scrollY || document.documentElement.scrollTop;

                function showPopupOnScrollUp() {
                    const currentScrollTop =
                        window.scrollY || document.documentElement.scrollTop;
                    if (currentScrollTop < lastScrollTop && !popupVisible) {
                        // Scroll verso l'alto e il popup non è ancora visibile
                        setTimeout(() => {
                            showPopupDevices();
                        }, timeScrollDirection);
                    }
                    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // Imposta il valore minimo a 0 per evitare valori negativi
                }

                document.addEventListener("scroll", showPopupOnScrollUp);
            }

            if (scrollDirection === "down") {
                let lastScrollTop =
                    window.scrollY || document.documentElement.scrollTop;

                function showPopupOnScrollDown() {
                    const currentScrollTop =
                        window.scrollY || document.documentElement.scrollTop;
                    if (currentScrollTop > lastScrollTop && !popupVisible) {
                        // Scroll verso il basso e il popup non è ancora visibile
                        setTimeout(() => {
                            showPopupDevices();
                        }, timeScrollDirection);
                    }
                    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // Imposta il valore minimo a 0 per evitare valori negativi
                }

                document.addEventListener("scroll", showPopupOnScrollDown);
            }
        }

        // Classe specifica
        function logicExitClass() {
            function showPopupOnElementTrigger() {
                const triggerElement = document.querySelector("." + popupClassName); // Seleziona l'elemento con la classe specifica
                if (triggerElement) {
                    // Verifica se l'elemento trigger esiste
                    const rect = triggerElement.getBoundingClientRect();
                    const isTriggerVisible =
                        rect.top >= 0 &&
                        rect.left >= 0 &&
                        rect.bottom <=
                            (window.innerHeight || document.documentElement.clientHeight) &&
                        rect.right <=
                            (window.innerWidth || document.documentElement.clientWidth);
                    if (isTriggerVisible && !popupVisible) {
                        showPopupDevices();
                    }
                }
            }
            document.addEventListener("scroll", showPopupOnElementTrigger);
        }

        // CONDIZIONI //

        // Visite superate
        function logicExitVisitNumber() {
            // Ottieni il conteggio delle visite dal localStorage per il popup specifico
            const visitsCount =
                parseInt(localStorage.getItem(`popupVisitsCount_${popupId}`)) || 0;
                // Incrementa il conteggio delle visite per il popup specifico
                localStorage.setItem(`popupVisitsCount_${popupId}`, visitsCount + 1);
            // Verifica se il popup è stato chiuso dall'utente
            const isPopupClosed =
                localStorage.getItem(`popupClosed_${popupId}`) === "true";
            // Mostra il popup solo dopo la terza visita e se il popup non è stato chiuso
            if (visitsCount >= numberVisit && !isPopupClosed) {
                return true;
            } else {
                return false;
            }
        }
        
        // url specifico
        function logicExitUrl() {
            function showPopupWithDelay(delay) {
                setTimeout(() => {
                    cocoPopupEvents();
                }, delay);
            }
            function checkReferrer() {
                const urlParams = new URLSearchParams(window.location.search);
                const source = urlParams.get("source");
                if (source === desiredURL) {
                    showPopupWithDelay(timeUrl);
                    return true; // Restituisci true se il popup deve essere mostrato
                } else {
                    return false; // Restituisci false se il popup non deve essere mostrato
                }
            }
            // Restituisci il risultato di checkReferrer(), che sarà true se il popup deve essere mostrato, altrimenti false
            return checkReferrer();
        }
        
        // link Esterno
        function logicExitLinkExt() {
            const referrer = document.referrer; // Ottieni l'URL di provenienza
            // Verifica se l'URL di provenienza è esterno al sito web
            if (referrer && !referrer.includes(window.location.hostname)) {
                setTimeout(function () {
                    cocoPopupEvents();
                }, timeExternaLink);
                return true; // Restituisci true se il popup deve essere mostrato
            } else {
                hidePopup(); // Nascondi il popup se l'utente arriva da un link interno al sito web
                return false; // Restituisci false se il popup non deve essere mostrato
            }
        }
        
        // Utenti loggati
        function logicExitLoggedUser() {
            // Verifica se l'utente è loggato
            const isLoggedIn = document.body.classList.contains("logged-in");
            if (isLoggedIn) {
                setTimeout(function () {
                    cocoPopupEvents();
                }, timeLogged); // Mostra il popup se l'utente è loggato
                return true; // Restituisci true se il popup deve essere mostrato
            } else {
                hidePopup(); // Nascondi il popup se l'utente non è loggato
                return false; // Restituisci false se il popup non deve essere mostrato
            }
        }
        
        // Lingua 
        function logicExitLanguage() {
            if (exitLanguage) { // Verifica se la condizione è abilitata
                var userLanguage = navigator.language || navigator.userLanguage;
                var patternString = "^(" + selectedLanguages + ")";
                var languagePattern = new RegExp(patternString);
                if (languagePattern.test(userLanguage)) {
                    
                    return true; // Restituisce true se la condizione è soddisfatta
                } else {
                    return false; // Restituisce false se la condizione non è soddisfatta
                }
            } else {
                return true; // Se la condizione è disabilitata, restituisce true per consentire il passaggio alla successiva condizione
            }
        }

        // Sistema operativo
        function logicExitOS() {
            const userAgent = navigator.userAgent.toLowerCase(); // Ottieni l'user agent del browser
            
            // Verifica se almeno uno dei sistemi operativi è abilitato
            if (exitWindows || exitMac || exitLinus) {
                // Verifica se l'user agent contiene informazioni specifiche sul sistema operativo
                if ((exitWindows && userAgent.includes("windows")) ||
                    (exitMac && userAgent.includes("mac")) ||
                    (exitLinus && userAgent.includes("linux"))) {
                    cocoPopupEvents(); // Mostra il popup se l'utente sta utilizzando uno dei sistemi operativi abilitati
                    return true; // Restituisci true se il popup deve essere mostrato
                } else {
                    hidePopup(); // Nascondi il popup se l'utente non sta utilizzando uno dei sistemi operativi abilitati
                    return false; // Restituisci false se il popup non deve essere mostrato
                }
            } else {
                hidePopup(); // Nascondi il popup se nessun sistema operativo è abilitato
                return false; // Restituisci false se il popup non deve essere mostrato
            }
        }
        
        /* Browser */
        function logicExitBrowser() {
            const userAgent = navigator.userAgent.toLowerCase();
            const vendor = navigator.vendor.toLowerCase();
            switch (selectBrowser) {
                case "chrome":
                    return userAgent.includes("chrome") && vendor.includes("google");
                case "firefox":
                    return userAgent.includes("firefox");
                case "safari":
                    return vendor.includes("apple");
                case "edge":
                    return userAgent.includes("edg");
                case "opera":
                    return userAgent.includes("opera") && vendor.includes("opera");
                case "msie":
                    return userAgent.includes("msie") || userAgent.includes("trident");
                default:
                    return false; // Nessuna corrispondenza, restituisce false
            }
        }

        // Sempre visibile //
        function logicExitAll() {
            // Verifica se exitAll è true
            if (exitAll) {
                return true; // Restituisci true se exitAll è abilitato
            } else {
                return false; // Altrimenti, restituisci false
            }
        }
            
        // Schedule 
        function logicExitSchedule() {
            function showPopupWithinScheduledPeriod(startDateTime, endDateTime) {
                const currentDate = new Date();
                const startTime = new Date(startDateTime);
                const endTime = new Date(endDateTime);

                // Confronta la data corrente con la data di inizio e fine programmata
                if (currentDate >= startTime && currentDate <= endTime) {
                    // Mostra il popup se la data corrente è compresa tra la data di inizio e fine programmata
                    cocoPopupEvents();
                }
            }

            // Definisci la data e l'ora di inizio e fine programmata
            const startDateTime = date; // Esempio di data e ora di inizio programmata
            const endDateTime = endDate; // Esempio di data e ora di fine programmata
            // Chiamata alla funzione con la data e l'ora di inizio e fine programmata
            showPopupWithinScheduledPeriod(startDateTime, endDateTime);
        }

        /* WOOCOMMERCE */

        // Verifica se WooCommerce è attivo e il carrello è vuoto
        function logicExitWooCartEmpty() {
            if (
                typeof wc_cart_params !== "undefined" &&
                wc_cart_params.cart_contents_count == 0
            ) {
                showPopupDevices();
            }
        }

        // Verifica se WooCommerce è attivo e se il carrello contiene esattamente 3 prodotti
        function logicExitWooCartCount() {
            if (
                typeof wc_cart_params !== "undefined" &&
                wc_cart_params.cart_contents_count === numberProductCart
            ) {
                showPopupDevices();
            }
        }

        // Prodotto specifico nel carrello
        function logicExitWooProductId(productId) {
            if (
                typeof wc_cart_params !== "undefined" &&
                typeof wc_cart_params.cart_contents !== "undefined"
            ) {
                const cartContents = wc_cart_params.cart_contents;

                if (Object.keys(cartContents).length > 0) {
                    const isInCart = Object.keys(cartContents).some(
                        (key) => cartContents[key].product_id == productId,
                    );

                    if (isInCart) {
                        showPopupDevices();
                    } else {
                    }
                } else {
                }
            } else {
            }
        }

        /* Total Amount in Cart */
        function logicExitCartAmount() {
            function formatPrice(priceString) {
                // Rimuove eventuali caratteri non numerici tranne la virgola per i decimali
                const cleanedPrice = priceString.replace(/[^0-9,.]/g, '');
                // Sostituisce la virgola con il punto per i decimali
                const formattedPrice = cleanedPrice.replace(',', '.');
                return formattedPrice;
            }
            function showPopupIfCartTotalLessThan(amount) {
                if (typeof wc_cart_params !== 'undefined' && typeof wc_cart_params.cart_total !== 'undefined') {
                    const cartTotalString = wc_cart_params.cart_total;
                    // Formatta il prezzo totale in un numero valido
                    const cartTotal = parseFloat(formatPrice(cartTotalString));
                     // Verifica quale opzione è stata selezionata
                    if (selectedAmountCart === 'lower') {
                        // Mostra il popup se il prezzo totale del carrello è inferiore all'importo specificato
                        if (!isNaN(cartTotal) && cartTotal < amount) {
                            showPopupDevices();
                        }
                    } else if (selectedAmountCart === 'higher') {
                        // Mostra il popup se il prezzo totale del carrello è superiore all'importo specificato
                        if (!isNaN(cartTotal) && cartTotal > amount) {
                            showPopupDevices();
                        }
                    }
                    else {
                    }
                } else {
                }
            }
            // Chiamata alla funzione con l'importo specificato
            showPopupIfCartTotalLessThan(amountProductCart); 
        }

        // Funzione per mostrare il popup
        function showPopup() {
            if ( filterBody === true ) {
                showOverlay();
            }
            // Chiusura Contdown
            if (selectedClosed === 'close-contdown') {
                if (selectedContdown === 'seconds') {
                    closedContdown();
                }
                if (selectedContdown === 'date') {
                    closedContdownClassic();
                }
                if (selectedContdown === 'date-round') {
                    closedContdownRound();
                }
            }
            // Filter
            if (overflowBody === true) {
                document.body.style.overflow = 'hidden'; // Blocca lo scroll del body
            }
    
                popupElement.classList.add(selectedAnimationPopupIn);
                popupVisible = true;
        
            if (!popupClosed) {
                // Mostra il popup solo se non è stato chiuso
                popupElement.style.display = "block";
            }

            // Codice JavaScript per inviare una richiesta AJAX per aggiornare il conteggio delle visualizzazioni del popup
            jQuery.ajax({
                url: frontend_ajax_object.ajax_url,
                type: "POST",
                data: {
                    action: "update_popup_viewe_count", // Nome dell'azione AJAX da eseguire nel tuo codice PHP
                    popup_id: popupId, // Passa l'ID del popup al server
                },
                success: function(response) {
                },
                error: function(xhr, status, error) {
                    // Gestisci gli errori della richiesta AJAX
                    console.error("Si è verificato un errore durante l'aggiornamento del conteggio delle visualizzazioni del popup:");
                    console.error("Stato:", status);
                    console.error("Errore:", error);
                }
            });
        }

        // chiamata alla funzione per chiudere il popup
        cocoPopupClosed();

        // Funzione per gestire la chiusura del popup
        function handleClosePopup() {
        //  const popupElement = document.querySelector(`[data-popup-id="${popupId}"]`);

            if (popupElement) {
                           
                // Chiudi il popup
                cocoPopupClosed();
                // hidePopup();
                if (overflowBody === true) {
                    document.body.style.overflow = 'auto';// Sblocca  lo scroll del body
                }
                // Controlla il valore di disablePopupClosing e imposta popupClosed e la localStorage di conseguenza
                if (disablePopupClosing === false) {
                    popupClosed = false;
                } else {
                    popupClosed = true;
                }
                // Salva lo stato di popupClosed nella localStorage
                localStorage.setItem(`popupClosed_${popupId}`, popupClosed.toString());
            
                // Effettua una richiesta AJAX per aggiornare il conteggio delle chiusure del popup lato server
                jQuery.ajax({
                    url: frontend_ajax_object.ajax_url,
                    type: "POST",
                    data: {
                        action: "update_popup_closure_count", // Nome dell'azione AJAX da eseguire nel tuo codice PHP
                        popup_id: popupId, // Passa l'ID del popup al server
                    },
                });
            
            }
        }
        
        // Funzione per chiudere il popup dopo lo scroll alla fine della pagina
        function closedScroll() {
            window.addEventListener("scroll", () => {
                // Controlla se lo scroll è verso il basso
                if (
                    window.innerHeight + window.scrollY >=
                    document.body.offsetHeight
                ) {
                    // Nascondi il popup quando si è raggiunto il fondo della pagina
                    if (popupElement) {
                        popupElement.style.animation = 'fadeOut '+durationAnimationClose+'ms ease'; // Applica l'animazione
                       // Attendi il completamento dell'animazione prima di nascondere l'elemento
                       setTimeout(() => {
                           popupElement.style.display = 'none'; // Nasconde il popup dopo l'animazione
                           popupElement.style.animation = ''; // Rimuove l'animazione per il prossimo utilizzo
                       }, durationAnimationClose); // 300 ms è il tempo dell'animazione definita
                   }
                    // Filter
                    if ( filterBody === true ) {
                        hideOverlay();
                    }
                }
            });
            removeCloseButton(popupElement);
        }
            
        // Funzione per chiudere il popup con il click sulla finestra
        function closedClickWindow() {
            window.addEventListener("click", function (event) {
                // Verifica se l'evento di click si è verificato al di fuori del popup
                if (!popupElement.contains(event.target)) {
                    // Chiudi il popup
                    if (popupElement) {
                        popupElement.style.animation = 'fadeOut '+durationAnimationClose+'ms ease'; // Applica l'animazione
                       // Attendi il completamento dell'animazione prima di nascondere l'elemento
                       setTimeout(() => {
                           popupElement.style.display = 'none'; // Nasconde il popup dopo l'animazione
                           popupElement.style.animation = ''; // Rimuove l'animazione per il prossimo utilizzo
                       }, durationAnimationClose); // 300 ms è il tempo dell'animazione definita
                   }
                    // Filter
                    if ( filterBody === true ) {
                        hideOverlay();
                    }
                    document.body.style.overflow = 'auto'; 
                }
            });
            removeCloseButton(popupElement);
        }

        // Chiusura graduale con ritardo
        function reduceOpacityAndClose(duration, delayOpacity) {
            setTimeout(() => {
                // Aggiungi un ritardo prima di iniziare la chiusura graduale
                const fadeOutInterval = 50; // Intervallo di tempo per ridurre gradualmente l'opacità
                const steps = duration / fadeOutInterval; // Numero di passaggi per ridurre l'opacità
                const opacityStep = 1 / steps; // Passo di riduzione dell'opacità per ogni intervallo
                let currentOpacity = 1; // Opacità iniziale del popup

                // Riduci gradualmente l'opacità del popup
                const reduceOpacityInterval = setInterval(() => {
                    currentOpacity -= opacityStep; // Riduci l'opacità di un passo
                    popupElement.style.opacity = currentOpacity; // Applica l'opacità aggiornata al popup

                    // Se l'opacità raggiunge 0, ferma l'intervallo e chiudi il popup
                    if (currentOpacity <= 0) {
                        clearInterval(reduceOpacityInterval); // Ferma l'intervallo di riduzione dell'opacità
                        popupElement.style.display = "none";
                        // Filter
                        if ( filterBody === true ) {
                            hideOverlay();
                        }
                        document.body.style.overflow = 'auto'; 
                    }
                }, fadeOutInterval);
            }, delayOpacity); // Tempo di attesa prima di iniziare la chiusura graduale
            removeCloseButton(popupElement);
        }

        // Funzione per chiudere il popup quando viene cliccato un elemento con una classe specifica all'interno del popup
        function closePopupOnElementClick(elementClass, parentContainer) {
                        
            // Definisci la funzione di gestione dell'evento click
            function handleClick(event) {
                const clickedElement = event.target;
                const clickedOnSpecificElement = clickedElement.classList.contains(elementClass);
                
                // Controlla se il clic è avvenuto sull'elemento specifico all'interno del popup
                if (clickedOnSpecificElement || clickedElement.closest('.' + elementClass)) {
                    // Chiudi il popup solo se è stato cliccato l'elemento specifico
                    if (popupElement) {
                        popupElement.style.animation = 'fadeOut '+durationAnimationClose+'ms ease'; // Applica l'animazione
                       // Attendi il completamento dell'animazione prima di nascondere l'elemento
                       setTimeout(() => {
                           popupElement.style.display = 'none'; // Nasconde il popup dopo l'animazione
                           popupElement.style.animation = ''; // Rimuove l'animazione per il prossimo utilizzo
                       }, durationAnimationClose); // 300 ms è il tempo dell'animazione definita
                   }
                    // Filter
                    if ( filterBody === true ) {
                        hideOverlay();
                    }
                    document.body.style.overflow = 'auto'; 
                }
            }
            // Aggiungi l'ascoltatore degli eventi clic al documento
            document.addEventListener('click', handleClick);
        }

        // Funzione per nascondere il popup e aggiungere una classe
        function hidePopup(filterBody) {
            
            cocoPopupClosed();
            // Filter
            if ( filterBody === true ) {
                hideOverlay();
            }
        
        }

        // Chiusura immediata
        function closedIstant() {
           // popupElement.style.display = "none";
            // Filter
            if ( filterBody === true ) {
                hideOverlay();
            }
        }

        // Funzione per chiudere il popup e reindirizzare l'utente su un URL specifico
        function  closeUrl() {
            function closeAndRedirect(url) {
                popupElement.style.display = "none";
                // Filter
                if (filterBody === true) {
                    hideOverlay();
                }
                // Reindirizzamento
                window.location.href = url;
            }

            function handleClosePopup(popupId) {
                // Specifica l'URL a cui reindirizzare l'utente
                if (linkRedirectButtonNoWindow === false) {
                    var redirectURL = linkRedirectButtonNo; 
                    closeAndRedirect(redirectURL);
                }
                if (linkRedirectButtonNoWindow === true) {
                    var redirectURL = linkRedirectButtonNo;
                    window.open(redirectURL, "_blank");
                }
            }

            // Event listener per il click sul bottone di chiusura
            closeButton.addEventListener('click', () => handleClosePopup(popupId));
        }

        // Closed No
        function closedNo() {
            removeCloseButton(popupElement);
        }

        // Funzione per chiudere il popup dopo un lasso di tempo
        function closedTime() {
            removeCloseButton(popupElement);
            setTimeout(() => {
                if (popupElement) {
                    popupElement.style.animation = 'fadeOut '+durationAnimationClose+'ms ease'; // Applica l'animazione
                   // Attendi il completamento dell'animazione prima di nascondere l'elemento
                   setTimeout(() => {
                       popupElement.style.display = 'none'; // Nasconde il popup dopo l'animazione
                       popupElement.style.animation = ''; // Rimuove l'animazione per il prossimo utilizzo
                   }, durationAnimationClose); // 300 ms è il tempo dell'animazione definita
               }
                // Filter
                if ( filterBody === true ) {
                    hideOverlay();
                }
                document.body.style.overflow = 'auto'; 
            }, timeClosedPopup); 
        }
            
        // Funzione Contdown second
        function closedContdown() {

            // Verifica se closeButton è stato trovato
            if (contdownSecondAutomaticClose === true ) {
                if (closeButton) {
                    // Rimuovi l'elemento button dal suo genitore (il suo contenitore)
                    closeButton.parentNode.removeChild(closeButton);
                }
            }
          
            function showTimer(durationInSeconds) {
                const timerElement = document.createElement("div");
                timerElement.classList.add("cocopopup-text-contdown");
                timerElement.style.top = verticalContdown + 'px';
                timerElement.style.right = horizontalContdown + 'px';
                timerElement.style.fontSize = sizeContdown + 'px';
                timerElement.style.fontWeight = weightCont ;
                timerElement.style.color = colorContdownText;
                let remainingTime = durationInSeconds;

                if (contdownSecondAutomaticClose === false ) {
                    closeButton.style.display = "none";
                }

                const timerInterval = setInterval(() => {
                    // Crea un paragrafo
                    const paragraphElement = document.createElement("p");
                    // Crea un elemento span per racchiudere remainingTime
                    const remainingTimeSpan = document.createElement("span");
                    remainingTimeSpan.style.backgroundColor = backgroundColorContdownSeconds;
                    remainingTimeSpan.style.borderRadius = borderRadiusContdownSeconds+'px';
                    remainingTimeSpan.style.paddingTop = paddingContdownSeconds+'px';
                    remainingTimeSpan.style.paddingBottom = paddingContdownSeconds+'px';
                    remainingTimeSpan.style.paddingLeft = paddingContdownSecondsRight+'px';
                    remainingTimeSpan.style.paddingRight = paddingContdownSecondsRight+'px';
                    remainingTimeSpan.textContent = remainingTime;
                    // Aggiungi l'elemento span al paragrafo
                    paragraphElement.appendChild(remainingTimeSpan);
                    // Aggiungi il testo prima e dopo remainingTime
                    paragraphElement.insertAdjacentText('afterbegin', textContdownBefore + ' ');
                    paragraphElement.insertAdjacentText('beforeend', ' ' + textContdownAfter);
                    // Rimuovi il contenuto precedente
                    timerElement.innerHTML = '';
                    // Aggiungi il paragrafo al timerElement
                    timerElement.appendChild(paragraphElement);
                    remainingTime--;

                    if (remainingTime < 0) {
                        clearInterval(timerInterval);
                        // Mostra il bottone di chiusura quando il timer è terminato
                        if (contdownSecondAutomaticClose === false ) {
                            closeButton.style.display = "block";
                            timerElement.innerHTML = '';
                        }
                        if (contdownSecondAutomaticClose === true ) {
                            if (popupElement) {
                                popupElement.style.animation = 'fadeOut '+durationAnimationClose+'ms ease'; // Applica l'animazione
                               // Attendi il completamento dell'animazione prima di nascondere l'elemento
                               setTimeout(() => {
                                   popupElement.style.display = 'none'; // Nasconde il popup dopo l'animazione
                                   popupElement.style.animation = ''; // Rimuove l'animazione per il prossimo utilizzo
                               }, durationAnimationClose); // 300 ms è il tempo dell'animazione definita
                           }
                        }
                    }
                }, 1000);

                popupElement.appendChild(timerElement);

            }
           
            // Chiamata alla funzione per mostrare il timer e chiudere il popup dopo il numero di secondi specificato
            showTimer(secondContdown);
          
        }
        // Contdown classic 
        function closedContdownClassic() {
            // Verifica se closeButton è stato trovato
            if (contdownSecondAutomaticClose === false ) {
                if (closeButton) {
                    // Rimuovi l'elemento button dal suo genitore (il suo contenitore)
                    closeButton.parentNode.removeChild(closeButton);
                }
                
            }
            const newYearEl = document.getElementById("date");
            const daysEl = document.getElementById("days");
            const daysElCurr = daysEl.getElementsByClassName("curr");
            const daysElNext = daysEl.getElementsByClassName("next");
            const hoursEl = document.getElementById("hours");
            const hoursElCurr = hoursEl.getElementsByClassName("curr");
            const hoursElNext = hoursEl.getElementsByClassName("next");
            const minsEl = document.getElementById("mins");
            const minsElCurr = minsEl.getElementsByClassName("curr");
            const minsElNext = minsEl.getElementsByClassName("next");
            const secondsEl = document.getElementById("seconds");
            const secondsElCurr = secondsEl.getElementsByClassName("curr");
            const secondsElNext = secondsEl.getElementsByClassName("next");
            const newYear = new Date().getFullYear() + 1;
            let newYearTime = new Date(dateContdown);
            function updateAllCountdowns() {
                const dates = {
                    current: {
                        elements: [daysElCurr, hoursElCurr, minsElCurr, secondsElCurr],
                        values: ["00", "00", "00", "00"]
                    },
                    next: {
                        elements: [daysElNext, hoursElNext, minsElNext, secondsElNext],
                        values: ["00", "00", "00", "00"]
                    },
                    general: {
                        elements: [daysEl, hoursEl, minsEl, secondsEl]
                    }
                };
                const currentDate = new Date();
                updateCountdown(dates.current, currentDate, true);
                const nextDate = new Date(
                    currentDate.setSeconds(currentDate.getSeconds() + 1)
                );
                updateCountdown(dates.next, nextDate, false);
                if (enableFlipCont === true) {
                    for (let i = 0; i < dates.current.values.length; i++) {
                        if (dates.current.values[i] - dates.next.values[i] !== 0) {
                            dates.general.elements[i].classList.remove("flip");
                        }
                        setTimeout(function () {
                            dates.general.elements[i].classList.add("flip");
                        }, 50);
                    }
                }
                 // Controlla se il timer è terminato
                const totalSeconds = (newYearTime - currentDate) / 1000;
                if (totalSeconds <= 0) {
                    // Chiudi il popup
                    if (popupElement) {
                        popupElement.style.animation = 'fadeOut '+durationAnimationClose+'ms ease'; // Applica l'animazione
                       // Attendi il completamento dell'animazione prima di nascondere l'elemento
                       setTimeout(() => {
                           popupElement.style.display = 'none'; // Nasconde il popup dopo l'animazione
                           popupElement.style.animation = ''; // Rimuove l'animazione per il prossimo utilizzo
                       }, durationAnimationClose); // 300 ms è il tempo dell'animazione definita
                   }
                    // Filter
                    if ( filterBody === true ) {
                        hideOverlay();
                    }
                }

            }
            function updateCountdown(dates, currentTime, isCurrent) {
                const totalSeconds = (newYearTime - currentTime) / 1000;
                const days = Math.floor(totalSeconds / 3600 / 24);
                const hours = Math.floor(totalSeconds / 3600) % 24;
                const mins = Math.floor(totalSeconds / 60) % 60;
                const seconds = Math.floor(totalSeconds) % 60;
                if (currentTime.getMonth() == 0 && currentTime.getDate() <= 2) {
                    dates.values = ["00", "00", "00", "00"];
                    for (let i = 0; i < dates.elements.length; i++) {
                        for (let j = 0; j < daysElCurr.length; j++) {
                            dates.elements[i][j].innerHTML = dates.values[i];
                            if (isCurrent) {
                                newYearEl.innerHTML = newYear - 1;
                            }
                        }
                    }
                    return;
                }
                dates.values = [
                    days,
                    formatTime(hours),
                    formatTime(mins),
                    formatTime(seconds)
                ];
                for (let i = 0; i < dates.elements.length; i++) {
                    for (let j = 0; j < daysElCurr.length; j++) {
                        dates.elements[i][j].innerHTML = dates.values[i];
                    }
                }
                
            }
            function formatTime(time) {
                return time < 10 ? `0${time}` : time;
            }
            updateAllCountdowns();
            setInterval(updateAllCountdowns, 1000);
        }

        // Contdown Round
        function closedContdownRound() {

            // Verifica se closeButton è stato trovato
            if (contdownSecondAutomaticClose === false ) {
                if (closeButton) {
                    // Rimuovi l'elemento button dal suo genitore (il suo contenitore)
                    closeButton.parentNode.removeChild(closeButton);
                }
            }

            let days = document.getElementById('days');
            let hours = document.getElementById('hours');
            let minutes = document.getElementById('minutes');
            let seconds = document.getElementById('seconds');
            
            let dd = document.getElementById('dd');
            let hh = document.getElementById('hh');
            let mm = document.getElementById('mm');
            let ss = document.getElementById('ss');
            
            let countdown = document.getElementById("countdownRound");
            let wishDays = 10;
            
            // Imposta una data predefinita (1° aprile 2024 alle ore 12:00)
            let userDate = new Date(dateContdown).getTime();
            
            let x = setInterval(function () {
            let now = new Date().getTime();
            let distance = userDate - now;
            
            // time calculation
            let d = Math.floor(distance / (1000 * 60 * 60 * 24));
            let h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let s = Math.floor((distance % (1000 * 60)) / (1000));
            
            // output the result
            days.innerHTML = d + '<br><span style="font-weight:'+weightCont+';font-size:'+sizeContdown+'px;color:'+colorContdownText+'">' + contDays + '</span>';
            hours.innerHTML = h + '<br><span style="font-weight:'+weightCont+';font-size:'+sizeContdown+'px;color:'+colorContdownText+'">' + contHours + '</span>';
            minutes.innerHTML = m + '<br><span style="font-weight:'+weightCont+';font-size:'+sizeContdown+'px;color:'+colorContdownText+'">' + contMinutes + '</span>';
            seconds.innerHTML = s + '<br><span style="font-weight:'+weightCont+';font-size:'+sizeContdown+'px;color:'+colorContdownText+'">' + contSeconds + '</span>';
            
            // animate stroke
            dd.style.strokeDashoffset = 440 - (440 * d) / 365;
            hh.style.strokeDashoffset = 440 - (440 * h) / 24;
            mm.style.strokeDashoffset = 440 - (440 * m) / 60;
            ss.style.strokeDashoffset = 440 - (440 * s) / 60;
            // Controllo se il timer è terminato
            if (distance <= 0) {
                // Chiudi il popup
                if (popupElement) {
                    popupElement.style.animation = 'fadeOut '+durationAnimationClose+'ms ease'; // Applica l'animazione
                   // Attendi il completamento dell'animazione prima di nascondere l'elemento
                   setTimeout(() => {
                       popupElement.style.display = 'none'; // Nasconde il popup dopo l'animazione
                       popupElement.style.animation = ''; // Rimuove l'animazione per il prossimo utilizzo
                   }, durationAnimationClose); // 300 ms è il tempo dell'animazione definita
               }
                clearInterval(x); // Ferma l'intervallo
            }
            
            }, 1000);
        
        }

        // Popup Age Restictrion
        function closeAge() {
            function hideOverlay() {
                const overlay = document.getElementById("cocopopup-overlay-contdown");
            if (overlay) {
                overlay.style.display = "none";
            }
            }
            
            if (closeButton) {
                // Rimuovi l'elemento button dal suo genitore (il suo contenitore)
                closeButton.parentNode.removeChild(closeButton);
            }
            // Funzione per gestire il click sul bottone "Non ho 18 anni"
            function redirectToPolicyPage() {
                // Reindirizza l'utente alla pagina della politica del sito
                if (linkButtonOneAgeWindow === true) {
                    // Se linkButtonOneAgeWindow è true, apri il link in una nuova finestra
                    window.open(linkButtonOneAge, '_blank');
                } else {
                    // Se linkButtonOneAgeWindow è false, apri il link nella stessa finestra
                    window.location.href = linkButtonOneAge;
                }
            }
            function formatBackgroundColor() {
                if (backgroundGradientFormAge) {
                    return backgroundGradientFormAge;
                } else {
                    return backgroundColorFormAge;
                }
            }
            function formatBackgroundColorHover() {
                if (backgroundGradientHoverFormAge) {
                    return backgroundGradientHoverFormAge;
                } else {
                    return backgroundColorHoverFormAge;
                }
            }
            function formatBackgroundColorButton() {
                if (backgroundGradientButtonAge) {
                    return backgroundGradientButtonAge;
                } else {
                    return backgroundColorButtonAge;
                }
            }
            function formatBackgroundColorHoverButton() {
                if (backgroundGradientHoverButtonAge) {
                    return backgroundGradientHoverButtonAge;
                } else {
                    return backgroundColorHoverButtonAge;
                }
            }
            // Concatena i valori della transizione
            const transitionValue = 'background-color ' + transitionBackgroundColorFormAge + 's ease, color ' + transitionColorFormAge + 's ease, border-color ' +  transitionBorderColorFormAge + 's ease';
            const transitionValueButton = 'background-color ' + transitionBackgroundColorButtonAge + 's ease, color ' + transitionColorButtonAge + 's ease, border-color ' +  transitionBorderColorButtonAge + 's ease';
     
            // Creazione del container per gli elementi del popup
            const popupContainerPopupAge = document.createElement("div");
            popupContainerPopupAge.classList.add("popup-age-container");
            popupContainerPopupAge.style.setProperty('--gap-form-age', gapFormAge + 'px');
            popupContainerPopupAge.style.setProperty('--height-form-age', heightFormAge + 'px');
            popupContainerPopupAge.style.setProperty('--size-form-age', sizeFormAge + 'px');
            popupContainerPopupAge.style.setProperty('--border-width-form-age', borderWidthFormAge + 'px');
            popupContainerPopupAge.style.setProperty('--border-style-form-age', borderStyleFormAge);
            popupContainerPopupAge.style.setProperty('--border-color-form-age', borderColorFormAge);
            popupContainerPopupAge.style.setProperty('--border-color-hover-form-age', borderColorHoverFormAge);
            popupContainerPopupAge.style.setProperty('--border-radius-form-age', borderRadiusFormAge + 'px');
            popupContainerPopupAge.style.setProperty('--transition-form-age', transitionValue);
            popupContainerPopupAge.style.setProperty('--margin-bottom-form-age', marginFormAge+'px');
            popupContainerPopupAge.style.setProperty('--background-color-form-age', formatBackgroundColor());
            popupContainerPopupAge.style.setProperty('--background-color-hover-form-age',formatBackgroundColorHover());
            popupContainerPopupAge.style.setProperty('--color-form-age',colorFormAge);
            popupContainerPopupAge.style.setProperty('--color-hover-form-age',colorHoverFormAge);
            popupContainerPopupAge.style.setProperty('--gap-button-age', gapButtonAge + 'px');
            popupContainerPopupAge.style.setProperty('--padding-top-button-age', paddingButtonAgeTop+'px');
            popupContainerPopupAge.style.setProperty('--padding-right-button-age',paddingButtonAgeRight+'px' );
            popupContainerPopupAge.style.setProperty('--padding-bottom-button-age', paddingButtonAgeBottom+'px');
            popupContainerPopupAge.style.setProperty('--padding-left-button-age', paddingButtonAgeLeft+'px');
            popupContainerPopupAge.style.setProperty('--size-button-age', sizeButtonAge + 'px');
            popupContainerPopupAge.style.setProperty('--border-width-button-age', borderWidthButtonAge + 'px');
            popupContainerPopupAge.style.setProperty('--border-style-button-age', borderStyleButtonAge);
            popupContainerPopupAge.style.setProperty('--border-color-button-age', borderColorButtonAge);
            popupContainerPopupAge.style.setProperty('--border-color-hover-button-age', borderColorHoverButtonAge);
            popupContainerPopupAge.style.setProperty('--transition-button-age', transitionValueButton);
            popupContainerPopupAge.style.setProperty('--border-radius-button-age', borderRadiusButtonAge + 'px');
            popupContainerPopupAge.style.setProperty('--background-color-button-age', formatBackgroundColorButton());
            popupContainerPopupAge.style.setProperty('--background-color-hover-button-age',formatBackgroundColorHoverButton());
            popupContainerPopupAge.style.setProperty('--color-button-age',colorButtonAge);
            popupContainerPopupAge.style.setProperty('--color-hover-button-age',colorHoverButtonAge);
            const popupContainer = document.createElement("div");
            popupContainer.classList.add("popup-age-select");
            const popupContainerButton = document.createElement("div");
            popupContainerButton.classList.add("popup-age-button");
            // Aggiungi il bottone "Non ho 18 anni" al popup
            if (enableButtonOne === true) {
                const notAdultButton = document.createElement("button");
                notAdultButton.textContent = buttonOneAge;
                popupContainerButton.appendChild(notAdultButton);
                // Aggiungi un gestore di eventi per il click sul bottone "Non ho 18 anni"
                notAdultButton.addEventListener("click", redirectToPolicyPage);
            }
            // Creazione del bottone di conferma età
            const confirmAgeButton = document.createElement("button");
            confirmAgeButton.setAttribute("id", "confirmAgeButton");
            confirmAgeButton.textContent = buttonTwoAge;
            popupContainerButton.appendChild(confirmAgeButton);
            // Aggiunta dell'event listener per gestire il click sul bottone di conferma età
            confirmAgeButton.addEventListener("click", handleAgeConfirmation);
            // Aggiungi il container al popupElement
            popupContainerPopupAge.appendChild(popupContainer);
            // Creazione dell'input per il giorno
            const daySelect = document.createElement("select");
            daySelect.classList.add("date-input", "day-input"); // Aggiungi le classi agli input per giorno
            daySelect.setAttribute("id", "day");
            // Aggiungi l'opzione vuota con l'etichetta predefinita "Giorno"
            const defaultDayOption = document.createElement("option");
            defaultDayOption.textContent = textDayAge;
            defaultDayOption.setAttribute("value", ""); // Assicurati che il valore sia vuoto
            daySelect.appendChild(defaultDayOption);
            // Aggiungi i giorni da 1 a 31 come opzioni
            for (let i = 1; i <= 31; i++) {
                const option = document.createElement("option");
                option.textContent = i;
                option.setAttribute("value", i);
                daySelect.appendChild(option);
            }
            popupContainer.appendChild(daySelect);
           // Creazione dell'input per il mese
            const monthSelect = document.createElement("select");
            monthSelect.classList.add("date-input", "month-input"); // Aggiungi le classi agli input per mese
            monthSelect.setAttribute("id", "month");

            // Aggiungi l'opzione vuota con l'etichetta predefinita "Mese"
            const defaultMonthOption = document.createElement("option");
            defaultMonthOption.textContent = textMonthAge;
            defaultMonthOption.setAttribute("value", ""); // Assicurati che il valore sia vuoto
            monthSelect.appendChild(defaultMonthOption);

            // Array dei mesi tradotti
            const months = {
                'en': ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                'it': ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"],
                'fr': ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
                'de': ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
                'zh': ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
                'es': ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
            };

            // Imposta la lingua desiderata
            const language = selectedAgeMonth;

            // Utilizza l'array dei mesi corrispondente alla lingua selezionata
            const translatedMonths = months[language];

            // Aggiungi i mesi come opzioni
            translatedMonths.forEach((month, index) => {
                const option = document.createElement("option");
                option.textContent = month;
                option.setAttribute("value", index + 1);
                monthSelect.appendChild(option);
            });
            popupContainer.appendChild(monthSelect);
            // Creazione dell'input per l'anno
            const yearSelect = document.createElement("select");
            yearSelect.classList.add("date-input", "year-input"); // Aggiungi le classi agli input per anno
            yearSelect.setAttribute("id", "year");
            // Aggiungi l'opzione vuota con l'etichetta predefinita "Anno"
            const defaultYearOption = document.createElement("option");
            defaultYearOption.textContent = textYearAge;
            defaultYearOption.setAttribute("value", ""); // Assicurati che il valore sia vuoto
            yearSelect.appendChild(defaultYearOption);
            // Aggiungi gli anni come opzioni
            const currentYear = new Date().getFullYear();
            for (let i = currentYear - 100; i <= currentYear; i++) {
                const option = document.createElement("option");
                option.textContent = i;
                option.setAttribute("value", i);
                yearSelect.appendChild(option);
            }
            popupContainer.appendChild(yearSelect);
            // Aggiungi il container al popupElement
            popupContainerPopupAge.appendChild(popupContainerButton);
            popupElement.appendChild(popupContainerPopupAge);
            // Funzione per gestire il calcolo dell'età
            function calculateAge() {
                const day = document.getElementById('day').value;
                const month = document.getElementById('month').value;
                const year = document.getElementById('year').value;
                const today = new Date();
                const birthDate = new Date(year, month - 1, day); // Mese è 0-based, quindi sottrai 1
                let age = today.getFullYear() - birthDate.getFullYear();
                const monthDiff = today.getMonth() - birthDate.getMonth();
                if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
                    age--;
                }
                return age;
            }
            const showWelcomeMessage = enableWelcomeAge;
            // Funzione per gestire la conferma dell'età
            function handleAgeConfirmation() {
                const day = document.getElementById('day').value;
                const month = document.getElementById('month').value;
                const year = document.getElementById('year').value;
                const popupElement = document.getElementById(popupId);
                // Controlla se almeno uno dei selettori della data è vuoto
                if (!day || !month || !year) {
                    // Mostra un messaggio di avviso nel popup
                    const message = document.createElement('p');
                    message.textContent = errorFormAge;
                    popupElement.appendChild(message);
                    return; // Esce dalla funzione senza eseguire ulteriori azioni
                }
                // Calcola l'età solo se tutti i selettori della data sono stati compilati
                const age = calculateAge();
                if (age >= 18) {
                    // L'utente ha più di 18 anni, chiudi il popup
                    if (showWelcomeMessage) {
                        // Mostra il messaggio di benvenuto
                        const welcomeMessage = document.createElement('p');
                        welcomeMessage.textContent = welcomeAge;
                        popupElement.appendChild(welcomeMessage);
                    }
                    // Aggiungi un timeout per mostrare il messaggio per qualche secondo prima di chiudere il popup
                    setTimeout(() => {
                        if (popupElement) {
                            popupElement.style.animation = 'fadeOut '+durationAnimationClose+'ms ease'; // Applica l'animazione
                           // Attendi il completamento dell'animazione prima di nascondere l'elemento
                           setTimeout(() => {
                               popupElement.style.display = 'none'; // Nasconde il popup dopo l'animazione
                               popupElement.style.animation = ''; // Rimuove l'animazione per il prossimo utilizzo
                           }, durationAnimationClose); // 300 ms è il tempo dell'animazione definita
                       }
                         // Filter
                  
                        hideOverlay();
                        if (overflowBody === true) {
                            document.body.style.overflow = 'auto';// Sblocca  lo scroll del body
                        }
                    
                    }, timecolsePopupAge); // 3000 millisecondi (3 secondi) di timeout
                } else {
                    // L'utente ha meno di 18 anni, mostra un messaggio di avviso nel popup
                    const message = document.createElement('p');
                    message.textContent = errorAgeAge;
                    popupElement.appendChild(message);
                }
            }
        }

        /* CHIUSURE */
        function cocoPopupClosed() {
            // Instatn
            if (selectedClosed === 'close-instant') {
                closedIstant();
            }
            // Opacity
            if (selectedClosed === 'close-opacity') {
                reduceOpacityAndClose(timeOpacity, timeOpacityExit);
            }
            // Click wondow
            if (selectedClosed === 'close-window') {
                closedClickWindow();
            }
            // Scroll 
            if (selectedClosed === 'close-scroll') {
                closedScroll();
            }
            // Time 
            if (selectedClosed === 'close-time') {
                closedTime();
            }
            // No Clsed
            if (selectedClosed === 'close-no') {
                closedNo();
            }
            // Classe dentro al Popup
            if (selectedClosed === 'close-class') {
                if (enabelButtonClass === false) {
                    removeCloseButton(popupElement);
                }
                // Ottenere il riferimento al contenitore del popup utilizzando il selettore
                const popupContainer = document.querySelector('.cocopopup'); 
                // Chiama la funzione per chiudere il popup quando viene cliccato l'elemento con la classe specifica all'interno del popup
                const elementClass = classClosePopup;
                closePopupOnElementClick(elementClass, popupContainer);
            }
            // reindirizzamento
            if (selectedClosed === 'close-url') {
                closeUrl();
            }
            // age restriction
            if (selectedClosed === 'close-age') {
                closeAge();
            }
        }

    }
}