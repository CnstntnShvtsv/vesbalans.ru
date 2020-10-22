// Плавная прокрутка:
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

// Модальные окна:
// открыть по кнопке:
$('#btn_modal-01').click(function () {
	$('#modal-01').fadeIn();
    $('#modal-01').addClass('disabled');
    $('#frame-01').attr('src', 'https://www.youtube.com/embed/16DTs9qcvys');
	$('body').css('overflow', 'hidden');
});

$('#btn_modal-02').click(function () {
	$('#modal-02').fadeIn();
	$('#modal-02').addClass('disabled');
    $('#frame-02').attr('src', 'https://www.youtube.com/embed/EjTo9AMxr5A');
	$('body').css('overflow', 'hidden');
});

$('#btn_modal-03').click(function () {
	$('#modal-03').fadeIn();
	$('#modal-03').addClass('disabled');
    $('#frame-03').attr('src', 'https://www.youtube.com/embed/RbgCuf5Tnis');
	$('body').css('overflow', 'hidden');
});

$('#btn_modal-04').click(function () {
	$('#modal-04').fadeIn();
	$('#modal-04').addClass('disabled');
    $('#frame-04').attr('src', 'https://www.youtube.com/embed/SZVMCRN6Rqw');
	$('body').css('overflow', 'hidden');
});

// закрыть на крестик:
$('.btn_close').click(function () {
    $('.modal-wrapper').fadeOut();
    $('#frame-01, #frame-02, #frame-03, #frame-04').attr('src', '');
	$('body').css('overflow', 'auto');
});

// закрыть по клику вне окна:
$(document).mouseup(function (e) {
	var popup = $('.modal');
	if (e.target != popup[0] && popup.has(e.target).length === 0) {
        $('.modal-wrapper').fadeOut();
        $('#frame-01, #frame-02, #frame-03, #frame-04').attr('src', '');
		$('body').css('overflow', 'auto');
	}
});