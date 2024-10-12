import { useState } from 'react';
import './Keys.scss';
import Counter from './Counter';

export default function Keys() {
	const [shirts, setShirts] = useState(false);
	return (
		<div id="Keys">
			{/* Code below's counter will not bad changed after editing it even if the category is changed */}
			{/* As they have same parents div */}
			{/* {shirts ? (
				<>
					Shirt counts : <Counter />
				</>
			) : (
				<>
					Shoes counts : <Counter />
				</>
			)} */}

			{/* Solution1 */}
			{/* Wrap each them with different parents */}
			{/* {shirts ? (
				<div>
					Shirt counts : <Counter />
				</div>
			) : (
				<section>
					Shoes counts : <Counter />
				</section>
			)} */}

			{/* Solution2 */}
			{/* Give each of them different keys */}
			{shirts ? (
				<div>
					Shirt counts : <Counter key="shirts" />
				</div>
			) : (
				<section>
					Shoes counts : <Counter key="shoes" />
				</section>
			)}
			<br />
			<button
				onClick={() => {
					setShirts((shirts) => !shirts);
				}}
			>
				{' '}
				Switch!
			</button>
		</div>
	);
}
