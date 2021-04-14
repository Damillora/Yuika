function setDarkMode() {
    if (window.document.body.getAttribute("data-theme")){
        window.localStorage.setItem('theme', window.document.body.getAttribute("data-theme"));
    }
    if (window.document.body.getAttribute("data-theme") == "dark") {
        $("#darkMode i").text("brightness_high");
        $("#darkMode p").text("Light Mode");
    } else {
        $("#darkMode i").text("brightness_low");
        $("#darkMode p").text("Dark Mode");
    }
}

if (window.localStorage.getItem('theme')) {
    window.document.body.setAttribute("data-theme", window.localStorage.getItem("theme"));
}

$(document).ready(function () {
    setDarkMode();
    $("#darkMode").click(function () {
        if (window.document.body.getAttribute("data-theme") != "dark") {
            window.document.body.setAttribute("data-theme", "dark");
        } else {
            window.document.body.setAttribute("data-theme", "light");
        }
        setDarkMode();
    })
});
