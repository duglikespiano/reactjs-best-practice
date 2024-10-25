import { useState, useEffect } from 'react';

export default function UsingCustomHooks() {
	return <div style={{ fontSize: '5rem' }}>Please check the code on my GitHub</div>;
}

// Components MainPage, ProfilePage have very similar codes
// It should be replaced into a custom hook for better reusability and readibility

// const MainPage = () => {
// 	const [user, setUser] = useState(null);
// 	useEffect(() => {
// 		const fetchUser = async () => {
// 			const res = await fetch('https://test.com');
// 			const json = await res.json();
// 			setUser(json);
// 		};
// 		fetchUser();
// 	}, []);
// 	if (!user) {
// 		return <h1>Login first!</h1>;
// 	}
// 	return <h1>{user.fullname} has logged in</h1>;
// };

// const ProfilePage = () => {
// 	const [user, setUser] = useState(null);
// 	useEffect(() => {
// 		const fetchUser = async () => {
// 			const res = await fetch('https://test.com');
// 			const json = await res.json();
// 			setUser(json);
// 		};
// 		fetchUser();
// 	}, []);
// return(
// <h1>{user.fullname}</h1>
// <h2>{user.title}</h2>
// )
// };

const useUser = () => {
	const [user, setUser] = useState(null);

	useEffect(() => {
		const fetchUser = async () => {
			const res = await fetch('https://test.com');
			const json = await res.json();
			setUser(json);
		};
		fetchUser();
	}, []);

	return { user };
};

const MainPage = () => {
	const { user } = useUser();
	if (!user) {
		return <h1>Login first!</h1>;
	}
	return <h1>{user.fullname} has logged in</h1>;
};

const ProfilePage = () => {
	const { user } = useUser();
	return (
		<div>
			<h1>{user.fullname}</h1>
			<h2>{user.title}</h2>
		</div>
	);
};

MainPage();
ProfilePage();
