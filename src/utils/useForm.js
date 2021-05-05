import { useState } from 'react';

const useForm = (ini) => {
	const [form, setstate] = useState(ini);

	const HandleChange = (e) => {
		const { name, value } = e.target;
		setstate((oldval) => ({
			...oldval,
			[name]: value,
		}));
	};

	const HandleChangebyValue = (e) => {
		setstate((oldval) => ({
			...oldval,
			...e,
		}));
	};

	const HandleReset = (resetval = ini) => {
		setstate(resetval);
	};

	return { form, HandleChange, HandleChangebyValue, HandleReset };
};

export default useForm;
