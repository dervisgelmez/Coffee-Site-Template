$(document).ready(function() {
	
	$('.slide').carousel({
	  interval:7000
	});	

	

	$('.americano').hover(function() {
	  $('.coffeex').toggleClass('highlight');
	  $('.water').toggleClass('highlight');
	});

	$('.mochaccino').hover(function() {
	  $('.coffeex').toggleClass('highlight');
	  $('.milk').toggleClass('highlight');
	  $('.chocolate').toggleClass('highlight');
	});

	$('.espresso').hover(function() {
	  $('.coffeex').toggleClass('highlight');
	});

	$('.cappuccino').hover(function() {
	  $('.coffeex').toggleClass('highlight');
	  $('.milk').toggleClass('highlight');
	  $('.chocolate').toggleClass('highlight');
	  $('.foam').toggleClass('highlight');
	});

	$('.macchiato').hover(function() {
	  $('.coffeex').toggleClass('highlight');
	  $('.foam').toggleClass('highlight');
	});

	$('.aulait').hover(function() {
	  $('.coffeex').toggleClass('highlight');
	  $('.milk').toggleClass('highlight');
	});

	$('.latte').hover(function() {
	  $('.coffeex').toggleClass('highlight');
	  $('.milk').toggleClass('highlight');
	  $('.foam').toggleClass('highlight');
	});

	$('.hotchocolate').hover(function() {
	  $('.coffeex').toggleClass('highlight');
	  $('.chocolate').toggleClass('highlight');
	  $('.milk').toggleClass('highlight');
	});









	$countcustomize = $('.customize form').length;
	$sizecustomize = $('.customize').height() + 80;
	$('.price').css({
		height: $sizecustomize+'px'
	});
	$('.price span').css({
		lineHeight: $sizecustomize-120+'px'
	});


	$priceof = parseFloat($('.price span').text());
	$('.customize').click(function(event) 
	{
		$sizeCof = $('.formCoffee input:checked').val();
		$drinkCof = $('.formDrink input:checked').val();
		$aromaticCof = $('.formAromatic input:checked').val();

		if ($sizeCof == "small") 
		{
			$('.price span').text($priceof);
		}
		else if ($sizeCof == "medium") 
		{
			$('.price span').text($priceof+1.50);
		}
		else 
		{
			$('.price span').text($priceof+3.00);
		}


		if ($drinkCof == "normal") 
		{
			$('.price span').text(parseFloat($('.price span').text()));
		}
		else 
		{
			$('.price span').text(parseFloat($('.price span').text())+0.50);
		}


		if ($aromaticCof == "flavored") 
		{
			$('.price span').text(parseFloat($('.price span').text())+1.00);
		}
		else 
		{
			$('.price span').text(parseFloat($('.price span').text()));
		}

	});




	function trackScroll() {
		var scrolled = window.pageYOffset;
		var coords = document.documentElement.clientHeight;

		if (scrolled > coords) {
			goTopBtn.classList.add('backtotop-show');
		}
		if (scrolled < coords) {
			goTopBtn.classList.remove('backtotop-show');
		}
	}

	function backToTop() 
	{
		if (window.pageYOffset > 0) {
			window.scrollBy(0, -80);
			setTimeout(backToTop, 0);
		}
	}

	var goTopBtn = document.querySelector('.backtotop');
	window.addEventListener('scroll', trackScroll);
	goTopBtn.addEventListener('click', backToTop);
});





