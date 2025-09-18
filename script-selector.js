// script-selector.js (Version simplifiée)

// Récupère le code de la langue du navigateur (ex: "en", "es", "de")
const userLang = (navigator.language || navigator.userLanguage).substr(0, 2);

// Si la langue détectée n'est pas le français, redirige vers la version traduite
if (userLang !== "fr" && !document.cookie.includes('googtrans')) {
    // Construit l'URL de la page actuelle
    const currentPage = window.location.href;
    // Redirige vers la version traduite par Google
    window.location.href = `https://translate.google.com/translate?sl=fr&tl=${userLang}&u=${currentPage}`;
}

// Les paramètres pour le widget flottant restent les mêmes
window.gtranslateSettings = {
    default_language: "fr",
    detect_browser_language: true, // On le laisse, au cas où
    languages: ["af","sq","am","ar","hy","az","eu","be","bn","bs","bg","ca","ceb","zh-CN","zh-TW","co","hr","cs","da","nl","en","eo","et","fi","fr","fy","gl","ka","de","el","gu","ht","ha","haw","he","hi","hmn","hu","is","ig","id","ga","it","ja","jv","kn","kk","km","rw","ko","ku","ky","lo","la","lv","lt","lb","mk","mg","ms","ml","mt","mi","mr","mn","my","ne","no","ny","or","ps","fa","pl","pt","pa","ro","ru","sm","gd","sr","st","sn","sd","si","sk","sl","so","es","su","sw","sv","tl","tg","ta","tt","te","th","tr","tk","uk","ur","ug","uz","vi","cy","xh","yi","yo","zu"],
    wrapper_selector: "#floating-translate",
    switcher_horizontal_position: "left",
    switcher_vertical_position: "bottom",
    floating_switcher_open_direction: "top",
    switcher_close_on_scroll: true,
    switcher_display_mode: "popup"
};
