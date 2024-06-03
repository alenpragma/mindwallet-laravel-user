(function ($) {
 "use strict";

	/*----------------------------
	 jQuery MeanMenu
	------------------------------ */
	jQuery('nav#dropdown').meanmenu();	
	/*----------------------------
	 jQuery myTab
	------------------------------ */
	$('#myTab a').click(function (e) {
		  e.preventDefault()
		  $(this).tab('show')
		});
		$('#myTab3 a').click(function (e) {
		  e.preventDefault()
		  $(this).tab('show')
		});
		$('#myTab4 a').click(function (e) {
		  e.preventDefault()
		  $(this).tab('show')
		});

	  $('#single-product-tab a').click(function (e) {
		  e.preventDefault()
		  $(this).tab('show')
		});
	
	$('[data-toggle="tooltip"]').tooltip(); 
	
	$('#sidebarCollapse').on('click', function () {
                     $('#sidebar').toggleClass('active');
                     
                 });
		// Collapse ibox function
			$('#sidebar ul li').on('click', function () {
				var button = $(this).find('i.fa.indicator-mn');
				button.toggleClass('fa-plus').toggleClass('fa-minus');
				
			});
	/*-----------------------------
			Menu Stick
		---------------------------------*/
		$(".sicker-menu").sticky({topSpacing:0});
			
		$('#sidebarCollapse').on('click', function () {
			$("body").toggleClass("mini-navbar");
			SmoothlyMenu();
		});
		$(document).on('click', '.header-right-menu .dropdown-menu', function (e) {
			  e.stopPropagation();
			});
 
	
/*----------------------------
 wow js active
------------------------------ */
 new WOW().init();
 
/*----------------------------
 owl active
------------------------------ */  
  $("#owl-demo").owlCarousel({
      autoPlay: false, 
	  slideSpeed:2000,
	  pagination:false,
	  navigation:true,	  
      items : 4,
	  /* transitionStyle : "fade", */    /* [This code for animation ] */
	  navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      itemsDesktop : [1199,4],
	  itemsDesktopSmall : [980,3],
	  itemsTablet: [768,2],
	  itemsMobile : [479,1],
  });

/*----------------------------
 price-slider active
------------------------------ */  
	  $( "#slider-range" ).slider({
	   range: true,
	   min: 40,
	   max: 600,
	   values: [ 60, 570 ],
	   slide: function( event, ui ) {
		$( "#amount" ).val( "£" + ui.values[ 0 ] + " - £" + ui.values[ 1 ] );
	   }
	  });
	  $( "#amount" ).val( "£" + $( "#slider-range" ).slider( "values", 0 ) +
	   " - £" + $( "#slider-range" ).slider( "values", 1 ) );  
	   
/*--------------------------
 scrollUp
---------------------------- */	
	$.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    }); 	   
 
})(jQuery); 

// click to active sidebar

var header = document.getElementById("menu1");
var btns = header.getElementsByClassName("click-acive");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}

// Timer counter start 
$(document).ready(function () {
	var myDate = new Date("july 28, 2024 15:37:25");
	myDate.setDate(myDate.getDate());
	$("#countdown").countdown(myDate, function (event) {
		$(this).html(
			event.strftime(
				'<div class="timer-wrapper"><div class="time">%D</div><span class="text">D</span></div><div class="timer-wrapper"><div class="time">%H</div><span class="text">H</span></div><div class="timer-wrapper"><div class="time">%M</div><span class="text">M</span></div><div class="timer-wrapper"><div class="time">%S</div><span class="text">S</span></div>'
			)
		);
	});

});// Timer counter end 

// copy url
function copyURL() {
	const urlText = document.getElementById('urlText').innerText;
	const hiddenInput = document.getElementById('hiddenInput');
	// hiddenInput.value = value;
	hiddenInput.select();
	document.execCommand('copy');

	const copyIcon = document.querySelector('.copy-icon');
	const clipboardIcon = document.querySelector('.clipboard-icon');
	copyIcon.style.display = 'none';
	clipboardIcon.style.display = 'inline';

	setTimeout(() => {
		clipboardIcon.style.display = 'none';
		copyIcon.style.display = 'inline';
	}, 1000);
}


function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    var main = document.getElementById("main");
    var button = document.querySelector('.togglebtn');

    if (sidebar.style.width === "250px") {
        sidebar.style.width = "0";
        main.style.marginLeft = "0";
        button.innerHTML = "☰ Open Sidebar";
    } else {
        sidebar.style.width = "250px";
        main.style.marginLeft = "250px";
        button.innerHTML = "× Close Sidebar";
    }
}