export default function SeparateLogics() {
	return <div style={{ fontSize: '5rem' }}>Please check the code on my GitHub</div>;
}

// Code below can be diveded into two parts
// Logics parts and View parts
// So it can be simple like below

// const ProductPage = ({ productId }) => {
// 	const productId = props.productId;
// 	const [product, setProduct] = useState({});
// 	useEffect(() => {
// 		const fetchProduct = async () => {
// 			//const res = await fetch(`www.blablabla.com/products/${productId}`);
// 			const res = await productsApi.getProductById(productId);
// 			setProduct(res.json());
// 		};
// 		fetchProduct();
// 	});

// 	const submitHandler = () => {
// 		//submit logic...
// 	};

// 	return (
// 		<div>
// 			<h1>{product.title}</h1>
// 			<h3>{product.price}</h3>

// 			<button onClick={submitHandler}>Add to cart</button>
// 		</div>
// 	);
// };

// const useProduct = ({ productId }) => {
//   const [product, setProduct] = useState({});

//   useEffect(() => {
//     const fetchProduct = async () => {
//       //const res = await fetch(`www.blablabla.com/products/${productId}`);
//       const res = await productsApi.getProductById(productId);
//       setProduct(res.json());
//     };

//     fetchProduct();
//   });

//   return { product };
// };

// const ProductPage = ({ productId }) => {
//   const { product } = useProduct({ productId });
//   const submitHandler = () => {
//     //submit logic...
//   };

//   return (
//     <div>
//       <h1>{product.title}</h1>
//       <h3>{product.price}</h3>

//       <button onClick={submitHandler}>Add to cart</button>
//     </div>
//   );
// };

// export default ProductPage;
