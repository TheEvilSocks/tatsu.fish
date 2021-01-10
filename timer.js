const fishCooldown = 30;
const time = document.getElementById('time');
const caughtSounds = ['fishing_catch_1', 'fishing_catch_2', 'fishing_catch_3'];

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
	const fish = document.createElement('img');
	fish.className = 'fish';
	fish.src = 'icons/' + randomElement(randomFish().icons);
	document.body.appendChild(fish);

	fish.style.left = `${window.innerWidth / 2 - fish.clientWidth / 2}px`;
	fish.style.bottom = (oceans[0].clientHeight - fish.clientHeight / 3) + 'px';

	setTimeout(() => {
		document.body.removeChild(fish);
	}, fishCooldown * 500);

	const audio = new Audio(`sounds/${randomElement(caughtSounds)}.ogg`);
	audio.volume = 0.4;
	audio.play();
}

window.requestAnimationFrame(doTimer);

// Preload images
for (const fish of fishLootTable) {
	for (let icon of fish.icons) {

		const fish = document.createElement('img');
		fish.style.display = 'none';
		fish.src = 'icons/' + icon;
		document.body.appendChild(fish);
	}
}

window.addEventListener('resize', event => {
	for (const fish of document.getElementsByClassName('fish')) {
		fish.style.left = `${window.innerWidth / 2 - fish.clientWidth / 2}px`;
	}
});