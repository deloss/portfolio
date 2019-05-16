$(document).ready(function(){

	$(window).scroll(function(event){

		var positionScroll = $(this).scrollTop();
		var positionImage = $("#aboutMe").position().top;

		if(positionScroll + $(this).height() > positionImage) {
			$("#aboutMe").addClass("imageAnimated");
		}

		if(positionScroll > $("nav").height()) {
			$(".navbar").addClass("navBackground");
		}

		if(positionScroll < $("nav").height()) {
			$(".navbar").removeClass("navBackground");
		}
	});
});