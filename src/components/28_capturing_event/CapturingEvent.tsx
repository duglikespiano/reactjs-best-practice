import { useState } from 'react';
import './CapturingEvent.scss';

// EventBubbling fires in react too
// And it can be captured by using onClickCapture() method

import { createPortal } from 'react-dom';

export default function Parent() {
	const [showAlert, setShowAlert] = useState(false);

	return (
		<div
			id="CapturingEvent"
			onClickCapture={() => {
				console.log('this is outer');
			}}
		>
			<h1>Hi! This is just a placeholder</h1>
			<button onClick={() => setShowAlert(true)}>Click me to show alert element!</button>
			<AlertElement showAlert={showAlert} closeAlert={() => setShowAlert(false)} />
		</div>
	);
}

const AlertElement = (props: { showAlert: boolean; closeAlert: () => void }) => {
	if (!props.showAlert) return null;

	return createPortal(
		<div
			className="alert"
			onClickCapture={() => {
				props.closeAlert();
				console.log('this is inner');
			}}
		>
			This is alert!
		</div>,
		document.body
	);
};
