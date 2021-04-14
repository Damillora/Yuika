
$(document).ready(function () {
    $("#darkMode").click(function () {
        if (window.document.body.getAttribute("data-theme") != "dark") {
            window.document.body.setAttribute("data-theme", "dark");
            $("#darkMode i").text("brightness_high");
            $("#darkMode p").text("Light Mode");
        } else {
            window.document.body.setAttribute("data-theme", "light");
            $("#darkMode i").text("brightness_low");
            $("#darkMode p").text("Dark Mode");
        }
    })
});
