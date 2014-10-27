$(document).ready(function() {
	console.log("Hello!");
	var checkbox = $('.checkboxlist li input[type="checkbox"]');

	checkbox.change(function() {
		$(this).parent().toggleClass('highlight');
	});
	
	$('#text').click(function() {
	  $(this).addClass('highlight')
	});
	$("#hide").click(function(){
		$("img").hide();
	});
	$("#show").click(function(){
	  $("img").show();
	});
	$('#directions li').click(function(){
		$(this).toggleClass('highlight')
	});
});