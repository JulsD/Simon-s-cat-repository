$(document).ready(function(){
 
    var $nav = $("#nav");
    var $content = $("#content");
    var $headerHeight = $('.header').height() - 65;
    var $anchorSelector = $('.anchor');
    var flag;


    function showFixedNav() {
        $nav.removeClass("default cols col-6 col-m-6 ").addClass("fixed");
        $content.addClass("ifNavFix");
    }

    $(window).scroll(function(){
        if ( $(this).scrollTop() > $headerHeight && $nav.hasClass("default")) {
            showFixedNav();
        } else if($(this).scrollTop() <= $headerHeight && $nav.hasClass("fixed")) {
            $nav.removeClass("fixed").addClass("default cols col-6 col-m-6 ");
            $content.removeClass("ifNavFix");
        }
    });//scroll

    $('#nav a').click(function() {
        showFixedNav();
        var fixedHeight = $('.fixed').height() * (-1) ;
        $anchorSelector.css('top', fixedHeight);
    });

    // loading of fotos in the galary
    $('#anchor-galary').click(function() {
        $('#fotos').load('./galery.html');
    });

    $('#nature').click(function() {
        $('#fotos').load('./nature.html');
    });

    $('#city').click(function() {
        $('#fotos').load('./city.html');
    });

    $('#humane').click(function() {
        $('#fotos').load('./humane.html');
    });


    $('#animals').click(function() {
        $('#fotos').load('./cat.html');
    });


});

