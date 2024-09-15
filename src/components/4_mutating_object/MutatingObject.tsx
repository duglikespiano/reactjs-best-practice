import { useState } from 'react';
import './MutatingObject.scss';

export default function MutatingObject() {
	const [input, setInput] = useState({ id: '', data: '' });

	const inputHanlder = (nextValue: string) => {
		// Code below will not update the object(because of difference between primitive type, reference type)
		// input.data = nextValue;
		// setInput(input);

		// Solution
		// Create a new object whenever it is needed to be updated and replace the previous object
		const newObject = { ...input, data: nextValue };
		setInput(newObject);
	};

	console.log('rendered');

	return (
		<div id="MutatingObject">
			<input value={input.data} onChange={(event) => inputHanlder(event.target.value)} />
		</div>
	);
}
