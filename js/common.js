$(document).ready(function() {

$('.botle').selectBox({
	mobile: true,
	menuTransition: 'fade',

});


  $('.botle').on('change', function (e) {
     var optionSelected = $("option:selected", this);
     var valueSelected = optionSelected.val();

    $('.price article').text(valueSelected);
    
});

$('input#Subscribe').on('click', function(){
	$('.clue').show(500);
	$('.form_price #changeBtn').show();
	$('.form_price #changeBtn2').hide();
});
$('input#Purchase').on('click', function(){
	$('.clue').hide(300);
	$('.form_price #changeBtn').hide();
	$('.form_price #changeBtn2').show();
});

$('.player_close').on('click', function() {
	$('.popup_player').hide(500);
	

});

$('.play_btn').on('click', function() {
	$('.popup_player').show(700);
});

$('.test_play').on('click', function() {
	$('.testimonial_item_player video').play();
});

$('#lang').select2({
	 language: "es",
});



});