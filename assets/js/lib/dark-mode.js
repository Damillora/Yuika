function setDarkMode() {
    if (window.document.body.getAttribute("data-theme")) {
        window.localStorage.setItem('theme', window.document.body.getAttribute("data-theme"));
    }
    if (window.document.body.getAttribute("data-theme") == "dark") {
        window.document.querySelector("#darkMode i").innerHTML = "brightness_high";
        window.document.querySelector("#darkMode p").innerHTML = "Light Mode";
    } else {
        window.document.querySelector("#darkMode i").innerHTML = "brightness_low";
        window.document.querySelector("#darkMode p").innerHTML = "Dark Mode";
    }
}

if (window.localStorage.getItem('theme')) {
    window.document.body.setAttribute("data-theme", window.localStorage.getItem("theme"));
}

setDarkMode();
document.getElementById("darkMode").addEventListener("click", function () {
    if (window.document.body.getAttribute("data-theme") != "dark") {
        window.document.body.setAttribute("data-theme", "dark");
    } else {
        window.document.body.setAttribute("data-theme", "light");
    }
    setDarkMode();
});
