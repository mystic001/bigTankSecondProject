$(function(){

$('section .color-picker .accent-wrapper').on('click',function(){

$('section .color-picker .accent-wrapper').removeClass('checked');
$(this).addClass('checked');


var shoeSelector = $(this).attr('data-checker');
$('.product-wrap').removeClass('active').hide();
$('.product-wrap.'+ shoeSelector).addClass('active').show();
});

});
