$(document).ready(function () {
	$('.toggle-one').on('click', function () {
        $(this).toggleClass('active');
        $('.toggle-content-one').slideToggle();
    });
	
	$('.toggle-two').on('click', function () {
        $(this).toggleClass('active');
        $('.toggle-content-two').slideToggle();
    });
	
	$('.toggle-three').on('click', function () {
        $(this).toggleClass('active');
        $('.toggle-content-three').slideToggle();
    });
	
	$('.toggle-four').on('click', function () {
        $(this).toggleClass('active');
        $('.toggle-content-four').slideToggle();
    });
	
	$('.toggle-five').on('click', function () {
        $(this).toggleClass('active');
        $('.toggle-content-five').slideToggle();
    });
	
	$('.toggle-six').on('click', function () {
        $(this).toggleClass('active');
        $('.toggle-content-six').slideToggle();
    });
	$('.toggle-seven').on('click', function () {
        $(this).toggleClass('active');
        $('.toggle-content-seven').slideToggle();
    });
});