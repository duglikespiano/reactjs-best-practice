import { useState } from 'react';

export default function ImpossibleState2() {
	// Two states below can cause nonsense situation
	// const [isTyping, setIsTyping] = useState(false);
	// const [isEmpty, setIsEmpty] = useState(false);

	/*
	 * ✅ isTyping = true; isEmpty = false;
	 * ✅ isTyping = false; isEmpty = true;
	 * ✅ isTyping = false; isEmpty = false;
	 * ❌ isTyping = true; isEmpty = true;
	 */

	// Solution
	// Emerge two states into a state and handle additional situation with variables
	const [status] = useState('empty');
	const isEmpty = status === 'empty';
	const isTyping = status === 'typing';

	// Bunch of logic here...

	return (
		<>
			{isEmpty}
			{isTyping}
			{isEmpty}
		</>
	);
}
