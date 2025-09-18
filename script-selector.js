// script-selector.js

document.addEventListener('DOMContentLoaded', function() {
    const switcher = document.querySelector('.custom-language-switcher');
    const selectedLangBtn = document.querySelector('.selected-language');
    const langOptionsContainer = document.querySelector('.language-options');

    if (!switcher || !selectedLangBtn || !langOptionsContainer) return;

    // Fonction pour peupler notre sélecteur personnalisé
    function populateCustomSelector() {
        const googleSelect = document.querySelector('#google_translate_element select');
        if (!googleSelect) {
            // Si le select de Google n'est pas encore prêt, on réessaie dans un instant
            setTimeout(populateCustomSelector, 100);
            return;
        }

        langOptionsContainer.innerHTML = ''; // On vide les options existantes

        // On parcourt toutes les options du sélecteur de Google
        googleSelect.querySelectorAll('option').forEach(option => {
            const langCode = option.value;
            const langName = option.textContent;

            // On crée un lien pour chaque langue
            const link = document.createElement('a');
            link.href = '#';
            link.classList.add('lang-option');
            link.setAttribute('data-lang', langCode);
            link.textContent = langName;

            // On ajoute le lien à notre conteneur
            langOptionsContainer.appendChild(link);
        });

        // On attache les événements de clic aux nouvelles options
        attachClickEvents();
    }

    // Fonction pour attacher les événements de clic
    function attachClickEvents() {
        const langOptions = document.querySelectorAll('.lang-option');
        langOptions.forEach(option => {
            option.addEventListener('click', function(e) {
                e.preventDefault();
                const lang = this.getAttribute('data-lang');
                const googleSelect = document.querySelector('#google_translate_element select');

                if (googleSelect) {
                    googleSelect.value = lang;
                    googleSelect.dispatchEvent(new Event('change')); // Déclenche la traduction
                }
                
                // Met à jour le texte du bouton principal
                document.querySelector('.selected-language span').textContent = this.textContent;
                switcher.classList.remove('open');
            });
        });
    }

    // Ouvre et ferme le menu
    selectedLangBtn.addEventListener('click', function(event) {
        event.stopPropagation();
        switcher.classList.toggle('open');
    });

    // Ferme le menu si on clique n'importe où ailleurs
    document.addEventListener('click', function() {
        if (switcher.classList.contains('open')) {
            switcher.classList.remove('open');
        }
    });

    // On lance le peuplement du sélecteur
    populateCustomSelector();
});
