import Child from './Child';
import ErrorBoundaryClass from './ErrorBoundaryClass';
import './ErrorBoundary.scss';

export default function ErrorBoundary() {
	// In code below, if an error occurs the whole page will not be displayed
	// To prevent those situtaion, we can wrap the component with error boundary class
	// Remember this error boundary only takes care of the error which errors during rendering, not like fetching data
	return (
		<div id="ErrorBoundary">
			<ErrorBoundaryClass fallback={<h2>Error at App level!</h2>}>
				<h1>Parent Component</h1>
				<Child />
			</ErrorBoundaryClass>
		</div>
	);
}
