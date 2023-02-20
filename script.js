const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-menu-btn');

const featuresIcon = document.querySelector('.menu-item a:has(.features-caret)');
const companyIcon = document.querySelector('.menu-item a:has(.company-caret)');

const menu = document.getElementById("menu");
const mainImg = document.querySelector('.main-image img');

// TODO:
// - control styles for windows resize cases

menuIcon.addEventListener('click', openMenu);
closeIcon.addEventListener('click', closeMenu);

featuresIcon.addEventListener('click', (e) => {
    let featuresItem = featuresIcon.querySelector('.features-caret');
    openSubMenu(featuresItem);
});
companyIcon.addEventListener('click', (e) => {
    let companyItem = companyIcon.querySelector('.company-caret');
    openSubMenu(companyItem);
});


function openMenu() {
    menu.style.width = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.6)";
    mainImg.style.opacity = 0.6;
}

/* Set the width of the side navigation to 0 */
function closeMenu() {
    menu.style.width = "0";
    document.body.style.backgroundColor = "white";
    mainImg.style.opacity = 1;
}

function openSubMenu(parent) {
    let hrefElement = parent.parentElement;
    let submenu = hrefElement.nextElementSibling;
    let imgs = parent.children;

    for (let img of imgs) {
        if(img.classList.contains('arrow-up') && img.classList.contains('hidden')) {
            submenu.classList.remove("hidden");
        } else {
            submenu.classList.add("hidden");
        }
        img.classList.toggle("hidden");
    }
}