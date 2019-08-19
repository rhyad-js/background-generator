const body = document.getElementsByTagName("body")[0];
const color1 = document.querySelectorAll(".color")[0];
const color2 = document.querySelectorAll(".color")[1];
const cssCode = document.querySelector("p");
const randomButton = document.querySelector("button");

const setGradient = () => {
	body.style.background = `linear-gradient(to right,${color1.value}, ${color2.value})`;
	cssCode.textContent = body.style.background;
}

const randomGenerate = () => {
	let randomColor1 = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
	let randomColor2 = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
	color1.value = randomColor1;
	color2.value = randomColor2;
	body.style.background = `linear-gradient(to right,${randomColor1}, ${randomColor2})`;
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
randomButton.addEventListener("click", randomGenerate);