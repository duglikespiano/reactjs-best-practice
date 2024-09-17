import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/0_home/Home';
import UseStateIsAsync from './components/1_usestate_is_async/UseStateIsAsync';
import DefaultValue from './components/2_default_value/DefaultValue';
import UnnecessaryUseState from './components/3_unnecessary_usestate/UnnecessaryUseState';
import MutatingObject from './components/4_mutating_object/MutatingObject';
import PropDrilling from './components/5_prop_drilling/PropDrilling';
import ProviderWrappingHell from './components/6_provider_wrapping_hell/ProviderWrappingHell';
import RushingIntoReactMemo from './components/7_rushing_into_react_memo/RushingIntoReactMemo';
import SyncingStatesViaUseeffect from './components/8_syncing_states_via_useeffect/SyncingStatesViaUseeffect';

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
	{
		path: '/7_rushing_into_react_memo',
		element: <RushingIntoReactMemo />,
	},
	{
		path: '/8_syncing_states_via_useeffect',
		element: <SyncingStatesViaUseeffect />,
	},
]);

export default function Route() {
	return <RouterProvider router={router} />;
}
