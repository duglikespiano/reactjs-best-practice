import { useState } from 'react';
import './DefaultValue.scss';

export default function DefaultValue() {
	// Code below will cause of type for default input
	// const [input, setInput] = useState();

	// Solution
	// Set default value for useState
	const [input, setInput] = useState('');

	return (
		<div id="DefaultValue">
			<input type="text" value={input} onChange={(event) => setInput(event.target.value)} />
		</div>
	);
}
