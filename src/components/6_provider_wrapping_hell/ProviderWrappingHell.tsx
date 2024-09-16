import { DummyProvider } from './contexts/DummyContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { UserProvider } from './contexts/UserContext';
import { buildProvidersTree } from './Functions';

const ProvidersTree = buildProvidersTree([
	[DummyProvider],
	[LanguageProvider],
	[ThemeProvider, { dark: false }],
	[UserProvider, { name: 'dug', age: 20 }],
]);

export default function ProviderWrappingHell() {
	return (
		// Contexts hell is here below
		// <DummyProvider>
		// 	<LanguageProvider>
		// 		<ThemeProvider>
		// 			<UserProvider>
		// 				<div>Too many contexts</div>
		// 			</UserProvider>
		// 		</ThemeProvider>
		// 	</LanguageProvider>
		// </DummyProvider>

		// Solution
		// Build a function which provides contexts and call it
		<ProvidersTree>
			<div>Tadaaaaaa</div>
		</ProvidersTree>
	);
}
