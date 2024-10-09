import { forwardRef } from 'react';

const CustomInput = (props: any, ref: React.Ref<HTMLInputElement>) => {
	return <input ref={ref} className="text-input" />;
};

export const Input = forwardRef(CustomInput);
