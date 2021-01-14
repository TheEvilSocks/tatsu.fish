let rarefish = JSON.parse(window.localStorage.getItem('rarefish')) || [];
const rarefishElem = document.getElementById('rarefish');
const inventoryElem = document.getElementById('inventory');
const deleteElem = document.getElementById('trashcan');
const backpackElem = document.getElementById('backpack');

function drawRareFish() {
	while (rarefishElem.hasChildNodes())
		rarefishElem.removeChild(rarefishElem.firstChild);

	let i = 0;
	for (const rf of rarefish) {
		const newRareFish = document.createElement('img');
		newRareFish.title = friendlyString(rf);
		newRareFish.id = `inventory_${i}`;
		newRareFish.src = `icons/rare/${rf}.svg`;
		newRareFish.className = `rarefish_fish ${rf}`;
		newRareFish.draggable = true;
		newRareFish.setAttribute('inv_index', i++);

		newRareFish.addEventListener('dragstart', dragStart_rarefish);
		newRareFish.addEventListener('dragend', dragEnd_rarefish);

		rarefishElem.appendChild(newRareFish);
	}

	if (rarefish.length == 0) {
		const noItems = document.createElement('h1');
		noItems.innerText = "You haven't gotten any rare fish!";
		rarefishElem.appendChild(noItems);
	}

}

function dragStart_rarefish(event) {
	event.currentTarget.style.opacity = '0.5';
	event.currentTarget.style.border = "4px dashed";
	event.currentTarget.style.margin = "4px";
	event.dataTransfer.setData('text', event.currentTarget.getAttribute('inv_index'));
}

function dragEnd_rarefish(event) {
	event.currentTarget.style.opacity = '1';
	event.currentTarget.style.border = ""
	event.currentTarget.style.margin = "8px";
	event.dataTransfer.clearData();
}

function dragDrop_rarefish(event) {
	let slot = event.dataTransfer.getData('text');
	if (!document.getElementById(`inventory_${slot}`))
		return;
	event.preventDefault();
	rarefish.splice(slot, 1);
	window.localStorage.setItem('rarefish', JSON.stringify(rarefish));
	drawRareFish();
}

function dragOver_rarefish(event) {
	let slot = event.dataTransfer.getData('text');
	if (document.getElementById(`inventory_${slot}`))
		event.preventDefault();
}

backpackElem.addEventListener('click', (event) => {
	inventoryElem.style.display = (inventoryElem.style.display == 'none' ? '' : 'none');
	drawRareFish();

	const toggleThese = document.querySelectorAll('[hide-when-inventory]');
	for (const elem of toggleThese) {
		elem.style.display = (inventoryElem.style.display == 'none' ? '' : 'none');
	}
});