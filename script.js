const color1 = document.querySelector('#color1');
const color2 = document.querySelector('#color2');
const body = document.querySelector('body');
const css = document.querySelector('h3');
const button = document.querySelector('button');

function changeGradient() {
	body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
	css.innerText = body.style.background;
}

color1.addEventListener('input', changeGradient);
color2.addEventListener('input', changeGradient);
button.addEventListener('click', function () {
	let randomColor1 = Math.floor(Math.random() * 16777215).toString(16);
	let randomColor2 = Math.floor(Math.random() * 16777215).toString(16);
	body.style.background = `linear-gradient(to right, #${randomColor1}, #${randomColor2})`;
	css.innerText = body.style.background;
});
