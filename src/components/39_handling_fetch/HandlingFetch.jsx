// import { useEffect } from 'react';

export default function HandlingFetch() {
	// const sendAnEmail = async () => {
	// 	await fetch('someURL', { method: 'POST' });
	// };

	// Fetching with POST method may unintended problem
	// useEffect(() => {
	// 	const sendAnEmail = async () => {
	// 		await fetch('someURL', { method: 'POST' });
	// 	};
	// 	sendAnEmail();
	// }, []);

	// Solution
	// Fetching with POST method should be handle under strict control
	// return <button onClick={sendAnEmail}>Subscribe</button>
	return <div style={{ fontSize: '5rem' }}>Please check the code on my GitHub</div>;
}
