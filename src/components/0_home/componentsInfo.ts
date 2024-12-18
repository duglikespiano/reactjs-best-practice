export const componentsInfo = [
	{
		id: 1,
		name: 'usestate is async',
		path: '/1_usestate_is_async',
	},
	{
		id: 2,
		name: 'defalt value',
		path: '/2_default_value',
	},
	{
		id: 3,
		name: 'unnecessary usestate',
		path: '/3_unnecessary_usestate',
	},
	{
		id: 4,
		name: 'mutating object',
		path: '/4_mutating_object',
	},
	{
		id: 5,
		name: 'prop drilling',
		path: '/5_prop_drilling',
	},
	{
		id: 6,
		name: 'provider wrapping hell',
		path: '/6_provider_wrapping_hell',
	},
	{
		id: 7,
		name: 'rushing into react memo',
		path: '/7_rushing_into_react_memo',
	},
	{
		id: 8,
		name: 'syncing states via useEffect',
		path: '/8_syncing_states_via_useeffect',
	},
	{
		id: 9,
		name: 'conditional rendering',
		path: '/9_conditional_rendering',
	},
	{
		id: 10,
		name: 'unnecessary useEffect',
		path: '/10_unnecessary_useeffect',
	},
	{
		id: 11,
		name: 'impossible state',
		path: '/11_impossible_state',
	},
	{
		id: 12,
		name: 'encapsulation',
		path: '/12_encapsulation',
	},
	{
		id: 13,
		name: 'separate components',
		path: '/13_separate_components',
	},
	{
		id: 14,
		name: 'impossible state2',
		path: '/14_impossible_state2',
	},
	{
		id: 15,
		name: 'grouping states',
		path: '/15_grouping_states',
	},
	{
		id: 16,
		name: 'state reset',
		path: '/16_state_reset',
	},
	{
		id: 17,
		name: 'redundant state',
		path: '/17_redundant_state',
	},
	{
		id: 18,
		name: 'caching',
		path: '/18_caching',
	},
	{
		id: 19,
		name: 'conditional rendering',
		path: '/19_conditional_rendering2',
	},
	{
		id: 20,
		name: 'currying hanlder',
		path: '/20_currying_handler',
	},
	{
		id: 21,
		name: 'enum',
		path: '/21_enum',
	},
	{
		id: 22,
		name: 'factory pattern',
		path: '/22_factory_pattern',
	},
	{
		id: 23,
		name: 'better if statement',
		path: '/23_better_if_statement',
	},
	{
		id: 24,
		name: 'normalizing state',
		path: '/24_normalizing_state',
	},
	{
		id: 25,
		name: 'form tips',
		path: '/25_form_tips',
	},
	{
		id: 26,
		name: 'react portal',
		path: '/26_react_portal',
	},
	{
		id: 27,
		name: 'forwarding refs',
		path: '/27_forwarding_refs',
	},
	{
		id: 28,
		name: 'capturing event',
		path: '/28_capturing_event',
	},
	{
		id: 29,
		name: 'keys',
		path: '/29_keys',
	},
	{
		id: 30,
		name: 'error boundary',
		path: '/30_error_boundary',
	},
	{
		id: 31,
		name: 'abort controller',
		path: '/31_abort_controller',
	},
	{
		id: 32,
		name: 'unnecessary rendering',
		path: '/32_unnecessary_rendering',
	},
	{
		id: 33,
		name: 'using custom hooks',
		path: '/33_using_custom_hooks',
	},
	{
		id: 34,
		name: 'usememo',
		path: '/34_usememo',
	},
	{
		id: 35,
		name: 'usememo2',
		path: '/35_usememo2',
	},
	{
		id: 36,
		name: 'usecallback',
		path: '/36_usecallback',
	},
	{
		id: 37,
		name: 'useeffect with named function',
		path: '/37_useeffect_with_named_function',
	},
	{
		id: 38,
		name: 'separate logics',
		path: '/38_separate_logics',
	},
	{
		id: 39,
		name: 'handling fetch',
		path: '/39_handling_fetch',
	},
	{
		id: 40,
		name: 'unnecessary useeffect2',
		path: '/40_unnecessary_useeffect2',
	},
	{
		id: 41,
		name: 'custom hooks',
		path: '/41_custom_hooks',
	},
	{
		id: 42,
		name: 'better readibility with custom hooks',
		path: '/42_better_readibility_with_custom_hooks',
	},
];

export const updateHexColor = () => {
	const RGBArray = [];
	for (let i = 0; i < 3; i++) {
		RGBArray.push(Math.floor(Math.random() * 256));
	}
	return `rgb(${RGBArray.join(',')})`;
};
