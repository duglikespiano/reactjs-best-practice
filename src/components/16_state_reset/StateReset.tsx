import { useState } from 'react';

export default function StateReset() {
	// The component detects key of input and if it changes, the component is going to be re-mounted

	const [key, setKey] = useState(0);

	const resetState = () => {
		setKey(Math.random());
	};

	return (
		<div>
			<input type="text" key={key} />
			<button onClick={resetState}>Reset State</button>
		</div>
	);
}
