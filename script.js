const bounds = document.getElementById("bounds");

const randomRGBValue = () => Math.floor(Math.random() * (255 - 0 + 1));
const randomOpacity = () => Math.round(Math.random() * 10) / 10;

function randomRGB() {
	let randoOpacity = Math.floor(Math.random() * (1 - 0.01));
	return `rgba(${randomRGBValue()}, ${randomRGBValue()}, ${randomRGBValue()}, ${randomOpacity()})`;
}

function addFireworks(event) {
	console.log(event);
}

document.addEventListener("click", function (event) {
	mousePos = {
		x: event.pageX,
		y: event.pageY
	};
	const newElement = document.createElement("div");
	let gradient = `-webkit-radial-gradient(center, ellipse cover, rgba(0,0,0,0) 0%, ${randomRGB()} 10%, ${randomRGB()} 30%, ${randomRGB()} 66%, ${randomRGB()} 67%, ${randomRGB()} 90%, rgba(250,250,250, 0) 95%)`;
	newElement.style.position = "absolute";
	newElement.style.top = `calc(${mousePos.y}px - 6.5vw)`;
	newElement.style.left = `calc(${mousePos.x}px - 6.5vw`;
	newElement.classList.add("visual");
	newElement.style.backgroundImage = `${gradient}`;
	bounds.appendChild(newElement);

	setTimeout(function () {
		newElement.remove();
	}, 3000);
});
