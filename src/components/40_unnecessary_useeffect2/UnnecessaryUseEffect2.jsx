// import { useEffect, useMemo, useState } from 'react';

export default function UnnecessaryUseEffect2() {
	// const [products, setProducts] = useState([]);

	// useEffect in below code is unncessary and can be simplified
	// const [total, setTotal] = useState(0);
	// useEffect(() => {
	// 	const newTotal = products.reduce((acc, currentValue) => {
	// 		return acc + currentValue.price;
	// 	}, 0);
	// 	setTotal(newTotal);
	// }, [products]);

	// Solution1
	// Just simply convert useEffect into simple function
	// const total = products.reduce((acc, currentValue)=>{
	// 	return acc + currentValue.price
	// }, 0)

	// Solution2
	// Or useMemo can be used too
	// const total = useMemo(
	// 	() =>
	// 		products.reduce((acc, currentValue) => {
	// 			return acc + currentValue.price;
	// 		}, 0),
	// 	[products]
	// );

	return <div style={{ fontSize: '5rem' }}>Please check the code on my GitHub</div>;
}
