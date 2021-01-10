const oceans = document.getElementsByClassName('ocean');
let oceanStart;

for (const ocean of oceans) {
	ocean.style['background-position'] = `${Math.random() * 200}%`; // Offset the waves so they look random.
	// Bonus effect! Using percentages actually changes the speed of the translate?!
	// More than 100% changes the direction
}

function doWave(timestamp) {
	if (oceanStart === undefined)
		oceanStart = timestamp;
	const elapsed = timestamp - oceanStart;

	for (const ocean of oceans) {
		ocean.style.width = `${window.innerWidth + elapsed * 0.1}px`;
		ocean.style.transform = `translateX(${-elapsed * 0.1}px)`;
	}

	window.requestAnimationFrame(doWave);
}

window.requestAnimationFrame(doWave);