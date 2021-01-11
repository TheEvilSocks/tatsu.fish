const PumWhoLikesToTFishy = "pum who likes to t!fishy".split('');
let index = 0;

document.addEventListener('keydown', event => {
	if (event.key == 'Shift') return;
	if (event.key.toLowerCase() != PumWhoLikesToTFishy[index++])
		return index = 0;
	if (index == PumWhoLikesToTFishy.length)
		pumFeature = true;
});