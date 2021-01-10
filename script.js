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
	let sum = 0;
	for (const fish of fishLootTable)
		sum += fish.chance;

	const selected = Math.random() * sum;

	let total = 0;
	for (const fish of fishLootTable) {
		total += fish.chance;
		if (selected <= total)
			return fish;
	}
}

function randomElement(array) {
	return array[Math.floor(Math.random() * array.length)];
}