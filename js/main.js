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

// USDT section 
function UsdtDepositWallet() {
	    const select = document.getElementById('selectUsdtDepositWallet');
		
	    const input = document.getElementById('usdtDepositAddress');
	    console.log(input);
	    input.value = select.value;
	}
	function copyUsdtDepositWallet(event) {
        var walletInput = document.getElementById("usdtDepositAddress");
        walletInput.select();
        walletInput.setSelectionRange(0, 99999);
		event.preventDefault();
		hiddenInput.select();
		document.execCommand('copy');
	
		var copyIcon = document.querySelector('.copy-usdt-depo-wall');
		var clipboardIcon = document.querySelector('.clipboard-usdt-depo-wall');
		copyIcon.style.display = 'none';
		clipboardIcon.style.display = 'inline';
	
		setTimeout(() => {
			clipboardIcon.style.display = 'none';
			copyIcon.style.display = 'inline';
		}, 1000);

    }

	function UsdtDepositWalletMenu() {
	    const select = document.getElementById('selectUsdtDepositWalletMenu');
		
	    const input = document.getElementById('usdtDepositAddressMenu');
	    console.log(input);
	    input.value = select.value;
	}
	function copyUsdtDepositWalletMenu(event) {
        var walletInput = document.getElementById("usdtDepositAddressMenu");
        walletInput.select();
        walletInput.setSelectionRange(0, 99999);
		event.preventDefault();
		hiddenInput.select();
		document.execCommand('copy');
	
		var copyIcon = document.querySelector('.copy-usdt-depo-wall-menu');
		var clipboardIcon = document.querySelector('.clipboard-usdt-depo-wall-menu');
		copyIcon.style.display = 'none';
		clipboardIcon.style.display = 'inline';
	
		setTimeout(() => {
			clipboardIcon.style.display = 'none';
			copyIcon.style.display = 'inline';
		}, 1000);

    }

	// BMIND Section

	function bmindDepositWallet() {
	    const select = document.getElementById('selectBmindDepositAddress');
	    const input = document.getElementById('bmindDepositAddress');
	    console.log(input);
	    input.value = select.value;
	}
	function copyBmindDepositWallet(event) {
        var walletInput = document.getElementById("bmindDepositAddress");
        walletInput.select();
        walletInput.setSelectionRange(0, 99999);
		event.preventDefault();
		hiddenInput.select();
		document.execCommand('copy');
	
		var copyIcon = document.querySelector('.copy-bmind-depo-wall');
		var clipboardIcon = document.querySelector('.clipboard-bmind-depo-wall');
		copyIcon.style.display = 'none';
		clipboardIcon.style.display = 'inline';
	
		setTimeout(() => {
			clipboardIcon.style.display = 'none';
			copyIcon.style.display = 'inline';
		}, 1000);

    }

	function bmindWithdrawWallet() {
	    const select = document.getElementById('selectBmindWithdrawAddress');
	    const input = document.getElementById('bmindWithdrawAddress');
	    console.log(input);
	    input.value = select.value;
	}
	function copyBmindWithdrawWallet(event) {
        var walletInput = document.getElementById("bmindWithdrawAddress");
        walletInput.select();
        walletInput.setSelectionRange(0, 99999);
		event.preventDefault();
		hiddenInput.select();
		document.execCommand('copy');
	
		var copyIcon = document.querySelector('.copy-bmind-with-wall');
		var clipboardIcon = document.querySelector('.clipboard-bmind-with-wall');
		copyIcon.style.display = 'none';
		clipboardIcon.style.display = 'inline';
	
		setTimeout(() => {
			clipboardIcon.style.display = 'none';
			copyIcon.style.display = 'inline';
		}, 1000);

    }


	// MUSD Section

	function musdDepositWallet() {
	    const select = document.getElementById('selectMusdDepositAddress');
	    const input = document.getElementById('musdDepositAddress');
	    console.log(input);
	    input.value = select.value;
	}
	function copyMusdDepositWallet(event) {
        var walletInput = document.getElementById("musdDepositAddress");
        walletInput.select();
        walletInput.setSelectionRange(0, 99999);
		event.preventDefault();
		hiddenInput.select();
		document.execCommand('copy');
	
		var copyIcon = document.querySelector('.copy-musd-depo-wall');
		var clipboardIcon = document.querySelector('.clipboard-musd-depo-wall');
		copyIcon.style.display = 'none';
		clipboardIcon.style.display = 'inline';
	
		setTimeout(() => {
			clipboardIcon.style.display = 'none';
			copyIcon.style.display = 'inline';
		}, 1000);

    }

	function musdWithdrawWallet() {
	    const select = document.getElementById('selectMusdWithdrawAddress');
	    const input = document.getElementById('musdWithdrawAddress');
	    console.log(input);
	    input.value = select.value;
	}
	function copyMusdWithdrawWallet(event) {
        var walletInput = document.getElementById("musdWithdrawAddress");
        walletInput.select();
        walletInput.setSelectionRange(0, 99999);
		event.preventDefault();
		hiddenInput.select();
		document.execCommand('copy');
	
		var copyIcon = document.querySelector('.copy-musd-with-wall');
		var clipboardIcon = document.querySelector('.clipboard-musd-with-wall');
		copyIcon.style.display = 'none';
		clipboardIcon.style.display = 'inline';
	
		setTimeout(() => {
			clipboardIcon.style.display = 'none';
			copyIcon.style.display = 'inline';
		}, 1000);

    }

	
	// Mind Section

	function mindDepositWallet() {
	    const select = document.getElementById('selectMindDepositAddress');
	    const input = document.getElementById('mindDepositAddress');
	    console.log(input);
	    input.value = select.value;
	}
	function copyMindDepositWallet(event) {
        var walletInput = document.getElementById("mindDepositAddress");
        walletInput.select();
        walletInput.setSelectionRange(0, 99999);
		event.preventDefault();
		hiddenInput.select();
		document.execCommand('copy');
	
		var copyIcon = document.querySelector('.copy-mind-depo-wall');
		var clipboardIcon = document.querySelector('.clipboard-mind-depo-wall');
		copyIcon.style.display = 'none';
		clipboardIcon.style.display = 'inline';
	
		setTimeout(() => {
			clipboardIcon.style.display = 'none';
			copyIcon.style.display = 'inline';
		}, 1000);

    }

	function mindWithdrawWallet() {
	    const select = document.getElementById('selectMindWithdrawAddress');
	    const input = document.getElementById('mindWithdrawAddress');
	    console.log(input);
	    input.value = select.value;
	}
	function copyMindWithdrawWallet(event) {
        var walletInput = document.getElementById("mindWithdrawAddress");
        walletInput.select();
        walletInput.setSelectionRange(0, 99999);
		event.preventDefault();
		hiddenInput.select();
		document.execCommand('copy');
	
		var copyIcon = document.querySelector('.copy-mind-with-wall');
		var clipboardIcon = document.querySelector('.clipboard-mind-with-wall');
		copyIcon.style.display = 'none';
		clipboardIcon.style.display = 'inline';
	
		setTimeout(() => {
			clipboardIcon.style.display = 'none';
			copyIcon.style.display = 'inline';
		}, 1000);

    }
