// 'use strict';

// // Getting all the elements from the html
// const navigation = document.querySelector('.navigation');
// const topHelper = document.querySelector('.top-helper');
// const footerDate = document.querySelector('.date');

// // Getting all the sections
// const header = document.querySelector('.section-header');
// const aboutUs = document.querySelector('.section-aboutus');
// const offers = document.querySelector('.section-offers');
// const price = document.querySelector('.section-price');
// const contact = document.querySelector('.section-contact');


// // Getting the position of each section
// const headerPosition = header.getBoundingClientRect();
// const aboutUsPosition = aboutUs.getBoundingClientRect();
// // const offersPosition = offers.getBoundingClientRect();
// // const pricePosition = price.getBoundingClientRect();
// // const contactPosition = contact.getBoundingClientRect();

// // Functions for manipulation of the  navigation background color
// // Aboutus section
// const aboutUsAnimation = () => {
// 	// if the position of window while scrolling equals to the position of the bottom part of header
// 	// and the position of window while scrolling is bigger or equal to the headerbottom - 5px
// 	// if (window.scrollY === headerPosition.bottom || window.scrollY === headerPosition.top) {
// 	// } else if (window.scrollY === headerPosition.bottom - 5 || window.scrollY <= headerPosition.bottom) {
// 	// 	navigation.classList.remove('navigation-static-blue');
// 	// 	navigation.classList.add('navigation-slide-out');
// 	// 	elementAnimated = false;
// 	// 	console.log('No');
// 	// }
// 	if (window.scrollY >= headerPosition.bottom && window.scrollY <= aboutUsPosition.bottom) {
// 		navigation.style.position = 'fixed';
// 		navigation.style.width = '100%';
// 		navigation.classList.remove('navigation-slide-out');
// 		navigation.classList.add('navigation-static-blue');
// 	} else {
// 		console.log('yes');
// 	}
// };

// // // Offers section
// // const offersAnimation = () => {
// // 	if (window.scrollY === aboutUsPosition.bottom || window.scrollY >= aboutUsPosition.bottom) {
// // 		navigation.classList.remove('navigation-static-blue')
// // 		navigation.classList.add('navigation-static-white');
// // 	} else {
// // 		navigation.classList.remove('navigation-static-white');
// // 		navigation.classList.add('navigation');
// // 	}
// // }

// // function for creating an animation for the navbar
// const animation = () => {
// 	aboutUsAnimation();
// 	// offersAnimation();
// };

// // calling the function for adding and removing extra classes while scrolling down (Y-axis)
// window.addEventListener('scroll', animation);

// // function for creating a smooth scrolling animation on click
// topHelper.addEventListener('click', () => {
// 	window.scrollTo({ top: 0, behavior: 'smooth' });
// });

// // Getting the date for the footer
// const date = new Date().getFullYear();
// footerDate.innerHTML = date;

/* ------------------------------------------------------------------------------------------ */
'use strict';
const burgerMenu = document.querySelector('.burger-menu');
const burgerMenuTopEl = document.querySelector('.burger-menu_first');
const burgerMenuMidEl = document.querySelector('.burger-menu_second');
const burgerMenuBotEl = document.querySelector('.burger-menu_third');

burgerMenu.addEventListener('click', () => {
	burgerMenuTopEl.classList.toggle('burger-menu_first_animation');
	burgerMenuMidEl.classList.toggle('burger-menu_second_animation');
	burgerMenuBotEl.classList.toggle('burger-menu_third_animation');
});
