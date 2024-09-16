import React, { useState } from 'react';
import './RushingIntoReactMemo.scss';

// Using code below will take a second whenever user updates the counter
// There are two ways to resolve the problem
const updateHexColor = () => {
	const RGBArray = [];
	for (let i = 0; i < 3; i++) {
		RGBArray.push(Math.floor(Math.random() * 256));
	}
	const color = `rgb(${RGBArray.join(',')})`;
	return color;
};

const HeavyComponent = () => {
	const startTime = Date.now();
	let currentTime = startTime;
	while (currentTime - startTime < 1000) currentTime = Date.now();
	return null;
};

// Solution1
// Using React.memo
// const MemoizedHeavyComponent = React.memo(HeavyComponent);

export default function RushingIntoReactMemo() {
	// Seperated into the componenet, DynamicBackgroundDiv
	// const [counter, setCounter] = useState(0);
	// const bgColor = updateHexColor();

	return (
		// <div id="RushingIntoReactMemo" style={{ backgroundColor: bgColor }}>
		// 	<h3>{counter}</h3>
		// 	<div className="buttons-container">
		// 		<button onClick={() => setCounter(counter + 1)}>＋</button>
		// 		<button onClick={() => setCounter(counter - 1)}>−</button>
		// 	</div>
		// Using Heavy Component like this will cause delay of rendering
		// 	<HeavyComponent />

		// Solution1
		// React.memo can be used to resolve the problem
		// 	<MemoizedHeavyComponent />

		// </div>

		// Solution2
		// Seperate the parent component and children components like below
		// e.g. 1
		// <DynamicBackgroundDiv children={<HeavyComponent />} />
		// e.g. 2
		<DynamicBackgroundDiv>
			<HeavyComponent />
		</DynamicBackgroundDiv>
	);
}

const DynamicBackgroundDiv = (props: { children: React.ReactNode }) => {
	const [counter, setCounter] = useState(0);
	const bgColor = updateHexColor();

	return (
		<div id="RushingIntoReactMemo" style={{ backgroundColor: bgColor }}>
			<h3>{counter}</h3>
			<div className="buttons-container">
				<button onClick={() => setCounter(counter + 1)}>＋</button>
				<button onClick={() => setCounter(counter - 1)}>−</button>
			</div>
			{props.children}
		</div>
	);
};
