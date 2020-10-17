// Плавный прокрутка
var $page = $('html, body');
$('a[href*="#"]').click(function () {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
    return false;
});

// Кнопка наверх:
var amountScrolled = 200;

$(window).scroll(function () {
    if ($(window).scrollTop() > amountScrolled) {
        $('#back-to-top').fadeIn();
    } else {
        $('#back-to-top').fadeOut();
    }
});

$('#back-to-top').click(function () {
    $('html, body').animate({
        scrollTop: 0
    }, 500);
    return false;
});

// Слайдер
$(document).ready(function () {
    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        infinite: true,
        centerMode: true,
        variableWidth: true,
        autoplaySpeed: 5000,
        arrows: false,
        dots: false,
    });

    $('.btn-prev').on('click', function () {
        $('.slider').slick('slickPrev');
    });

    $('.btn-next').on('click', function () {
        $('.slider').slick('slickNext');
    });
});