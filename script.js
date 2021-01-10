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
		icons: ['battery', 'paperclip', 'shoe', 'shopping_cart', 'wrench'].map(ic => `garbage/${ic}.svg`)
	},
	{
		name: 'Common',
		chance: 0.3485,
		icons: ['fish'].map(ic => `common/${ic}.svg`)
	},
	{
		name: 'Uncommon',
		chance: 0.10,
		icons: ['tropical_fish'].map(ic => `uncommon/${ic}.svg`)
	},
	{
		name: 'Rare',
		chance: 0.0015,
		icons: ['crab', 'crocodile', 'dolphin', 'octopus', 'penguin', 'shark', 'shrimp', 'squid', 'turtle', 'whale', 'whale2'].map(ic => `rare/${ic}.svg`)
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