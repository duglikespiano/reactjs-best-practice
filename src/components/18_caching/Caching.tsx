// import { cache } from 'react';

export default function Caching() {
	// data can be cached by using cache function in React
	// but it is still experiment and has very limited condition to use
	// Official document is needed to be read
	// https://react.dev/reference/react/cache

	// const getUser = cache(async () => {
	// 	return await fetch('https://someurl.com');
	// });

	const getUser = async () => {
		return await fetch('https://someurl.com');
	};

	const displayUser = async () => {
		const user = await getUser();
		console.log(user);
	};

	const modifyUser = async () => {
		const user = await getUser();
		console.log(user);
	};

	displayUser();
	modifyUser();

	return <div></div>;
}
