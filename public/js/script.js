$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		dots:true,
		slidesToShow:3,
		autoplay:true,
		speed:2000,
		autoplaySpeed:3000,
		draggable: false,
		swipe: false,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:2,
					centerMode: true
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
});

