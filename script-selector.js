// Initialisation du widget Google Translate
function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'fr',
        includedLanguages: 'af,am,ar,az,be,bg,bn,bs,ca,ceb,co,cs,cy,da,de,el,en,eo,es,et,eu,fa,fi,fr,fy,ga,gd,gl,gu,ha,haw,hi,hmn,hr,ht,hu,hy,id,ig,is,it,iw,ja,jw,ka,kk,km,kn,ko,ku,ky,la,lb,lo,lt,lv,mg,mi,mk,ml,mn,mr,ms,mt,my,ne,nl,no,ny,or,pa,pl,ps,pt,ro,ru,rw,sd,si,sk,sl,sm,sn,so,sq,sr,st,su,sv,sw,ta,te,tg,th,tl,tr,tt,ug,uk,ur,uz,vi,xh,yi,yo,zh,zh-TW,zu',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false,
        gaTrack: false,
        gaId: '',
        multilanguagePage: true
    }, 'google_translate_element');
    
    // Optimisations initiales
    optimizeTranslateWidget();
}

// Fonction pour optimiser le widget
function optimizeTranslateWidget() {
    // Masquer la bannière Google
    const hideBanner = setInterval(() => {
        const banner = document.querySelector('.goog-te-banner-frame');
        if (banner) {
            banner.style.display = 'none';
            clearInterval(hideBanner);
        }
    }, 100);

    // Personnaliser le sélecteur
    const customizeSelect = setInterval(() => {
        const select = document.querySelector('.goog-te-combo');
        if (select) {
            // Appliquer les styles
            select.setAttribute('title', 'Choisir une langue');
            select.setAttribute('aria-label', 'Sélecteur de langue');
            
            // Supprimer le texte inutile
            const gadget = document.querySelector('.goog-te-gadget');
            if (gadget) {
                gadget.querySelectorAll('span, img').forEach(el => {
                    if (!el.classList.contains('goog-te-combo')) {
                        el.style.display = 'none';
                    }
                });
            }
            
            clearInterval(customizeSelect);
        }
    }, 100);

    // Optimiser le menu déroulant
    const optimizeMenu = setInterval(() => {
        const iframe = document.querySelector('.goog-te-menu-frame');
        if (iframe) {
            iframe.style.maxHeight = '200px';
            iframe.style.zIndex = '10000';
            clearInterval(optimizeMenu);
        }
    }, 100);
}

// Réappliquer les optimisations après traduction
document.addEventListener('DOMContentLoaded', () => {
    const observer = new MutationObserver(() => {
        if (document.querySelector('.goog-te-combo')) {
            optimizeTranslateWidget();
        }
    });
    observer.observe(document.body, { 
        childList: true, 
        subtree: true 
    });
});