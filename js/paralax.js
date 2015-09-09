

/**
 * Author: Heather Corey
 * jQuery Simple Parallax Plugin
 *
 */
//Parallax Position
$(window).load(function(){
	$('.slider').fractionSlider({
		'fullWidth': 			true,
		'controls': 			true, 
		'pager': 				true,
		'responsive': 			true,
		'dimensions': 			"2000,240",
	    'increase': 			false,
		'pauseOnHover': 		true,
		'slideEndAnimation': 	true,
		
	});

});

jQuery(window).load(function(){
  $('.slider').fractionSlider();
});