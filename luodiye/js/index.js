$(document).ready(function(){
	setTimeout(function(){
//		$(document).scrollTop(0);
	},200)
	
	var $mainSwiper = new Swiper('#main-swiper', {
      loop:1,
      grabCursor: true,
//    autoplay: {
//      delay: 2500,
//      disableOnInteraction: false,
//    },
      pagination: {
        el: '.swiper-pagination',
        clickable:true
//      type: 'progressbar',
      },
    });
    
	var $showSwiper = new Swiper('#show-swiper', {
//    effect: 'cube',
		effect:'flip',
      loop:1,
//    grabCursor: true,
      navigation: {
	    nextEl: '.swiper-button-next',
	    prevEl: '.swiper-button-prev',
	  },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
//    cubeEffect: {
//      shadow: true,
//      slideShadows: true,
//      shadowOffset: 5,
//      shadowScale: 0.94,
//    },
    });

	
	$('.goUp').click(function(){
		$('html,body').animate({
			scrollTop:0
		},500)
	})
	
	showAnimation()
	$(window).scroll(function(){
		showAnimation()
		if($(window).scrollTop()>=200){
			$('.goUp').fadeIn()
		}else{
			$('.goUp').fadeOut()
		}
	})
	
});

//滚动过程中出现动画
function showAnimation(){
	$('.action').each(function(idx,ele){
		if($(this).offset().top<= $(document).scrollTop()+$(window).height()){
			$(this).css({opacity:1})
			var animate=$(this).data('animate');
			var delay=$(this).data('delay');
			$(this).addClass('animated '+animate);
			if(delay){
				$(this).css('animation-delay',delay)
			}
		}
	})
}