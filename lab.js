function resetStyleSheet(){
	console.log('i ran');
	let link = document.createElement('link');
	link.rel = 'styleSheet';
	link.href = './reset.css'
	console.log(link);
	oldLink = document.querySelector('#nice-css');
	oldLink.parentNode.replaceChild(link, oldLink);
}