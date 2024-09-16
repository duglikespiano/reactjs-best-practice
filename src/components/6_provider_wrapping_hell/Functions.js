export const buildProvidersTree = (componentsWithProps) => {
	const initialComponent = ({ children }) => <div>{children}</div>;
	return componentsWithProps.reduce((AccuComponents, [Provider, props = {}]) => {
		return ({ children }) => {
			return (
				<AccuComponents>
					<Provider {...props}>{children}</Provider>
				</AccuComponents>
			);
		};
	}, initialComponent);
};
