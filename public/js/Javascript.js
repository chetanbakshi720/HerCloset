$(document).ready(function () {
    $(".brand_image").hover(function () {
        $(this).animate({ "opacity": "0.3" });
        $(this).siblings('#hover_logo').animate({ "opacity": "10" });
        $(this).siblings('#hover_logo').fadeIn();
    }, function () {
        $(this).animate({ "opacity": "10" }, 500);
        $('#hover_logo').fadeOut(100);
        $(this).siblings('#hover_logo').fadeOut(100);
    });
    $(".brand_product").hover(function () {
        $(this).animate({ "opacity": "0.6" });
    }, function () {
        $(this).animate({ "opacity": "10" });
    });
});


