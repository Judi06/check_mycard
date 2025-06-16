        // Toutes les langues supportées par Google Translate
        const allLanguages = [
            "af","sq","am","ar","hy","az","eu","be","bn","bs","bg","ca","ceb","zh-CN","zh-TW",
            "co","hr","cs","da","nl","en","eo","et","fi","fr","fy","gl","ka","de","el","gu","ht",
            "ha","haw","he","hi","hmn","hu","is","ig","id","ga","it","ja","jv","kn","kk","km","rw",
            "ko","ku","ky","lo","la","lv","lt","lb","mk","mg","ms","ml","mt","mi","mr","mn","my",
            "ne","no","ny","or","ps","fa","pl","pt","pa","ro","ru","sm","gd","sr","st","sn","sd",
            "si","sk","sl","so","es","su","sw","sv","tl","tg","ta","tt","te","th","tr","tk","uk",
            "ur","ug","uz","vi","cy","xh","yi","yo","zu"
        ];

        // Configuration avec détection automatique
        window.gtranslateSettings = {
            default_language: "fr",
            detect_browser_language: true, // Activation de la détection
            languages: allLanguages,
            wrapper_selector: "#floating-translate",
            switcher_horizontal_position: "right",
            switcher_vertical_position: "bottom",
            floating_switcher_open_direction: "top",
            
            // Force la redirection si la langue diffère
            url_parameter: 'gt_redirect',
            url_structure: 'sub_directory' // Mode SEO-friendly
        };

        // Script de fallback pour la détection
        document.addEventListener('DOMContentLoaded', function() {
            if(typeof GTranslate == 'undefined') {
                console.warn("GTranslate non chargé, utilisation du fallback");
                const userLang = navigator.language || navigator.userLanguage;
                const supportedLangs = allLanguages;
                const baseLang = userLang.split('-')[0];
                
                if(supportedLangs.includes(baseLang) && baseLang != 'fr') {
                    window.location.href = `https://translate.google.com/translate?hl=${baseLang}&sl=auto&tl=${baseLang}&u=${encodeURIComponent(window.location.href)}`;
                }
            }
        });
