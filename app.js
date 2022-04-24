'use strict';

// Getting all the elements from the html
const navigation = document.querySelector('.navigation');
const header = document.querySelector('.section-header');
const topHelper = document.querySelector('.top-helper');
const footerDate = document.querySelector('.date');

// Getting the position of the header
const headerRect = header.getBoundingClientRect();

// function for creating an animation for the navbar
const animatingNavbar = () => {
	// if the position of window while scrolling equals to the position of the bottom part of header
	// and the position of window while scrolling is bigger or equal to the headerbottom - 5px
	if (window.scrollY === headerRect.bottom || window.scrollY >= headerRect.bottom - 5) {
		// add new class that makes the navigation stay static
		navigation.classList.add('navigation-static');
		// remove previous animation
		navigation.classList.remove('navigation-slide-out');
	} else {
		// add new class to the navigation (going back)
		navigation.classList.add('navigation-slide-out');
		// remove class that makes the navigation static
		navigation.classList.remove('navigation-static');
	}
};

// function for creating an animation for the header
const animationHeader = () => {

};

// calling the function for adding and removing extra classes while scrolling down (Y-axis)
window.addEventListener('scroll', animatingNavbar);

// function for creating a smooth scrolling animation on click
topHelper.addEventListener('click', () => {
	window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Getting the date for the footer
const date = new Date().getFullYear();
footerDate.innerHTML = date;
