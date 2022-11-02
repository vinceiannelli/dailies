import React from 'react';

function Adder(props) {
	const setCount = props.setCount;
	function increaseCount() {
		setCount((currCount) => {
			return currCount + 1;
		});
	}
	return <button onClick={increaseCount}>Increase COUNT</button>;
}

export default Adder;
