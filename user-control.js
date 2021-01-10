
const body = document.body;

/* Theme Control */

const bulb = document.getElementById('bulb');

let theme = window.localStorage.getItem('theme') || 'dark';
body.classList = theme;

const _toggler = document.querySelector('[dd-toggle]');
_toggler.addEventListener('click', toggleTheme);
function toggleTheme() {
	bulb.src = `icons/bulb_${theme}.svg`;
	(theme == 'light' ? theme = 'dark' : theme = 'light');
	body.classList = theme;
	window.localStorage.setItem('theme', theme);
}

/* Volume Control */

let volume = window.localStorage.getItem('volume') || 20;
volume = Math.max(Math.min(volume, 100), 0);

const volumeSlider = document.getElementById('volume-range');
const volumeLabel = document.getElementById('volume-label');
volumeSlider.addEventListener('input', event => {
	volume = event.target.value;
	volumeLabel.innerText = `${event.target.value}%`;
	if (lastSound)
		lastSound.volume = volume / 100;
});

volumeSlider.addEventListener('change', event => {
	window.localStorage.setItem('volume', event.target.value);
});

volumeSlider.value = volume;
volumeLabel.innerText = `${volume}%`