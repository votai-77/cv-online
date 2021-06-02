jQuery(document).ready(function($){ 	
	if($(".arrowtop").length > 0){
		$(window).scroll(function () {
			var e = $(window).scrollTop();
			if (e > 300) {
				$(".arrowtop").show()
			} else {
				$(".arrowtop").hide()
			}
		});
		$(".arrowtop").click(function () {
			$('body,html').animate({
				scrollTop: 0
			})
		})
	}		
});