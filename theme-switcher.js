const body = document.body;

let theme = window.localStorage.getItem('theme') || 'dark';
body.classList = theme;

const _toggler = document.querySelector('[dd-toggle]');
_toggler.addEventListener('click', toggleTheme);
function toggleTheme() {
	(theme == 'light' ? theme = 'dark' : theme = 'light');
	body.classList = theme;
	window.localStorage.setItem('theme', theme);
}