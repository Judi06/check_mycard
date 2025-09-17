window.gtranslateSettings = {
    default_language: "fr",
    detect_browser_language: true,
    languages: ["af","sq","am","ar","hy","az","eu","be","bn","bs","bg","ca","ceb","zh-CN","zh-TW","co","hr","cs","da","nl","en","eo","et","fi","fr","fy","gl","ka","de","el","gu","ht","ha","haw","he","hi","hmn","hu","is","ig","id","ga","it","ja","jv","kn","kk","km","rw","ko","ku","ky","lo","la","lv","lt","lb","mk","mg","ms","ml","mt","mi","mr","mn","my","ne","no","ny","or","ps","fa","pl","pt","pa","ro","ru","sm","gd","sr","st","sn","sd","si","sk","sl","so","es","su","sw","sv","tl","tg","ta","tt","te","th","tr","tk","uk","ur","ug","uz","vi","cy","xh","yi","yo","zu"],
    wrapper_selector: "#floating-translate",
    switcher_horizontal_position: "left",  /* Forcé à gauche */
    switcher_vertical_position: "bottom",
    floating_switcher_open_direction: "top",
    switcher_close_on_scroll: true,  /* Fermer lors du défilement */
    switcher_display_mode: "popup"   /* Mode popup pour économiser l'espace */
};

// --- NOUVEAU : Forcer la traduction automatique au chargement ---

// Cette fonction s'exécute lorsque la page est entièrement chargée.
window.addEventListener('load', function( ) {
    // Crée un petit délai pour s'assurer que le script GTranslate est bien initialisé.
    setTimeout(function() {
        // Vérifie si la fonction de traduction de GTranslate est disponible.
        if (typeof doGTranslate === 'function') {
            // Récupère la langue du navigateur (ex: 'en' pour anglais).
            const browserLang = (navigator.language || navigator.userLanguage).split('-')[0];
            
            // Récupère la langue actuelle de la page (ex: 'fr' pour français).
            const currentLang = document.documentElement.lang.split('-')[0];

            // Si la langue du navigateur est différente de la langue actuelle, on lance la traduction.
            if (browserLang !== currentLang) {
                // Construit le code de langue pour GTranslate (ex: 'fr|en').
                const translationCode = `${currentLang}|${browserLang}`;
                doGTranslate(translationCode);
            }
        }
    }, 500); // Un délai de 500ms est généralement suffisant.
});
