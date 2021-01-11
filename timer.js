const fishCooldown = 30;
const time = document.getElementById('time');
const caughtSounds = ['fishing_catch_1', 'fishing_catch_2', 'fishing_catch_3'];
let lastSound;
let pumFeature = false;

let fishyTimerStart;
function doTimer(timestamp) {
	if (fishyTimerStart === undefined)
		fishyTimerStart = timestamp;

	let elapsed = timestamp - fishyTimerStart;
	let timeLeft = fishCooldown - elapsed / 1000;

	if (timeLeft <= 0) {
		fishyTimerStart = timestamp;

		elapsed = timestamp - fishyTimerStart;
		timeLeft = fishCooldown - elapsed / 1000;

		blub();
	}

	time.innerText = timeLeft.toFixed(1);

	setTimeout(() => {
		window.requestAnimationFrame(doTimer);
	}, 50);
}

function blub() {
	const fish = pumFeature ? fishLootTable.find(f => f.name == 'Uncommon') : randomFish();
	const fishLoot = randomElement(fish.icons)

	const fishElem = document.createElement('img');
	fishElem.classList.add(...['fish', fishLoot]);
	fishElem.src = 'icons/' + fish.path(fishLoot);
	document.body.appendChild(fishElem);

	fishElem.style.left = `${window.innerWidth / 2 - fishElem.clientWidth / 2}px`;
	fishElem.style.bottom = (oceans[0].clientHeight - fishElem.clientHeight / 3) + 'px';

	setTimeout(() => {
		document.body.removeChild(fishElem);
	}, fishCooldown * 500);

	const audio = new Audio(`sounds/${randomElement(caughtSounds)}.ogg`);
	audio.volume = volume / 100; // Slider goes from 0-100, but audio accepts 0-1
	audio.play();
	lastSound = audio;
	lastSound.addEventListener('ended', () => {
		lastSound = undefined;
	});
}

window.requestAnimationFrame(doTimer);

window.addEventListener('resize', event => {
	for (const fish of document.getElementsByClassName('fish')) {
		fish.style.left = `${window.innerWidth / 2 - fish.clientWidth / 2}px`;
	}
});

// Preload images
for (const fish of fishLootTable) {
	for (let icon of fish.icons) {

		const fishElem = document.createElement('img');
		fishElem.style.display = 'none';
		fishElem.src = 'icons/' + fish.path(icon);
		document.body.appendChild(fishElem);
	}
}