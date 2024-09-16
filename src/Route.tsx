import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/0_home/Home';
import UseStateIsAsync from './components/1_usestate_is_async/UseStateIsAsync';
import DefaultValue from './components/2_default_value/DefaultValue';
import UnnecessaryUseState from './components/3_unnecessary_usestate/UnnecessaryUseState';
import MutatingObject from './components/4_mutating_object/MutatingObject';
import PropDrilling from './components/5_prop_drilling/PropDrilling';
import ProviderWrappingHell from './components/6_provider_wrapping_hell/ProviderWrappingHell';

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
	{
		path: '/5_prop_drilling',
		element: <PropDrilling />,
	},
	{
		path: '/6_provider_wrapping_hell',
		element: <ProviderWrappingHell />,
	},
]);

export default function Route() {
	return <RouterProvider router={router} />;
}
