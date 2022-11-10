import './App.css';
import { useState, useEffect } from 'react';
import CurrentTime from './CurrentTime';

function App() {
	const [currentTime, setCurrentTime] = useState();

	const getCurrentTime = async () => {
		try {
			let response = await fetch('/slow');
			let values = await response.json();
			return setCurrentTime(values.currentTime);
		} catch (ex) {
			console.log(ex);
		}
	};
	const clearCurrentTime = () => setCurrentTime(null);

	return (
		<div className="App">
			{currentTime && <CurrentTime getCurrentTime={getCurrentTime} currentTime={currentTime} />}
			<button onClick={getCurrentTime}> Get Current Time </button>
			<button onClick={clearCurrentTime}> Clear Current Time</button>
		</div>
	);
}

export default App;
