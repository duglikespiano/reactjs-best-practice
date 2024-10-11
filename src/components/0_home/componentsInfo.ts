export const componentsInfo = [
	{
		id: 1,
		name: 'useState is async',
		path: '/1_usestate_is_async',
	},
	{
		id: 2,
		name: 'defalt value',
		path: '/2_default_value',
	},
	{
		id: 3,
		name: 'unnecessary useState',
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
];

export const updateHexColor = () => {
	const RGBArray = [];
	for (let i = 0; i < 3; i++) {
		RGBArray.push(Math.floor(Math.random() * 256));
	}
	return `rgb(${RGBArray.join(',')})`;
};
