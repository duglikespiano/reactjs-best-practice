export default function Enum() {
	enum Status {
		IDLE = 'idle',
		RUN = 'run',
		DONE = 'done',
		ERROR = 'error',
	}

	const statusDescriptions: { [key in Status]: string } = {
		[Status.IDLE]: 'The machine is in idle',
		[Status.RUN]: 'The machine is running',
		[Status.DONE]: 'The machine finished a work',
		[Status.ERROR]: 'The machine has faced an error',
	};

	// Object's data can be assigned with desginated values by using Enum in Typescript
	console.log(statusDescriptions);
	console.log("Object's data can be assigned with desginated values by using Enum in Typescript");

	return <div>Check console.log</div>;
}
