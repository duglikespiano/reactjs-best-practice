// import { useEffect } from 'react';

export default function UseEffectWithNamedFunction() {
	// The function in useEffect scope is usually written in anonymous arrow function like below
	// useEffect(() => {
	// }, [userId]);

	// But can can be written in labeled normal function like below to describe what the function does more intuitively
	// useEffect(function fetData{
	// }, [userId]);

	return <div style={{ fontSize: '5rem' }}>Please check the code on my GitHub</div>;
}
