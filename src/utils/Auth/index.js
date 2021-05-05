import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	const [auth, setAuth] = useState({
		user: null,
		isauthenticated: false,
		isloading: true,
	});

	useEffect(() => {
		if (auth.isauthenticated)
			localStorage.setItem('auth', JSON.stringify(auth));
	}, [auth]);

	useEffect(() => {
		const data = localStorage.getItem('auth');
		console.log('Data is ', data);
		if (data) {
			setAuth(JSON.parse(data));
		} else {
			setAuth({
				user: null,
				isauthenticated: false,
				isloading: false,
			});
		}
	}, []);

	const glogin = (token) => {
		return new Promise(async (resolve, reject) => {
			setAuth((oldval) => ({
				...oldval,
				isloading: true,
			}));
			try {
				const res = await axios.post(
					'http://localhost:3001/login',
					{},
					{
						headers: {
							'x-token': token,
							'access-control-allow-origin': '*',
						},
					}
				);
				setAuth({
					user: res.data,
					isauthenticated: true,
					isloading: false,
				});
				resolve();
			} catch (err) {
				console.log(err);
				setAuth((oldval) => ({
					...oldval,
					isloading: false,
					isauthenticated: false,
					user: null,
				}));
				reject(err);
			}
		});
	};

	const institute_login = (email, password) => {
		return new Promise(async (resolve, reject) => {
			setAuth((oldval) => ({
				...oldval,
				isloading: true,
			}));
			try {
				const res = await axios.post(
					'http://localhost:3001/institute/login',
					{
						name: email,
						password: password,
					},
					{
						headers: {
							'Content-Type': 'application/json',
							'access-control-allow-origin': '*',
						},
					}
				);
				setAuth({
					user: { ...res.data, type: 'institute' },
					isauthenticated: true,
					isloading: false,
				});
				resolve();
			} catch (err) {
				setAuth((oldval) => ({
					...oldval,
					isloading: false,
					isauthenticated: false,
					user: null,
				}));
				reject(err);
			}
		});
	};

	const logout = () => {
		localStorage.removeItem('auth');
		setAuth({
			user: null,
			isauthenticated: false,
			isloading: false,
		});
	};

	return (
		<AuthContext.Provider value={{ auth, glogin, institute_login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};

export { AuthProvider };
export default AuthContext;
