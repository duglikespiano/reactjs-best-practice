import { createContext } from 'react';
export const ThemeContext = createContext({ data: true });

export function ThemeProvider(props: { children: React.ReactNode }) {
	return <ThemeContext.Provider value={{ data: true }}>{props.children}</ThemeContext.Provider>;
}
