$(document).ready(function() {
		$('.js-scrollTo').on('click', function() { // Au clic sur un �l�ment
			var page = $(this).attr('href'); // Page cible
			var speed = 300; // Dur�e de l'animation (en ms)
			$('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
			return false;
		});
	});