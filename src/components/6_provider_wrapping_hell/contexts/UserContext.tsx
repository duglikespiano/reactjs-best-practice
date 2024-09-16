import { createContext } from 'react';
export const UserContext = createContext({ data: true });

export function UserProvider(props: { children: React.ReactNode }) {
	return <UserContext.Provider value={{ data: true }}>{props.children}</UserContext.Provider>;
}
