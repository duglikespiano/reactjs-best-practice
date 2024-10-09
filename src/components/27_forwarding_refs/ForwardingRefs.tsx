// When a ref component is needed to be diveded, it should be wrapped with forwardRef like below

import { useRef } from 'react';
import { Input } from './Input';
import './ForwardingRefs.scss';

export default function ForwardingRefs() {
	const inputRef = useRef<HTMLInputElement>(null);

	const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (inputRef.current) console.log(inputRef.current.value);
	};

	return (
		<form id="ForwardingRefs" onSubmit={submitHandler}>
			<Input ref={inputRef} />
			<button type="submit" className="button">
				Submit
			</button>
		</form>
	);
}
