import { useState } from 'react';

export default function CurryingHandler() {
	const products = [{ title: '123' }, { title: '23' }, { title: '34' }];
	const [name, setName] = useState('');

	const onProductClick = (product: { title: string }) => () => setName(product.title);

	return (
		<>
			<ul>
				{products.map((product) => {
					return <li onClick={onProductClick(product)}>{name}</li>;
				})}
			</ul>
		</>
	);
}
