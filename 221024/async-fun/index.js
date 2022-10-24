function doSomething() {
	setTimeout(() => {
		console.log('do something else');
	}, 1010);
	console.log('do something');
}

doSomething();
