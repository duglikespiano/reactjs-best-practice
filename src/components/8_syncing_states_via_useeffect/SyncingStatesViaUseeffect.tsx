import { useState } from 'react';
import './SyncingStatesViaUseeffect.scss';

export default function SyncingStatesViaUseeffect() {
	const [age, setAge] = useState(0);
	const [isValiadAge, setIsValidAge] = useState(false);

	// Code below may have potential buggy behavior as states are being evaluated in useEffect
	// const changeHanlder = (event: any) => {
	// 	const value = event.target.value;
	// 	setAge(value);
	// };

	// useEffect(() => {
	// 	if (age >= 20) {
	// 		setIsValidAge(true);
	// 	} else {
	// 		setIsValidAge(false);
	// 	}
	// }, [age]);
	// Solution
	// states should be evaluated in handler or effects not by useEffect

	const changeHanlder = (event: any) => {
		const value = event.target.value;
		setAge(value);
		// *** important *** not if (age) >= 20, if(value) >= 20
		// it is because value is not being evaluated synchronously
		if (value >= 20) {
			setIsValidAge(true);
		} else {
			setIsValidAge(false);
		}
	};

	return (
		<form id="SyncingStatesViaUseeffect">
			<label htmlFor="input">Enter your age : </label>
			<input type="number" id="input" value={age} onChange={changeHanlder} />
			{!isValiadAge && <span>⛔️ You need to be older</span>}
		</form>
	);
}
