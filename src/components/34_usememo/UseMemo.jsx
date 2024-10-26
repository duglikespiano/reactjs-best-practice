import { useState, useEffect, useMemo } from 'react';

export default function UseMemo() {
	const [attempts, setAttempts] = useState(0);

	// Code below is causing infinite rendering by useEffect
	// const user = { name: 'dug', loginAttempts: 3 };

	// Solution
	// To solve this problem, the const user should be wrapped with useMemo
	const user = useMemo(() => {
		return { name: 'dug', loginAttempts: 1 };
	}, []);

	useEffect(() => {
		setAttempts((currentAttempts) => currentAttempts + user.loginAttempts);
	}, [user]);

	return <h2 style={{ fontSize: '10rem' }}>Login attempts : {attempts}</h2>;
}
