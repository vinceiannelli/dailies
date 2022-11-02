import { useState } from 'react';
import './App.css';
import Adder from './components/Adder';
import Displayer from './components/Displayer';

function App() {
	const [count, setCount] = useState(0);
	const [count2, setCount2] = useState(0);
	const [name, setName] = useState('Vince');
	// function getRandomNumber() {
	// 	return Math.floor(Math.random() * 100);
	// }
	function increaseCount(amount = 1) {
		setCount((curr) => {
			return curr + amount;
		});
	}
	function addEx() {
		setName(name + '!');
	}
	return (
		<div className="App">
			<header className="App-header">
				This is painful. Here's my count: {count}
				<button onClick={() => increaseCount()}>+</button>
				{name}
				<button onClick={addEx}>Add BANG!</button>
				<Displayer thing={count2} />
				<Adder setCount={setCount2} />
			</header>
		</div>
	);
}

export default App;
