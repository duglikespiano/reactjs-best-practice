// Code below has many duplicate parts
// import { useState } from 'react';
// export default function BetterReadibilityWithCustomHooks() {
// const TaskList = () => {
// 	const [tasks, setTasks] = useState([]);
// 	const add = (newValue) => {
// 		setTasks((currentState) => [...currentState, newValue]);
// 	};
// 	const remove = (index) => {
// 		setTasks((currentState) => {
// 			const newState = [...currentState];
// 			newState.splice(index, 1);
// 			return newState;
// 		});
// 	};
// };
// }

// // Solution
// // It can be simplified by using customhook like below
// const useArray = (initialState = []) => {
// 	const [state, setState] = useState(initialState);

// 	const add = (newValue) => {
// 		setState((currentState) => [...currentState, newValue]);
// 	};

// 	const remove = (index) => {
// 		setState((currentState) => {
// 			const newState = [...currentState];
// 			newState.splice(index, 1);
// 			return newState;
// 		});
// 	};

// 	return [state, { add, remove }];
// };

// const BetterReadibilityWithCustomHooks = () => {
// 	const [tasks, { add, remove }] = useArray();
// 	return <ul>{/* display some tasks */}</ul>;
// };

export default function BetterReadibilityWithCustomHooks() {
	return <div style={{ fontSize: '5rem' }}>Please check the code on my GitHub</div>;
}
