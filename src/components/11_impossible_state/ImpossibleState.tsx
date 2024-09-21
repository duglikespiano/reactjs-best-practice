import { useEffect, useState } from 'react';

export default function Products() {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(false);

	// There will be a time gap between when loading's state gets true and finally gets false if an error occurs
	//
	// const fetchProducts = async () => {
	// 	try {
	// 		setIsLoading(true);
	// 		fetch('https://www.somedummyurl.com');
	// 	} catch (error) {
	// 		setError(true);
	// 	} finally {
	// 		setIsLoading(false);
	// 	}
	// };

	// useEffect(() => {
	// 	fetchProducts();
	// }, []);

	// if (isLoading) {
	// 	return <p>Loading products...</p>;
	// }

	// if (error) {
	// 	return <p>Oh nooo!</p>;
	// }

	// return <>products are ready, display here ...</>;
	//
	//
	//

	// Solution
	// Handle components content with a state not many states and make cases process clear
	const [status, setStatus] = useState('idle');

	const fetchProducts = async () => {
		try {
			setStatus('pending');
			fetch('https://www.somedummyurl.com');
			setStatus('successful');
		} catch (error) {
			setStatus('rejected');
		}
	};

	useEffect(() => {
		fetchProducts();
	}, []);

	if (status === 'pending' || status === 'idle') {
		return <p>Loading products...</p>;
	}

	if (status === 'rejected') {
		return <p>Oh nooo!</p>;
	}

	return <>products are ready, display here ...</>;
}
