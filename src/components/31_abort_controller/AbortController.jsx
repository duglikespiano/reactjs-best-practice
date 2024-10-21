// import { useState, useEffect } from 'react';

export default function AbortController() {
	// const [userData, setUserData] = useState(null);

	// Code below can be buggy if series of fetching data are not in order
	// Some data can be responded late even if it has been fetched earlier than other data
	// So whenever fetch new data, a previous fetching data should be aborted after checking
	// useEffect(() => {
	// 	const fetchUserData = async () => {
	// 		const data = await fetch('https://www.abc.com', {});
	// 		setUserData(data);
	// 	};
	// 	fetchUserData();
	// }, [user.id]);

	// Solution
	// AbortController can be used to handle the situation
	// useEffect(() => {
	// 	const abortController = new AbortController();
	// 	const fetchUserData = async () => {
	// 		const data = await fetch('https://www.abc.com', {
	// 			signal: abortController.signal,
	// 		});
	// 		setUserData(data);
	// 	};

	// 	fetchUserData();

	// 	return () => {
	// 		abortController.abort();
	// 	};
	// }, [userData.id]);

	// if (!userData) {
	// 	return null;
	// }

	// return <div>{userData.name}</div>;
	return <div style={{ fontSize: '8rem' }}>Please check my code on github</div>;
}
