/* -----------------------------------------------------------------------------

File:           JS Core
Version:        1.0
Author:         

-------------------------------------------------------------------------------- */
(function() {

	"use strict";

	var Appilo_eight = {
		init: function() {
			this.Basic.init();  
		},

		Basic: {
			init: function() {
				this.preloader();
				this.BackgroundImage();
				this.Animation();
				this.StickyHeader();
				this.MobileMenu();
				this.MianSlider();
				this.FeatureSlide();
				this.counterUp();
				this.bannerParalax();
				this.ServiceSlide();
				this.TestimonialSlide();
				this.TeamSlide();
				this.videoBox();
				this.ScrollTop();
				
			},

			preloader: function (){
				jQuery(window).on('load', function(){
					jQuery('#preloader').fadeOut('slow',function(){jQuery(this).remove();});
				});
			},

			BackgroundImage: function (){
				$('[data-background]').each(function() {
					$(this).css('background-image', 'url('+ $(this).attr('data-background') + ')');
				});
			},
			Animation: function (){
				if($('.wow').length){
					var wow = new WOW(
					{
						boxClass:     'wow',
						animateClass: 'animated',
						offset:       0,
						mobile:       true,
						live:         true
					}
					);
					wow.init();
				}
			},
			StickyHeader: function (){
				jQuery(window).on('scroll', function() {
					if (jQuery(window).scrollTop() > 100) {
						jQuery('.ind-header').addClass('sticky-on')
					} else {
						jQuery('.ind-header').removeClass('sticky-on')
					}
				})
			},
			MobileMenu: function (){
				$('.str-open_mobile_menu').on("click", function() {
					$('.str-mobile_menu_wrap').toggleClass("mobile_menu_on");
				});
				$('.str-open_mobile_menu').on('click', function () {
					$('body').toggleClass('mobile_menu_overlay_on');
				});
				if($('.str-mobile_menu li.dropdown ul').length){
					$('.str-mobile_menu li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');
					$('.str-mobile_menu li.dropdown .dropdown-btn').on('click', function() {
						$(this).prev('ul').slideToggle(500);
					});
				}
			},
			MianSlider: function (){
				jQuery('#main-slider').owlCarousel({
					items: 1,
					loop: true,
					nav: false,
					dots: true,
					autoplay: false,
					navSpeed: 800,
					smartSpeed: 1000,
					animateOut: 'fadeOut',
				});
			},
			FeatureSlide: function (){
				$(window).on('load',function(){
					$('#featured_scroll').owlCarousel({
						margin:30,
						responsiveClass:true,
						nav: false,
						dots: true,
						loop:true,
						autoplay: false,
						smartSpeed: 300,
						responsive:{
							0:{
								items:1,
							},
							400:{
								items:1,
							},
							600:{
								items:1,
							},
							700:{
								items:2,
							},
							1000:{
								items:3,

							},
							1300:{
								items:3,
							}

						},
					})
				});
			},
			ServiceSlide: function (){
				$(window).on('load',function(){
					$('#service-slide-id').owlCarousel({
						margin:30,
						responsiveClass:true,
						nav: true,
						dots: false,
						loop:true,
						autoplay: false,
						navText:["<i class='fas fa-arrow-left'></i>","<i class='fas fa-arrow-right'></i>"],
						smartSpeed: 1000,
						responsive:{
							0:{
								items:1,
							},
							400:{
								items:1,
							},
							600:{
								items:1,
							},
							700:{
								items:2,
							},
							1000:{
								items:3,

							},
							1300:{
								items:3,
							}

						},
					})
				});
			},
			counterUp: function (){
				if($('.count').length){
					jQuery('.count').counterUp({
						delay: 50,
						time: 2000,
					});
				};
			},
			TestimonialSlide: function (){
				$(window).on('load',function(){
					$('#testimonial-slide-id').owlCarousel({
						margin:30,
						responsiveClass:true,
						nav: false,
						dots: true,
						loop:true,
						autoplay: false,
						smartSpeed: 1000,
						responsive:{
							0:{
								items:1,
							},
							400:{
								items:1,
							},
							600:{
								items:1,
							},
							700:{
								items:2,
							},
							1000:{
								items:3,

							},
							1300:{
								items:3,
							}

						},
					})
				});
			},
			TeamSlide: function (){
				$(window).on('load',function(){
					$('#team-member-slide').owlCarousel({
						margin:30,
						responsiveClass:true,
						nav: false,
						dots: true,
						loop:true,
						autoplay: false,
						navText:["<i class='fas fa-arrow-left'></i>","<i class='fas fa-arrow-right'></i>"],
						smartSpeed: 1000,
						responsive:{
							0:{
								items:1,
							},
							400:{
								items:1,
							},
							600:{
								items:1,
							},
							700:{
								items:2,
							},
							1000:{
								items:3,

							},
							1300:{
								items:4,
							}

						},
					})
				});
			},
			bannerParalax: function (){
				$('.parallax-bg').jarallax({
					speed: 0.3,
				});
			},
			videoBox: function (){
				jQuery('.video_box').magnificPopup({
					disableOn: 200,
					type: 'iframe',
					mainClass: 'mfp-fade',
					removalDelay: 160,
					preloader: false,
					fixedContentPos: false,
				});
			},
			ScrollTop: function (){
				$(window).on("scroll", function() {
					if ($(this).scrollTop() > 200) {
						$('.scrollup').fadeIn();
					} else {
						$('.scrollup').fadeOut();
					}
				});

				$('.scrollup').on("click", function()  {
					$("html, body").animate({
						scrollTop: 0
					}, 800);
					return false;
				});
			},

/* End Of js
================================================*/
}
}
jQuery(document).ready(function (){
	Appilo_eight.init();
});

})();