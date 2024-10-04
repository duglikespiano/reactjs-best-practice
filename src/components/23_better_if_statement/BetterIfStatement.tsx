export default function BetterIfStatement() {
	const product = {
		hasStock: true,
	};
	const payment = {
		processed: true,
	};
	// Code below can be shorter by many ways
	// let isFinal = false;
	// if (product.hasStock === true) {
	// 	if (payment.processed === true) {
	// 		isFinal = true;
	// 	} else {
	// 		isFinal = false;
	// 	}
	// } else {
	// 	isFinal = false;
	// }
	// return isFinal;

	// Solution1
	// Remove unnecessary variables
	// const product = {
	// 	hasStock: true,
	// };
	// const payment = {
	// 	processed: true,
	// };
	// if (product.hasStock === true) {
	// 	if (payment.processed === true) {
	// 		return true;
	// 	} else {
	// 		return false;
	// 	}
	// } else {
	// 	return false;
	// }

	// Solution2
	// Place if statement considering flow of logic
	// if (product.hasStock === false) {
	// 	return false;
	// } else if (payment.processed === true) {
	// 	return true;
	// }

	// Solution3
	// Combine two lines of code into a single line code
	// if (product.hasStock === true && payment.processed === true) {
	// 	return true;
	// } else {
	// 	return false;
	// }

	// Solution4
	// Use truthy falsy
	// if (product.hasStock && payment.processed) {
	// 	return true;
	// } else {
	// 	return false;
	// }

	// Solution5
	// Return value itself
	// return product.hasStock && payment.processed;

	// Solution6
	// Use arrow function without curly bracket if the code is only a single line

	return <div>Please check code</div>;
}
