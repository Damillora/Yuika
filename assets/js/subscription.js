
// Parse the URL parameter
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

$("#subscribe-button").click(function(){
    $("#subscribe-dialog").show();
    $("#subscribe-form").show();
    $("#subscribe-success").hide();
    $("#subscribe-confirmation").hide();
    $("#subscribe-failure").hide();
})

$("#subscribe-back").click(function(){
    $("#subscribe-dialog").hide();
})

$("#subscribe-submit").click(function() {
    $("#subscribe-form").hide();
    $("#subscribe-success").hide();
    $("#subscribe-confirmation").show();
    $("#subscribe-failure").hide();

})
$(document).ready(function () {
    var action = getParameterByName('action');
    var success = getParameterByName('success');
    
    if (action == 'subscribe' && (success === null || success === 'true')) {
        $("#subscribe-dialog").show();
        $("#subscribe-form").hide();
        $("#subscribe-success").show();
        $("#subscribe-confirmation").hide();
        $("#subscribe-failure").hide();
    }
    if (action == 'subscribe' && success === 'false') {
        $("#subscribe-dialog").show();
        $("#subscribe-form").hide();
        $("#subscribe-success").hide();
        $("#subscribe-confirmation").hide();
        $("#subscribe-failure").show();
    }
});