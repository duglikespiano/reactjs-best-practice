import { useState } from 'react';

export default function RedundantState() {
	// In code below, fullname state does nothing as a state
	// So it should be replaced into a normal variable
	const [firstname, setFirstname] = useState('');
	const [lastname, setLastname] = useState('');
	// const [fullname, setFullname] = useState('');
	const fullname = firstname + ' ' + lastname;

	const firstnameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setFirstname(event.target.value);
		// setFullname(event.target.value + ' ' + lastname);
	};

	const lastnameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setLastname(event.target.value);
		// setFullname(firstname + ' ' + event.target.value + ' ');
	};

	return (
		<form>
			<input type="text" id="firstname" onChange={firstnameHandler} />
			<input type="text" id="lastname" onChange={lastnameHandler} />
			<br />
			<h1>fullname: {fullname}</h1>
		</form>
	);
}
