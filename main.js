const countEl = document.getElementById('count');

updateVisitCount();

function updateVisitCount() {
	fetch('https://api.countapi.xyz/hit/linksopener.github.iovisit-counter/awesomeclick')
	.then(res => res.json())
	.then(res => {
		countEl.innerHTML = res.value;
	})
}


















