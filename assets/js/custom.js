$(document).ready(function(){
	
	var winWidth = $(window).width();
	var winPos = $(window).scrollTop();
	var sticked = false;
	var navHeight = $('.navWrapper').innerHeight();

	$(window).resize(function(){
		winWidth = $(window).width();
		navHeight = $('.navWrapper').innerHeight();
	});

	$(window).scroll(function(){
		winPos = $(window).scrollTop();
		if(winPos > 100 && !sticked){
			$('header#mainHeader').addClass('stickyHeader').css({'paddingBottom':navHeight+'px'});
			$('.navWrapper').css({'top':'-105%'}).animate({'top':'0'});
			sticked = true;
		}else if(winPos <= 100 && sticked){
			$('.navWrapper').animate({'top':'-105%'},function(){
				$(this).css({'top':''});
				$('header#mainHeader').removeClass('stickyHeader').css({'paddingBottom':''});
			});
			sticked = false;
		}
	});
});


$('.dropdown').on('show.bs.dropdown', function(e){
    $(this).find('.dropdown-menu').first().stop(true, true).slideDown(300);
});

$('.dropdown').on('hide.bs.dropdown', function(e){
    $(this).find('.dropdown-menu').first().stop(true, true).slideUp(300);
});

$(document).ready(function() {
	$('.btn-toggle-fullwidth').on('click', function() {
		if(!$('body').hasClass('layout-fullwidth')) {
			$('body').addClass('layout-fullwidth');

		} else {
			$('body').removeClass('layout-fullwidth');
			$('body').removeClass('layout-default'); // also remove default behaviour if set
			$('.nav-item').removeClass('sub-menu'); // also remove default behaviour if set
		}

		$(this).find('.lnr').toggleClass('lnr-arrow-left-circle lnr-arrow-right-circle');

		if($(window).innerWidth() < 1025) {
			if(!$('body').hasClass('offcanvas-active')) {
				$('body').addClass('offcanvas-active');
			} else {
				$('body').removeClass('offcanvas-active');
			}
		}
	});

	$('.nav-link').on('click', function(e){
		e.preventDefault();
		if($('body').hasClass('layout-fullwidth')) {
			$(this).parent().toggleClass('sub-menu').siblings().removeClass('sub-menu');
		}
	});

	$(window).on('load', function() {
		if($(window).innerWidth() < 1025) {
			$('.btn-toggle-fullwidth').find('.icon-arrows')
			.removeClass('icon-arrows-move-left')
			.addClass('icon-arrows-move-right');
		}
		
		$('.right-sidebar').css('top', $('.navbar').innerHeight());

		if($('.has-content-menu').length > 0) {
			$('.navbar + .main-content').css('padding-top', $('.navbar').innerHeight());
		}
		
		if($('.main').height() < $('#sidebar-nav').height()) {
			$('.main').css('min-height', $('#sidebar-nav').height());
		}
	});
});


/* CUSTOM Scroll */

//Init
$(document).ready(function(){
	init();
  });
  
  function init(){
	//Auto margin calculator
	var navbarHeight = $("nav").height();
	var paddingTop = parseInt($("nav").css('padding-top'));
	var paddingBottom = parseInt($("nav").css('padding-bottom'));
	$('#main-content').css('margin-top', (navbarHeight + paddingTop + paddingBottom) + 'px');
	  
	//Ripple
	var ripples = document.querySelectorAll('.ripple');
	  for (var i = 0; i < ripples.length; i++) {
		  ripples[i].addEventListener('mousedown', rippleEffect, false);
	  }
  
	  function rippleEffect(e){
		  var width = this.clientWidth;
		  var height = this.clientHeight;
		  var rect = this.getBoundingClientRect();
		  var posX = e.clientX - rect.left;
		  var posY = e.clientY - rect.top;
		  var size = Math.max(width, height);
		  var effect = document.createElement('DIV');
		  effect.className = 'effect';
		  effect.style.width = size + 'px';
		  effect.style.height = size  + 'px';
		  effect.style.top = posY - size/2 + 'px';
		  effect.style.left = posX - size/2 + 'px';
  
		  this.appendChild(effect);
		  var parent = this;
		
		  setTimeout(function() {
			  parent.removeChild(effect);
		  }, 750);
	  }
	
	//Prevent horizontal scroll of page using keyboard
	$(window).keydown(function(e){
	  if(e.which == 37 || e.which == 39){
		e.preventDefault();
	  }
	});
	
	//Scroll hide image
	$(window).scroll(function () {
	  $(this).scrollTop() > 50 ? $('#scroll').fadeOut() : $('#scroll').fadeIn()
	});
  }


    // SIMPLEBAR

    var elements = document.getElementsByClassName('simple-bar');        
	for (var i = 0; i < elements.length; i++) {
		new SimpleBar(elements[i], { autoHide: true });
	}
  
	// SIMPLEBAR


	$(document).ready(function () {
	
		// MODAL SLIDE

		$('.modal-sidebar').click(function (e) {
			e.preventDefault();
			let dataId = $(this).data('target-custom');
			if (dataId) {
				$('.' + dataId).addClass('open');
				$('#drop-effect').addClass('open');
				$('body').addClass('no-scroll');
			}
		});
	
		$('.close,.cancel, .submit').click(function (e) {
			e.stopPropagation(); //stopping propagation here
			e.preventDefault();
			$(this).parents('.modal-right').removeClass('open');
			$('#drop-effect').removeClass('open');
			$('body').removeClass('no-scroll');
		});
	
		// Close modal when clicking outside
	
		window.addEventListener(
		'click', function (event) {
			if (event.target === document.querySelector('.modal-drop-effect')) {
				// myModal.hide();
				$('.modal-right').removeClass('open');
				$('#drop-effect').removeClass('open');
				$('body').removeClass('no-scroll');
			}
		});

		$(".customize").click(function(){
			$(".customize-pills").toggleClass("arrange");
			$(".customize-tab-1").toggleClass("btn-hide");
			$(".customize-check-cancel").addClass("enable");
			$(".cancel").removeClass("enable");
		});
		$(".customize").click(function(){
			$(".customize-check-cancel").addClass("enable");
		});
		
		$(".cancel").click(function(){
			$(".customize-check-cancel").removeClass("enable");
			$(".customize-pills").removeClass("arrange");
			$(".customize-tab-1").removeClass("btn-hide");
		});

		$('.mobile-add-slide-multi-btn').click(function () {
			$('.mobile-add-common-btn').toggleClass('open');
			$('#drop-effect').addClass('open');
			$('body').addClass('no-scroll');
		});

		$('.btn-action-mobile').click(function () {
			$('.mobile-add-common-btn').removeClass('open');
			$('#drop-effect').removeClass('open');
		});

		$('.m-menu__toggle').click(function () {
			$('.sidebar').addClass('open-toggle');
		});

		$('.m-menu__toggle-close').click(function () {
			$('.sidebar').removeClass('open-toggle');
		});

		// MODAL SLIDE

	});

	$(document).ready(function() {

		// SIDEBAR MENU WITH SUB-MENU //

		$(function () {
			// Handle click on nav-links
			$('.sidebar .nav-link').click(function (e) {
				var $this = $(this);
				var $parentMenu = $this.parent();
				var $subMenu = $parentMenu.find('.collapse__menu');
		
				// Check if the clicked link is supposed to toggle a dropdown
				if ($subMenu.length) {
					var href = $this.attr('href');
					if (href === 'javascript:void(0)') {
						// Prevent default action only for dropdown links
						e.preventDefault();
						$('.collapse__menu').not($subMenu).removeClass('open'); // Close other dropdowns
						$subMenu.toggleClass('open');
					}
				}
			});
		
			// Close dropdown when clicking outside
			$(document).click(function (e) {
				if (!$(e.target).closest('.sidebar .nav-item').length) {
					$('.collapse__menu').removeClass('open');
				}
			});
		
			// Prevent closing the dropdown when clicking inside it
			$('.sidebar .nav-item').click(function (e) {
				e.stopPropagation();
			});
		});
		
		// SIDEBAR MENU WITH SUB-MENU //

		$('.accordion-button').click(function(e) {
			e.preventDefault();
			$(this).parents('.accordion-item').toggleClass('accordion-active').siblings().removeClass('accordion-active');
		});
	});

	
	// $( function() {
	// 	console.log(".selectmenu")
	// 	$( ".form-select" ).selectmenu();
	// } );

	


  