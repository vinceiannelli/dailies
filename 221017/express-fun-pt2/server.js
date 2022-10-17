import express from 'express';
import { createSandwich, deleteSandwich, listAllSandwiches } from './models/sandwich.js';
import { router } from './routes/sandwiches.js';

// const router = express.Router();

const app = express();
const port = 4000;

app.use(express.json());

app.use('/sandwiches', router);

app.listen(port, () => {
	console.log(`Web server is listening on port ${port}.`);
});

router.get('/', (req, res) => {
	const sandwiches = listAllSandwiches();
	res.send(sandwiches);
});

router.post('/', (req, res) => {
	const sandwich = req.body;
	createSandwich(sandwich);
	res.send();
});

router.delete('/', (req, res) => {
	const sandwich = req.body;
	deleteSandwich(sandwich.id);
	res.send();
});
