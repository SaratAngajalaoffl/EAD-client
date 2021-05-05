import React, { useContext, useEffect } from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import AuthContext from '../utils/Auth';
import { useHistory } from 'react-router';

const Home = () => {
	const { auth } = useContext(AuthContext);
	const history = useHistory();

	useEffect(() => {
		if (auth.user?.type) history.push(`/${auth.user.type}`);
	}, [auth.user]);

	return (
		<>
			<Hero className='illustration-section-01' />
			<FeaturesTiles />
			<FeaturesSplit
				invertMobile
				topDivider
				imageFill
				className='illustration-section-02'
			/>
		</>
	);
};

export default Home;
