// import React from 'react';
import { useState, useEffect } from 'react';
import getCurrentTime from './App.js';

const CurrentTime = ({ currentTime, getCurrentTime }) => {
	// const currentTime = props.currentTime;
	useEffect(() => {
		console.log('only on first render');
		const id = setInterval(() => {
			console.log('every 1 second');
			getCurrentTime();
		}, 1000);
		return () => clearInterval(id);
	}, []);

	// useEffect(() => {
	// 	console.log('currentTime has changed value');
	// }, [currentTime]);

	// useEffect(() => {
	// 	console.log('every render');
	// });
	return (
		<div>
			The current time is:{' '}
			{new Date(currentTime).toLocaleDateString('en-us', {
				hour: '2-digit',
				minute: '2-digit',
				second: '2-digit',
			})}
		</div>
	);
};

export default CurrentTime;
