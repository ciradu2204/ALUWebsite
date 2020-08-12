$(document).ready(function() {
 
	$(".fa-search").click(function() {
	   $(".togglesearch").toggle();
	   $("input[type='text']").focus();
	 });
 
});

$(".navbar .prevent,.title a, footer a[href='#myPage']").on('click', function(event) {

	// Prevent default anchor click behavior
	event.preventDefault();

});