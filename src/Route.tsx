import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/0_home/Home';
import UseStateIsAsync from './components/1_usestate_is_async/UseStateIsAsync';
import DefaultValue from './components/2_default_value/DefaultValue';
import UnnecessaryUseState from './components/3_unnecessary_usestate/UnnecessaryUseState';
import MutatingObject from './components/4_mutating_object/MutatingObject';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/1_usestate_is_async',
		element: <UseStateIsAsync />,
	},
	{
		path: '/2_default_value',
		element: <DefaultValue />,
	},
	{
		path: '/3_unnecessary_usestate',
		element: <UnnecessaryUseState />,
	},
	{
		path: '/4_mutating_object',
		element: <MutatingObject />,
	},
]);

export default function Route() {
	return <RouterProvider router={router} />;
}
