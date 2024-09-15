import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/0_home/Home';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
]);

export default function Route() {
	return <RouterProvider router={router} />;
}
