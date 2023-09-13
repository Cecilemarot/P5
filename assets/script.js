
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
const text = document.querySelector('.banner-text');
let currentPosition = 0;
const dots = document.querySelectorAll('.dot');

function goBack() {

	const dot_selected = document.querySelector('.dot_selected') // on va chercher l'élément html associé a la class .dot_selected
	dot_selected.classList.remove('dot_selected') // on enleve de la class css dot-selected de la liste ligne 34 du doc html
	currentPosition -= 1; // on décremente la position de 1
	if (currentPosition === -1) { // si la position des images est égale à -1
		currentPosition = slides.length - 1; // alors la position des images de slides sera dérementé de 1
	}

	banner.src = slides[currentPosition].image;
	text.innerHTML = slides[currentPosition].tagLine;
	dots[currentPosition].classList.add('dot_selected');
}
function goAhead() {

	const dot_selected = document.querySelector('.dot_selected')
	dot_selected.classList.remove('dot_selected')
	currentPosition += 1;

	if (currentPosition === slides.length) { // j'ai changé le -1 en +1 parce que la 4eme dot ne fonctionnait pas, maintenant elle marche mais après la 4eme image, les clic ne marchent plus ni a gauche ni a droite
		currentPosition = 0;
	}

	banner.src = slides[currentPosition].image;
	text.innerHTML = slides[currentPosition].tagLine;
	dots[currentPosition].classList.add('dot_selected');
}


leftArrow.addEventListener('click', goBack);
rightArrow.addEventListener('click', goAhead);







for (let i = 0; i < slides.length; i++) {
	const age = slides[i];
}

