$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});

// SLICK SLIDER ON HEADER
$('.slider').slick({
	dots: true,
	infinite: true,
	speed: 300,
	slidesToShow: 1,
	arrows: false,
	autoplay: true,
	autoplaySpeed: 5000
  });

const tl = gsap.timeline();

tl.to('.one', {x: '-600px', duration: 3}, 0)
tl.to('.two', {x: '-600px', duration: 3}, 0)
tl.to('.three', {x: '-600px', duration: 3}, 0)
tl.to('.five', {x: '600px', duration: 3}, 0)
tl.to('.six', {x: '600px', duration: 3}, 0)
tl.to('.seven', {x: '600px', duration: 3}, 0)
tl.to('.four img', {width: '100vw', top: '0', duration: 3}, 0)
tl.to('.overlay-img', {width: '100vw', opacity: 1, top: 0, duration: 3}, 0)
tl.to('.first-item', {top: '180vh', duration: 3}, 1)
tl.to('.second-item', {top: '190vh', duration: 4}, 1)

ScrollTrigger.create({
	animation: tl,
	trigger: '.grid',
	markers: false,
	start: 'top top',
	end: 'bottom top',
	scrub: 3,
	pin: true
});




