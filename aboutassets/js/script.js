$(document).ready(function() {
	$("#heart").hide();
	$("#image").hover(function() { 
		$("#heart").fadeIn(); // jQuery Function Number 6
	});
	$("#image").mouseleave(function() { 
		$("#heart").fadeOut(); 
	});
});