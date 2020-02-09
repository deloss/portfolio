$(document).ready(function(){

	$(window).scroll(function(event){

		var positionScroll = $(this).scrollTop();

		if(positionScroll > $("nav").height()) {
			$(".navbar").addClass("navBackground");
		}

		if(positionScroll < $("nav").height()) {
			$(".navbar").removeClass("navBackground");
		}
	});
});