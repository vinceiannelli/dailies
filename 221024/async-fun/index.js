import fetch from 'node-fetch';
import readline from 'readline-sync';

const postalCode = readline.question('what is your postal code? \n').toUpperCase().trim().replaceAll(' ', '');
console.log(postalCode);

async function getPostCodeInfo() {
	const response = await fetch(`https://represent.opennorth.ca/postcodes/${postalCode}/`);
	const result = await response.json();
	// console.log(result);
	const reps = result.representatives_centroid;
	console.log(`You are in ${result.city}, ${result.province}.`);

	const mp = reps.find((r) => r.elected_office === 'MP');
	console.log(`Your MP is ${mp.name}.`);
}

getPostCodeInfo();
