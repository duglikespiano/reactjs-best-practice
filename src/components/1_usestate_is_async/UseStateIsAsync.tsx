import { useState } from 'react';
import './UseStateIsAsync.scss';

export default function UseStateIsAsync() {
	const [input, setInput] = useState({ id: '', name: '' });
	const inputHanlder = (event: React.FormEvent<HTMLInputElement>) => {
		const element = event.target as HTMLInputElement;
		const value = element.value;
		setInput((prevInput) => ({ ...prevInput, name: value }));

		// Code below won't display input synchronously(accessing to state)
		// const userName = input.name;
		// console.log(userName);

		// Solution 1
		// Access to user input directly
		// const userName = value;
		// console.log(userName);
	};

	// Solution 2
	// Access to state whenever it is re-rendered
	const userName = input.name;
	console.log(userName);

	return (
		<div id="UseStateIsAsync">
			<input type="text" onChange={inputHanlder} />
		</div>
	);
}
