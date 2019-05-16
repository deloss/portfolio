$(document).ready(function(){

	$(window).scroll(function(event){

		var positionScroll = $(this).scrollTop() + $(this).height();
		var positionImage = $("#aboutMe").position().top;

		if(positionScroll > positionImage) {
			$("#aboutMe").addClass("imageAnimated");
		}
	});

});