import { createContext } from 'react';
export const DummyContext = createContext({ data: true });

export function DummyProvider(props: { children: React.ReactNode }) {
	return <DummyContext.Provider value={{ data: true }}>{props.children}</DummyContext.Provider>;
}
