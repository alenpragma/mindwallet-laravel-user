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
	var urlText = document.getElementById('urlText').innerText;
	var hiddenInput = document.getElementById('hiddenInput');
	// hiddenInput.value = value;
	hiddenInput.select();
	document.execCommand('copy');

	var copyIcon = document.querySelector('.copy-icon');
	var clipboardIcon = document.querySelector('.clipboard-icon');
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


async function fetchMindPrice() {
    try {
        const response = await fetch('https://mindchain.info/Api/Index/singlemarketInfo/market/mind_usdt');
        if (response.ok) {
            const json = await response.json();
            const newPrice = json.data.new_price;
            const change = parseFloat(json.data.change);
            // Update the HTML content in all relevant places
            document.querySelectorAll('.priceValue').forEach(el => {
                el.textContent = newPrice;
            });
            document.querySelectorAll('.changeValue').forEach(el => {
                el.textContent = change;


				document.querySelectorAll('.priceValue').forEach(el => {
					el.value = newPrice;
				});

                // Set the color based on the value of change
                if (change >= 0) {
                    el.style.color = 'green';
                } else {
                    el.style.color = 'red';
                }
            });
        } else {
            console.error('Failed to fetch price:', response.status);
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchMindPrice();
setInterval(fetchMindPrice, 5000);


// wallet copy 



	function selectWallet(section) {
		const select = document.getElementById(`selectWallet${section}`);
		const input = document.getElementById(`copyAddress${section}`);
		input.value = select.value;
	}
	
	function copyWallet(event, section) {
		const walletInput = document.getElementById(`copyAddress${section}`);
		walletInput.select();
		walletInput.setSelectionRange(0, 99999);
		event.preventDefault();
		document.execCommand('copy');
	
		const sectionElement = document.querySelector(`.form-group[data-section="${section}"]`);
		const copyIcon = sectionElement.querySelector('.copy-icon');
		const clipboardIcon = sectionElement.querySelector('.clipboard-icon');
	
		copyIcon.style.display = 'none';
		clipboardIcon.style.display = 'inline';
	
		setTimeout(() => {
			clipboardIcon.style.display = 'none';
			copyIcon.style.display = 'inline';
		}, 1000);
	}

	
	function openWallet(evt, walletName) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(walletName).style.display = "block";
        evt.currentTarget.className += " active";
    }
    document.addEventListener("DOMContentLoaded", function() {
        document.querySelector(".tablinks").click();
    });


	// for show kids age

	function calculateAge() {
		let dob = new Date(document.getElementById("kids-dob").value);
		let today = new Date();
		let age = today.getFullYear() - dob.getFullYear();
		let month = today.getMonth() - dob.getMonth();
		if (month < 0 || (month === 0 && today.getDate() < dob.getDate())) {
			age--;
		}
		document.getElementById("kids-age").value = age;
	}