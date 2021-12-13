const countEl = document.getElementById('count');

updateVisitCount();

function updateVisitCount() {
	fetch('https://api.countapi.xyz/hit/linksopener.github.io/visit-counter/awesomeclick')
	.then(res => res.json())
	.then(res => {
		countEl.innerHTML = res.value;
	})
}


















