type DATA = 'date' | 'category';

const DateFilter = () => <div>Pick a date</div>;
const CategoryFilter = () => <div>Select a category</div>;
const NoFilter = () => null;

// Code for Solution1
const createFilter = (data: DATA) => {
	switch (data) {
		case 'date':
			return <DateFilter />;
		case 'category':
			return <CategoryFilter />;
		default:
			return <NoFilter />;
	}
};

// Code for Solution2
const filterFactory = {
	date: DateFilter,
	category: CategoryFilter,
};

export default function DisplayFilter() {
	const data: DATA = 'date';

	// Code below is not clean as there is logical code inside of 'displaying' component
	// So it should be divided into logical code and displaying code

	// if (data === 'date') {
	// 	return <DateFilter />;
	// } else if (data === 'category') {
	// 	return <CategoryFilter />;
	// } else {
	// 	return <NoFilter />;
	// }

	/* Solution1
     Divide them by making a separate function using switch statement outside of the component
      return createFilter(data);
     Solution2
	   Divide them by making an object to divide and check the data */
	// return filterFactory[data] ?? <NoFilter />;

	console.log(createFilter);
	console.log(filterFactory);
	console.log(data);

	return <div>Please check code</div>;
}
