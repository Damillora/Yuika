function toggleMenu() {
    document.querySelector(".site-header").classList.toggle('enabled');
    document.querySelector(".site-header__background").classList.toggle('site-header__background--enabled');
    document.querySelector(".menu").classList.toggle("enabled");
}

document.querySelector("#menushow").addEventListener("click", toggleMenu);
document.querySelectorAll(".menu__nav-item").forEach(menu =>
    menu.addEventListener("click", toggleMenu)
);
document.getElementById("darkMode").addEventListener("click", toggleMenu);

var nav = document.querySelector('.site-header');
var feed = document.querySelector('main');

var lastScrollY = window.scrollY;
var lastWindowHeight = window.innerHeight;
var lastDocumentHeight = document.height;
var ticking = false;

function onScroll() {
    lastScrollY = window.scrollY;
    requestTick();
}

function onResize() {
    lastWindowHeight = window.innerHeight;
    lastDocumentHeight = document.height;
    requestTick();
}

function requestTick() {
    if (!ticking) {
        requestAnimationFrame(update);
    }
    ticking = true;
}

function update() {
    var trigger = feed.getBoundingClientRect().top + window.scrollY;
    var progressMax = lastDocumentHeight - lastWindowHeight;

    // show/hide nav
    if (lastScrollY >= nav.getBoundingClientRect().bottom) {
        nav.classList.add('detached');
    } else {
        nav.classList.remove('detached');
    }

    ticking = false;
}

window.addEventListener('scroll', onScroll, { passive: true });
window.addEventListener('resize', onResize, false);

update();


