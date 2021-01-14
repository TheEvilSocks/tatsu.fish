/**
 * © TheEvilSocks 2021
 * This is a fan website.
 * The code below is in no way copied from Tatsu or any other TatsuWorks property.
 * This means there's a high probability Tatsu has other ways of determining which fish you get.
 */

const fishLootTable = [
	{
		name: 'Garbage',
		chance: 0.55,
		path: (icon) => `garbage/${icon}.svg`,
		icons: ['battery', 'paperclip', 'shoe', 'shopping_cart', 'wrench']
	},
	{
		name: 'Common',
		chance: 0.3485,
		path: (icon) => `common/${icon}.svg`,
		icons: ['fish']
	},
	{
		name: 'Uncommon',
		chance: 0.10,
		path: (icon) => `uncommon/${icon}.svg`,
		icons: ['tropical_fish']
	},
	{
		name: 'Rare',
		chance: 0.0015,
		path: (icon) => `rare/${icon}.svg`,
		icons: ['crab', 'crocodile', 'dolphin', 'octopus', 'penguin', 'shark', 'shrimp', 'squid', 'turtle', 'whale', 'whale2']
	},
];

function randomFish() {
	let category;
	if (pumFeature) {
		category = fishLootTable.find(cat => cat.name == 'Uncommon');
	} else {
		let sum = 0;
		for (const cat of fishLootTable)
			sum += cat.chance;

		const selected = Math.random() * sum;

		let total = 0;
		for (const cat of fishLootTable) {
			total += cat.chance;
			if (selected <= total) {
				category = cat;
				break;
			}
		}
	}

	const icon = randomElement(category.icons);

	return {
		name: icon,
		friendlyName: friendlyString(icon),
		icon: category.path(icon),
		category: category
	}
}

function randomElement(array) {
	return array[Math.floor(Math.random() * array.length)];
}

function friendlyString(name) {
	let ret = [];
	name = name.replace(/_/g, ' ').trim();
	for (let word of name.split(/\s/g))
		ret.push(word.substring(0, 1).toUpperCase() + word.substring(1))
	return ret.join(' ');
}