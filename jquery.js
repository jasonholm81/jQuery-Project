$(document).ready(function() {
    alert("page has loaded")
});

$(document).ready(function() {
    $("body").css("background-color", "red");
});

$(".change-style").click(function() {
    $(".p1").css("font-style", "italic");
});

$(".circle").click(function() {
    $(this).hide();
});
    
$("#accordion").accordion();
