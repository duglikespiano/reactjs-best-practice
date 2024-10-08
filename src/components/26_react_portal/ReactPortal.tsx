import { useState } from 'react';
import './ReactPortal.scss';

// The alertElement in code below will be dependent to Parent element
// React portal can place the element to the place where actually it is needed
// Wrapping the element and designate the place with document.querySelector
// document.body is not a recommended place actually

import { createPortal } from 'react-dom';

export default function Parent() {
	const [showAlert, setShowAlert] = useState(false);

	return (
		<div id="ReactPortal">
			<h1>Hi! This is just a placeholder</h1>
			<button onClick={() => setShowAlert(true)}>Click me to show alert element!</button>
			<AlertElement showAlert={showAlert} closeAlert={() => setShowAlert(false)} />
		</div>
	);
}

const AlertElement = (props: { showAlert: boolean; closeAlert: () => void }) => {
	if (!props.showAlert) return null;

	return createPortal(
		<div className="alert" onClick={props.closeAlert}>
			This is alert!
		</div>,
		document.body
	);
};
