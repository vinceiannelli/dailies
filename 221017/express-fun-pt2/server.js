import express from 'express';

const app = express();
const port = 4000;

app.listen(port, () => {
	console.log(`Web server is listening on port ${port}.`);
});
