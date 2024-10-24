// import { useState, useEffect } from 'react';
import { useState } from 'react';
import './UnnecessaryRendering.scss';

export default function UnnecessaryRendering() {
	const [someState, setSomeState] = useState('');

	const onChange = (isActive) => {
		isActive ? setSomeState('You have a coupon!') : setSomeState('No coupons :(');
	};

	return (
		<div id="UnnecessaryRendering">
			<h1>{someState}</h1>
			<Toggle onChange={onChange} />
		</div>
	);
}

const Toggle = () => {
	const [isActive, setIsActive] = useState(true);

	// useEffect below may cause unnecessary rendering as it will be rerendering when a state changes
	// useEffect(() => {
	// 	setIsActive(isActive);
	// }, [isActive]);

	// Solution
	// Unnecessary useEffect can be replaced into just an ordinary function
	const updateToggle = (nextIsActive) => {
		setIsActive(isActive);
	};

	return <div onClick={updateToggle}>Please read my code on github</div>;
};
