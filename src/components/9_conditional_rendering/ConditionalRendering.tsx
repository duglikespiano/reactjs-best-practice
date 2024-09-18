import './ConditionalRendering.scss';

const users: { id: number; name: string }[] | [] = [
	// { id: 1, name: 'dug' },
	// { id: 2, name: 'doggo' },
	// { id: 3, name: 'dingo' },
];

export default function ConditionalRendering() {
	// Code below will display '0' not null
	// return <div id="ConditionalRendering">{users.length && users.map((user) => <h3>{user.name}</h3>)}</div>;

	// Solution
	// input conditional statement '> 0'next to the condition
	return <div id="ConditionalRendering">{users.length > 0 && users.map((user) => <h3>{user.name}</h3>)}</div>;
}
