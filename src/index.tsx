import React from 'react';
import ReactDOM from 'react-dom/client';
import Route from './Route';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<React.StrictMode>
		<Route />
	</React.StrictMode>
);
