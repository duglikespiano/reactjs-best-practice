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
import ConditionalRendering from './components/9_conditional_rendering/ConditionalRendering';
import UnnecessaryUseeffect from './components/10_unnecessary_useeffect/UnnecessaryUseeffect';
import ImpossibleState from './components/11_impossible_state/ImpossibleState';
import Encapsulation from './components/12_encapsulation/Encapsulation';
import SeparateComponents from './components/13_separate_components/SeparateComponents';
import ImpossibleState2 from './components/14_impossible_state2/ImpossibleState2';
import GroupingStates from './components/15_grouping_states/GroupingStates';
import StateReset from './components/16_state_reset/StateReset';

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
	{
		path: '/9_conditional_rendering',
		element: <ConditionalRendering />,
	},
	{
		path: '/10_unnecessary_useeffect',
		element: <UnnecessaryUseeffect />,
	},
	{
		path: '/11_impossible_state',
		element: <ImpossibleState />,
	},
	{
		path: '/12_encapsulation',
		element: (
			<Encapsulation
				user={{
					name: '',
					lastname: '',
					settings: {
						theme: {
							mode: 'dark',
							version: 'classic',
						},
						otp: false,
					},
					user: '',
					fullname: '',
					mode: 'dark',
				}}
			/>
		),
	},
	{
		path: '/13_separate_components',
		element: <SeparateComponents />,
	},
	{
		path: '/14_impossible_state2',
		element: <ImpossibleState2 />,
	},
	{
		path: '/15_grouping_states',
		element: <GroupingStates />,
	},
	{
		path: '/16_state_reset',
		element: <StateReset />,
	},
]);

export default function Route() {
	return <RouterProvider router={router} />;
}
