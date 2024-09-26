import { useState } from 'react';

export default function GroupingStates() {
	// Code below's states can be emerged into a state
	// const [x, setX] = useState(0);
	// const [y, setY] = useState(0);

	const [position, setPosition] = useState({ x: 0, y: 0 });

	return (
		// <div
		// 	onPointerMove={(event) => {
		// 		setX(event.clientX);
		// 		setY(event.clientY);
		// 	}}
		// ></div>
		<div
			onPointerMove={(event) => {
				setPosition({ x: event.clientX, y: event.clientY });
			}}
		>
			{position.x}
		</div>
	);
}
