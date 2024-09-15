// import { useState, useEffect } from 'react';
import { useState } from 'react';
import './UnnecessaryUseState.scss';

export default function UnnecessaryUseState() {
	const [input, setInput] = useState('');

	// Code below will cause unnecessary re-rendering
	// const [chars, setChars] = useState(0);
	// useEffect(() => {
	// 	setChars(input.length);
	// }, [input]);

	// Solution
	// Remove unnecesary state to prevent unnecessary re-rendering
	const chars = input.length;

	console.log('rendered');

	return (
		<div id="UnnecessaryUseState">
			<h3>Characters count : {chars}</h3>
			<input type="text" value={input} onChange={(event) => setInput(event.target.value)} />
		</div>
	);
}
