//smooth scroll

$(document).ready(function() {
		$('.scrollTo').click( function() { // Au clic sur un élément
			var page = $(this).attr('href'); // Page cible
			var speed = 1000; // Durée de l'animation (en ms)
			$('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
			return false;
		});
	});

//preloader

jQuery(document).ready(function($) {  

// site preloader -- also uncomment the div in the header and the css style for #preloader
$(window).load(function(){
	$('#preloader').fadeOut('slow',function(){$(this).remove();});
});

});

//ouvrir formulaire

$(document).ready(function() {
    $('.openF').click(function() {
        $('form').addClass('activeF');
        return false;
    });
});

//fermer formulaire

$(document).ready(function() {
    $('.closeF').click(function() {
        $('form').removeClass('activeF');
        scrollToId('start');
        return false;
    });
});

//boutons radio
    
$('#radioF').click(function() {
   if($('#radioF').is(':checked')) { 
       $('#radioF').parent().addClass('selected');
        $('#radioM').parent().removeClass('selected');}
});

$('#radioM').click(function() {
   if($('#radioM').is(':checked')) { 
       $('#radioM').parent().addClass('selected');
       $('#radioF').parent().removeClass('selected');}
});

//Formulaire soumis

$("form").submit(function(){
    $('#thanks').toggleClass('invisible');
    $('.openF').toggleClass('invisible');
    $('form').removeClass('activeF');
    return false;
});