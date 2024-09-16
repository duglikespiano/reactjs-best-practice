import { createContext } from 'react';
export const LanguageContext = createContext({ data: true });

export function LanguageProvider(props: { children: React.ReactNode }) {
	return <LanguageContext.Provider value={{ data: true }}>{props.children}</LanguageContext.Provider>;
}
