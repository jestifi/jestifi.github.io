
'use strict';

var window_w = $(window).innerWidth();


$(window).on('load', function() { 
	/*------------------
		pre-loader
	--------------------*/
	$(".loader").fadeOut(); 
	$("#preloder").delay(400).fadeOut("slow");

	__portfolio(); 

});





