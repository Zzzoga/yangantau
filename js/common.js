// Smooth Scroll Script

SmoothScroll({
    animationTime    : 1000,
    stepSize         : 50,
    
    accelerationDelta : 30,  
    accelerationMax   : 2,   

    keyboardSupport   : true,  
    arrowScroll       : 50,

    pulseAlgorithm   : true,
    pulseScale       : 4,
    pulseNormalize   : 1,

    touchpadSupport   : true,
})


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

// GSAP Animation Full-width block with infoblock

const tl = gsap.timeline();

tl.to('.one', {x: '-1200px', duration: 3}, 0)
tl.to('.two', {x: '-900px', duration: 3}, 0)
tl.to('.three', {x: '-900px', duration: 3}, 0)
tl.to('.five', {x: '900px', duration: 3}, 0)
tl.to('.six', {x: '900px', duration: 3}, 0)
tl.to('.seven', {x: '1200px', duration: 3}, 0)
tl.to('.four img', {width: '130vw', top: '0', duration: 3}, 0)
tl.fromTo('.overlay-img', 
	{width: '800px', height: '529.34px', opacity: 0, top: '55px', duration: 3}, 
	{width: '2496px', height: '1999.91px', opacity: 1, top: 0, duration: 3}, 
0)

tl.to('.infoblock', {top: '70vh', duration: 3}, 1)


ScrollTrigger.create({
	animation: tl,
	trigger: '.grid',
	markers: false,
	start: 'top top',
	end: 'bottom top',
	scrub: 3,
	pin: true
});

// Higher blocks + parallax on scroll action

const tlSecond = gsap.timeline();

tlSecond.to('.first__vac', {y: '30px', duration: 1}, 0)
tlSecond.to('.second__vac', {y: '170px', duration: 1}, 0)
tlSecond.to('.third__vac', {y: '30px', duration: 1}, 0)

tlSecond.to('.v-item-img-first img', {y: '-70px', duration: 1}, 0)
tlSecond.to('.v-item-img-second img', {y: '-70px', duration: 1}, 0)
tlSecond.to('.v-item-img-third img', {y: '-70px', duration: 1}, 0)

ScrollTrigger.create({
	animation: tlSecond,
	trigger: '.scroll-container',
	markers: false,
	start: 'top top',
	end: 'center top',
	scrub: 1,
	pin: true
});


// Change background img on fixed blocks when scrolling
const medicalBackground = document.querySelector(".medical__inner")

$(document).ready(function(){
    $(window).scroll(function(){
				if ($(window).scrollTop() > 8019 && $(window).scrollTop() < 8917){
					medicalBackground.style.background = 'url(../img/medical-base-1.png) no-repeat center top'
					medicalBackground.style.backgroundAttachment = 'fixed'
				} else if ($(window).scrollTop() > 8917 && $(window).scrollTop() < 9712){
					medicalBackground.style.background = 'url(../img/medical-base-2.jpg) no-repeat center top'
					medicalBackground.style.backgroundAttachment = 'fixed'
                }
                else if ($(window).scrollTop() > 9712){
					medicalBackground.style.background = 'url(../img/medical-base-3.jpg) no-repeat center top'
					medicalBackground.style.backgroundAttachment = 'fixed'
				}

        });
});

