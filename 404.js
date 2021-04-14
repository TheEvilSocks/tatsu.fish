function blub() {
	const fishElem = document.createElement('img');
	fishElem.classList.add(...['fish', 'dolphin']);
	fishElem.src = '/icons/rare/dolphin.svg';
	document.body.appendChild(fishElem);

	fishElem.style.left = `${Math.random() * window.innerWidth}px`;
	fishElem.style.bottom = `${window.innerHeight + fishElem.clientHeight + Math.random() * fishElem.clientHeight * 4}px`;
	fishElem.style.transform = `rotate(${Math.random() * 360}deg)`;

	setTimeout(() => {
		document.body.removeChild(fishElem);
	}, 2500);
}

setInterval(() => {
	setTimeout(blub, Math.random() * 750);
}, 750);
blub();