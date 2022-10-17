// AOS init

AOS.init();

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
const tlAfter = gsap.timeline();

tl.to('.one', {x: '-1200px', duration: 5}, 0)
tl.to('.two', {x: '-900px', duration: 5}, 0)
tl.to('.three', {x: '-900px', duration: 5}, 0)
tl.to('.five', {x: '900px', duration: 5}, 0)
tl.to('.six', {x: '900px', duration: 5}, 0)
tl.to('.seven', {x: '1200px', duration: 5}, 0)
tl.to('.four img', {width: '130vw', top: '-300px', duration: 5}, 0)
tl.fromTo('.overlay-img', 
	{width: '800px', height: '641px', opacity: 0, top: '55px', duration: 5}, 
	{width: '2496px', height: '1999.91px', opacity: 1, top: '-300px', duration: 5}, 
0)

tl.to('.infoblock-after', {top: '50vh', duration: 10}, 0)
tl.fromTo('.first-item', {top: '240vh', left: '-600px', duration: 3}, {top: '120vh', left: '200px', duration: 10}, 0)
tl.fromTo('.second-item', {top: '270vh', left: '-900px', duration: 3}, {top: '220vh', left: '300px',  duration: 15}, 0)
tl.fromTo('.third-item', {top: '240vh', right: '-600px', duration: 3}, {top: '120vh', right: '300px', duration: 10}, 0)
tl.fromTo('.fourth-item', {top: '270vh', right: '-900px', duration: 3}, {top: '220vh', right: '200px', duration: 15}, 0)

// tl.to('.infoblock', {top: '70vh', duration: 3}, 1)


ScrollTrigger.create({
	animation: tl,
	trigger: '.grid',
	markers: false,
	start: 'top top',
	end: 'bottom top',
	scrub: 3,
	pin: true
});

// Fixed title when scroll infoblocks

// const tlTitle = gsap.timeline();

// tlTitle.fromTo('.medical__title', {top: '0', duration: 3}, {top: '130px', duration: 5}, 0)
// // tlTitle.fromTo('.medical__items', {top: '0', duration: 3}, {top: '-500px', duration: 5}, 0)



// ScrollTrigger.create({
// 	animation: tlTitle,
// 	trigger: '.medical-infoblocks',
// 	markers: true,
// 	start: 'top top',
// 	end: 'bottom bottom',
// 	scrub: 2,
// 	pin: true
// });

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
					medicalBackground.style.background = 'url(img/medical-base-1.png) no-repeat center top'
					medicalBackground.style.backgroundAttachment = 'fixed'
				} else if ($(window).scrollTop() > 8917 && $(window).scrollTop() < 9712){
					medicalBackground.style.background = 'url(img/medical-base-2.jpg) no-repeat center top'
					medicalBackground.style.backgroundAttachment = 'fixed'
                }
                else if ($(window).scrollTop() > 9712){
					medicalBackground.style.background = 'url(img/medical-base-3.jpg) no-repeat center top'
					medicalBackground.style.backgroundAttachment = 'fixed'
				}

        });
});

// Cloud scrolling function

const cloudLeft = document.querySelector(".left-cloud")
const cloudRight = document.querySelector(".right-cloud")

$(document).ready(function(){
    $(window).scroll(function(){
				if ($(window).scrollTop() > 4350 && $(window).scrollTop() < 5800) {
					cloudLeft.style.transition = `all 1.5s ease;`
					cloudRight.style.transition = `all 1.5s ease;`
					setTimeout(() => {
						cloudLeft.style.left = `-1050px`
						cloudRight.style.right = `-1050px`
					}, 300)
				} else {
					cloudLeft.style.transition = `all 1.5s ease;`
					cloudRight.style.transition = `all 1.5s ease;`
					cloudLeft.style.left = `0`
					cloudRight.style.right = `0`
				}
        });
});

// const tlCloud = gsap.timeline();

// tlCloud.to(cloudLeft, {left: '-500px', duration: 3}, 0)
// tlCloud.to(cloudRight, {right: '-500px', duration: 3}, 0)


// ScrollTrigger.create({
// 	animation: tlSecond,
// 	trigger: document,
// 	markers: false,
// 	start: '4100px',
// 	end: '4820px',
// 	scrub: 1,
// 	pin: true
// });

// Hover on more btn 

const moreBtns = document.querySelectorAll('.sales__more')

moreBtns.forEach(btn => {
	btn.addEventListener('mouseover', (e) => {
		e.preventDefault()
		e.target.parentNode.parentNode.querySelector('.sales-img-wrap img').style.scale = '1.2'
		e.target.parentNode.parentNode.querySelector('.sales__item-title').style.transform = 'translateY(0)'
		e.target.parentNode.parentNode.querySelector('.sales__description').style.transform = 'translateY(0)'
	})
})

moreBtns.forEach(btn => {
	btn.addEventListener('mouseout', (e) => {
		e.preventDefault()
		e.target.parentNode.parentNode.querySelector('.sales-img-wrap img').style.scale = '1'
		e.target.parentNode.parentNode.querySelector('.sales__item-title').style.transform = 'translateY(89px)'
		e.target.parentNode.parentNode.querySelector('.sales__description').style.transform = 'translateY(120px)'
	})
})

const afishaBtns = document.querySelectorAll('.afisha__more')

afishaBtns.forEach(item => {
	item.addEventListener('mouseover', (e) => {
		e.preventDefault()
		e.target.parentNode.parentNode.querySelector('.afisha-img-wrap img').style.scale = '1.2'
	})
})

afishaBtns.forEach(item => {
	item.addEventListener('mouseout', (e) => {
		e.preventDefault()
		e.target.parentNode.parentNode.querySelector('.afisha-img-wrap img').style.scale = '1'
	})
})
