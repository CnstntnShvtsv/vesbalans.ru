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