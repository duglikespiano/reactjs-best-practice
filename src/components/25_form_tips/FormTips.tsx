// Code below has many states, handler
// Actually it can be convereted into normal HTML form components
// import { useState } from 'react';
// export default function FormTips() {
// 	const [email, setEmail] = useState('');
// 	const [password, setPassword] = useState('');

// 	const submitHandler = (event: React.FormEvent) => {
// 		console.log(event);
// 	};
// 	return (
// 		<form onSubmit={submitHandler}>
// 			<input value={email} onChange={(event) => setEmail(event.target.value)} />
// 			<input value={password} type="password" onChange={(event) => setPassword(event.target.value)} />
// 			<button type="submit">Submit</button>
// 		</form>
// 	);
// }

export default function FormTips() {
	const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);
		const formJson = Object.fromEntries(formData.entries());
		console.log(formJson);
	};
	return (
		<form onSubmit={submitHandler}>
			<input name="email" />
			<input name="password" type="password" />
			<button type="submit">Submit</button>
		</form>
	);
}
