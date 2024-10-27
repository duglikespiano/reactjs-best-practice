// import React, { useCallback } from 'react';
import React from 'react';

export default function UseMemo2() {
	// If a component is heavy like below, useCallback may be useful
	// const clickHandler = useCallback(() => {}, []);
	// return <ExpensiveComponent onClick={clickHandler} />;

	// But if a component is just simple like below, useCallback may not be needed
	// return <Button onClick={clickHandler} />;

	return <div style={{ fontSize: '5rem' }}>Please check the code on my GitHub</div>;
}

// const Button = ({ onClick }) => {
// 	return <button onClick={onClick}>Click me</button>;
// };

// const ExpensiveComponent = React.memo(({ onClick }) => {
// 	//😰 lots of complex code and logic...
// });
