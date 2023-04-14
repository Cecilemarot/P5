
const slides = [
	{
		"image": "./assets/images/slideshow/slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "./assets/images/slideshow/slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "./assets/images/slideshow/slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "./assets/images/slideshow/slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

const boutons = document.querySelectorAll('.arrow');
let leftArrow = boutons[0];
let rightArrow = boutons[1];
const banner = document.querySelector('.banner-img');
const dots = document.querySelector('.dots');
const text = document.querySelector('banner-text');
let currentPosition = 0;

function goBack() {
	currentPosition -= 1;
	if (currentPosition === -1) {
		currentPosition = slides.length - 1;
	}
	banner.src = slides[currentPosition].image;
}
function goAhead() {
	currentPosition += 1;
	if (currentPosition === +1) {
		currentPosition = slides.length + 1;
	}
	banner.src = slides[currentPosition].image;
}

leftArrow.addEventListener('click', goBack);
rightArrow.addEventListener('click', goAhead);





for (let i = 0; i < slides.length; i++) {
	const age = slides[i];
}

