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
import FormTips from './components/25_form_tips/FormTips';
import ReactPortal from './components/26_react_portal/ReactPortal';
import ForwardingRefs from './components/27_forwarding_refs/ForwardingRefs';
import CapturingEvent from './components/28_capturing_event/CapturingEvent';
import Keys from './components/29_keys/Keys';
import ErrorBoundary from './components/30_error_boundary/ErrorBoundary';
import AbortController from './components/31_abort_controller/AbortController';
import UnnecessaryRendering from './components/32_unnecessary_rendering/UnnecessaryRendering';
import UsingCustomHooks from './components/33_using_custom_hooks/UsingCustomHooks';
import UseMemo from './components/34_usememo/UseMemo';
import UseMemo2 from './components/35_usememo2/UseMemo2';
import UseCallback from './components/36_usecallback/UseCallback';
import UseEffectWithNamedFunction from './components/37_useeffect_with_named_function/UseEffectWithNamedFunction';

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
	{
		path: '/25_form_tips',
		element: <FormTips />,
	},
	{
		path: '/26_react_portal',
		element: <ReactPortal />,
	},
	{
		path: '/27_forwarding_refs',
		element: <ForwardingRefs />,
	},
	{
		path: '/28_capturing_event',
		element: <CapturingEvent />,
	},
	{
		path: '/29_keys',
		element: <Keys />,
	},
	{
		path: '/30_error_boundary',
		element: <ErrorBoundary />,
	},
	{
		path: '/31_abort_controller',
		element: <AbortController />,
	},
	{
		path: '/32_unnecessary_rendering',
		element: <UnnecessaryRendering />,
	},
	{
		path: '/33_using_custom_hooks',
		element: <UsingCustomHooks />,
	},
	{
		path: '/34_usememo',
		element: <UseMemo />,
	},
	{
		path: '/35_usememo2',
		element: <UseMemo2 />,
	},
	{
		path: '/36_usecallback',
		element: <UseCallback />,
	},
	{
		path: '/37_useeffect_with_named_function',
		element: <UseEffectWithNamedFunction />,
	},
]);

export default function Route() {
	return <RouterProvider router={router} />;
}
