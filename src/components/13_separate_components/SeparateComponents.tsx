import { useState, Fragment } from 'react';

export default function SeparateComponents() {
	// Code below cause unnecessary re-rendering of the HeavyComponent
	// const [name, setName] = useState('');
	return (
		<Fragment>
			{/* <form>
				<input value={name} onChange={(event) => setName(event.target.value)} /> */}
			<Form />
			<HeavyComponent />
			{/* </form> */}
		</Fragment>
	);
}

// Solution
// Seperate form logic with to a sibling level component like below
const Form = () => {
	const [name, setName] = useState('');
	return (
		<form>
			<input value={name} onChange={(event) => setName(event.target.value)} />
			<HeavyComponent />
		</form>
	);
};

const HeavyComponent = () => {
	// a veeeeeery heavy component
	return <Fragment></Fragment>;
};
