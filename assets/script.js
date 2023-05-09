
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
	dot_selected.classList.remove('dot_selected') // on enleve la class css dot-selected de la liste ligne 34 du doc html
	console.log(currentPosition)
	currentPosition -= 1;
	if (currentPosition === -1) {
		currentPosition = slides.length - 1;
	}

	banner.src = slides[currentPosition].image;
	text.innerHTML = slides[currentPosition].tagLine;
	dots[currentPosition].classList.add('dot_selected');
}
function goAhead() {

	const dot_selected = document.querySelector('.dot_selected')
	dot_selected.classList.remove('dot_selected')
	currentPosition += 1;
	console.log(currentPosition)

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

//Le problème dans ce code est dans la fonction goAhead(). 
//Plus précisément, la condition de la boucle if à la ligne 35 doit être modifiée. Au lieu de if (currentPosition === slides.length + 1), elle devrait être if (currentPosition === slides.length).
//La raison pour laquelle cela est nécessaire est que la variable currentPosition est initialisée à 0, 
//ce qui représente la première position dans le tableau slides. Lorsque la fonction goAhead() est appelée,
// currentPosition est incrémenté d'une unité, puis la condition if est vérifiée. Si currentPosition est égal à slides.length, cela signifie que nous avons atteint la dernière position du tableau slides, et donc nous devons revenir à la première position en réinitialisant currentPosition à 0.
//Cependant, dans le code actuel, la condition dans la boucle if est if (currentPosition === slides.length + 1). 
//Cela signifie que currentPosition doit être égal à slides.length + 1 pour que la condition soit vérifiée, ce qui ne se produit jamais, car la dernière position dans le tableau est slides.length - 1. Cela signifie que la boucle if ne sera jamais exécutée, et donc lorsque nous atteignons la fin du tableau, le diaporama ne boucle pas et les boutons ne fonctionnent plus.
//En modifiant la condition à if (currentPosition === slides.length), nous nous assurons que la boucle est exécutée lorsque 
//currentPosition atteint la dernière position dans le tableau, et donc le diaporama bouclera correctement.