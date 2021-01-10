const body = document.body;

// Set the theme from localStorage(if exist) || or set default light
let theme = window.localStorage.getItem('theme') || 'light';
// Activate the current theme (using class)
body.classList = theme;
// Available Themes
let available_themes = document.querySelectorAll('[dd-theme]');

/** Light / Dark theme Toggle */
// Toggle Dark / Light theme
let _toggler = document.querySelector('[dd-toggle]');
_toggler.addEventListener('click', toggleTheme);
// Function: toggle theme(light & dark)
function toggleTheme() {
	console.log("toggle");
	// Toggle light / dark theme
	(theme == 'light' ? theme = 'dark' : theme = 'light');
	// Apply class to body
	body.classList = theme;
	// Store theme var to localStorage
	window.localStorage.setItem('theme', theme);
}