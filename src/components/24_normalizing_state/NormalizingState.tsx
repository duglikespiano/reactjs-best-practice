export default function NormalizingState() {
	// Code below have O(n) time complexity, it may takes much time for just a simple process
	// So it should be refacotred if possible
	// const users = [
	// 	{ id: 1, name: 'Jack' },
	// 	{ id: 2, name: 'Tom' },
	// 	{ id: 3, name: 'Superman' },
	// 	{ id: 4, name: 'Jerry' },
	// ];
	// const getUsersById = (id: number) => {
	// 	return;
	// };

	// Solution1
	// Change data's structure from array to object
	// Change function's logic from finding an item which matches the condition to if there's an item

	const users: {
		id: number[];
		entities: {
			[id: number]: { id: number; name: string };
		};
	} = {
		id: [1, 2, 3, 4],
		entities: {
			'1': { id: 1, name: 'Jack' },
			'2': { id: 2, name: 'Top' },
			'3': { id: 3, name: 'Superman' },
			'4': { id: 4, name: 'Jerry' },
		},
	};

	const getUsersById = (id: number) => {
		return users.entities[id];
	};

	const user = getUsersById(1);
	// return <DisplayUser user={user} />;
	return <div>{user && <DisplayUser user={user} />}</div>;
}

const DisplayUser = ({ user }: { user: { id: number; name: string } }) => {
	return <div>{user.name}</div>;
};
