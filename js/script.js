
	;(function($){
		var mySwiper=new Swiper(".swiper-container",{
			autoplay:2000,
			loop:true
		})
		var ind=0;
		$('.nav').on("swipeLeft",function(){
			ind++;
			$(this).animate({"margin-left":-ind*25+"%"},1000)
		})
		
		
		
		
	})(Zepto)
