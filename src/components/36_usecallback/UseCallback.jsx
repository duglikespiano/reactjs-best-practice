import { useCallback, useState } from 'react';
// import { useCallback, useEffect, useRef, useState } from 'react';
// import { useCallback, useEffect, useRef, useState } from 'react';
import './UseCallback.scss';

export default function UseCallback() {
	const [show, setShow] = useState(false);
	const [height, setHeight] = useState(0);

	// Code below will not display proper height of h1 tag even though the button is clicked
	// As useEffect doesn't capture the height of it
	// const refElement = useRef(null);
	// useEffect(() => {
	// 	if (refElement.current) {
	// 		setHeight(refElement.current.offsetHeight);
	// 	}
	// }, [refElement.current]);

	// Solution
	// Convert the code into useCallback
	const refElement = useCallback((node) => {
		if (node !== null) {
			setHeight(node.getBoundingClientRect().height);
		}
	}, []);

	return (
		<div id="UseCallback">
			<button onClick={() => setShow(!show)}>{!show ? 'show' : 'hide'} tags</button>

			{show && (
				<>
					<h1 ref={refElement}>Hello, dude!</h1>
					<h2>The height of the above h1 tag is: {Math.round(height)}</h2>
				</>
			)}
		</div>
	);
}
