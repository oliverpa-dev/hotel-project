'use strict';

// getting the nav element
const navigation = document.querySelector('.navigation');

// getting exact position of X and Y of the element
const rectNavigation = navigation.getBoundingClientRect();

console.log(window.scrollY, rectNavigation.y);

// if (rectNavigation.top > 80) {
//     navigation.classList.add('navigation-static');
//     console.log('działa');
// }
const header = document.querySelector('.section-header');
const topHelper = document.querySelector('.top-helper');
const headerRect = header.getBoundingClientRect();

const newFunction = () => {
    if (window.scrollY === headerRect.bottom || window.scrollY >= headerRect.bottom) {
        navigation.classList.add('navigation-static');
        navigation.classList.remove('navigation-slide-out');
        console.log('tak');
    } else {
        navigation.classList.add('navigation-slide-out');
        navigation.classList.remove('navigation-static');
    }
    
};

window.addEventListener('scroll', newFunction);


topHelper.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Getting the date for the footer
const footerDate = document.querySelector('.date');
const date = new Date().getFullYear();
footerDate.innerHTML = date;
console.log(date);