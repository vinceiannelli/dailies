let sandwiches = [
	{ id: 1, name: 'blt', bread: 'rye', ingredients: ['bacon', 'lettuce', 'tomato'] },
	{ id: 2, name: 'PB&J', bread: 'wonder', ingredients: ['peanut butter', 'jam'] },
];

export function listAllSandwiches() {
	return sandwiches;
}

export function createSandwich(sandwich) {
	sandwiches.push(sandwich);
}

export function deleteSandwich(id) {
	sandwiches = sandwiches.filter((s) => s.id !== id);
}
