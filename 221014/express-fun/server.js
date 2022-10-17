const express = require('express');

const app = express();

const PORT = 4000;

app.listen(PORT, () => console.log(`Listening on port:${PORT}!`));

app.use(express.json());

app.post('/hello', (request, response) => {
	console.log(request.body);
	response.send(request.body);
});

app.get('/testt/', (request, response) => {
	console.log('GET got here');
	const messageJSON = { currentDate: Date() };
	response.json(messageJSON);
});

app.get('/forest', (request, response) => {
	// console.log('Your request is: ', request);
	let daylight = request.query.daylight;
	let noOfDragons = request.query.noOfDragons;
    
	console.log(noOfDragons);

	console.log(daylight);

	if (daylight === 'true' && (noOfDragons === undefined || noOfDragons === 0)) {
		response.send('Man, it is bright in here');
	} else if (daylight === 'true' && noOfDragons >= 1) {
		response.send(`Man it's bright and there are dragons, at least ${noOfDragons} of them.`);
	} else {
		response.send('You are in a deep dark wood...');
	}
});
