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
import RedundantState from './components/17_redundant_state/RedundantState';
import Caching from './components/18_caching/Caching';
import ConditionalRendering2 from './components/19_conditional_rendering2/ConditionalRendering2';
import CurryingHandler from './components/20_currying_handler/CurryingHandler';
import Enum from './components/21_enum/Enum';
import FactoryPattern from './components/22_factory_pattern/FactoryPattern';
import BetterIfStatement from './components/23_better_if_statement/BetterIfStatement';
import NormalizingState from './components/24_normalizing_state/NormalizingState';

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
	{
		path: '/17_redundant_state',
		element: <RedundantState />,
	},
	{
		path: '/18_caching',
		element: <Caching />,
	},
	{
		path: '/19_conditional_rendering2',
		element: <ConditionalRendering2 role={'ADMIN'} />,
	},
	{
		path: '/20_currying_handler',
		element: <CurryingHandler />,
	},
	{
		path: '/21_enum',
		element: <Enum />,
	},
	{
		path: '/22_factory_pattern',
		element: <FactoryPattern />,
	},
	{
		path: '/23_better_if_statement',
		element: <BetterIfStatement />,
	},
	{
		path: '/24_normalizing_state',
		element: <NormalizingState />,
	},
]);

export default function Route() {
	return <RouterProvider router={router} />;
}
