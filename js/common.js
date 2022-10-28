window.onload = function () {

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

// SHOW/HIDE MENU MODAL

const showMenuBtn = document.querySelector('.menu')
const hideMenuBtn = document.querySelector('.menu__close')
const menuWrapper = document.querySelector('.menu-container')

showMenuBtn.addEventListener('click', (e) => {
	e.preventDefault()
	menuWrapper.style.transform = 'translateY(0)'
})

hideMenuBtn.addEventListener('click', (e) => {
	e.preventDefault()
	menuWrapper.style.transform = 'translateY(-100vh)'
})


// SLICK SLIDER ON HEADER

$('.slider').slick({
	dots: true,
	infinite: true,
	speed: 300,
	slidesToShow: 1,
	arrows: false,
	autoplay: true,
	autoplaySpeed: 6000
  });

document.querySelector('#slick-slide-control00').innerHTML = '01'
document.querySelector('#slick-slide-control01').innerHTML = '02'
document.querySelector('#slick-slide-control02').innerHTML = '03'

// $('.afisha__list').slick({
// 	slidesToShow: 5,
// 	slidesToScroll: 1,
// 	autoplay: true,
// 	autoplaySpeed: 2000,
//   });

// $('.sales__list').slick({
// 	slidesToShow: 5,
// 	slidesToScroll: 1,
// 	autoplay: true,
// 	autoplaySpeed: 2000,
//   });

// map icons animated


function showHideSticks(icon, stick) {
	document.querySelector(icon).addEventListener('mouseover', (e) => {
		e.preventDefault()
		document.querySelector(stick).style.display = 'block'
		setTimeout( () => {
			document.querySelector(stick).style.opacity = '1'
		}, 200)
	})

	document.querySelector(icon).addEventListener('mouseout', (e) => {
			e.preventDefault()
			document.querySelector(stick).style.opacity = '0'
			setTimeout( () => {
				document.querySelector(stick).style.display = 'none'
			}, 500)
	})
}

showHideSticks('.icons img.vosduh', '.stick-1')
showHideSticks('.icons img.banya', '.stick-2')
showHideSticks('.icons img.dom-1', '.stick-3')
showHideSticks('.icons img.dom-2', '.stick-4')
showHideSticks('.icons img.dom-3', '.stick-5')
showHideSticks('.icons img.dom-4', '.stick-6')
showHideSticks('.icons img.dom-5', '.stick-7')
showHideSticks('.icons img.dom-6', '.stick-8')
showHideSticks('.icons img.dom-7', '.stick-9')
showHideSticks('.icons img.domik-1', '.stick-10')
showHideSticks('.icons img.magazin', '.stick-11')
showHideSticks('.icons img.lestnica-1', '.stick-12')
showHideSticks('.icons img.lupa', '.stick-13')
showHideSticks('.icons img.lestnica-2', '.stick-14')
showHideSticks('.icons img.venik', '.stick-15')
showHideSticks('.icons img.serdce', '.stick-16')
showHideSticks('.icons img.instrumenti', '.stick-17')
showHideSticks('.icons img.sport', '.stick-18')
showHideSticks('.icons img.domik-2', '.stick-19')

// Fixed header when scroll

const header = document.querySelector('header')

$(document).ready(function(){
    $(window).scroll(function(){
				if ($(window).scrollTop() > 500){
					header.classList.add('header_fixed')
					header.querySelector('.logo img').src = 'img/logo-fixed.svg'
				} else {
					header.classList.remove('header_fixed')
					header.querySelector('.logo img').src = 'img/logo_color.svg'
                }
        });
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
tl.to('.four img', {width: '120vw', top: '-300px', duration: 5}, 0)
tl.fromTo('.overlay-img', 
	{width: '800px', height: '641px', opacity: 0, top: '55px', duration: 5}, 
	{width: '2304px', height: '1846.08px', opacity: 1, top: '-300px', duration: 5}, 
0)

tl.to('.infoblock-after', {top: '50vh', duration: 10}, 0)
tl.fromTo('.first-item', {top: '240vh', left: '-600px', duration: 3}, {top: '120vh', left: '150px', duration: 10}, 0)
tl.fromTo('.second-item', {top: '270vh', left: '-900px', duration: 3}, {top: '200vh', left: '150px',  duration: 15}, 0)
tl.fromTo('.third-item', {top: '240vh', right: '-600px', duration: 3}, {top: '135vh', right: '285px', duration: 10}, 0)
tl.fromTo('.fourth-item', {top: '270vh', right: '-900px', duration: 3}, {top: '215vh', right: '285px', duration: 15}, 0)

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
				if ($(window).scrollTop() > 7760 && $(window).scrollTop() < 8600){
					medicalBackground.style.background = 'url(img/lech-1.jpg) no-repeat center top'
					medicalBackground.style.backgroundAttachment = 'fixed'
				} else if ($(window).scrollTop() > 8601 && $(window).scrollTop() < 9350){
					medicalBackground.style.background = 'url(img/lech-2.jpg) no-repeat center top'
					medicalBackground.style.backgroundAttachment = 'fixed'
                }
                else if ($(window).scrollTop() > 9350){
					medicalBackground.style.background = 'url(img/lech-3.jpg) no-repeat center top'
					medicalBackground.style.backgroundAttachment = 'fixed'
				}

        });
});

// Cloud scrolling function

const cloudLeft = document.querySelector(".left-cloud")
const cloudRight = document.querySelector(".right-cloud")

$(document).ready(function(){
    $(window).scroll(function(){
				if ($(window).scrollTop() > 3845 && $(window).scrollTop() < 5210) {
					setTimeout(() => {
						cloudLeft.style.left = `-1500px`
						cloudRight.style.right = `-1500px`
					}, 300)
				} else {
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

}

