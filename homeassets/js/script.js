$(document).ready(function() {
	$("#chatbubble").hide(); // jQuery Function Number 1
	$("#image-container").hover(function() { // jQuery Function Number 2
		$("#chatbubble").show(); // jQuery Function Number 3
	});
	$("#image-container").mouseleave(function() { // jQuery Function Number 4
		$("#chatbubble").fadeOut(); // jQuery Function Number 5
	});
});